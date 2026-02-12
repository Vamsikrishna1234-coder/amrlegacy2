import React, { useState, useEffect, useRef } from "react";
import AboutBanner from "../assets/images/abouthero amr.jpg";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const storyRef = useRef(null);
  const [storyInView, setStoryInView] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setStoryInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={AboutBanner}
            alt="AMR Legacy About Banner"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
          <div
            className={`transform transition-all duration-1500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1
              className="text-white text-6xl md:text-7xl lg:text-6xl font-light tracking-tight mb-6"
              style={{
                fontFamily: '"Outfit", "Inter", sans-serif',
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              About <span className="font-medium">Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full bg-gray-100 py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10" ref={storyRef}>
          <div
            className={`mb-16 transform transition-all duration-1000 ${
              storyInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-300"></div>
              <span
                className="text-blue-600 text-sm font-semibold tracking-[0.3em]"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                OUR JOURNEY
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-300"></div>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-4xl font-medium text-[#0f2537] text-center mb-4"
              style={{ fontFamily: '"Outfit", sans-serif' }}
            >
              Our Story
            </h2>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT BIG CARD */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                storyInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                <div className="relative z-10">
                  <div className="w-15 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-6 rounded-full"></div>

                  <p
                    className="text-white/95 text-lg md:text-xl leading-relaxed text-justify"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    <span className="text-2xl font-medium text-white-300">
                      AMR Legacy
                    </span>{" "}
                    is a premium real estate brand developed under AMR Living
                    Spaces, a company dedicated to delivering thoughtfully designed
                    communities that redefine luxury living. With a strong focus on
                    innovation, craftsmanship, and long-term value, AMR Legacy has
                    carved its identity as a trusted name in modern urban
                    development. Each project is built on a foundation of integrity
                    and a deep understanding of modern lifestyle aspirations,
                    ensuring every home meets the evolving expectations of today’s
                    buyers. We carefully select prime locations that offer excellent
                    connectivity and long-term appreciation, while our design
                    approach emphasizes spacious planning, natural ventilation, and
                    seamless indoor–outdoor harmony. From architecture to landscaping,
                    every detail is thoughtfully refined to elevate daily life.
                    Backed by a team of skilled professionals, we ensure stringent
                    quality checks at every stage of construction and maintain
                    complete transparency with our customers, fostering trust and
                    long-term relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SMALL CARDS */}
            <div className="space-y-8 text-justify">
              {[
                {
                  text: "Our journey began with a simple vision — to create homes that go beyond walls and concrete, offering lifestyle-driven spaces where families can grow, live comfortably, and build a future filled with possibilities. Every community we design reflects this approach, blending architecture, nature, and functionality in perfect harmony.",
                  delay: 300,
                },
                {
                  text: "Guided by AMR Living Spaces' commitment to quality and excellence, AMR Legacy continues to shape landmark projects marked by attention to detail, smart planning, and modern amenities that elevate everyday living. Each development embodies trust, transparency, and a promise of enduring value.",
                  delay: 400,
                },
                {
                  text: "Today, AMR Legacy stands as a symbol of reliability and premium lifestyle creation — where every home is built with passion, every space is crafted with purpose, and every community is designed to become a legacy worth passing on.With a strong focus on innovation, craftsmanship, and long-term value, AMR Legacy has carved its identity as a trusted one.",
                  delay: 500,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 delay-${item.delay} ${
                    storyInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-20 opacity-0"
                  }`}
                >
                  <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#203370] hover:shadow-xl hover:border-blue-300 hover:scale-[1.02] transition-all duration-300">
                    <p
                      className="text-gray-700 text-base md:text-lg leading-relaxed flex-1"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@400;600;700&display=swap');

        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </>
  );
}
