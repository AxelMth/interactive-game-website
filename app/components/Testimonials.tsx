import Image from "next/image";

export default function Testimonials() {
  // TODO: Remplacer par les données réelles depuis la base de données
  const testimonials = [
    {
      name: "Marie & Pierre",
      event: "Mariage",
      message: "Un moment magique ! Nos invités ont adoré le quiz sur notre histoire. La roue des cadeaux a créé une ambiance incroyable.",
      photo: null, // À remplacer par les vraies photos
    },
    {
      name: "Sophie",
      event: "Anniversaire 30 ans",
      message: "Parfait pour animer la soirée ! Tout le monde a joué et s'est amusé. Je recommande à 100%.",
      photo: null,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
          Témoignages
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border bg-gray-50 p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-4">
                {testimonial.photo ? (
                  <Image
                    src={testimonial.photo as string}
                    width={1000}
                    height={1000}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.message}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
