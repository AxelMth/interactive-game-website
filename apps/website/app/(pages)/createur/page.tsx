import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le créateur",
  description: "Découvrez qui se cache derrière GameFlow",
};

export default function CreateurPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-5xl font-bold text-gray-900">Le créateur</h1>

          <div className="space-y-8 text-lg text-gray-700">
            <div className="rounded-lg border bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Qui suis-je ?</h2>
              <p className="mb-4">
                Passionné par les technologies et les expériences interactives, j'ai créé GameFlow
                pour transformer les événements privés en moments inoubliables.
              </p>
              <p>
                Mon objectif est de créer des animations qui rassemblent, qui créent de la
                connexion et qui laissent des souvenirs mémorables à tous vos invités.
              </p>
            </div>

            <div className="rounded-lg border bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Ma vision</h2>
              <p className="mb-4">
                Chaque événement est unique, et chaque jeu doit l'être aussi. C'est pourquoi je
                crée des expériences sur mesure, adaptées à votre histoire, vos invités et votre
                ambiance.
              </p>
              <p>
                La simplicité d'utilisation, l'expérience utilisateur et l'émotion sont au cœur de
                chaque création.
              </p>
            </div>

            <div className="rounded-lg border bg-gray-50 p-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Pourquoi GameFlow ?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Des jeux personnalisés créés spécialement pour votre événement</li>
                <li>Une interface simple et intuitive pour tous vos invités</li>
                <li>Un accompagnement de A à Z pour garantir le succès de votre animation</li>
                <li>Une approche humaine et bienveillante</li>
              </ul>
            </div>

            <div className="mt-12 rounded-lg bg-primary/10 p-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                Discutons de votre événement
              </h2>
              <p className="mb-6 text-gray-700">
                Je serais ravi d'échanger avec vous pour créer une expérience unique et mémorable.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
