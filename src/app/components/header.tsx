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
          <Link href="/" className="text-black hover:text-yellow-500">Accueil</Link>

          <div className="relative group">
                        <button className="text-black hover:text-yellow-500">Mes Services</button>
                        <div className="absolute hidden group-hover:block bg-black text-white p-2 space-y-2 z-10">
                            <a href="/terrassement" className="block hover:text-yellow-500">Terrassement</a>
                            <a href="/construction" className="block hover:text-yellow-500">Construction</a>
                            <a href="/charpente" className="block hover:text-yellow-500">Charpentes</a>
                            <a href="/amenagementext" className="block hover:text-yellow-500">Aménagement Extérieur</a>
                        </div>
                    </div>
                    
          <Link href="/realisation" className="text-black hover:text-yellow-500">Mes Réalisations</Link>
          <Link href="/contact" className="text-black hover:text-yellow-500">Contact</Link>
        </nav>

        {/* Menu Burger Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">&#9776;</button>
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
              { href: "/services", label: "Mes Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/aproposde", label: "À propos de" },
              { href: "/contact", label: "Contact" }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${isActive(href) ? "underline" : ""} hover:text-gray-500 text-3xl ${href === "/contact" ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-6 rounded-full hover:from-blue-600 hover:to-cyan-600" : ""}`}
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
