import React, { useState, useMemo } from 'react';
import { Home, MapPin, X } from 'lucide-react';
import MasterPlan from '../assets/images/Master Plan.jpg'; // change path if needed

// Simple seeded random function so pattern is consistent
function seededRandom(seed = 42) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function PlotLayout() {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [showImage, setShowImage] = useState(false);

  // Fixed + mixed availability pattern (~56 available, ~56 sold)
  const plots = useMemo(() => {
    const result = [];
    for (let i = 1; i <= 112; i++) {
      const rand = seededRandom(i + 17);
      const status = rand > 0.48 ? 'available' : 'sold';
      result.push({ id: i, status });
    }
    return result;
  }, []);

  return (
    <>
      {/* ================= MASTER PLAN SECTION ================= */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-[#203370] mb-3">
            Project Master Plan
          </h2>
          <p className="text-gray-600">
            Click on the image below to view the complete master layout in full screen
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            onClick={() => setShowImage(true)}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src={MasterPlan}
              alt="Master Plan"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN IMAGE MODAL ================= */}
      {showImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          <img
            src={MasterPlan}
            alt="Full Master Plan"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* ================= VILLA PLOT LAYOUT ================= */}

      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/3 sm:left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 mb-6 border border-[#d1a32c]/10 animate-fade-in">
            <div className="mb-6 sm:mb-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                <div className="p-3 sm:p-3.5 bg-gradient-to-br from-[#203370] to-[#203370]/90 rounded-xl shadow-lg animate-bounce-slow">
                  <MapPin className="w-4 h-4 sm:w-8 sm:h-8 text-[#d1a32c]" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium font-black bg-gradient-to-r from-[#203370] via-[#203370] to-[#d1a32c] bg-clip-text text-transparent">
                  Villa Plot Layout
                </h1>
              </div>
              <p className="text-[#203370]/80 text-base sm:text-lg md:text-xl font-medium">
                Place cursor over any plot to see availability status
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-3 bg-emerald-100 px-5 py-3 rounded-2xl border-2 border-emerald-400 shadow-md">
                <Home className="w-6 h-6 text-emerald-600" />
                <span className="font-bold text-emerald-800">Available</span>
              </div>
              <div className="flex items-center gap-3 bg-rose-100 px-5 py-3 rounded-2xl border-2 border-rose-400 shadow-md">
                <Home className="w-6 h-6 text-rose-600" />
                <span className="font-bold text-rose-800">Sold</span>
              </div>
            </div>
          </div>

          {/* Plot Grid */}
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-cols-14 gap-2 min-w-[1100px] p-6 bg-slate-200 rounded-3xl border-2 border-slate-300 shadow-inner">
              {plots.map((plot, index) => (
                <div
                  key={plot.id}
                  className="relative aspect-square group animate-scale-in"
                  style={{ animationDelay: `${index * 4}ms` }}
                  onMouseEnter={() => setHoveredPlot(plot)}
                  onMouseLeave={() => setHoveredPlot(null)}
                >
                  <div
                    className={`w-full h-full rounded-xl cursor-pointer transition-all duration-300 
                    flex flex-col items-center justify-center
                    ${plot.status === 'available'
                        ? 'bg-emerald-200 border border-emerald-500'
                        : 'bg-rose-200 border border-rose-500'
                      }
                    ${hoveredPlot?.id === plot.id
                        ? 'ring-4 ring-purple-400 scale-110 z-10 shadow-xl'
                        : 'hover:scale-105 hover:shadow-md'
                      }`}
                  >
                    <Home
                      className={`w-5 h-5 mb-1 ${
                        plot.status === 'available'
                          ? 'text-emerald-700'
                          : 'text-rose-700'
                      }`}
                    />
                    <span className="text-sm font-black">
                      {plot.id}
                    </span>
                  </div>

                  {/* Tooltip */}
                  {hoveredPlot?.id === plot.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-bounce-in"
                      style={{
                        top: index < 14 ? '100%' : 'auto',
                        bottom: index < 14 ? 'auto' : '100%',
                        marginTop: index < 14 ? '8px' : '0',
                        marginBottom: index < 14 ? '0' : '8px',
                      }}
                    >
                      <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-sm whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <span className="font-bold">Plot #{plot.id}</span>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-black ${
                              plot.status === 'available'
                                ? 'bg-emerald-400 text-emerald-900'
                                : 'bg-rose-400 text-rose-900'
                            }`}
                          >
                            {plot.status === 'available'
                              ? 'AVAILABLE'
                              : 'SOLD'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



// import React, { useState, useMemo } from "react";
// import { Home, MapPin, X } from "lucide-react";
// import MasterPlanImg from "../assets/images/Master Plan.jpg"; // update path

// // Seeded random for consistent pattern
// function seededRandom(seed = 42) {
//   let x = Math.sin(seed++) * 10000;
//   return x - Math.floor(x);
// }

// export default function PlotLayout() {
//   const [hoveredPlot, setHoveredPlot] = useState(null);
//   const [isMasterOpen, setIsMasterOpen] = useState(false);

//   const plots = useMemo(() => {
//     const result = [];
//     for (let i = 1; i <= 112; i++) {
//       const rand = seededRandom(i + 17);
//       const status = rand > 0.48 ? "available" : "sold";
//       result.push({ id: i, status });
//     }
//     return result;
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">

//       <div className="max-w-screen-2xl mx-auto">

//         {/* HEADER */}
//         <div className="bg-white rounded-3xl p-6 sm:p-10 mb-6 shadow-lg">
//           <div className="text-center">
//             <div className="flex items-center justify-center gap-4 mb-4">
//               <div className="p-3 bg-[#203370] rounded-xl shadow-lg">
//                 <MapPin className="w-6 h-6 text-[#d1a32c]" />
//               </div>
//               <h1 className="text-3xl sm:text-4xl font-medium font-black bg-gradient-to-r from-[#203370] to-[#d1a32c] bg-clip-text text-transparent">
//                 Villa Plot Layout
//               </h1>
//             </div>
//             <p className="text-gray-600">
//               Place Cursor on plots to see availability status
//             </p>
//           </div>
//         </div>

//         {/* SIDE BY SIDE LAYOUT */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//           {/* ================= LEFT SIDE – PLOT GRID ================= */}
//           <div className="overflow-x-auto bg-white p-6 rounded-3xl shadow-lg">
//             <div className="grid grid-cols-14 gap-2 min-w-[900px]">
//               {plots.map((plot, index) => (
//                 <div
//                   key={plot.id}
//                   className="relative aspect-square group"
//                   onMouseEnter={() => setHoveredPlot(plot)}
//                   onMouseLeave={() => setHoveredPlot(null)}
//                 >
//                   <div
//                     className={`w-full h-full rounded-xl cursor-pointer transition-all duration-300 
//                     flex flex-col items-center justify-center
//                     ${
//                       plot.status === "available"
//                         ? "bg-emerald-200 border border-emerald-500"
//                         : "bg-rose-200 border border-rose-500"
//                     }
//                     ${
//                       hoveredPlot?.id === plot.id
//                         ? "scale-110 z-10 shadow-xl ring-4 ring-purple-400/60"
//                         : "hover:scale-105"
//                     }`}
//                   >
//                     <Home
//                       className={`w-4 h-4 mb-1 ${
//                         plot.status === "available"
//                           ? "text-emerald-700"
//                           : "text-rose-700"
//                       }`}
//                     />
//                     <span className="text-xs font-bold">
//                       {plot.id}
//                     </span>
//                   </div>

//                   {/* Tooltip */}
//                   {hoveredPlot?.id === plot.id && (
//                     <div
//                       className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
//                       style={{
//                         top: index < 14 ? "100%" : "auto",
//                         bottom: index < 14 ? "auto" : "100%",
//                         marginTop: index < 14 ? "8px" : "0",
//                         marginBottom: index < 14 ? "0" : "8px",
//                       }}
//                     >
//                       <div className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow-lg text-sm whitespace-nowrap">
//                         <div className="flex items-center gap-3">
//                           <span className="font-bold">
//                             Plot #{plot.id}
//                           </span>
//                           <div
//                             className={`px-2 py-1 rounded-full text-xs font-bold ${
//                               plot.status === "available"
//                                 ? "bg-emerald-400 text-emerald-900"
//                                 : "bg-rose-400 text-rose-900"
//                             }`}
//                           >
//                             {plot.status.toUpperCase()}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ================= RIGHT SIDE – MASTERPLAN ================= */}
//           <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-center">
//             <h2 className="text-2xl font-medium text-center mb-6 text-[#203370]">
//               Master Plan Overview
//             </h2>

//             <div
//               onClick={() => setIsMasterOpen(true)}
//               className="relative group cursor-pointer overflow-hidden rounded-2xl"
//             >
//               <img
//                 src={MasterPlanImg}
//                 alt="Master Plan"
//                 className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                 <span className="text-white text-lg font-semibold">
//                   Click to View Full Image
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= FULLSCREEN MODAL ================= */}
//       {isMasterOpen && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
//           <button
//             onClick={() => setIsMasterOpen(false)}
//             className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//           >
//             <X className="w-6 h-6 text-black" />
//           </button>

//           <img
//             src={MasterPlanImg}
//             alt="Full Master Plan"
//             className="max-w-7xl w-full max-h-[90vh] object-contain rounded-xl"
//           />
//         </div>
//       )}
//     </div>
//   );
// }
