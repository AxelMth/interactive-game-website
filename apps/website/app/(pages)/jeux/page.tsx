import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les jeux",
  description: "Découvrez tous les types de jeux interactifs disponibles pour animer vos événements",
};

export default function JeuxPage() {
  const gameTypes = [
    {
      title: "QCM - Questions à choix multiples",
      description:
        "Le format classique et efficace. Posez des questions avec plusieurs réponses possibles. Parfait pour tester les connaissances de vos invités sur un sujet précis.",
      examples: ["Quiz sur les mariés", "Culture générale", "Histoire de famille"],
    },
    {
      title: "Classement d'images",
      description:
        "Vos invités doivent classer des photos selon différents critères. Créez des moments de discussion et de complicité autour de vos souvenirs.",
      examples: ["Plus belle photo", "Plus drôle", "Plus émouvante"],
    },
    {
      title: "Mise en ordre",
      description:
        "Reconstituer une chronologie, un ordre logique ou une séquence d'événements. Idéal pour raconter une histoire ou tester la mémoire.",
      examples: ["Chronologie de votre histoire", "Ordre des événements", "Séquence logique"],
    },
    {
      title: "Questions ouvertes",
      description:
        "Collectez des anecdotes, des souvenirs, des messages personnalisés ou des idées créatives. Parfait pour créer des moments d'émotion.",
      examples: ["Souvenirs partagés", "Messages pour les mariés", "Anecdotes drôles"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Les jeux</h1>
          <p className="mb-12 text-xl text-gray-600">
            Découvrez tous les formats de jeux interactifs disponibles pour animer vos événements
          </p>

          <div className="space-y-12">
            {gameTypes.map((game, index) => (
              <div key={index} className="rounded-lg border bg-gray-50 p-8">
                <h2 className="mb-4 text-3xl font-semibold text-gray-900">{game.title}</h2>
                <p className="mb-4 text-lg text-gray-700">{game.description}</p>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Exemples :</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {game.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg bg-primary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Un jeu sur mesure pour votre événement
            </h2>
            <p className="mb-6 text-gray-700">
              Nous adaptons chaque jeu à votre événement, vos invités et votre ambiance. Tous les
              formats peuvent être combinés pour créer une expérience unique.
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
