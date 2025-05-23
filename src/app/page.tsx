"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import './components/flip.css'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };


  const services = [
    {
      titleLine1: "Terrassement",
      titleLine2: "& VRD",
      keywords: "Mini pelle, tranchée, évacuation terre, fondations, viabilisation, voirie, réseaux",
      link: "/services/terrassement-vrd",
      img: "/img/contact.webp"
    },
    {
      titleLine1: "Maçonnerie",
      titleLine2: "& Constructions ",
      keywords: "Béton armé, mur, parpaing, fondations, radier, piscine, sous-œuvre, brique",
      link: "/services/maconnerie",
      img: "/img/contact.webp"
    },
    {
      titleLine1: "Charpente",
      titleLine2: "& Couverture",
      keywords: "Charpentier, tuiles, zinc, velux, isolation, étanchéité, toiture, bardage",
      link: "/services/charpente-couverture",
      img: "/img/charpente.jpg"
    },
    {
      titleLine1: "Aménagement",
      titleLine2: "Extérieur",
      keywords: "Terrasse, clôture, portail, abri jardin, carport, arbres, arrosage, haie",
      link: "/services/amenagement-exterieur",
      img: "/img/contact.webp"
    },
  ]

  // Animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };


  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };



  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <main className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('img/pexels-quang-nguyen-vinh-222549-14021062.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Construisons vos projets <br /> avec des experts
            </motion.h1>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Projet sur mesure – devis rapide & gratuit
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="bg-yellow-500 text-white px-6 py-3  hover:bg-yellow-600 transition font-semibold">
                Contactez-moi
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

          {/* Image avec bouton lecture */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10">
              <img
                src="img/contact.webp"
                alt="Construction site"
                className="shadow-lg"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm text-yellow-500 uppercase font-semibold mb-2">
              Votre expert en aménagement extérieur à Versailles et alentours
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <strong>XBTP</strong> est une entreprise spécialisée dans les travaux de construction et d’aménagement extérieur en Île-de-France. 

            </h2>
            <p className="text-gray-700 mb-6">
Forts de plus de 10 ans d’expérience, nous accompagnons nos clients – particuliers comme professionnels – dans la réalisation de leurs projets sur mesure, avec un souci constant de qualité, de sécurité et de durabilité.            </p>

            {/* Liste */}
            <div className="grid grid-cols-1 text-gray-900 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Préparation de terrain & tranchées (Terrassement & VRD)",
                "Ossature bois, zinguerie, toitures (Charpente & Couverture)",
                "Murs, fondations, petits bâtiments (Maçonnerie & Constructions)",
                "Terrasses, allées, portails (Aménagement extérieur)",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-yellow-500">✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Bouton */}
            <Link
              href="/contact"
              className="bg-yellow-500 text-white px-6 py-3 hover:bg-yellow-600 transition font-semibold">
              Contactez-moi
            </Link>
          </div>

        </div>
      </section>

      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos 4 pôles d’expertise</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ titleLine1, titleLine2, keywords, link, img }, idx) => {
            const isFlipped = flippedIndex === idx
            return (
              <div
                key={idx}
                className="relative perspective h-100 w-full"
              >
                <div className={`w-full h-full transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''} transform-style-preserve-3d`}>
                  {/* FRONT */}
                  <div className="absolute w-full h-full backface-hidden">
                    <Image src={img} alt={`${titleLine1} ${titleLine2}`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold leading-tight">
                          {titleLine1}<br />{titleLine2}
                        </h3>
                        <p className="text-sm mt-4">{keywords}</p>
                      </div>

                      <button
                        onClick={() => toggleFlip(idx)}
                        className="mt-4 inline-block bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition-all duration-300 text-center"
                      >
                        Pour en savoir plus
                      </button>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white text-black p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold leading-tight">
                        {titleLine1}<br />{titleLine2}
                      </h3>
                      <p className="text-sm mt-4">{keywords}</p>
                    </div>
                    <Link
                      href={link}
                      className="mt-4 inline-block bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-yellow-600 transition-all duration-300 text-center"
                    >
                      Accéder au service
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

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
          
             <iframe className="w-full h-64 md:h-80 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d39577.52956162962!2d2.167325474937911!3d48.83854718471091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1747989242619!5m2!1sfr!2sfr" 
            />
          </motion.div>

        </div>
      </section>
      <section
        className="relative text-center text-white bg-fixed bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('img/contact.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-6 z-10">

          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Vous recherchez une entreprise d’aménagement extérieur à Versailles, Boulogne, Saint-Germain-en-Laye, ou La Celle-Saint-Cloud ?
          </motion.h2>

          <motion.p
            className="mt-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            XBTP intervient également à Rueil-Malmaison, Suresnes, Garches, Vaucresson, Le Vésinet, et dans de nombreuses autres communes des Yvelines et des Hauts-de-Seine.
          </motion.p>

          <motion.div
            className="mt-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
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

      {/* Testimonials */}
      <section className="bg-white text-black px-6 py-16 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Avis de nos clients
        </motion.h2>

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
            <motion.div
              key={idx}
              className="bg-white p-6 rounded shadow text-left"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: idx * 0.2 }
                }
              }}
            >
              <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
              <p className="mb-4 italic">"{review.feedback}"</p>
              <h3 className="font-semibold">{review.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}