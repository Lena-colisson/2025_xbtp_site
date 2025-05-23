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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-90 flex items-center justify-center"
        style={{ backgroundImage: "url('img/charpente1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1
          className="text-center text-white text-4xl font-bold z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Charpente 

 <br /> & Couverture
        </motion.h1>
      </section>

      {/* Terrassement Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="relative w-full lg:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
          >
            <img
              src="img/charpente6.png"
              alt="Terrassement chantier"
              className="shadow-lg max-w-[600px] w-full h-auto mx-auto"
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="uppercase text-sm text-gray-500 mb-2">
              La solidité d’une maison commence par une structure fiable et <br />une toiture bien posée.
            </p>
            <h2 className="text-3xl font-bold mb-4">
Charpente & Couverture : protégez durablement votre maison

            </h2>
            <p className="text-gray-600 mb-6">
             XBTP prend en charge la pose, la rénovation et la réparation de vos structures de toit. <br />
Nos services incluent :

            </p>
            {/* Liste */}
                  <motion.div
                    className="grid grid-cols-1 text-gray-900 sm:grid-cols-2 gap-3 mb-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={4}
                  >
                    {[
                      "Pose de charpente traditionnelle",
                      "Installation de tuiles, ardoises, zinc",
                      "Réalisation complète de la carcasse bois",
                      "Pose de chevrons, liteaux et écran sous-toiture",
                      "Étanchéité, isolation et finition de toiture",
                      "Pose de charpente industrielle",

                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-yellow-500">✔</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </motion.div>
            
            <button className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-800">
              Parlons-en ensemble !
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nos services en Charpentes & Couvertures</h2>
            <p className="text-gray-600 mb-6">
             Notre savoir-faire repose sur une expertise complète en charpentes, pour des constructions solides et conformes aux normes actuelles.
              <br />
              Faites confiance à notre expertise pour des travaux fiables et durables.
            </p>
            <a
              href="/contact"
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Demander un devis
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {[
              {
                title: "Charpente solide & sur-mesure",
                text: "Conception et pose de charpentes bois, adaptées à chaque type de bâtiment."
              },
              {
                title: "Toiture complète & performante",
                text: "Couverture en tuiles, ardoises ou zinc, posées dans les règles de l’art."
              },
              {
                title: "Chevrons & carcasse bois",
                text: "Assemblage de la structure porteuse pour une stabilité optimale."
              },
              {
                title: "Étanchéité & isolation",
                text: "Protection contre les infiltrations et amélioration du confort thermique."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 shadow text-left">
                <h5 className="font-semibold text-lg mb-2">{item.title}</h5>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative text-center text-white bg-fixed bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('img/charpente5.png')" }}
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
            Besoin d’un toit fiable et durable ?
          </motion.h2>

          <motion.p
            className="mt-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
On s’occupe de tout, de la charpente à la dernière tuile.<br />
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

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideLeft}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Zone d’intervention</h2>
            <p className="text-gray-500">
              Chez <strong>XBTP</strong>, chaque chantier est unique. Nous mettons notre savoir-faire au service de vos idées pour transformer vos espaces de vie avec des solutions esthétiques, robustes et durables.
            </p>
            <p className="text-gray-500 text-sm">
              Basée à <strong>Versailles</strong>, notre équipe intervient dans toute la région ouest de Paris : de <strong>Boulogne-Billancourt</strong> à <strong>Saint-Germain-en-Laye</strong>, en passant par <strong>La Celle-Saint-Cloud</strong>, <strong>Rueil-Malmaison</strong>, <strong>Suresnes</strong>, <strong>Vaucresson</strong>, <strong>Le Vésinet</strong>, <strong>Marly-le-Roi</strong> et bien d’autres communes des <strong>Yvelines (78)</strong> et des <strong>Hauts-de-Seine (92)</strong>.
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39577.52956162962!2d2.167325474937911!3d48.83854718471091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1747989242619!5m2!1sfr!2sfr"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
