import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">GameFlow</h3>
            <p className="text-sm text-gray-600">
              Transformez vos événements en expériences mémorables
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jeux" className="text-gray-600 hover:text-primary">
                  Les jeux
                </Link>
              </li>
              <li>
                <Link href="/createur" className="text-gray-600 hover:text-primary">
                  Le créateur
                </Link>
              </li>
              <li>
                <Link href="/entreprises" className="text-gray-600 hover:text-primary">
                  Entreprises
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mentions-legales" className="text-gray-600 hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-600 hover:text-primary">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Demander une animation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} GameFlow. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
