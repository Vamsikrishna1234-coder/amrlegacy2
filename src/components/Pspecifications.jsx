import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Spec1 from "../assets/icons/SPECIFICATIONS-01.png";
import Spec2 from "../assets/icons/SPECIFICATIONS-02.png";
import Spec3 from "../assets/icons/SPECIFICATIONS-03.png";
import Spec4 from "../assets/icons/SPECIFICATIONS-04.png";  
import Spec5 from "../assets/icons/SPECIFICATIONS-05.png";
import Spec6 from "../assets/icons/SPECIFICATIONS-06.png";
import Spec7 from "../assets/icons/SPECIFICATIONS-07.png";
import Spec8 from "../assets/icons/SPECIFICATIONS-08.png";
import Spec9 from "../assets/icons/SPECIFICATIONS-09.png";
import Spec10 from "../assets/icons/SPECIFICATIONS-11.png";
import Spec11 from "../assets/icons/SPECIFICATIONS-12.png";
import Spec12 from "../assets/icons/SPECIFICATIONS-13.png";
import Spec13 from "../assets/icons/SPECIFICATIONS-14.png";
import Spec14 from "../assets/icons/SPECIFICATIONS-15.png";
import Spec15 from "../assets/icons/SPECIFICATIONS-16.png";

const specifications = [
  { title: "Framed Structure", desc: "Earthquake resistant R.C.C. framed structure.", icon: Spec1 },
  { title: "Super Structure", desc: "Solid Red Brick: 9\" external walls & 4\" internal walls.", icon: Spec2 },
  { title: "Elevation", desc: "Texture, cladding & luppam finish per design.", icon: Spec3 },
  { title: "Utilities / Wash", desc: "Ceramic dado up to 4 ft. Washing machine & dishwasher provision.", icon: Spec4 },
  { title: "Power Backup", desc: "D.G backup for villa & common areas.", icon: Spec5 },
  { title: "Flooring", desc: "Vitrified tiles, anti-skid tiles & granite staircase.", icon: Spec6 },
  { title: "STP", desc: "STP as per PCB norms.", icon: Spec7 },
  { title: "Bathrooms", desc: "Wall tiles, wall-mounted EWC, Kohler/Jaquar fittings.", icon: Spec8 },
  { title: "Kitchen", desc: "RO point, exhaust fan & chimney provision.", icon: Spec9 },
  { title: "Painting", desc: "Premium emulsion inside & exterior double coat.", icon: Spec10 },
  { title: "Electrical", desc: "Concealed wiring, AC & geyser points.", icon: Spec11 },
  { title: "Doors & Windows", desc: "Teakwood main door & UPVC windows.", icon: Spec12 },
  { title: "TV & Internet", desc: "Provision in bedrooms & living.", icon: Spec13 },
  { title: "Security", desc: "24/7 security with CCTV cameras.", icon: Spec14 },
  { title: "Toilets", desc: "Hot & Cold wall mixer with shower.", icon: Spec15 }
];

// Triple the items for seamless infinite scroll
const infiniteItems = [...specifications, ...specifications, ...specifications];

export default function ProjectSpecifications() {
  const scrollRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Start at middle section
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 280;
      scrollRef.current.scrollLeft = specifications.length * cardWidth;
    }
  }, []);

  // Auto-scroll with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (scrollRef.current && !hoveredCard) {
        const cardWidth = 280;
        scrollRef.current.scrollBy({ left: 1, behavior: "auto" });

        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const currentScroll = scrollRef.current.scrollLeft;

        // Reset to middle when reaching end
        if (currentScroll >= maxScroll - 100) {
          scrollRef.current.scrollLeft = specifications.length * cardWidth;
        }

        // Reset to middle when reaching start
        if (currentScroll <= 100) {
          scrollRef.current.scrollLeft = specifications.length * cardWidth;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isAutoPlaying, hoveredCard]);

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const cardWidth = 280;
    scrollRef.current.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const cardWidth = 280;
    scrollRef.current.scrollBy({ left: -cardWidth * 3, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-[85vh] py-20 px-4" style={{ backgroundColor: '#203370' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#d1a32c' }}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#d1a32c' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: '#d1a32c' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-medium mb-6 text-white">
            Project Specifications
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience excellence in every detail with our world-class construction standards
          </p>
        </div>


        {/* Infinite Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl -translate-x-6"
            style={{ backgroundColor: '#d1a32c' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#203370' }} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl translate-x-6"
            style={{ backgroundColor: '#d1a32c' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#203370' }} />
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, #203370, transparent)'
          }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, #203370, transparent)'
          }}></div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteItems.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: '260px' }}
                onMouseEnter={() => {
                  setHoveredCard(idx);
                  setIsAutoPlaying(false);
                }}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setIsAutoPlaying(true);
                }}
              >
                <div className="relative h-full transition-all duration-500" style={{
                  transform: hoveredCard === idx ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(1)'
                }}>
                  {/* Glow Effect */}
                  {hoveredCard === idx && (
                    <div 
                      className="absolute -inset-1 rounded-3xl blur-xl opacity-75 transition-opacity duration-500"
                      style={{ backgroundColor: '#d1a32c' }}
                    ></div>
                  )}

                  {/* Card */}
                  <div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-500"
                    style={{ 
                      backgroundColor: 'white',
                      borderColor: hoveredCard === idx ? '#d1a32c' : 'transparent'
                    }}
                  >
                    {/* Icon Section */}
                    <div 
                      className="p-8 flex items-center justify-center relative"
                      style={{ backgroundColor: '#d1a32c', minHeight: '160px' }}
                    >
                      <div 
                        className="relative p-4 rounded-2xl transition-all duration-500"
                        style={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          transform: hoveredCard === idx ? 'rotate(10deg) scale(1.1)' : 'rotate(0) scale(1)'
                        }}
                      >
                        <img 
                          src={item.icon} 
                          alt={item.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center flex flex-col" style={{ minHeight: '180px' }}>
                      <h3 
                        className="text-xl font-bold mb-3 transition-colors duration-300"
                        style={{ color: hoveredCard === idx ? '#d1a32c' : '#203370' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div 
                      className="h-2 transition-all duration-500"
                      style={{ 
                        backgroundColor: '#203370',
                        transform: hoveredCard === idx ? 'scaleX(1)' : 'scaleX(0.5)',
                        transformOrigin: 'center'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}