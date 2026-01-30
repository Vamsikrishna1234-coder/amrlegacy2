import React, { useState, useEffect, useRef } from "react";
import treeImage from "../assets/images/golden tree.jpg";

export default function GoldenTree() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Particle Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#d1a32c] to-transparent opacity-20"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `slide ${Math.random() * 10 + 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* LEFT — IMAGE */}
            <div
              className={`lg:col-span-3 flex justify-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative group w-full">
                <div className="relative p-6 lg:p-8 rounded-3xl shadow-2xl">
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#d1a32c] rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#d1a32c] rounded-br-3xl"></div>

                  <img
                    src={treeImage}
                    onClick={() => setShowFullImage(true)}
                    alt="Golden Tree"
                    className="w-full rounded-2xl shadow-lg cursor-pointer group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT — TEXT */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#d1a32c]/10 text-[#d1a32c] px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 bg-[#d1a32c] rounded-full animate-pulse"></span>
                Our Symbol
              </div>

              <h2
                className="text-4xl lg:text-4xl font-medium mb-6 leading-tight"
                style={{
                  background: "linear-gradient(to right, #d1a32c, #b1892c, #b89338)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Golden Tree
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 mb-8 text-justify">
                Not merely a tree, but a living emblem of balance, where legacy runs deep
                through its roots, heritage whispers through its leaves, and wisdom blooms
                in every branch. It stands as a timeless symbol of strength, nurturing the
                stories of generations yet to come.
              </p>

              <div className="space-y-4">
                {["Rooted in Legacy", "Growing with Heritage", "Blooming in Wisdom"].map(
                  (item, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#d1a32c] to-[#b1892c] rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
          @keyframes slide {
            0% { transform: translateX(-100%) translateY(0); }
            100% { transform: translateX(200vw) translateY(-50px); }
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
      </section>

      {/* FULLSCREEN IMAGE MODAL */}
      {showFullImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setShowFullImage(false)}
            className="absolute top-6 right-6 text-white bg-[#d1a32c] p-3 rounded-full shadow-lg hover:bg-[#b1892c] transition"
          >
            ✕
          </button>

          {/* Large Image */}
          <img
            src={treeImage}
            alt="Golden Tree Full"
            className="max-w-4xl w-full rounded-2xl shadow-2xl border-4 border-[#d1a32c]"
          />

          {/* Fade Animation */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
