import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entreprises",
  description: "Solutions interactives pour vos événements professionnels",
};

export default function EntreprisesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Pour les entreprises</h1>
          <p className="mb-12 text-xl text-gray-600">
            Des solutions interactives adaptées à vos événements professionnels
          </p>

          <div className="mb-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-8">
            <p className="text-center text-lg text-gray-700">
              <strong>Cette section est en préparation.</strong> Nous développons actuellement des
              solutions spécifiques pour les entreprises. N'hésitez pas à nous contacter pour en
              savoir plus.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Team Building</h2>
              <p className="mb-4 text-gray-700">
                Renforcez la cohésion de vos équipes avec des jeux collaboratifs et des défis
                interactifs.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Jeux collaboratifs</li>
                <li>Classements par équipes</li>
                <li>Défis de groupe</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Séminaires & Formations</h2>
              <p className="mb-4 text-gray-700">
                Rendez vos formations interactives avec des quiz produits, des évaluations en direct
                et de la gamification pédagogique.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Quiz produits</li>
                <li>Formations interactives</li>
                <li>Évaluations en direct</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Événements Clients</h2>
              <p className="mb-4 text-gray-700">
                Engagez votre public avec des animations personnalisées et un branding adapté à
                votre marque.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Branding personnalisé</li>
                <li>Jeux de marque</li>
                <li>Engagement public</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-gray-50 p-6">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900">Fonctionnalités B2B</h2>
              <p className="mb-4 text-gray-700">
                Des outils adaptés aux besoins professionnels avec analytics et export de données.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Export des résultats</li>
                <li>Analytics détaillés</li>
                <li>Rapports de participation</li>
              </ul>
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
