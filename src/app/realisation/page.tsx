
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";


export default function AboutUs() {
    const projects = [
        {
            image: "/img/contact.webp",
            title: "Lorem ipsum",
            description: "lorem ipsum de lor sitamet du jufrollu"
        },
        {
            image: "/img/contact.webp",
            title: "Lorem ipsum",
            description: "lorem ipsum de lor sitamet du jufrollu"
        },
        {
            image: "/img/contact.webp",
            title: "Lorem ipsum",
            description: "lorem ipsum de lor sitamet du jufrollu"
        },
        {
            image: "/img/contact.webp",
            title: "Lorem ipsum",
            description: "lorem ipsum de lor sitamet du jufrollu"
        },
        {
            image: "/img/contact.webp",
            title: "Lorem ipsum",
            description: "lorem ipsum de lor sitamet du jufrollu"
        },
        {
            image: "/img/contact.webp",
            title: "Lorem ipsum",
            description: "lorem ipsum de lor sitamet du jufrollu"
        },
    ];

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
                style={{ backgroundImage: "url('/img/pexels-quang-nguyen-vinh-222549-14021062.webp')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <h2 className="text-center text-white text-4xl font-bold z-10">Mes réalisations</h2>
            </section>

            {/* Portfolio Grid */}
            <section className="py-12 px-4 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <img src={project.image} alt={project.title} className="w-full h-auto rounded shadow" />
                            <h3 className="mt-2 font-bold">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
