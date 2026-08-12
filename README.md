# Ma Station — Application Web (PWA)

Version installable depuis un navigateur, sans passer par le Play Store. Gratuite à héberger, fonctionne hors-ligne une fois ouverte, et tes données restent sur le téléphone de la personne qui l'utilise (chacun a ses propres ventes/stock).

## Mise en ligne gratuite (le plus simple : Vercel)

### Étape 1 — Mettre le projet sur GitHub
Comme pour `backend-services-niger` :
1. Crée un nouveau dépôt, par exemple `ma-station-web`
2. Mets-y tous les fichiers de ce dossier (`package.json`, `index.html`, `vite.config.js`, le dossier `src/`, le dossier `public/`)

### Étape 2 — Connecter à Vercel (gratuit)
1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub
2. Clique sur **"Add New Project"**
3. Sélectionne ton dépôt `ma-station-web`
4. Vercel détecte automatiquement Vite — laisse les réglages par défaut
5. Clique sur **Deploy**

Après 1-2 minutes, tu obtiens un lien du type :
```
https://ma-station-web.vercel.app
```

C'est ce lien que tu partages (WhatsApp, Facebook, etc.).

### Alternative : Netlify
Même principe sur [netlify.com](https://netlify.com) : "Add new site" → "Import an existing project" → choisir le dépôt GitHub → Deploy. Tu obtiens un lien `https://ma-station-web.netlify.app`.

## Comment les gens l'installent sur leur téléphone
1. Ils ouvrent le lien dans **Chrome** sur Android
2. Un bandeau ou le menu (⋮) propose **"Ajouter à l'écran d'accueil"** / **"Installer l'application"**
3. Une icône apparaît sur leur écran d'accueil, comme une vraie appli — elle s'ouvre en plein écran, sans barre de navigateur

## Important à savoir
- **Les données sont locales à chaque téléphone.** Si tu utilises l'appli sur ton téléphone et qu'un employé l'utilise sur le sien, ce sont deux stocks/historiques séparés — pas de synchronisation entre appareils pour l'instant.
- Si tu veux que plusieurs personnes partagent le même stock en temps réel (toi + employés), il faudrait ajouter un serveur (backend) — je peux t'aider à le faire plus tard, sur le même modèle que Niger Services (Node.js/Express + PostgreSQL/Supabase).
- Le site fonctionne aussi hors-ligne après la première ouverture (grâce au PWA), utile en cas de mauvaise connexion.

## Tester en local avant de mettre en ligne (optionnel)
```
npm install
npm run dev
```
Puis ouvre le lien affiché dans le terminal.

## Prochaines évolutions possibles
- Multi-utilisateurs avec stock partagé (nécessite un backend)
- Export des ventes en PDF/Excel
- Intégration Mobile Money pour les paiements
