export default function Occasions() {
  const occasions = [
    {
      title: "Mariages",
      description: "Jeux de couple, quiz sur les mariés, classements photos",
      icon: "💍",
    },
    {
      title: "Anniversaires",
      description: "Quiz générationnel, défis par équipes, souvenirs partagés",
      icon: "🎂",
    },
    {
      title: "Événements familiaux",
      description: "Jeux intergénérationnels, quiz culture, moments de complicité",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Soirées entre amis",
      description: "Jeux de culture générale, défis fun, ambiance décontractée",
      icon: "🎉",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Pour quelles occasions ?
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          Adapté à tous vos événements privés
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion) => (
            <div
              key={occasion.title}
              className="rounded-lg border bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition-transform hover:scale-105"
            >
              <div className="mb-4 text-4xl">{occasion.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{occasion.title}</h3>
              <p className="text-gray-600">{occasion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
