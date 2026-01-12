# Site Vitrine Ludiq Events

Site vitrine Next.js pour présenter les jeux interactifs événementiels.

## Structure

```
app/
├── components/          # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── GameExamples.tsx
│   ├── Occasions.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   └── CTA.tsx
├── (pages)/            # Pages secondaires
│   ├── jeux/
│   ├── createur/
│   ├── entreprises/
│   └── contact/
├── layout.tsx          # Layout principal avec Header/Footer
├── page.tsx            # Page d'accueil
└── globals.css         # Styles globaux
```

## Composants

### Header
Navigation principale avec liens vers les pages et CTA "Demander une animation".

### Footer
Pied de page avec liens de navigation, légal et contact.

### Sections de la page d'accueil
- **Hero** : Proposition de valeur principale
- **HowItWorks** : Processus en 4 étapes
- **GameExamples** : Présentation des types de jeux
- **Occasions** : Types d'événements cibles
- **Features** : Classement et roue des cadeaux
- **Testimonials** : Témoignages clients (à connecter à la base de données)
- **CTA** : Call-to-action final

## SEO

Métadonnées configurées dans `layout.tsx` :
- Titre et description par défaut
- Open Graph pour les réseaux sociaux
- Twitter Cards
- Mots-clés pertinents

## Styling

- Tailwind CSS v4
- Variables CSS pour les couleurs (primary, secondary)
- Design responsive mobile-first
- Composants modulaires et réutilisables

## Développement

```bash
# Démarrer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm run start
```
