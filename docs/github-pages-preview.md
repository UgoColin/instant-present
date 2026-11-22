# Prévisualisation du site sur GitHub Pages

La prévisualisation affiche le design, les images, les menus, les animations et les 27 pages métier (dont 16 fiches de prestations). Le formulaire annonce qu’il est désactivé et ne transmet rien. L’administration Payload et les API ne sont pas publiées.

## Ce qui est publié

Le build utilise les contenus versionnés dans `src/lib/default-content.ts`, et les fichiers de `public/`. Il ne lit pas PostgreSQL : les modifications enregistrées uniquement dans Payload et les médias uploadés uniquement dans `media/` ne figurent pas dans cette version.

Le script prépare une copie du frontend dans `.cache/pages-preview`, adapte les routes au rendu statique et les liens/images au préfixe GitHub Pages, puis exécute Next avec `output: 'export'`. Il génère `.cache/pages-preview/out` ; seul ce dossier est envoyé à Pages. Les sources métier et le build normal Next/Payload restent disponibles pour le futur hébergement serveur.

Les pages génériques de la collection `pages` ne sont pas exportées, car elles n’existent que dans le CMS. Les routes métier, les trois pages juridiques et leurs liens sont inclus.

## À faire une fois sur GitHub

1. Ouvrir le dépôt [UgoColin/instant-present](https://github.com/UgoColin/instant-present).
2. Aller dans **Settings → Pages → Build and deployment** et choisir **Source : GitHub Actions**. Il n’y a pas de branche `gh-pages` à créer.
3. Vérifier dans **Settings → Actions → General** que les workflows et les actions GitHub sont autorisés, si le compte ou l’organisation les restreint.
4. Enregistrer les modifications du projet dans Git et les pousser sur **main**. Le workflow **Deploy GitHub Pages preview** se déclenche automatiquement. S’il est déjà poussé, aller dans **Actions → Deploy GitHub Pages preview → Run workflow**, puis sélectionner `main`.
5. Attendre que les jobs `build` et `deploy` passent au vert. Si l’environnement `github-pages` impose une approbation, approuver le déploiement dans GitHub.
6. Récupérer l’URL affichée par le job `deploy` ou par **Settings → Pages**, puis la transmettre à la cliente.

Sans domaine personnalisé, l’URL attendue pour ce dépôt est :

**https://ugocolin.github.io/instant-present/**

Le préfixe est détecté automatiquement par `actions/configure-pages` ; il n’est pas nécessaire de le saisir dans les secrets. Si un domaine personnalisé est configuré, utiliser l’URL fournie par GitHub et les réglages DNS correspondants.

GitHub Pages est disponible pour les dépôts publics avec GitHub Free. Pour un dépôt privé, il faut un abonnement GitHub qui inclut Pages (par exemple Pro ou Team). Si Pages n’est pas proposé pour ce dépôt privé, vérifier le forfait ; il n’est pas nécessaire de rendre les sources publiques pour les forfaits compatibles. Le site Pages est normalement accessible publiquement, même si le dépôt est privé.

Aucun secret `DATABASE_URL`, `PAYLOAD_SECRET`, SMTP ou SSH n’est nécessaire pour ce workflow.

## Publier les sources

Les modifications sont préparées localement ; aucun commit ou push n’est effectué automatiquement par les scripts de build. Depuis la racine, relire `git diff`, puis enregistrer les fichiers concernés :

```bash
git add .github/workflows/deploy-pages.yml .github/workflows/deploy-production.yml package.json tsconfig.json eslint.config.mjs scripts/build-pages-preview.ts scripts/check-pages-preview.ts scripts/pages-preview/site-content.ts src/components/BookingPageContent.tsx docs/github-pages-preview.md README.md ANALYSE_PROJET.md
git commit -m "Add static preview deployment to GitHub Pages"
git push origin main
```

Il ne faut pas committer `.cache/pages-preview`, `out`, `.env`, la base ou les médias privés. Le dossier de travail généré est déjà ignoré par Git.

## Vérifier le build localement

Avec Node 22 et les dépendances installées :

```bash
npm ci
npm run build:preview
npm run check:preview
python3 -m http.server 8080 --directory .cache/pages-preview/out
```

Ouvrir **http://localhost:8080/**. Garder le serveur ouvert pendant la visite. `next start` n’est pas la commande de prévisualisation d’un export statique.

Pour reproduire le préfixe du dépôt lors des vérifications du build :

```bash
PAGES_BASE_PATH=/instant-present npm run build:preview
PAGES_BASE_PATH=/instant-present npm run check:preview
```

Ce second export attend un serveur monté sous `/instant-present/` ; le simple serveur Python ci-dessus sert à la racine, donc utiliser le premier build pour une visite locale simple.

`check:preview` vérifie les 27 pages métier, l’absence de routes backend, les liens et ressources locaux, la présence de classes Tailwind et le message du formulaire. Le build vérifie également le TypeScript de la copie statique. La CI vérifie le TypeScript du projet principal avant de construire cette copie.

Les polices `next/font/google` sont récupérées pendant la compilation : une connexion réseau est requise pour le build. Aucune connexion au CMS n’est requise.

## Déploiements suivants

Chaque push sur `main` reconstruit la prévisualisation. Pour modifier les textes montrés, changer `src/lib/default-content.ts`. Pour les images, remplacer ou ajouter les fichiers dans `public/` et mettre à jour leurs références. Une modification seulement dans l’admin Payload ne déclenche pas de mise à jour de Pages.

Pour ajouter une nouvelle fiche, compléter aussi la liste de sa famille dans `scripts/build-pages-preview.ts` et les lecteurs de `scripts/pages-preview/site-content.ts`, puis ajuster le nombre de pages attendu dans le contrôle. Les références de navigation et cartes doivent rester cohérentes.

## Ancien workflow VM

`Deploy Production` ne déploie plus automatiquement au push, sauf si la variable de dépôt **ENABLE_VM_DEPLOY** vaut explicitement `true`. Il reste exécutable manuellement via `workflow_dispatch` si un hébergement VM est remis en service. Laisser cette variable absente ou différente de `true` pour la prévisualisation actuelle.

## Limites et dépannage

- **Le job Configure Pages échoue** : vérifier que Pages est activé et que la source est GitHub Actions, ainsi que l’éligibilité du dépôt/forfait.
- **Le déploiement attend une approbation** : vérifier l’environnement `github-pages` et sa protection de branche ; autoriser `main` si nécessaire.
- **404 au premier accès** : attendre la fin du déploiement et reprendre l’URL exacte indiquée par GitHub, avec `/instant-present/` pour le domaine github.io de ce projet.
- **Le contenu diffère du site avec CMS** : c’est le contenu de secours versionné qui est exporté, pas la base de données.
- **Le formulaire ne fonctionne pas** : c’est attendu ; les liens directs de contact et les liens externes restent disponibles.
- **D’autres contrôles ESLint échouent** : le projet possède déjà des erreurs de hooks dans `TestimonialsCarousel.tsx`, un composant inutilisé. Le workflow Pages ne lance pas le lint global ; il lance TypeScript, le build et le contrôle de l’export.

Références : [export statique Next.js](https://nextjs.org/docs/app/guides/static-exports), [workflow personnalisé GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Validation réalisée lors de la préparation

- Builds statiques réussis à la racine et avec `/instant-present` comme préfixe.
- TypeScript du projet principal et du frontend exporté validé.
- 27 pages métier exportées, plus les pages 404 générées par Next ; 2 259 références locales vérifiées pour chaque configuration.
- Test Chromium local réussi : styles, navigation desktop, ouverture/rechargement d’une fiche, chargement des images, menu mobile, accès contact et soumission de prévisualisation sans appel API ni erreur JavaScript. La carte externe OpenStreetMap a été bloquée pendant ce test.
- ESLint ciblé sans erreur ; un avertissement préexistant reste sur `encodedContactAddress` dans le composant contact. Le lint global présente toujours les erreurs préexistantes du carrousel inutilisé.
- Workflow GitHub et publication distante non exécutés localement : leur première exécution aura lieu après configuration de Pages et push des sources.
