import React, { useState } from "react";
import img1 from "../assets/images/amr hero2.jpg";
import img2 from "../assets/images/box cricket amr.jpg";
import img3 from "../assets/images/ganesh idol amr.jpg";
import img4 from "../assets/images/amr hero3.jpg";
import img5 from "../assets/images/indoorgames amr.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openPreview, setOpenPreview] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full bg-gray-100 py-25">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-medium text-center mb-4">
          Our Premium Gallery
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Discover our exclusive gallery showcasing the finest moments of AMR
          Legacy’s real estate excellence. Each visual reflects the elegance,
          craftsmanship, and premium detailing that define our landmark
          developments. Experience the spaces where innovation meets luxury.
        </p>

        <div className="relative">
          {/* Image */}
          <div
            className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
            onClick={() => setOpenPreview(true)}
          >
            <img
              src={images[currentIndex]}
              alt="gallery-img"
              className="w-full h-[550px] object-cover transition-all duration-300"
            />
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-black/50 text-white p-4 rounded-full hover:bg-black transition"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-black/50 text-white p-4 rounded-full hover:bg-black transition"
          >
            ❯
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3.5 h-3.5 rounded-full cursor-pointer transition
                ${currentIndex === index ? "bg-black" : "bg-gray-400"}`}
            ></div>
          ))}
        </div>

        {/* FULLSCREEN PREVIEW */}
        {openPreview && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <button
              onClick={() => setOpenPreview(false)}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
            >
              ✕
            </button>

            <img
              src={images[currentIndex]}
              alt="fullscreen"
              className="w-[90%] max-w-5xl max-h-[90%] object-cover rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}
