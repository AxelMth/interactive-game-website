"use client";

import { useState } from "react";
import Link from "next/link";

type GameFormat = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
};

export default function GameExamples() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const formats: GameFormat[] = [
    {
      id: "interactive",
      title: "Mode compétitif",
      description:
        "Personnes ou groupes jouent et répondent avec un téléphone. Classement en direct, différentes activités. Plus pratique pour les jeunes.",
      icon: "📱",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
      features: [
        "Parfait pour les familles ou les groupes d'amis",
        "Classement en direct pour déterminer le vainqueur",
        "Activités personnalisées lancées pendant la journée",  
        "Événement sur un après-midi ou une journée entière"
      ],
    },
    {
      id: "classic",
      title: "Mode coopératif",
      description:
        "Permet de s'amuser en groupe et de se détendre.",
      icon: "🤝",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
      features: [
        "Parfait en famille",
        "Activités personnalisées",
        "Événement sur une partie de l'après-midi"
      ],
    },
    {
      id: "treasure-hunt",
      title: "Jeu de piste",
      description:
        "Aller d'un point à un autre dans un périmètre défini. Parcours guidé avec énigmes et défis à résoudre.",
      icon: "🧭",
      image: "https://media.istockphoto.com/id/1327459161/fr/photo/trois-fans-de-football-assis-sur-un-canap%C3%A9-regardent-un-match-%C3%A0-la-t%C3%A9l%C3%A9vision-utilisent.jpg?s=2048x2048&w=is&k=20&c=-IZHMwKxoNefi5TUWhcHdCXC-6j4jT9r6HxxWsSEgCs=",
      features: [
        "Portif et plus ludique pour les enfants",
        "Énigmes à résoudre pour les adultes",
        "Guidage tout au long du parcours",
        "Adaptable à votre lieu d'événement",
        "Événement sur l'après-midi ou la journée entière"
      ],
    },
  ];

  const handleCardClick = (formatId: string) => {
    setSelectedFormat(selectedFormat === formatId ? null : formatId);
  };

  const handleCloseModal = () => {
    setSelectedFormat(null);
  };

  const getContactUrl = (formatId: string) => {
    const formatNames: Record<string, string> = {
      interactive: "Mode compétitif",
      classic: "Mode coopératif",
      "treasure-hunt": "Mode jeu de piste",
    };
    const params = new URLSearchParams({
      format: formatNames[formatId] || formatId,
    });
    return `/contact?${params.toString()}`;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Formats de jeux disponibles
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          Des formats variés pour s&apos;adapter à tous vos événements
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <div
              key={format.id}
              onClick={() => handleCardClick(format.id)}
              className="cursor-pointer rounded-lg border bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg hover:scale-105"
            >
              <img 
                src={format.image as string} 
                alt={format.title} 
                width={1000} 
                height={1000} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{format.title}</h3>
                <p className="text-gray-600">{format.description}</p>
                <button className="mt-4 text-primary font-semibold hover:underline">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Overlay for selected format */}
        {selectedFormat && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-900"
                aria-label="Fermer"
              >
                ×
              </button>
              {(() => {
                const format = formats.find((f) => f.id === selectedFormat);
                if (!format) return null;
                return (
                  <>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-5xl">{format.icon}</span>
                      <h3 className="text-3xl font-bold text-gray-900">{format.title}</h3>
                    </div>
                    <p className="mb-6 text-lg text-gray-600">{format.description}</p>
                    <div className="mb-8">
                      <h4 className="mb-4 text-xl font-semibold text-gray-900">
                        Ce format inclut :
                      </h4>
                      <ul className="space-y-3">
                        {format.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="mt-1 text-green-600">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-6">
                      <p className="mb-4 text-gray-600">
                        Pour obtenir un devis personnalisé, nous aurons besoin de quelques
                        informations supplémentaires :
                      </p>
                      <ul className="mb-6 space-y-2 text-gray-600">
                        <li>• Où se déroulera l&apos;événement ?</li>
                        <li>• Combien d&apos;invités ?</li>
                        <li>• Date de l&apos;événement</li>
                        <li>• Type d&apos;événement</li>
                      </ul>
                      <Link
                        href={getContactUrl(selectedFormat)}
                        className="block w-full rounded-full bg-primary px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-primary/90"
                        onClick={handleCloseModal}
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
