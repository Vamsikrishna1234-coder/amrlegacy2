import React, { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Auto-rotate active feature
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const features = [
    {
      title: "Premium Community Planning",
      desc: "Every AMR Legacy project is crafted with a vision for elegant layouts, seamless connectivity, and lifestyle-focused master planning.",
      icon: "🏘️",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      title: "Strong Construction Quality",
      desc: "We ensure durability, structural strength, and long-lasting value through top-grade materials and superior craftsmanship.",
      icon: "🏗️",
      color: "gold",
      gradient: "from-[#d1a32c] to-[#e6b84d]",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      title: "Transparent & Ethical Process",
      desc: "From documentation to handover, we maintain complete transparency ensuring a smooth and trustworthy experience.",
      icon: "✅",
      color: "blue",
      gradient: "from-[#203370] to-[#2a4596]",
      bgGradient: "from-blue-50 to-slate-50",
    },
    
    {
      title: "Customer-First Approach",
      desc: "We focus on your comfort, your needs, and your expectations — ensuring every step is tailored to deliver satisfaction.",
      icon: "🤝",
      color: "blue",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-20 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#203370]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d1a32c]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #203370 12%, transparent 12.5%, transparent 87%, #203370 87.5%, #203370),
              linear-gradient(150deg, #203370 12%, transparent 12.5%, transparent 87%, #203370 87.5%, #203370),
              linear-gradient(30deg, #203370 12%, transparent 12.5%, transparent 87%, #203370 87.5%, #203370),
              linear-gradient(150deg, #203370 12%, transparent 12.5%, transparent 87%, #203370 87.5%, #203370)
            `,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d1a32c]"></div>
            <span className="text-[#d1a32c] text-sm font-bold tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d1a32c]"></div>
          </div>

          <h2
            className="text-5xl md:text-4xl font-medium text-[#203370] mb-6"
            style={{ fontFamily: '"Outfit", sans-serif' }}
          >
            Why <span className="text-[#d1a32c]">AMR Legacy</span>?
          </h2>

          <p
            className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            We blend thoughtful design, superior quality, and trust-driven values to create
            communities that elevate everyday living.
          </p>
        </div>

        {/* Split Layout: Featured Card + Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Large Featured Card */}
          <div
            className={`sticky top-24 transform transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative h-full">
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].bgGradient} rounded-3xl transition-all duration-700`}
              />

              {/* Card Content */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-12 border-2 border-gray-200 shadow-2xl h-full flex flex-col justify-center">
                {/* Animated Icon */}
                <div className="mb-8 flex justify-center">
                  <div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${features[activeFeature].gradient} flex items-center justify-center text-6xl shadow-2xl transform transition-all duration-700 ${
                      inView ? "scale-100 rotate-0" : "scale-0 rotate-180"
                    }`}
                  >
                    {features[activeFeature].icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-3xl md:text-4xl font-bold text-[#203370] mb-4 text-center transition-all duration-500`}
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                  key={`title-${activeFeature}`}
                >
                  {features[activeFeature].title}
                </h3>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div
                    className={`h-1 w-20 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full`}
                  />
                  <div className="w-2 h-2 bg-[#d1a32c] rounded-full"></div>
                  <div
                    className={`h-1 w-20 bg-gradient-to-l ${features[activeFeature].gradient} rounded-full`}
                  />
                </div>

                {/* Description */}
                <p
                  className="text-gray-700 text-lg md:text-xl leading-relaxed text-center"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                  key={`desc-${activeFeature}`}
                >
                  {features[activeFeature].desc}
                </p>

                {/* Progress Indicators */}
                <div className="flex gap-2 justify-center mt-8">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeFeature
                          ? "w-12 h-3 bg-[#d1a32c]"
                          : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              
            </div>
          </div>

          {/* Right: Interactive Grid */}
          <div className="flex flex-col space-y-4 h-full justify-center">
            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
                className={`group cursor-pointer bg-white rounded-2xl p-6 border-2 transition-all duration-500 transform ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                } ${
                  activeFeature === index
                    ? "border-[#d1a32c] shadow-xl scale-105 bg-gradient-to-r from-white to-yellow-50"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-500 ${
                      activeFeature === index
                        ? `bg-gradient-to-br ${item.gradient} shadow-lg scale-110`
                        : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4
                        className={`text-lg font-bold transition-colors duration-300 ${
                          activeFeature === index ? "text-[#203370]" : "text-gray-800"
                        }`}
                        style={{ fontFamily: '"Outfit", sans-serif' }}
                      >
                        {item.title}
                      </h4>

                      {/* Active Indicator */}
                      {activeFeature === index && (
                        <div className="w-2 h-2 bg-[#d1a32c] rounded-full animate-pulse"></div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.gradient} transition-all duration-700 ${
                          activeFeature === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "100%", label: "Customer Satisfaction" },
            { number: "50+", label: "Premium Features" },
            { number: "24/7", label: "Support Available" },
            { number: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-[#d1a32c] hover:border-[#d1a32c] hover:shadow-lg transition-all duration-300"
            >
              <div
                className="text-4xl font-bold bg-gradient-to-r from-[#203370] to-[#2a4596] bg-clip-text text-transparent mb-2"
                style={{ fontFamily: '"Outfit", sans-serif' }}
              >
                {stat.number}
              </div>
              <div
                className="text-gray-600 text-sm font-medium"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}