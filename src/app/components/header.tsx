"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const isActive = (href) => pathname === href;

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl text-black font-bold">XBTP</div>

        {/* Menu Desktop centré */}
        <nav className="hidden md:flex space-x-8 items-center justify-center mx-auto">
          <Link
            href="/"
            className={`hover:text-yellow-500 ${
              isActive("/") ? "text-yellow-300" : "text-black"
            }`}
          >
            Accueil
          </Link>

          <div className="relative group">
            <button className="text-black hover:text-yellow-500">Mes Services</button>
            <div className="absolute hidden group-hover:block bg-white shadow text-black p-2 min-w-[220px] space-y-2 z-10 ">
              <a href="/terrassement" className="block hover:text-yellow-500">Terrassement & VRD</a>
              <a href="/construction" className="block hover:text-yellow-500">Maçonnerie & Constructions</a>
              <a href="/charpente" className="block hover:text-yellow-500">Charpente & Couverture</a>
              <a href="/amenagementext" className="block hover:text-yellow-500">Aménagement Extérieur</a>
            </div>
          </div>

            <Link
            href="/realisation"
            className={`hover:text-yellow-500 ${
              isActive("/realisation") ? "text-yellow-500" : "text-black"
            }`}
          >
            Mes Réalisations
          </Link>
           <Link
            href="/contact"
            className={`hover:text-yellow-500 ${
              isActive("/contact") ? "text-yellow-500" : "text-black"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Menu Burger Mobile */}
        <div className="md:hidden">
          {/* Bouton Burger toujours visible sur mobile */}
<button
  onClick={toggleMenu}
  className="md:hidden fixed top-4 right-4 z-50 text-3xl text-black"
>
  {menuOpen ? '✕' : '☰'}
</button>

        </div>
      </div>

      {/* Menu Mobile plein écran */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center text-2xl space-y-8 z-40"
          >
            {[
              { href: "/", label: "Accueil" },
              { href: "/terrassement", label: "Terrassement VRD" },
              { href: "/construction", label: "Maçonnerie" },
              { href: "/charpente", label: "Charpente" },
              { href: "/amenagementext", label: "Aménagement Extérieur" },
              { href: "/realisation", label: "Réalisations" },
              { href: "/contact", label: "Contact" }
            ].map(({ href, label }) => (
            
              <Link
                key={href}
                href={href}
                className={`${isActive(href) ? "underline" : ""} text-black hover:text-gray text-3xl ${href === "/contact" ? "bg-yellow-500 text-white px-6 py-3  hover:bg-yellow-600 text-white transition font-semibold" : ""}`}
                onClick={handleMenuClose}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
