import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Ludiq Events
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/jeux" className="text-sm font-medium hover:text-primary text-gray-600">
            Les jeux
          </Link>
          <Link href="/createur" className="text-sm font-medium hover:text-primary text-gray-600">
            Le créateur
          </Link>
          <Link href="/entreprises" className="text-sm font-medium hover:text-primary text-gray-600">
            Entreprises
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Demander une animation
          </Link>
        </div>
      </nav>
    </header>
  );
}
