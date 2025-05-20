"use client";

import React from "react";

const rooms = [
  {
    title: "Imperial Suite with Balcony City View",
    price: 119,
    img: "img/pexels-quang-nguyen-vinh-222549-14021062.webp",
  },
  {
    title: "Executive Deluxe Double or Twin Room",
    price: 129,
    img: "/rooms/room2.jpg",
  },
  {
    title: "Family Suite With Balcony Street View",
    price: 99,
    img: "/rooms/room3.jpg",
  },
  {
    title: "Premium Room with Window City View",
    price: 139,
    img: "/rooms/room4.jpg",
  },
];

export default function HotelSection() {
  return (
    <div className="font-sans">
      {/* Location & Maps */}
      <section className="bg-[#fdfaf6] py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
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

      {/* Rooms & Suites */}
      <section className="bg-neutral-900 py-16 px-6 md:px-16 text-white">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold">Rooms & Suites</h3>
          <p className="text-gray-400 mt-2">Ut amet ornarem pri. Natum option abhorreant pri no.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white text-gray-800 rounded overflow-hidden shadow-lg relative">
              <img src={room.img} alt={room.title} className="w-full h-70 object-cover" />
              <div className="p-4 space-y-2">
                <p className="text-sm text-gray-500">${room.price}.00 / night</p>
                <h4 className="font-semibold text-base">{room.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (fictifs) */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="w-3 h-3 bg-white rounded-full opacity-60"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-100"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-60"></span>
        </div>
      </section>
    </div>
  );
}