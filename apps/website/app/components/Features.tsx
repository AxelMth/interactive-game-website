export default function Features() {
  const features = [
    {
      title: "Classement en temps réel",
      description: "Suivez les scores de vos invités en direct avec un classement dynamique et animé.",
      icon: "🏆",
    },
    {
      title: "Roue des cadeaux",
      description: "Ajoutez une touche de suspense avec une roue de la fortune pour distribuer les cadeaux.",
      icon: "🎰",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Fonctionnalités clés
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-white p-8 shadow-sm"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
