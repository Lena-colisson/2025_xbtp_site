"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-90 flex items-center justify-center" style={{ backgroundImage: "url('img/pexels-quang-nguyen-vinh-222549-14021062.webp')" }}>
        <div className="bg-black bg-black-50 w-full h-full absolute top-0 left-0" />
        <h2 className="texte-center text-white text-4xl font-bold z-10">ABOUT US</h2>
      </section>

      {/* Intro + Image Block */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src="img/pexels-quang-nguyen-vinh-222549-14021062.webp" alt="Interior" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="uppercase text-sm text-gray-500 mb-2">Welcome to INNER</p>
          <h3 className="text-3xl font-bold mb-4">Innovative Ideas Stylish Designs</h3>
          <p className="text-gray-600 mb-6">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
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
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20 px-6 md:px-16">
        <div className="mb-12 text-center">
          <h4 className="text-2xl font-bold mb-2">WHY CHOOSE US</h4>
          <p className="text-gray-600 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </p>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Fast Building" },
            { title: "Smartly Execute" },
            { title: "Carefully Planned" },
            { title: "Perfect Design" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded shadow text-center">
              <h5 className="font-semibold mb-2">{item.title}</h5>
              <p className="text-sm text-gray-500">
                Far far away, behind the word mountains, from the countries Vokalia and Consonantia.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-12 px-6 md:px-16 flex flex-wrap justify-center items-center gap-8">
        {["thedoors", "myhouse", "property", "humanshelter"].map((logo, index) => (
          <img key={index} src={`/logos/${logo}.png`} alt={logo} className="h-10 opacity-70 hover:opacity-100 transition" />
        ))}
      </section>
    </div>
  );
}
