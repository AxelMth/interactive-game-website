import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Transformez vos événements en{" "}
            <span className="text-primary">expériences mémorables</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            Animations interactives sur mesure pour vos événements privés. Jeux en temps réel,
            classements dynamiques et cadeaux qui créent de la connexion entre vos invités.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Demander une animation
            </Link>
            <Link
              href="/jeux"
              className="rounded-full border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Découvrir les jeux
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
