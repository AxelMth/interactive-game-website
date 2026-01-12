export default function GameExamples() {
  const games = [
    {
      title: "Quiz interactif",
      description: "Questions à choix multiples sur vos invités, votre histoire ou tout autre thème.",
      icon: "❓",
    },
    {
      title: "Classement d'images",
      description: "Vos invités classent des photos selon différents critères (plus belle, plus drôle...).",
      icon: "📸",
    },
    {
      title: "Mise en ordre",
      description: "Reconstituer une chronologie, un ordre logique ou une séquence d'événements.",
      icon: "🔢",
    },
    {
      title: "Questions ouvertes",
      description: "Collectez des anecdotes, des souvenirs ou des messages personnalisés.",
      icon: "💬",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Exemples de jeux
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          Des formats variés pour s'adapter à tous vos événements
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.title}
              className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-4xl">{game.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
