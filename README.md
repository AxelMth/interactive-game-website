# Ludiq Events - Site Vitrine

Site vitrine pour les jeux interactifs événementiels.

## 🎯 Vision Produit

**Ludiq Events** transforme vos événements privés en expériences mémorables grâce à des animations interactives sur mesure.

### Proposition de valeur
Animations interactives sur mesure pour vos événements privés. Jeux en temps réel, classements dynamiques et cadeaux qui créent de la connexion entre vos invités.

## 🏗️ Architecture

### Structure Monorepo

```
interactive-game-website/
├── apps/
│   ├── website/          # Site vitrine Next.js
│   └── admin/            # Interface admin (à venir)
└── README.md
```

### Technologies

- **Framework SSR** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **TypeScript** : Typage fort
- **CMS** : Markdown (léger, évolutif)

## 🚀 Démarrage

### Prérequis
- Node.js >= 18.0.0
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Démarrer le site en développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Build de production
- `npm run start` : Démarre le serveur de production
- `npm run lint` : Vérifie le code

## 📄 Pages

- `/` : Page d'accueil avec toutes les sections
- `/jeux` : Présentation des types de jeux
- `/createur` : Page à propos du créateur
- `/entreprises` : Page teaser B2B
- `/contact` : Formulaire de demande d'animation

## 📝 État du Projet

### ✅ Complété
- [x] Stratégie & positionnement
- [x] Architecture technique (monorepo, Next.js)
- [x] Site vitrine - Structure et pages
- [x] SEO de base
- [x] Contenu markdown (structure prête)

### 🚧 En cours / À faire
- [ ] Documentation du moteur de jeu
- [ ] Système de témoignages
- [ ] Interface admin
- [ ] Intégration du moteur de jeu
- [ ] Analytics
- [ ] Tests

## 🎨 Design

- Couleurs principales : Indigo (`#6366f1`) et Violet (`#8b5cf6`)
- Design moderne, épuré, orienté expérience utilisateur
- Responsive mobile-first

## 📚 Documentation

- `STRATEGY.md` : Stratégie et positionnement détaillé
- `apps/website/README.md` : Documentation spécifique au site

## 🔒 Sécurité & RGPD

À implémenter :
- Gestion des consentements
- Protection des données personnelles
- Upload sécurisé des images

## 📞 Contact

Pour toute question ou demande d'animation, utilisez le formulaire de contact sur le site.
