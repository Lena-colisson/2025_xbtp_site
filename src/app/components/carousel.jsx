import React, { useState } from "react";

const images = [
  {
    src: "/images/img1.jpg",
    alt: "Salon avec cheminée et vue",
  },
  {
    src: "/images/img2.jpg",
    alt: "Cuisine moderne avec baies vitrées",
  },
  {
    src: "/images/img3.jpg",
    alt: "Cuisine ouverte avec canapé confortable",
  },
];

export default function CarouselFeldo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="relative flex justify-center gap-4 overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/70 hover:bg-white rounded-full shadow"
        >
          ‹
        </button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`w-1/3 object-cover rounded-lg shadow transition-transform duration-300 ${
              index === currentIndex ? "scale-100" : "scale-95 opacity-50"
            }`}
          />
        ))}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/70 hover:bg-white rounded-full shadow"
        >
          ›
        </button>
      </div>
      <p className="mt-6 text-center text-sm text-gray-600 max-w-4xl mx-auto">
        В компании “FELDO” мы придаём особое значение качеству ремонта в каждом доме, который мы
        предлагаем. Наши специалисты используют только высококачественные материалы и современные
        технологии, чтобы придать домам эстетику, функциональность и индивидуальность.
      </p>
    </div>
  );
}
