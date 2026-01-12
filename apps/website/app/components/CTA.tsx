import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Prêt à créer un moment inoubliable ?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Contactez-nous dès maintenant pour discuter de votre événement et recevoir un devis personnalisé.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary transition-transform hover:scale-105"
          >
            Demander une animation
          </Link>
        </div>
      </div>
    </section>
  );
}
