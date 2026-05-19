# Déploiement automatique sur Hostinger avec GitHub Actions

Ce guide décrit une mise en production simple et robuste pour ce projet :

- code source sur GitHub privé
- déploiement automatique au `push` sur `main`
- build directement sur la VM Hostinger
- base SQLite persistée hors du dossier synchronisé
- médias Payload persistés hors du dossier synchronisé
- reverse proxy Nginx devant l'application Next.js / Payload
- process manager `pm2` pour redémarrer l'application proprement

Le fichier de workflow déjà ajouté au projet est :

- [deploy-production.yml](/home/ugo/instant-present/.github/workflows/deploy-production.yml)

Le script lancé sur la VM par la CI est :

- [deploy-remote.sh](/home/ugo/instant-present/scripts/deploy-remote.sh)

La config PM2 versionnée est :

- [ecosystem.config.cjs](/home/ugo/instant-present/ecosystem.config.cjs)

L'exemple de vhost Nginx est :

- [instant-present.conf.example](/home/ugo/instant-present/ops/nginx/instant-present.conf.example)

## 1. Architecture recommandée

Sur la VM :

- code synchronisé dans `/var/www/instant-present/app`
- données persistées dans `/var/www/instant-present/shared`
- base SQLite dans `/var/www/instant-present/shared/instant-present.db`
- médias uploadés dans `/var/www/instant-present/shared/media`
- `.env` de production dans `/var/www/instant-present/shared/.env`

Important :

- la CI peut écraser le dossier `app`
- elle ne doit jamais contenir les données persistées
- base, médias et `.env` restent donc dans `shared`, puis sont liés avec des symlinks

## 2. Ce que déclenchera la CI

À chaque `push` sur `main` :

1. GitHub Actions checkout le repo
2. fait un contrôle TypeScript
3. se connecte en SSH à la VM
4. synchronise les fichiers du projet vers `/var/www/instant-present/app`
5. exécute le script distant
6. le script :
   - relie `.env`
   - relie la base SQLite
   - relie le dossier `media`
   - installe les dépendances
   - régénère l'import map Payload
   - rebuild l'app
   - recharge `pm2`

Un merge de pull request vers `main` déclenche aussi le déploiement, car GitHub crée un `push` sur `main`.

## 3. Préparer la VM Hostinger

### 3.1. Se connecter

Exemple :

```bash
ssh root@IP_DU_SERVEUR
```

Si Hostinger t'a donné un autre utilisateur, adapte.

### 3.2. Mettre le serveur à jour

Sur Ubuntu / Debian :

```bash
apt update && apt upgrade -y
```

### 3.3. Créer un utilisateur de déploiement

Évite de déployer en `root`.

```bash
adduser deploy
usermod -aG sudo deploy
```

### 3.4. Ajouter ta clé SSH personnelle à cet utilisateur

Depuis ta machine locale :

```bash
ssh-copy-id deploy@IP_DU_SERVEUR
```

Ou à la main en ajoutant ta clé publique dans :

```bash
/home/deploy/.ssh/authorized_keys
```

Puis vérifie :

```bash
ssh deploy@IP_DU_SERVEUR
```

## 4. Sécuriser la VM

### 4.1. Pare-feu

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

### 4.2. Désactiver la connexion root par mot de passe

Édite :

```bash
sudo nano /etc/ssh/sshd_config
```

Vérifie au minimum :

