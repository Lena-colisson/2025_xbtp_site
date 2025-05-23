"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Section Héro */}
      <section className="relative bg-cover bg-center h-90 flex items-center justify-center" style={{ backgroundImage: "url('img/pexels-quang-nguyen-vinh-222549-14021062.webp')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-center text-white text-4xl font-bold z-10">Maçonnerie <br />& Constructions</h1>
      </section>

      {/* Bloc Intro + Image */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="relative w-full lg:w-1/2">
            <img src="img/pexels-quang-nguyen-vinh-222549-14021062.webp" alt="Interior" className="shadow-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-sm text-gray-500 mb-2">Un projet de construction ou de rénovation ?</p>
            <h2 className="text-3xl font-bold mb-4">Maçonnerie & Constructions : robustesse et savoir-faire

</h2>
            <p className="text-gray-600 mb-6">
              Nous construisons vos murs, dalles, fondations, radier, sous-sols, piscines ou murs de soutènement avec des matériaux durables (parpaings, béton armé, briques…). <br /> Nos artisans maçons sont formés aux techniques traditionnelles et modernes.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-800">
              Read More
            </button>
            <div className="flex gap-8 mt-8 text-center">
              <div>
                <p className="text-2xl font-bold">25+</p>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1,250+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          {/* Colonne de gauche : texte */}
          <div>
            <h2 className="text-2xl font-bold mb-4">WHY CHOOSE US</h2>
            <p className="text-gray-600 mb-6">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">View All</button>
          </div>

          {/* Colonne de droite : les 4 blocs en grille 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Fast Building" },
              { title: "Smartly Execute" },
              { title: "Carefully Planned" },
              { title: "Perfect Design" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded shadow text-center">
                <h5 className="font-semibold mb-2">{item.title}</h5>
                <p className="text-sm text-gray-500">
                  Far far away, behind the word mountains...
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Section Contact en fond */}
      <section
        className="relative text-center text-white bg-fixed bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('img/contact.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-3xl mx-auto px-6 z-10">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Vous avez un projet en tête ?
          </motion.h2>

          <motion.p
            className="mt-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            N'hésitez pas à nous contacter !!
          </motion.p>

          <motion.div
            className="mt-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              href="/contact"
              className="bg-yellow-500 inline-block text-white px-6 py-3 hover:bg-yellow-600 transition font-semibold rounded"
            >
              Contactez-moi
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Localisation */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Location & Maps</h2>
            <p className="text-gray-600">
              📍 2308 Rue des Petits Écoliers, 75010 Paris City, France
            </p>
            <p className="text-gray-500 text-sm">
              Nous sommes situés au cœur de Paris...
            </p>
            <Link
              href="/contact"
              className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition font-semibold inline-block"
            >
              Contactez-moi
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideRight}
          >
            <iframe
              className="w-full h-64 md:h-80 rounded shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999788333936!2d2.292292615674053!3d48.858844079287886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdf6b7e7bb7%3A0xe16fe9dfeef5df8f!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1615979563636!5m2!1sen!2sfr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
