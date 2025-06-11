"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("*");

  const filters = [
    { label: "Tout", value: "*" },
    { label: "Terrassement & VRD", value: "filter-terrassement" },
    { label: "Maçonnerie & Construction", value: "filter-maçonnerie" },
    { label: "Charpente Courverture", value: "filter-charpente" },
    { label: "Aménagement extérieurs", value: "filter-aménagement" },
  ];

const projects = [
  // Aménagement extérieurs
  {
    title: "Entrée paysagée",
    description: "Aménagement extérieur de l'entrée d'une résidence",
    image: "img/realisation_xbtp/IMG_0319.jpeg",
    filter: ["filter-aménagement"],
  },
   {
    title: "Piscine en construction",
    description: "Coulage d’un mur de soutènement",
    image: "img/realisation_xbtp/IMG_3802.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Allée en Construction",
    description: "Création d’une allée en pierre naturelle",
    image: "img/realisation_xbtp/IMG_0334.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Aménagement portails",
    description: "Aménagement portails",
    image: "img/realisation_xbtp/IMG_0768.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Terrasse bois",
    description: "Création d’un espace détente en bois",
    image: "img/realisation_xbtp/IMG_0785.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Terrasse en bois",
    description: "Installation terrasse en bois",
    image: "img/realisation_xbtp/IMG_0786.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Terrasse dallée",
    description: "Dallage d'une terrasse",
    image: "img/realisation_xbtp/IMG_0797.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Aménagement piscine",
    description: "Aménagement d'une piscine",
    image: "img/realisation_xbtp/IMG_8154.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Extérieur paysager",
    description: "Aménagement moderne d’un extérieur",
    image: "img/realisation_xbtp/IMG_8998.jpeg",
    filter: ["filter-aménagement"],
  },
  {
    title: "Piscine",
    description: "Aménagement Piscine",
    image: "img/realisation_xbtp/IMG_3927.jpeg",
    filter: ["filter-aménagement"],
  },

  // Terrassement & VRD
  {
    title: "Camion de terrassement",
    description: "Chargement de gravats avec pelleteuse",
    image: "img/realisation_xbtp/IMG_0442.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Pelleteuse sur chantier",
    description: "Préparation de terrain pour fondations",
    image: "img/realisation_xbtp/IMG_0443.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Tranchée fondations",
    description: "Travaux de voirie et réseaux divers",
    image: "img/realisation_xbtp/IMG_1255.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Réseaux VRD",
    description: "Installation des réseaux enterrés",
    image: "img/realisation_xbtp/IMG_1363.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Tranchée avec engin",
    description: "Ouverture de tranchée pour évacuation",
    image: "img/realisation_xbtp/IMG_3623.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Préparation terrassement",
    description: "Nivellement précis du terrain",
    image: "img/realisation_xbtp/IMG_3663.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Pelleteuse sur chantier",
    description: "Terrassement en zone pavillonnaire",
    image: "img/realisation_xbtp/IMG_5367.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Accès chantier",
    description: "Préparation des accès véhicules",
    image: "img/realisation_xbtp/IMG_8499.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Réseau VRD",
    description: "Chargement de matériaux de terrassement",
    image: "img/realisation_xbtp/IMG_9057.jpeg",
    filter: ["filter-terrassement"],
  },

  {
    title: "Construction terrain",
    description: "Décaissement pour création de dalle",
    image: "img/realisation_xbtp/IMG_9650.jpeg",
    filter: ["filter-terrassement"],
  },
  {
    title: "Pelleteuse",
    description: "Pose de canalisation enterrée",
    image: "img/realisation_xbtp/IMG_9652.jpeg",
    filter: ["filter-terrassement"],
  },

  // Maçonnerie & Construction
  {
    title: "Mur en pierre",
    description: "Élévation d’un mur",
    image: "img/realisation_xbtp/IMG_1303.jpeg",
    filter: ["filter-maçonnerie"],
  },
  {
    title: "Dalle en béton",
    description: "Coulage d’une dalle",
    image: "img/realisation_xbtp/IMG_1391.jpeg",
    filter: ["filter-maçonnerie"],
  },
  {
    title: "Dalle béton",
    description: "Coulage d’une dalle pour terrasse",
    image: "img/realisation_xbtp/IMG_4112.jpeg",
    filter: ["filter-maçonnerie"],
  },
  {
    title: "Fondations Portails",
    description: "Installations Fondations",
    image: "img/realisation_xbtp/IMG_4595.jpeg",
    filter: ["filter-maçonnerie"],
  },
  {
    title: "Mur porteur",
    description: "Construction",
    image: "img/realisation_xbtp/IMG_9127.jpeg",
    filter: ["filter-maçonnerie"],
  },

  // Charpente & Couverture
   {
    title: "Toiture",
    description: "Installation d’un toit",
    image: "img/realisation_xbtp/IMG_0613.jpeg",
    filter: ["filter-charpente"],
  },
  {
    title: "Charpente traditionnelle",
    description: "Montage structure en bois massif",
    image: "img/realisation_xbtp/IMG_1397.jpeg",
    filter: ["filter-charpente"],
  },
  {
    title: "Charpente sur chantier",
    description: "Construction de la toiture en cours",
    image: "img/realisation_xbtp/IMG_1398.jpeg",
    filter: ["filter-charpente"],
  },
  {
    title: "Charpente terminée",
    description: "Toiture finalisée avec liteaux",
    image: "img/realisation_xbtp/IMG_1399.jpeg",
    filter: ["filter-charpente"],
  },
  {
    title: "Charpente en hauteur",
    description: "Vue aérienne de la structure",
    image: "img/realisation_xbtp/IMG_8617.jpeg",
    filter: ["filter-charpente"],
  },
];


  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((p) => p.filter.includes(activeFilter));

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Section Héros */}
      <section
              className="relative bg-cover bg-center h-90 flex items-center justify-center"
              style={{ backgroundImage: "url('img/aext8.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <motion.h1
                className="text-center text-white text-4xl font-bold z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Réalisations <br />
              </motion.h1>
            </section>

      {/* Section avec Filtres + Projets */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((f) => (
              <li
                key={f.value}
                className={`cursor-pointer px-4 py-2 border ${
                  activeFilter === f.value ? "bg-black text-white" : "bg-gray-100"
                }`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                className="border overflow-hidden shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