```text
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

Puis :

```bash
sudo systemctl restart ssh
```

Fais-le seulement après avoir confirmé qu'un accès SSH par clé fonctionne bien.

### 4.3. Option utile

Tu peux aussi installer `fail2ban` :

```bash
sudo apt install -y fail2ban
sudo systemctl enable --now fail2ban
```

## 5. Installer les dépendances système

Connecté en `deploy` :

```bash
sudo apt install -y curl git rsync build-essential nginx sqlite3
```

### Installer Node.js 22

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

Vérifie :

```bash
node -v
npm -v
```

### Installer PM2

```bash
sudo npm install -g pm2
pm2 -v
```

## 6. Préparer l'arborescence de production

```bash
sudo mkdir -p /var/www/instant-present/app
sudo mkdir -p /var/www/instant-present/shared/media
sudo mkdir -p /var/www/instant-present/shared/backups
sudo chown -R deploy:deploy /var/www/instant-present
```

## 7. Préparer le fichier `.env` de production

Tu as dit que tu le géreras à la main. Fais-le ici :

```bash
nano /var/www/instant-present/shared/.env
```

Base de départ conseillée :

```env
DATABASE_URL=file:./instant-present.db
PAYLOAD_SECRET=CHANGE_ME
CONTACT_FORM_TO_EMAIL=...
CONTACT_FORM_FROM_EMAIL=...
SMTP_HOST=...
SMTP_PORT=...
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
```

Points importants :

- le script de déploiement crée un symlink vers ce `.env`
- tu peux le modifier plus tard sans toucher au dépôt GitHub
- garde `DATABASE_URL=file:./instant-present.db`
  - le script crée aussi le symlink de la base dans le dossier app

## 8. Conserver les données locales SQLite

Comme ton projet tourne actuellement en SQLite local, le plus simple est de conserver ce modèle en production dans un premier temps.

### 8.1. Sauvegarder la base locale

Depuis ton poste local :

```bash
cp /home/ugo/instant-present/instant-present.db /home/ugo/instant-present/instant-present.db.backup
```

### 8.2. Copier la base vers la VM

Important :

- arrête ton app locale avant la copie si possible
- ça évite de copier un fichier SQLite en cours d'écriture

Copie :

```bash
scp /home/ugo/instant-present/instant-present.db deploy@IP_DU_SERVEUR:/var/www/instant-present/shared/instant-present.db
```

### 8.3. Copier les médias si tu en as déjà

Si tu as un dossier `media/` local utilisé par Payload :

```bash
scp -r /home/ugo/instant-present/media deploy@IP_DU_SERVEUR:/var/www/instant-present/shared/
```

Si le dossier n'existe pas encore, ce n'est pas bloquant.

### 8.4. Vérifier côté VM

```bash
ls -la /var/www/instant-present/shared
```

Tu dois voir au minimum :

- `.env`
- `instant-present.db`
- `media/`
- `backups/`

## 9. Configurer PM2 au boot

La première fois, il faut enregistrer le démarrage automatique :

```bash
pm2 startup systemd -u deploy --hp /home/deploy
```

La commande te donnera une ligne `sudo ...` à exécuter. Exécute-la.

Ensuite :

```bash
pm2 save
```

## 10. Configurer Nginx

Copie la config d'exemple :

```bash
sudo cp /var/www/instant-present/app/ops/nginx/instant-present.conf.example /etc/nginx/sites-available/instant-present
```

Édite :

```bash
sudo nano /etc/nginx/sites-available/instant-present
```

Remplace :

- `example.fr`
- `www.example.fr`

par ton vrai domaine.

Active le site :

```bash
sudo ln -s /etc/nginx/sites-available/instant-present /etc/nginx/sites-enabled/instant-present
sudo nginx -t
sudo systemctl reload nginx
```

## 11. Ajouter le HTTPS

### Installer Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Générer le certificat

```bash
sudo certbot --nginx -d ton-domaine.fr -d www.ton-domaine.fr
```

Puis vérifie :

```bash
sudo systemctl status certbot.timer
```

## 12. Préparer la clé SSH pour GitHub Actions

La CI doit pouvoir se connecter à la VM.

### 12.1. Générer une clé dédiée

Sur ta machine locale :

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github-actions-hostinger
```

Tu obtiendras :

- clé privée : `~/.ssh/github-actions-hostinger`
- clé publique : `~/.ssh/github-actions-hostinger.pub`

### 12.2. Ajouter la clé publique sur la VM

```bash
cat ~/.ssh/github-actions-hostinger.pub
```

Puis ajoute le contenu dans :

```bash
/home/deploy/.ssh/authorized_keys
```

### 12.3. Ajouter la clé privée dans GitHub

Dans GitHub :

`Repository` -> `Settings` -> `Secrets and variables` -> `Actions`

Ajoute ces secrets :

