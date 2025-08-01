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
              Une maison saine c'est avant tout un toit bien couvert
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
                      "Pose de tuiles, ardoises, zinc",
                      "Velux et Verrières",
                      "Pose de chevrons, liteaux et écran sous-toiture",
                      "Étanchéité, isolation, finition de toiture et gouttières",
                      "Pose de charpente industrielle",

                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-yellow-300">✔</span>
                        <p>{item}</p>
                      </div>
                    ))}
                  </motion.div>
            
            <button className="bg-yellow-300 inline-block text-white px-6 py-3 hover:bg-yellow-500 transition font-semibold">
              Parlons-en ensemble !
            </button>
          </motion.div>
        </div>
      </section>

            {/* Services Section */}
<section className="bg-black py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    {/* Titre et description */}
    <div className="mb-16 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
          Nos services Charpentes & Couvertures
        </h2>
        <p className="text-white mb-6 text-lg">
Notre savoir-faire repose sur une expertise complète en charpentes, pour des constructions solides et conformes aux normes actuelles. <br />
Faites confiance à notre expertise pour des travaux fiables et durables. 
        </p>
        <Link
          href="/contact"
          className="bg-yellow-300 inline-block text-white px-6 py-3 hover:bg-yellow-500 transition font-semibold"
        >
          Demander un devis gratuit
        </Link>
      </motion.div>
    </div>

    {/* Cartes de services */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
         {
          title: "Charpente solide & sur-mesure",
          text: "Conception et pose de charpentes bois, adaptées à chaque type de bâtiment en bois massif ou en lamellé collé.",
          img: "img/realisation_xbtp/IMG_1397.jpeg",
           keywords: ["Charpente bois", "Terrasse", "Aménagement"]
        },
        {
          title: "Toiture complète & performante",
          text: "Couverture en tuiles, ardoises ou zinc, posées dans les règles de l’art.",
          img: "img/realisation_xbtp/IMG_0613.jpeg",
           keywords: ["Tuiles", "Ardoise", "Zinc"]
        },
        {
          title: "Maison ossature bois",
          text: "Assemblage de la structure porteuse pour une stabilité optimale.",
          img: "img/realisation_xbtp/IMG_1398.jpeg", 
           keywords: ["Maison", "Bois", "Bardage"]
        },
        {
          title: "Étanchéité & isolation",
          text: "Protection contre les infiltrations et amélioration du confort thermique.",
          img: "img/realisation_xbtp/IMG_1399.jpeg",
           keywords: ["Isolation", "Étanchéité", "Toiture"]
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 h-full"
        >
          <div className="w-full md:w-1/3 h-60 overflow-hidden flex-shrink-0">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold text-black">
                {item.title}
              </h2>
              <p className="text-gray-700 mt-2">
                {item.text}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-black">Mots clés</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
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
              className="bg-yellow-300 inline-block text-white px-6 py-3 hover:bg-yellow-500 transition font-semibold"
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
            <p className="text-gray-500 ">
              Chez <strong>XBTP</strong>, chaque chantier est unique. Nous mettons notre savoir-faire au service de vos idées pour transformer vos espaces de vie avec des solutions esthétiques, robustes et durables.</p>
            <p className="text-gray-500 text-sm">
              Basée à <strong>Versailles</strong>, notre équipe intervient dans toute la région ouest de Paris : de <strong>Boulogne-Billancourt</strong> à <strong>Saint-Germain-en-Laye</strong>, en passant par <strong>La Celle-Saint-Cloud</strong>, <strong>Rueil-Malmaison</strong>, <strong>Suresnes</strong>, <strong>Vaucresson</strong>, <strong>Le Vésinet</strong>, <strong>Marly-le-Roi</strong>, <strong>Bougival</strong>, <strong>Louveciennes</strong>, <strong>Garches</strong>, <strong>Saint Cloud</strong>, <strong>Ville d'avray</strong>,  <strong>Le chesnay</strong>, <strong>Croissy sur seine</strong>, <strong>Le pecq</strong>, <strong>Chatou</strong> et bien d’autres communes des <strong>Yvelines (78)</strong> et des <strong>Hauts-de-Seine (92)</strong>.
            </p>
            
            <Link
              href="/contact"
              className="bg-yellow-300 text-white px-6 py-3 hover:bg-yellow-500 transition font-semibold inline-block"
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
             <iframe className="w-full h-64 md:h-80 shadow" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57797.98413104355!2d2.114868891153833!3d48.84805765392173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1748507271539!5m2!1sfr!2sfr" 
            />
          </motion.div>

        </div>
      </section>
    </div>
  );
}
