import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  Trees,
  Shield,
  Dumbbell,
  Waves,
  Building2,
  Trophy,
  Footprints,
  Flower2,
  Dog,
  Sparkles,
} from "lucide-react";

export default function ProjectHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const brand = {
    blue: "#203370",
    white: "#ffffff",
    gray: "#6b7280",
  };

  const highlights = [
    { icon: Home, text: "2200 - 5100 Sft.", subtitle: "Villa Sizes" },
    { icon: Sparkles, text: "Grand Entrance", subtitle: "" },
    { icon: Building2, text: "15,000+ Sft.", subtitle: "Clubhouse" },
    { icon: Home, text: "East & West Facing", subtitle: "Villas" },
    { icon: Trophy, text: "4L Sft.", subtitle: "Project Area" },
    { icon: Trees, text: "25+", subtitle: "Amenities" },
    { icon: Footprints, text: "30ft & 40ft", subtitle: "Roads" },
    { icon: Footprints, text: "Walking Track", subtitle: "" },
    { icon: Sparkles, text: "Lord Ganesh Statue", subtitle: "" },
    { icon: Users, text: "Indoor & Outdoor", subtitle: "Games" },
    { icon: Trees, text: "Banyan Tree Lawn", subtitle: "" },
    { icon: Dumbbell, text: "Outdoor & Indoor", subtitle: "Gym" },
    { icon: Flower2, text: "Landscaping", subtitle: "Gardens" },
    { icon: Dog, text: "Pet Park", subtitle: "" },
    { icon: Shield, text: "24 Hours", subtitle: "Security" },
    { icon: Waves, text: "Swimming Pool", subtitle: "" },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 4) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [highlights.length, isPaused]);

  const visibleHighlights = [
    highlights[currentIndex % highlights.length],
    highlights[(currentIndex + 1) % highlights.length],
    highlights[(currentIndex + 2) % highlights.length],
    highlights[(currentIndex + 3) % highlights.length],
  ];

  return (
    <section
      className="relative w-full min-h-[75vh] py-20 px-4 overflow-hidden"
      style={{ backgroundColor: brand.blue }}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-[160px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-white animate-shimmer">
            Project Highlights
          </h2>
          <p className="text-white/80 text-lg mt-4">
            Discover Premium Living Features
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Shine sweep */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
                </div>

                {/* Card */}
                <div
                  className="relative bg-white rounded-2xl p-8 h-full border transition-all duration-700
                             group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-3xl"
                  style={{
                    minHeight: "250px",
                    borderColor: "#e5e7eb",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6
                                 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{
                        backgroundColor: brand.blue,
                        boxShadow: "0 15px 35px rgba(32,51,112,0.5)",
                      }}
                    >
                      <Icon
                        className="w-10 h-10 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_white]"
                        strokeWidth={2.5}
                        color={brand.white}
                      />
                    </div>

                    {/* Text */}
                    <p
                      className="font-bold text-xl transition-all duration-500 group-hover:tracking-wide"
                      style={{ color: brand.blue }}
                    >
                      {item.text}
                    </p>

                    {item.subtitle && (
                      <p className="text-sm mt-1 text-gray-600">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Bottom animated border */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 overflow-hidden rounded-b-2xl"
                      style={{ backgroundColor: brand.blue }}
                    >
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shineLine"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            onClick={() =>
              setCurrentIndex((currentIndex - 4 + highlights.length) % highlights.length)
            }
            className="w-12 h-12 rounded-full bg-white text-[#203370] font-bold shadow-lg hover:scale-110 transition"
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(highlights.length / 4) }).map((_, i) => {
              const active = Math.floor(currentIndex / 4) === i;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * 4)}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: active ? "36px" : "10px",
                    height: "10px",
                    backgroundColor: active ? brand.white : "rgba(255,255,255,0.4)",
                  }}
                />
              );
            })}
          </div>

          <button
            onClick={() => setCurrentIndex((currentIndex + 4) % highlights.length)}
            className="w-12 h-12 rounded-full bg-white text-[#203370] font-bold shadow-lg hover:scale-110 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shineLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shineLine {
          animation: shineLine 1.3s linear infinite;
        }
        @keyframes shimmer {
          0%,100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 30px 70px rgba(32,51,112,0.45);
        }
      `}</style>
    </section>
  );
}
