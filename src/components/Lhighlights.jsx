import { useState } from 'react';
import { MapPin, Clock, Navigation, Train, School, Hospital, Film } from 'lucide-react';
import ORR from '../assets/images/ORR.jpg';
import Johnson from '../assets/images/johnson schl.jpg';
import Metro from '../assets/images/hyderabad metro.jpg';
import Nagole from '../assets/images/nagole metro.avif';
import Indu from '../assets/images/indu school.jpg';
import Kamineni from '../assets/images/kamineni hsptl.jpeg';
import Ramoji from '../assets/images/ramojifilm city.webp';
import Map from '../assets/images/AMR_Location.jpg';

const locationData = [
  {
    img: ORR,
    title: "ORR Taramatipet Exit No. 10",
    time: "2 Mins",
    icon: Navigation,
    category: "highway",
    address: "Outer Ring Road, Exit 10"
  },
  {
    img: Johnson,
    title: "Johnson Grammar School (Kuntoor)",
    time: "5 Mins (Proposed)",
    icon: School,
    category: "education",
    address: "Kuntoor Village"
  },
  {
    img: Metro,
    title: "Hayathnagar Metro Station",
    time: "10 Mins (Proposed)",
    icon: Train,
    category: "transport",
    address: "Hayathnagar Metro Line"
  },
  {
    img: ORR,
    title: "ORR Warangal Exit No. 9",
    time: "5 Mins",
    icon: Navigation,
    category: "highway",
    address: "Outer Ring Road, Exit 9"
  },
  {
    img: Nagole,
    title: "Nagole Metro Station",
    time: "20 Mins",
    icon: Train,
    category: "transport",
    address: "Nagole Metro Station"
  },
  {
    img: ORR,
    title: "ORR Vijayawada Exit No. 11",
    time: "5 Mins",
    icon: Navigation,
    category: "highway",
    address: "Outer Ring Road, Exit 11"
  },
  {
    img: Indu,
    title: "Indu International School",
    time: "10 Mins",
    icon: School,
    category: "education",
    address: "International School Campus"
  },
  {
    img: Kamineni,
    title: "Kamineni Hospital",
    time: "20 Mins",
    icon: Hospital,
    category: "healthcare",
    address: "Kamineni Medical Center"
  },
  {
    img: Ramoji,
    title: "Ramoji Film City",
    time: "12 Mins",
    icon: Film,
    category: "entertainment",
    address: "Film City Complex"
  }
];

export default function LocationHighlights() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2033701a 1px, transparent 1px),
              linear-gradient(to bottom, #2033701a 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <p className="text-[#d1a32c] font-medium text-sm tracking-wider mb-3 uppercase">
                Location Connectivity
              </p>
              
              <h2 className="text-4xl font-medium text-[#203370] mb-4 leading-tight">
                Location Highlights
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Strategic location with excellent connectivity to major highways, metro stations, educational institutions, and key amenities.
              </p>
            </div>

            {/* FIRST THREE CARDS */}
            <div className="space-y-6">
              {locationData.slice(0, 3).map((item, index) => {
                const Icon = item.icon;
                const isActive = activeCard === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={`group relative bg-white rounded-3xl border-2 border-gray-100 overflow-hidden transition-all duration-300 ${
                      isActive ? 'shadow-2xl -translate-y-1' : 'shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-4 p-4">
                      
                      {/* Image */}
                      <div className="relative w-48 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#203370]/40 to-transparent"></div>
                      </div>

                      {/* Info Section */}
                      <div className="flex-1 py-2">
                        <h3 className="text-xl font-bold text-[#203370] mb-3">{item.title}</h3>

                        <div className="flex items-start gap-2 text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 text-[#d1a32c] mt-1" />
                          <span className="text-sm">{item.address}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#d1a32c]" />
                            <span className="font-semibold">{item.time}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-[#203370]" />
                            <span className="capitalize text-gray-500">{item.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#203370] to-[#d1a32c] transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* BUTTON */}
            <button className="mt-8 w-full bg-gradient-to-r from-[#203370] to-[#d1a32c] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View All Locations
            </button>
          </div>

          {/* RIGHT — MAP */}
          <div className="relative">
            <div className="sticky top-20">
              <div className="relative w-[700px] h-[700px] rounded-3xl overflow-hidden shadow-xl">
                <img src={Map} alt="Project Location Map" className="w-full h-full object-cover" />

                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-xs border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#203370] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* MORE LOCATIONS */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-[#203370] mb-8 text-center">
            More Nearby Locations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationData.slice(3).map((item, index) => {
              const Icon = item.icon;
              const actualIndex = index + 3;
              const isActive = activeCard === actualIndex;

              return (
                <div
                  key={actualIndex}
                  onMouseEnter={() => setActiveCard(actualIndex)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all duration-300 ${
                    isActive ? 'shadow-xl -translate-y-1' : 'shadow-md'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#d1a32c]" />
                    </div>

                    <div className="absolute bottom-3 left-3 bg-[#203370] text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.time}
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-bold text-[#203370] mb-2 line-clamp-1">{item.title}</h4>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-[#d1a32c]" />
                      <span className="line-clamp-1">{item.address}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
