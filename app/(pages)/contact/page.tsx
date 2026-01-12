import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Demandez une animation pour votre événement",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Demander une animation</h1>
          <p className="mb-12 text-xl text-gray-600">
            Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement pour discuter
            de votre événement.
          </p>

          <form className="space-y-6 rounded-lg border bg-gray-50 p-8">
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold text-gray-900">
                Nom *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-semibold text-gray-900">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold text-gray-900">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="event-type" className="mb-2 block font-semibold text-gray-900">
                Type d'événement *
              </label>
              <select
                id="event-type"
                name="event-type"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Sélectionnez un type</option>
                <option value="mariage">Mariage</option>
                <option value="anniversaire">Anniversaire</option>
                <option value="famille">Événement familial</option>
                <option value="amis">Soirée entre amis</option>
                <option value="communautaire">Événement communautaire</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="mb-2 block font-semibold text-gray-900">
                Date de l'événement
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="guests" className="mb-2 block font-semibold text-gray-900">
                Nombre d'invités (approximatif)
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-semibold text-gray-900">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Décrivez votre événement, vos attentes, vos questions..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Envoyer la demande
            </button>

            <p className="text-center text-sm text-gray-600">
              * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
