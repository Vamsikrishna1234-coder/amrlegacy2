import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs.jsx";
import BlogBanner from "../assets/images/amr hero3.jpg"; 
import "../index.css";

export default function BlogsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={BlogBanner}
            alt="Blogs Banner"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2537]/20 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
          <div
            className={`transform transition-all duration-[1500ms] ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1
              className="text-white text-5xl md:text-6xl lg:text-5xl font-light tracking-tight mb-4"
              style={{
                fontFamily: '"Outfit", "Inter", sans-serif',
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              Our <span className="font-medium">Blogs</span>
            </h1>

            
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <div>
        <Blogs />
      </div>
    </>
  );
}
