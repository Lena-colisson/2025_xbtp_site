import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "XBTP, Construisons vos projets",
  description: "Terrassement - Aménagement Ectérieur - Charpente -",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>

        <Header />

        {children}

   <footer className="bg-black text-gray-300 px-6 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Colonne 1 : Présentation */}
    <div className="flex flex-col h-full">
      <h4 className="text-xl font-bold text-white mb-4">XBTP</h4>
      <p className="text-sm">
        Construction, terrassement, aménagement extérieur, maçonnerie, charpente, couverture, VRD
      </p>
    </div>

    {/* Colonne 2 : MENU - placée ici pour être au centre */}
    <div className="flex flex-col h-full items-center">
      <h5 className="text-lg font-semibold text-white mb-4">MENU</h5>
      <ul className="space-y-2 text-sm text-center">
        <li><a href="#" className="hover:text-yellow-400">Accueil</a></li>
        <li><a href="#" className="hover:text-yellow-400">Terrassements</a></li>
        <li><a href="#" className="hover:text-yellow-400">Construction</a></li>
        <li><a href="#" className="hover:text-yellow-400">Charpentes</a></li>
        <li><a href="#" className="hover:text-yellow-400">Aménagements extérieur</a></li>
        <li><a href="/realisation" className="hover:text-yellow-400">Réalisations</a></li>
        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </div>

    {/* Colonne 3 : Contact */}
<div className="flex flex-col h-full items-center text-start">
      <h5 className="text-lg font-semibold text-white mb-4">Contact</h5>
      <ul className="space-y-2 text-sm">
        <li>btparthur@gmail.com</li>
        <li>+33 6 60 06 91 94</li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} XBTP. Tous droits réservés. <br />
    Site créé par <a href="https://lena.colisson.me/" className="text-yellow-500 hover:underline">Léna Colisson</a>
  </div>
</footer>



      </body>
    </html>
  );
}
