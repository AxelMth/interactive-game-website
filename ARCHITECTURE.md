# Architecture du Projet

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────┐
│                    Site Vitrine                         │
│                  (Next.js SSR)                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │  Pages   │  │ Components│  │  Content │            │
│  │          │  │           │  │ (Markdown)│           │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    Moteur de Jeu                         │
│              (Package isolé, tech neutre)                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ Question │  │  Scoring  │  │Leaderboard│            │
│  │  Types   │  │  System   │  │  System   │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    Interface Admin                       │
│                  (À venir)                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │   Auth   │  │ Testimonials│ │  Content │            │
│  │          │  │  Management │ │  Editor  │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘
```

## Structure Monorepo

### Apps

- **website** : Site vitrine Next.js
  - Pages publiques
  - SEO optimisé
  - Contenu markdown

- **admin** : Interface d'administration (à venir)
  - Authentification
  - Gestion témoignages
  - Édition de contenu

## Flux de Données

### Site Vitrine → Moteur

1. Configuration du jeu (JSON)
2. Initialisation du moteur
3. Événements en temps réel
4. Mise à jour de l'UI

### Admin → Site

1. Validation de témoignages
2. Mise à jour du contenu
3. Publication

## Technologies

- **Frontend** : Next.js 16, React 19, Tailwind CSS v4
- **Monorepo** : Turborepo
- **TypeScript** : Typage fort partout
- **CMS** : Markdown (léger, évolutif vers headless CMS si besoin)

## Évolutivité

### Court terme
- Système de témoignages avec upload
- Interface admin basique
- Intégration du moteur de jeu

### Moyen terme
- Base de données (PostgreSQL ou MongoDB)
- Authentification sécurisée
- Analytics

### Long terme
- API publique pour B2B
- Multi-tenant
- Export de données
- Branding personnalisé

## Sécurité

- Validation des inputs
- Upload sécurisé des images
- Protection CSRF
- RGPD compliant
- Rate limiting

## Performance

- SSR pour SEO
- Optimisation des images
- Lazy loading
- Code splitting
- Cache stratégique
