import type { Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Les jeux",
  description: "Découvrez tous les types de jeux interactifs disponibles pour animer vos événements",
};

export default function JeuxPage() {
  const packages = [
    {
      title: "Suite d'activités",
      description:
        "Une série d'activités interactives personnalisées pour votre événement. Défiez vos amis, soyez le premier à répondre correctement et accumulez des points.",
      image: "/images/activites.jpg",
      features: [
        "Activités sur mesure adaptées à votre événement",
        "Interface admin pour déclencher les activités",
        "Images illustratives pour chaque activité",
        "Défis compétitifs entre participants",
      ],
    },
    {
      title: "Classement",
      description:
        "Suivez en temps réel les performances de tous les participants. Créez de l'émulation et de la compétition amicale avec un classement dynamique.",
      image: "/images/file.svg",
      features: [
        "Classement en temps réel",
        "Affichage des scores et positions",
        "Mise à jour automatique",
        "Création d'émulation entre participants",
      ],
    },
    {
      title: "Roue des cadeaux",
      description:
        "La récompense ultime ! Les meilleurs participants peuvent tourner la roue des cadeaux pour gagner des prix. Une expérience ludique et mémorable.",
      image: "/images/file.svg",
      features: [
        "Roue interactive personnalisable",
        "Cadeaux adaptés à votre événement",
        "Animation visuelle engageante",
        "Interface admin pour configurer les prix",
      ],
    },
  ];

  const alternativeGames = [
    {
      title: "Jeux de piste sur mesure",
      description:
        "Créez une aventure unique avec un jeu de piste personnalisé. Parfait pour explorer un lieu, découvrir des indices et résoudre des énigmes.",
      image: "/images/file.svg",
    },
    {
      title: "Escape game sur mesure",
      description:
        "Une expérience immersive et captivante. Créez un escape game adapté à votre événement avec des énigmes, des défis et une histoire unique.",
      image: "/images/file.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Les jeux</h1>
          <p className="mb-12 text-xl text-gray-600">
            Des jeux sur mesure uniquement. Chaque événement mérite une expérience unique et personnalisée.
          </p>

          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-semibold text-gray-900">Nos packages</h2>
            <div className="space-y-12">
              {packages.map((pkg, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-8">
                  <div className="mb-6 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={pkg.image as string}
                      width={1000}
                      height={1000}
                      alt={pkg.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="flex h-full items-center justify-center text-gray-400">
                      <span className="text-sm">Image illustrative: {pkg.title}</span>
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-900">{pkg.title}</h3>
                  <p className="mb-4 text-lg text-gray-700">{pkg.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 text-3xl font-semibold text-gray-900">Alternatives</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {alternativeGames.map((game, index) => (
                <div key={index} className="rounded-lg border bg-gray-50 p-6">
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                    <Image
                      src={game.image}
                      alt={game.title}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                    <div className="flex h-full items-center justify-center text-gray-400">
                      <span className="text-sm">Image illustrative: {game.title}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{game.title}</h3>
                  <p className="text-gray-700">{game.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-primary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Un jeu sur mesure pour votre événement
            </h2>
            <p className="mb-6 text-gray-700">
              Tous nos jeux sont créés sur mesure, adaptés à votre événement, vos invités et votre ambiance.
              Chaque expérience est unique et mémorable.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
