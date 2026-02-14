// import { useState } from 'react';
// import { MapPin, Clock, Navigation, Train, School, Hospital, Film } from 'lucide-react';
// import ORR from '../assets/images/ORR.jpg';
// import Johnson from '../assets/images/johnson schl.jpg';
// import Metro from '../assets/images/hyderabad metro.jpg';
// import Nagole from '../assets/images/nagole metro.avif';
// import Indu from '../assets/images/indu school.jpg';
// import Kamineni from '../assets/images/kamineni hsptl.jpeg';
// import Ramoji from '../assets/images/ramojifilm city.webp';
// import Map from '../assets/images/AMR_Location.jpg';

// const locationData = [
//   {
//     img: ORR,
//     title: "ORR Taramatipet Exit No. 10",
//     time: "2 Mins",
//     icon: Navigation,
//     category: "highway",
//     address: "Outer Ring Road, Exit 10"
//   },
//   {
//     img: Johnson,
//     title: "Johnson Grammar School (Kuntoor)",
//     time: "5 Mins (Proposed)",
//     icon: School,
//     category: "education",
//     address: "Kuntoor Village"
//   },
//   {
//     img: Metro,
//     title: "Hayathnagar Metro Station",
//     time: "10 Mins (Proposed)",
//     icon: Train,
//     category: "transport",
//     address: "Hayathnagar Metro Line"
//   },
//   {
//     img: ORR,
//     title: "ORR Warangal Exit No. 9",
//     time: "5 Mins",
//     icon: Navigation,
//     category: "highway",
//     address: "Outer Ring Road, Exit 9"
//   },
//   {
//     img: Nagole,
//     title: "Nagole Metro Station",
//     time: "20 Mins",
//     icon: Train,
//     category: "transport",
//     address: "Nagole Metro Station"
//   },
//   {
//     img: ORR,
//     title: "ORR Vijayawada Exit No. 11",
//     time: "5 Mins",
//     icon: Navigation,
//     category: "highway",
//     address: "Outer Ring Road, Exit 11"
//   },
//   {
//     img: Indu,
//     title: "Indu International School",
//     time: "10 Mins",
//     icon: School,
//     category: "education",
//     address: "International School Campus"
//   },
//   {
//     img: Kamineni,
//     title: "Kamineni Hospital",
//     time: "20 Mins",
//     icon: Hospital,
//     category: "healthcare",
//     address: "Kamineni Medical Center"
//   },
//   {
//     img: Ramoji,
//     title: "Ramoji Film City",
//     time: "12 Mins",
//     icon: Film,
//     category: "entertainment",
//     address: "Film City Complex"
//   }
// ];

// export default function LocationHighlights() {
//   const [activeCard, setActiveCard] = useState(null);

//   return (
//     <section className="relative py-20 bg-gray-100 overflow-hidden">
      
//       {/* Subtle Grid Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, #2033701a 1px, transparent 1px),
//               linear-gradient(to bottom, #2033701a 1px, transparent 1px)
//             `,
//             backgroundSize: '50px 50px'
//           }}
//         ></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           {/* LEFT SIDE */}
//           <div>
//             {/* Header */}
//             <div className="mb-10">
//               <p className="text-[#d1a32c] font-medium text-sm tracking-wider mb-3 uppercase">
//                 Location Connectivity
//               </p>
              
//               <h2 className="text-4xl font-medium text-[#203370] mb-4 leading-tight">
//                 Location Highlights
//               </h2>
              
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 Strategic location with excellent connectivity to major highways, metro stations, educational institutions, and key amenities.
//               </p>
//             </div>

//             {/* FIRST THREE CARDS */}
//             <div className="space-y-6">
//               {locationData.slice(0, 3).map((item, index) => {
//                 const Icon = item.icon;
//                 const isActive = activeCard === index;

//                 return (
//                   <div
//                     key={index}
//                     onMouseEnter={() => setActiveCard(index)}
//                     onMouseLeave={() => setActiveCard(null)}
//                     className={`group relative bg-white rounded-3xl border-2 border-gray-100 overflow-hidden transition-all duration-300 ${
//                       isActive ? 'shadow-2xl -translate-y-1' : 'shadow-lg'
//                     }`}
//                   >
//                     <div className="flex items-center gap-4 p-4">
                      
//                       {/* Image */}
//                       <div className="relative w-48 h-36 rounded-2xl overflow-hidden flex-shrink-0">
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#203370]/40 to-transparent"></div>
//                       </div>

//                       {/* Info Section */}
//                       <div className="flex-1 py-2">
//                         <h3 className="text-xl font-bold text-[#203370] mb-3">{item.title}</h3>

//                         <div className="flex items-start gap-2 text-gray-600 mb-4">
//                           <MapPin className="w-4 h-4 text-[#d1a32c] mt-1" />
//                           <span className="text-sm">{item.address}</span>
//                         </div>

