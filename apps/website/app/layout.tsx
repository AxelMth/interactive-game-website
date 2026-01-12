import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ludiq Events - Transformez vos événements en expériences mémorables",
    template: "%s | Ludiq Events",
  },
  description: "Animations interactives sur mesure pour vos événements privés. Jeux en temps réel, classements dynamiques et cadeaux qui créent de la connexion entre vos invités.",
  keywords: ["jeux interactifs", "animation événement", "jeux mariage", "quiz interactif", "animation soirée"],
  authors: [{ name: "Ludiq Events" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ludiq-events.fr",
    siteName: "Ludiq Events",
    title: "Ludiq Events - Transformez vos événements en expériences mémorables",
    description: "Animations interactives sur mesure pour vos événements privés",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ludiq Events - Transformez vos événements en expériences mémorables",
    description: "Animations interactives sur mesure pour vos événements privés",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
