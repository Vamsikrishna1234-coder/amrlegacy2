import React, { useState, useEffect, useRef } from "react";

export default function VisionMission() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visionContent = {
    title: "Our Vision",
    icon: "👁️",
    subtitle: "Building Tomorrow's Communities Today",
    description:
      "To be recognized as the most trusted and innovative real estate brand, creating landmark communities that inspire generations and set new benchmarks in quality, sustainability, and lifestyle excellence.",
    highlights: [
      {
        icon: "🏆",
        title: "Industry Leadership",
        text: "Setting benchmarks in real estate development and urban planning",
      },
      {
        icon: "🌱",
        title: "Sustainable Growth",
        text: "Creating eco-friendly communities that harmonize with nature",
      },
      {
        icon: "💡",
        title: "Innovation First",
        text: "Pioneering cutting-edge design and smart living solutions",
      },
      {
        icon: "🤝",
        title: "Trust & Integrity",
        text: "Building lasting relationships through transparency and excellence",
      },
    ],
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
  };

  const missionContent = {
    title: "Our Mission",
    icon: "🎯",
    subtitle: "Crafting Excellence in Every Detail",
    description:
      "To deliver exceptional living spaces that combine architectural brilliance, modern amenities, and thoughtful design, ensuring every home becomes a cherished legacy for families while contributing positively to urban development.",
    highlights: [
      {
        icon: "🎯",
        title: "Customer Focus",
        text: "Exceeding expectations with personalized service and attention",
      },
      {
        icon: "⚡",
        title: "Quality Assurance",
        text: "Maintaining highest standards in construction and materials",
      },
      {
        icon: "🌟",
        title: "Value Creation",
        text: "Delivering long-term appreciation and lifestyle benefits",
      },
      {
        icon: "🔄",
        title: "Continuous Innovation",
        text: "Evolving with market trends and customer needs",
      },
    ],
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
  };

  const cards = [
    { id: "vision", content: visionContent },
    { id: "mission", content: missionContent },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-600 text-sm font-semibold tracking-[0.3em]">
              WHO WE ARE
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-4xl font-medium text-[#0f2537] mb-4"
            style={{ fontFamily: '"Outfit", sans-serif' }}
          >
            Vision & Mission
          </h2>

          <p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Hover to explore our guiding principles
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-3xl border-4 overflow-hidden shadow-lg cursor-pointer transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } ${
                hoveredCard === card.id
                  ? "scale-105 shadow-2xl border-transparent"
                  : "hover:scale-102 border-gray-200"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Animated Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.content.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Content Container */}
              <div className="relative z-10 p-8 md:p-10 min-h-[400px] flex flex-col">
                {/* Default State - Icon and Title */}
                <div
                  className={`transition-all duration-700 ${
                    hoveredCard === card.id
                      ? "opacity-0 -translate-y-10"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-full py-12">
                    {/* Icon */}
                    <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      {card.content.icon}
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-3xl md:text-4xl font-semibold bg-gradient-to-r ${card.content.gradient} bg-clip-text text-transparent mb-4`}
                      style={{ fontFamily: '"Outfit", sans-serif' }}
                    >
                      {card.content.title}
                    </h3>

                    {/* Decorative Line */}
                    <div
                      className={`h-1 w-24 bg-gradient-to-r ${card.content.gradient} rounded-full`}
                    />
                  </div>
                </div>

                {/* Hover State - Full Content */}
                <div
                  className={`absolute inset-0 p-8 md:p-10 flex flex-col transition-all duration-700 ${
                    hoveredCard === card.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 pointer-events-none"
                  }`}
                >
                  {/* Small Icon */}
                  <div className="text-4xl mb-4 animate-bounce-subtle">
                    {card.content.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${card.content.gradient} bg-clip-text text-transparent mb-2`}
                    style={{ fontFamily: '"Outfit", sans-serif' }}
                  >
                    {card.content.title}
                  </h3>

                  {/* Subtitle */}
                  <p
                    className="text-gray-700 font-semibold text-lg mb-4"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {card.content.subtitle}
                  </p>

                  {/* Divider */}
                  <div
                    className={`h-0.5 w-16 bg-gradient-to-r ${card.content.gradient} rounded-full mb-4`}
                  />

                  {/* Description */}
                  <p
                    className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {card.content.description}
                  </p>

                  {/* View More Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span
                      className={`bg-gradient-to-r ${card.content.gradient} bg-clip-text text-transparent`}
                    >
                      Explore More
                    </span>
                    <svg
                      className="w-4 h-4 text-blue-600 animate-slide-right"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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

              {/* Animated Border on Hover */}
              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-700 ${
                  hoveredCard === card.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.content.gradient} opacity-20 animate-pulse-border`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Section - Shows for Hovered Card */}
        {hoveredCard && (
          <div
            className={`transform transition-all duration-700 ${
              hoveredCard ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards
                .find((c) => c.id === hoveredCard)
                .content.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:scale-105 transition-all duration-500 transform animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h4
                      className="text-[#0f2537] font-bold text-lg mb-3"
                      style={{ fontFamily: '"Outfit", sans-serif' }}
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {item.text}
                    </p>

                    {/* Animated Bottom Border */}
                    <div
                      className={`mt-4 h-1 w-0 bg-gradient-to-r ${
                        cards.find((c) => c.id === hoveredCard).content.gradient
                      } rounded-full group-hover:w-full transition-all duration-700`}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Bottom Decorative Text */}
        
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap');

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .animate-slide-right {
          animation: slide-right 1s ease-in-out infinite;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        @keyframes pulse-border {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}