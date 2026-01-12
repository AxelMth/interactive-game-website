export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Vous nous contactez",
      description: "Dites-nous en plus sur votre événement : type, nombre d'invités, ambiance souhaitée.",
    },
    {
      number: "2",
      title: "Nous créons votre jeu",
      description: "Nous concevons un jeu personnalisé avec vos questions, photos et règles spécifiques.",
    },
    {
      number: "3",
      title: "Nous animons votre événement",
      description: "Nous animons votre événement avec notre jeu personnalisé.",
    },
    {
      number: "4",
      title: "Nous vous envoyons les résultats",
      description: "Nous vous envoyons les résultats de l'événement par email.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Comment ça marche ?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center rounded-lg p-8">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