//                         <div className="flex items-center gap-4 text-sm text-gray-700">
//                           <div className="flex items-center gap-2">
//                             <Clock className="w-4 h-4 text-[#d1a32c]" />
//                             <span className="font-semibold">{item.time}</span>
//                           </div>

//                           <div className="flex items-center gap-2">
//                             <Icon className="w-4 h-4 text-[#203370]" />
//                             <span className="capitalize text-gray-500">{item.category}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div
//                       className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#203370] to-[#d1a32c] transition-all duration-300 ${
//                         isActive ? 'opacity-100' : 'opacity-0'
//                       }`}
//                     ></div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* BUTTON */}
//             <button className="mt-8 w-full bg-gradient-to-r from-[#203370] to-[#d1a32c] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//               View All Locations
//             </button>
//           </div>

//           {/* RIGHT — MAP */}
//           <div className="relative">
//             <div className="sticky top-20">
//               <div className="relative w-[700px] h-[700px] rounded-3xl overflow-hidden shadow-xl">
//                 <img src={Map} alt="Project Location Map" className="w-full h-full object-cover" />

//                 <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-xs border border-gray-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 bg-[#203370] rounded-full flex items-center justify-center">
//                       <MapPin className="w-5 h-5 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* MORE LOCATIONS */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-bold text-[#203370] mb-8 text-center">
//             More Nearby Locations
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {locationData.slice(3).map((item, index) => {
//               const Icon = item.icon;
//               const actualIndex = index + 3;
//               const isActive = activeCard === actualIndex;

//               return (
//                 <div
//                   key={actualIndex}
//                   onMouseEnter={() => setActiveCard(actualIndex)}
//                   onMouseLeave={() => setActiveCard(null)}
//                   className={`group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all duration-300 ${
//                     isActive ? 'shadow-xl -translate-y-1' : 'shadow-md'
//                   }`}
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                     />

//                     <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
//                       <Icon className="w-5 h-5 text-[#d1a32c]" />
//                     </div>

//                     <div className="absolute bottom-3 left-3 bg-[#203370] text-white px-3 py-1 rounded-full text-sm font-bold">
//                       {item.time}
//                     </div>
//                   </div>

//                   <div className="p-5">
//                     <h4 className="font-bold text-[#203370] mb-2 line-clamp-1">{item.title}</h4>
//                     <div className="flex items-center gap-2 text-gray-600 text-sm">
//                       <MapPin className="w-4 h-4 text-[#d1a32c]" />
//                       <span className="line-clamp-1">{item.address}</span>
//                     </div>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import { MapPin, Clock, Navigation, Train, School, Hospital, Film, X } from 'lucide-react';
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
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <section className="relative py-16 md:py-20 bg-gray-100 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT SIDE – Content */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <div className="mb-8 md:mb-10 text-center lg:text-left">
              <p className="text-[#d1a32c] font-medium text-sm tracking-wider mb-3 uppercase">
                Location Connectivity
              </p>
              
              <h2 className="text-3xl sm:text-4xl font-medium text-[#203370] mb-4 leading-tight">
                Location Highlights
              </h2>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
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
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 md:p-5">
                      {/* Image */}
                      <div className="relative w-full sm:w-48 h-48 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#203370]/40 to-transparent"></div>
                      </div>

                      {/* Info Section */}
                      <div className="flex-1 py-1 sm:py-2 text-center sm:text-left">
                        <h3 className="text-xl font-bold text-[#203370] mb-3">{item.title}</h3>

                        <div className="flex items-start justify-center sm:justify-start gap-2 text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 text-[#d1a32c] mt-1 flex-shrink-0" />
                          <span className="text-sm">{item.address}</span>
                        </div>

                        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 md:gap-6 text-sm text-gray-700">
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
            <div className="mt-8 w-full max-w-md mx-auto lg:mx-0">
              <button className="
                w-full
                bg-gradient-to-r from-[#203370] to-[#d1a32c]
                text-white font-semibold
                py-4
                rounded-xl
                hover:shadow-xl
                hover:scale-105
                transition-all duration-300
              ">
                View All Locations
              </button>
            </div>
          </div>

          {/* RIGHT — MAP (click to open full view) */}
          <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="sticky top-4 md:top-8 lg:top-20">
              <div 
                className="relative rounded-3xl overflow-hidden shadow-xl mx-auto max-w-[700px] lg:max-w-none cursor-pointer"
                onClick={() => setIsMapOpen(true)}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-square max-h-[500px] lg:max-h-[700px]">
                  <img
                    src={Map}
                    alt="Project Location Map"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Floating info box */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-3 sm:p-4 max-w-[220px] sm:max-w-xs border border-gray-100 pointer-events-none">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#203370] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[#203370] text-sm sm:text-base">Project Location</p>
                        <p className="text-gray-600 text-xs sm:text-sm">Near ORR Exit 10</p>
                      </div>
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

      {/* Full-screen Map Modal */}
      {isMapOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsMapOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside image area
          >
            <button
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              onClick={() => setIsMapOpen(false)}
              aria-label="Close map"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            <img
              src={Map}
              alt="Full Project Location Map"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}