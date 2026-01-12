import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entreprises",
  description: "Solutions interactives pour vos événements professionnels",
};

export default function EntreprisesPage() {
  const packages = [
    {
      title: "Team Building",
      description:
        "Renforcez la cohésion de vos équipes avec des activités interactives sur mesure. Créez des moments de collaboration, de compétition amicale et de partage.",
      image: "/images/team-building.jpg", // Placeholder for image
      features: [
        "Jeux collaboratifs personnalisés",
        "Activités adaptées à vos objectifs",
        "Classements par équipes",
        "Renforcement de la cohésion d'équipe",
      ],
    },
    {
      title: "Séminaires",
      description:
        "Animez vos séminaires avec des jeux interactifs qui engagent vos participants. Rendez vos présentations mémorables et interactives.",
      image: "/images/seminaires.jpg", // Placeholder for image
      features: [
        "Animations interactives pour vos séminaires",
        "Engagement des participants",
        "Jeux sur mesure adaptés à votre contenu",
        "Création de moments mémorables",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Pour les entreprises</h1>
          <p className="mb-12 text-xl text-gray-600">
            Des solutions interactives sur mesure pour vos événements professionnels
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

          <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Intéressé par nos solutions B2B ?
            </h2>
            <p className="mb-6 text-gray-700">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir nos solutions
              adaptées aux entreprises.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
