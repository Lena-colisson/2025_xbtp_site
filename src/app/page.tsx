"use client";

import Image from "next/image";
import Link from 'next/link';
import React, { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative relative h-screen bg-cover bg-center bg-cover bg-center" style={{ backgroundImage: "url('img/pexels-quang-nguyen-vinh-222549-14021062.webp')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Concevez votre extérieur avec des experts</h1>
            <p className="text-lg mb-6">Projet sur mesure – devis rapide & gratuit</p>
            <Link href="/contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition">
              Contactez-moi
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          {/* Image avec bouton lecture */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10">
              <img
                src="img/contact.webp"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm text-yellow-500 uppercase font-semibold mb-2">
              We represent the future of the construction
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Safety, quality and sustainability
            </h2>
            <p className="text-gray-700 mb-6">
              At Byren, we have helped customers complete more than 5,000 projects in 160 countries on all continents that have created jobs, grown economies, improved the resiliency of the world’s infrastructure, increased access to resources and vital services and made the world a safer place.
            </p>

            {/* Liste */}
            <div className="grid grid-cols-1 text-gray-900 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Construction Technology",
                "Metallurgical & Material",
                "Heavy Engineering",
                "Electrical & Automation",
                "Hydrocarbon Engineering",
                "Mining Machinery"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-yellow-500">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Bouton */}
            <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition font-semibold">
              Our Services
            </button>
          </div>

        </div>
      </section>

      <section className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Nos services</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Country Collection */}
          <div className="relative h-90 group overflow-hidden ">
            <img
              src="img/contact.webp"
              alt="Country Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Terrassement<br /> Réseau</h3>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="text-white text-sm hover:text-gray-300 transition">
                READ MORE
              </button>
            </div>
          </div>

          {/* Concord Collection */}
          <div className="relative group overflow-hidden ">
            <img
              src="img/contact.webp"
              alt="Concord Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Construction<br />Maçonnerie</h3>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="text-white text-sm hover:text-gray-300 transition">
                READ MORE
              </button>
            </div>
          </div>

          {/* Classic Collection */}
          <div className="relative group overflow-hidden">
            <img
              src="img/contact.webp"
              alt="Classic Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Charpente<br />Couverture</h3>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="text-white text-sm hover:text-gray-300 transition">
                READ MORE
              </button>
            </div>
          </div>

          {/* Luxor Collection */}
          <div className="relative group overflow-hidden">
            <img
              src="img/contact.webp"
              alt="Luxor Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Aménagement<br />Extérieur</h3>
            </div>
            <div className="absolute bottom-4 left-4">
              <button className="text-white text-sm hover:text-gray-300 transition">
                READ MORE
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Location & Maps */}
      <section className="bg-white py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 ">
          <h3 className="text-2xl font-semibold text-gray-800">Location & Maps</h3>
          <p className="text-gray-600">
            📍 2308 Rue des Petits Écoliers, 75010 Paris City, France
          </p>
          <p className="text-gray-500 text-sm">
            Maps embedded ici, ou avec un lien vers Google Maps. Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="bg-yellow-700 text-white px-5 py-2 rounded hover:bg-yellow-800">
            View Location →
          </button>
        </div>
        <div>
          <iframe
            className="w-full h-64 rounded shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999788333936!2d2.292292615674053!3d48.858844079287886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf6b7e7bb7%3A0xe16fe9dfeef5df8f!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1615979563636!5m2!1sen!2sfr"
            loading="lazy"
          ></iframe>
        </div>
      </section>

     <section
        className="relative px-6 py-16 text-center text-white bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('img/contact.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-3xl mx-auto z-10">
          <h2 className="text-2xl font-semibold mt-2">Years experience working</h2>
          <p className="mt-6">
            Creative solutions by professional designers. Your kitchen is an expression of who you are,
            and its design should match your lifestyle. Whether you need a traditional touch or desire
            a modern feel, we can design your dream kitchen to suit any purpose.
          </p>
          <a
            href="/experience"
            className="inline-block mt-6 border px-6 py-2 rounded hover:bg-black hover:text-white"
          >
            Continue Reading
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 text-black px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-8">Avis de nos clients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Pierre",
              feedback: "Nous avons été ravis de la qualité des travaux d'aménagement extérieur effectués par Xbtp. Leur professionnalisme et leur attention aux détails sont remarquables.",
            },
            {
              name: "Fabien",
              feedback: "L'équipe de Xbtp a réalisé un travail exceptionnel sur notre projet de maçonnerie.",
            }
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow text-left">
              <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
              <p className="mb-4 italic">"{review.feedback}"</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}