- `DEPLOY_HOST`
  - l'IP ou le nom de domaine du serveur
- `DEPLOY_PORT`
  - généralement `22`
- `DEPLOY_USER`
  - par exemple `deploy`
- `DEPLOY_SSH_PRIVATE_KEY`
  - contenu complet de `~/.ssh/github-actions-hostinger`

Important :

- colle toute la clé privée
- y compris les lignes `BEGIN` et `END`

## 13. Premier déploiement manuel de validation

Avant de laisser GitHub Actions faire tout seul, tu peux tester le script directement sur la VM.

Depuis le repo déjà synchronisé une première fois ou après un `scp` de test :

```bash
cd /var/www/instant-present/app
chmod +x scripts/deploy-remote.sh
./scripts/deploy-remote.sh
```

Ensuite :

```bash
pm2 status
pm2 logs instant-present
curl -I http://127.0.0.1:3000
```

Si tout va bien, l'app répond en local sur le port `3000`.

## 14. Déclencher la CI

Une fois les secrets GitHub configurés :

1. pousse sur `main`
2. ouvre l'onglet `Actions`
3. regarde le workflow `Deploy Production`

Si tout se passe bien :

- la CI synchronise le code
- rebuild le projet
- recharge PM2
- le site en ligne est mis à jour

## 15. Que fait exactement le script de déploiement

Le script [deploy-remote.sh](/home/ugo/instant-present/scripts/deploy-remote.sh) fait :

1. vérifie que `/var/www/instant-present/shared/.env` existe
2. relie `.env` dans le dossier app
3. relie `media/`
4. sauvegarde la base SQLite existante dans `shared/backups/`
5. relie `instant-present.db`
6. fait `npm ci --include=dev`
7. fait `npm run generate:importmap`
8. supprime `.next`
9. fait `npm run build`
10. fait `pm2 startOrReload ecosystem.config.cjs --env production`

## 16. Sauvegardes recommandées

Le script crée déjà une copie horodatée de la base SQLite à chaque déploiement.

Je te recommande aussi un backup planifié.

Exemple avec cron :

```bash
crontab -e
```

Ajoute :

```cron
0 3 * * * cp /var/www/instant-present/shared/instant-present.db /var/www/instant-present/shared/backups/instant-present-nightly-$(date +\%Y\%m\%d).db
```

Tu peux aussi sauvegarder :

- `/var/www/instant-present/shared/media`
- `/var/www/instant-present/shared/.env`

## 17. Ce que tu n'as pas besoin de mettre dans GitHub

Ne pousse jamais :

- `.env`
- la base SQLite de production
- les clés SSH privées
- les certificats TLS
- les médias de production s'ils changent directement sur le serveur

## 18. Faut-il installer PostgreSQL ?

Pour ce projet, dans l'immédiat :

- `non`, ce n'est pas obligatoire
- tu peux rester sur SQLite pour démarrer

Pourquoi c'est acceptable ici :

- site vitrine
- trafic probablement modéré
- une seule VM
- un seul process applicatif

Quand passer à PostgreSQL :

- si le site grossit
- si tu veux une stratégie multi-instance
- si tu veux une base plus standard pour de futures intégrations

Mais pour lancer rapidement et conserver tes données locales sans migration complexe, SQLite sur disque persistant est la solution la plus simple.

## 19. Checklist finale

Avant le premier vrai déploiement, vérifie :

- la VM est à jour
- l'utilisateur `deploy` existe
- SSH par clé fonctionne
- `ufw` est actif
- Node 22 est installé
- `pm2` est installé
- `nginx` est installé
- `/var/www/instant-present/shared/.env` existe
- `/var/www/instant-present/shared/instant-present.db` existe
- les médias ont été copiés si besoin
- les secrets GitHub Actions sont configurés
- le domaine pointe bien vers la VM
- le certificat HTTPS est en place

## 20. Suite logique

Une fois cette base en place, les prochaines améliorations utiles seront :

1. ajouter un environnement de staging
2. ajouter un vrai healthcheck HTTP dans la CI
3. ajouter des tests automatisés avant déploiement
4. prévoir une future migration PostgreSQL si le projet grossit
