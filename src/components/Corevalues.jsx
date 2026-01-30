import React, { useEffect, useRef, useState } from "react";

export default function CoreValues() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const values = [
    {
      num: "01",
      title: "Craftsmanship",
      desc: "As a new builder, what sets us apart is our unwavering commitment to craftsmanship. Every detail is considered, every element refined; excellence is never compromised.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current" fill="none" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      color: "blue",
    },
    {
      num: "02",
      title: "Visionary Thinking",
      desc: "We don't just build for today — we shape the future. Our vision goes beyond designs, imagining spaces that inspire, evolve, and endure.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current" fill="none" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
      color: "yellow",
    },
    {
      num: "03",
      title: "Integrity",
      desc: "At the heart of all we build is integrity. We honour our word and stay true to our values in every detail and every partnership.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current" fill="none" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      color: "blue",
    },
    {
      num: "04",
      title: "On Time Delivery",
      desc: "We respect your time as much as your trust. Timely delivery is a principle we uphold to ensure your future begins exactly when promised.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current" fill="none" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      color: "yellow",
    },
    {
      num: "05",
      title: "Customer Centric",
      desc: "From the first conversation to the final handover, every decision is made with your needs in mind — ensuring a seamless and rewarding experience.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current" fill="none" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      color: "blue",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-7 bg-white overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(#203370 1px, transparent 1px), linear-gradient(90deg, #203370 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>


      <div className="max-w-[1350px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Top Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d1a32c]"></div>
            <span className="text-[#d1a32c] text-sm font-bold tracking-[0.3em]">
              WHAT DRIVES US
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d1a32c]"></div>
          </div>

          <h2
            className="text-5xl md:text-4xl font-medium text-[#203370] mb-6"
            style={{ fontFamily: '"Outfit", sans-serif' }}
          >
            Our Core <span className="text-[#d1a32c]">Values</span>
          </h2>
          
          <p
            className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            At AMR, our values are the foundation of everything we build. They guide every decision,
            inspire every design, and ensure every promise is kept.
          </p>
        </div>

        {/* Values Grid - Alternating Layout */}
        <div className="space-y-12">
          {values.map((item, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-12`}
                >
                  {/* Icon Side */}
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="relative">
                      {/* Animated Circle Background */}
                      <div
                        className={`absolute inset-0 rounded-full transition-all duration-700 ${
                          isActive ? "scale-125 opacity-100" : "scale-100 opacity-0"
                        }`}
                        style={{
                          background: item.color === "blue" 
                            ? "linear-gradient(135deg, #203370 0%, #2a4596 100%)"
                            : "linear-gradient(135deg, #d1a32c 0%, #e6b84d 100%)",
                          filter: "blur(30px)",
                        }}
                      />

                      {/* Icon Container */}
                      <div
                        className={`relative w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? "scale-110 rotate-12" : "scale-100 rotate-0"
                        }`}
                        style={{
                          background: item.color === "blue"
                            ? "linear-gradient(135deg, #203370 0%, #2a4596 100%)"
                            : "linear-gradient(135deg, #d1a32c 0%, #e6b84d 100%)",
                          boxShadow: isActive
                            ? item.color === "blue"
                              ? "0 20px 60px rgba(32, 51, 112, 0.4)"
                              : "0 20px 60px rgba(209, 163, 44, 0.4)"
                            : "0 10px 30px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {/* Rotating Border */}
                        <div
                          className={`absolute inset-0 rounded-full border-4 border-dashed transition-all duration-1000 ${
                            isActive ? "opacity-100 rotate-180" : "opacity-0 rotate-0"
                          }`}
                          style={{
                            borderColor: item.color === "blue" ? "#d1a32c" : "#203370",
                          }}
                        />

                        {/* Icon */}
                        <div className="text-white">
                          {item.icon}
                        </div>

                        {/* Number Badge */}
                        <div
                          className={`absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${
                            isActive ? "scale-110" : "scale-100"
                          }`}
                          style={{
                            background: item.color === "blue" ? "#d1a32c" : "#203370",
                            color: "white",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          }}
                        >
                          {item.num}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/3">
                    <div
                      className={`bg-white border-2 rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                        isActive
                          ? item.color === "blue"
                            ? "border-[#203370] shadow-2xl"
                            : "border-[#d1a32c] shadow-2xl"
                          : "border-gray-200 shadow-lg"
                      }`}
                    >
                      {/* Title */}
                      <h3
                        className="text-3xl md:text-3xl font-medium mb-4 transition-colors duration-300"
                        style={{
                          fontFamily: '"Outfit", sans-serif',
                          color: isActive
                            ? item.color === "blue"
                              ? "#203370"
                              : "#d1a32c"
                            : "#203370",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Animated Divider */}
                      <div className="mb-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                          style={{
                            background: item.color === "blue"
                              ? "linear-gradient(90deg, #203370 0%, #2a4596 100%)"
                              : "linear-gradient(90deg, #d1a32c 0%, #e6b84d 100%)",
                          }}
                        />
                      </div>

                      {/* Description */}
                      <p
                        className="text-gray-700 text-lg leading-relaxed"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                      >
                        {item.desc}
                      </p>

                      {/* Hover Indicator */}
                      <div
                        className={`flex items-center gap-2 mt-6 transition-all duration-500 ${
                          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                      >
                        <span
                          className="text-sm font-semibold tracking-wider"
                          style={{
                            color: item.color === "blue" ? "#203370" : "#d1a32c",
                          }}
                        >
                          LEARN MORE
                        </span>
                        <svg
                          className="w-5 h-5 animate-slide-right"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            color: item.color === "blue" ? "#203370" : "#d1a32c",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#203370]/5 to-[#d1a32c]/5 rounded-full border border-[#203370]/20">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#203370] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#d1a32c] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-[#203370] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <p
              className="text-[#203370] font-semibold tracking-wider text-sm"
              style={{ fontFamily: '"Outfit", sans-serif' }}
            >
              BUILDING EXCELLENCE, DELIVERING TRUST
            </p>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#d1a32c] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#203370] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-[#d1a32c] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap');

        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .animate-slide-right {
          animation: slide-right 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}