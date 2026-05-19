# Mettre le projet sur un dépôt privé GitHub

Ce guide part de ta situation actuelle :

- le projet est local dans `/home/ugo/instant-present`
- il n'est pas encore versionné avec Git
- tu veux le mettre sur un dépôt GitHub `privé`
- tu veux éviter de pousser des fichiers sensibles

Le `.gitignore` du projet a déjà été préparé pour ignorer notamment :

- `node_modules`
- `.env`
- `test.env`
- `.next`
- les bases SQLite locales comme `instant-present.db`
- les rapports Playwright
- les caches et fichiers d'IDE

## 1. Vérifier ce qui ne doit jamais partir sur GitHub

Avant toute chose, garde cette règle :

- `ne jamais pousser`
  - `.env`
  - `test.env`
  - base SQLite locale
  - clés SSH / certificats / secrets

Tu peux garder :

- `.env.example`
- `README.md`
- le code source
- `public/`
- `src/`
- `package.json`
- `package-lock.json`

## 2. Créer le dépôt privé sur GitHub

### Depuis le site GitHub

1. connecte-toi à GitHub
2. clique sur `New repository`
3. choisis le nom du dépôt, par exemple :
   - `instant-present`
4. mets la visibilité sur `Private`
5. ne coche pas :
   - `Add a README file`
   - `Add .gitignore`
   - `Choose a license`

L'idée est de pousser ton projet local tel quel, sans conflit initial.

6. valide avec `Create repository`

Quand GitHub affiche les instructions, garde la page ouverte.

## 3. Initialiser Git en local

Dans ton projet :

```bash
cd /home/ugo/instant-present
git init
```

Définis la branche principale en `main` :

```bash
git branch -M main
```

## 4. Vérifier ce que Git voit

Lance :

```bash
git status
```

Tu dois voir les fichiers du projet, mais tu ne dois pas voir :

- `.env`
- `test.env`
- `instant-present.db`
- `.next`
- `node_modules`

Si tu vois quand même un fichier sensible, arrête-toi et corrige le `.gitignore` avant de continuer.

## 5. Faire le premier commit

Ajoute les fichiers suivis :

```bash
git add .
```

Vérifie une nouvelle fois :

```bash
git status
```

Si tout est propre, crée le commit initial :

```bash
git commit -m "Initial private repo import"
```

## 6. Lier le projet local au dépôt GitHub privé

Sur la page GitHub du dépôt, copie l'URL du remote.

Exemples :

- HTTPS :
  - `https://github.com/ton-user/instant-present.git`
- SSH :
  - `git@github.com:ton-user/instant-present.git`

Ajoute le remote :

```bash
git remote add origin git@github.com:ton-user/instant-present.git
```

Tu peux vérifier :

```bash
git remote -v
```

## 7. Pousser le dépôt sur GitHub

```bash
git push -u origin main
```

Le `-u` permet de lier la branche locale `main` à la branche distante `main`.

Ensuite, les prochains pushes pourront se faire simplement avec :

```bash
git push
```

## 8. Si tu préfères HTTPS au lieu de SSH

Tu peux aussi utiliser :

```bash
git remote add origin https://github.com/ton-user/instant-present.git
git push -u origin main
```

Dans ce cas, GitHub te demandera généralement :

- ton login GitHub
- puis un token d'accès personnel, pas ton mot de passe classique

Si tu veux éviter ça au quotidien, SSH est souvent plus confortable.

## 9. Vérifier que le dépôt privé est propre

Après le push :

1. ouvre le dépôt GitHub
2. vérifie que tu vois bien le code
3. vérifie surtout que tu ne vois pas :
   - `.env`
   - `test.env`
   - `instant-present.db`
   - `.next`
   - `node_modules`

## 10. Bonnes pratiques pour la suite

### Ajouter un `README` projet clair

Tu peux garder le `README.md` principal pour :

- présentation du projet
- stack technique
- commandes utiles
- notes de déploiement

### Travailler avec petites branches

Au lieu de tout faire sur `main`, tu peux faire :

```bash
git checkout -b feat/contact-form
```

Puis plus tard :

```bash
git push -u origin feat/contact-form
```

### Toujours vérifier avant commit

Utiles avant chaque commit :

```bash
git status
git diff
```

## 11. Si un fichier sensible a été ajouté par erreur

Si le fichier n'a pas encore été commité :

```bash
git restore --staged <fichier>
```

Puis ajoute-le au `.gitignore` si besoin.

Si le fichier a déjà été commité mais pas encore poussé :

```bash
git rm --cached <fichier>
```

Puis recommit :

```bash
git commit -m "Remove sensitive file from repository"
```

Si le fichier sensible a déjà été poussé sur GitHub :

- il faut le retirer de l'historique
- et considérer que le secret est compromis
- donc régénérer les mots de passe, clés, tokens, etc.

## 12. Commandes complètes dans ton cas

En supposant un dépôt GitHub privé déjà créé nommé `instant-present` :

```bash
cd /home/ugo/instant-present
git init
git branch -M main
git status
git add .
git status
git commit -m "Initial private repo import"
git remote add origin git@github.com:ton-user/instant-present.git
git push -u origin main
```

## 13. Étape suivante recommandée

Une fois le dépôt privé créé et poussé, la suite logique sera :

1. ajouter un workflow GitHub Actions
2. configurer l'accès SSH vers ton serveur Hostinger
3. automatiser le déploiement au push sur `main`

Tu pourras alors déployer sans te reconnecter manuellement à chaque modif.
