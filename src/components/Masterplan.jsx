
// import React, { useState, useMemo } from 'react';
// import { Home, MapPin } from 'lucide-react';

// // Simple seeded random function so pattern is consistent
// function seededRandom(seed = 42) {
//   let x = Math.sin(seed++) * 10000;
//   return x - Math.floor(x);
// }

// export default function PlotLayout() {
//   const [hoveredPlot, setHoveredPlot] = useState(null);

//   // Fixed + mixed availability pattern (~56 available, ~56 sold)
//   const plots = useMemo(() => {
//     const result = [];
//     for (let i = 1; i <= 112; i++) {
//       const rand = seededRandom(i + 17);
//       const status = rand > 0.48 ? 'available' : 'sold';
//       result.push({ id: i, status });
//     }
//     return result;
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//         <div className="absolute bottom-10 sm:bottom-20 left-1/3 sm:left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="max-w-screen-2xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 mb-6 border border-[#d1a32c]/10 animate-fade-in">
//           <div className="mb-6 sm:mb-8 text-center">
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
//               <div className="p-3 sm:p-3.5 bg-gradient-to-br from-[#203370] to-[#203370]/90 rounded-xl shadow-lg animate-bounce-slow">
//                 <MapPin className="w-4 h-4 sm:w-8 sm:h-8 text-[#d1a32c]" />
//               </div>
//               <h1 className="text-3xl sm:text-4xl md:text-4xl font-medium font-black bg-gradient-to-r from-[#203370] via-[#203370] to-[#d1a32c] bg-clip-text text-transparent">
//                 Villa Plot Layout
//               </h1>
//             </div>
//             <p className="text-[#203370]/80 text-base sm:text-lg md:text-xl font-medium">
//               Place cursor over any plot to see availability status
//             </p>
//           </div>

//           {/* Legend */}
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
//             <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-50 to-emerald-100 px-4 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-emerald-300 shadow-md hover:scale-105 transition-transform">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white border-2 border-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
//                 <Home className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-600" />
//               </div>
//               <span className="text-sm sm:text-base font-bold text-emerald-800">Available</span>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-rose-50 to-rose-100 px-4 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-rose-300 shadow-md hover:scale-105 transition-transform">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white border-2 border-rose-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
//                 <Home className="w-5 sm:w-6 h-5 sm:h-6 text-rose-600" />
//               </div>
//               <span className="text-sm sm:text-base font-bold text-rose-800">Sold</span>
//             </div>
//           </div>
//         </div>

//         {/* Plot Grid – scrollable on mobile */}
//         <div className="overflow-x-auto pb-4">
//           <div className="grid grid-cols-14 gap-1 sm:gap-1.5 md:gap-2 min-w-[900px] sm:min-w-[1100px] p-3 sm:p-4 md:p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl sm:rounded-3xl border-2 border-slate-300 shadow-inner">
//             {plots.map((plot, index) => (
//               <div
//                 key={plot.id}
//                 className="relative aspect-square group animate-scale-in"
//                 style={{ animationDelay: `${index * 4}ms` }}
//                 onMouseEnter={() => setHoveredPlot(plot)}
//                 onMouseLeave={() => setHoveredPlot(null)}
//               >
//                 <div
//                   className={`
//                     w-full h-full rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 
//                     flex flex-col items-center justify-center overflow-hidden
//                     transform-gpu
//                     ${plot.status === 'available'
//                       ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 border border-emerald-400 hover:from-emerald-200 hover:to-emerald-300 hover:border-emerald-500'
//                       : 'bg-gradient-to-br from-rose-100 to-rose-200 border border-rose-400 hover:from-rose-200 hover:to-rose-300 hover:border-rose-500'
//                     }
//                     ${hoveredPlot?.id === plot.id
//                       ? 'ring-3 sm:ring-4 ring-purple-400/60 scale-105 sm:scale-110 z-10 shadow-xl'
//                       : 'hover:scale-105 hover:shadow-md'
//                     }
//                   `}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
//                   <Home
//                     className={`w-3.5 h-3.5 sm:w-5 sm:h-5 mb-0.5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 relative z-10 ${
//                       plot.status === 'available' ? 'text-emerald-700' : 'text-rose-700'
//                     }`}
//                   />

//                   <span
//                     className={`text-[9px] sm:text-xs md:text-sm font-black tracking-tight relative z-10 ${
//                       plot.status === 'available' ? 'text-emerald-900' : 'text-rose-900'
//                     }`}
//                   >
//                     {plot.id}
//                   </span>
//                 </div>

//                 {/* Smart Tooltip – flips position for top row */}
//                 {hoveredPlot?.id === plot.id && (
//                   <div
//                     className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-bounce-in"
//                     style={{
//                       top: index < 14 ? '100%' : 'auto',           // Top row → show BELOW
//                       bottom: index < 14 ? 'auto' : '100%',        // Other rows → show ABOVE
//                       marginTop: index < 14 ? '8px' : '0',
//                       marginBottom: index < 14 ? '0' : '8px',
//                     }}
//                   >
//                     <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm text-sm whitespace-nowrap">
//                       <div className="flex items-center gap-2 sm:gap-3">
//                         <span className="font-bold">Plot #{plot.id}</span>
//                         <div className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-wide ${
//                           plot.status === 'available' 
//                             ? 'bg-emerald-400 text-emerald-900' 
//                             : 'bg-rose-400 text-rose-900'
//                         }`}>
//                           {plot.status === 'available' ? 'AVAILABLE' : 'SOLD'}
//                         </div>
//                       </div>

//                       {/* Arrow – flips direction */}
//                       <div
//                         className="absolute left-1/2 -translate-x-1/2 border-6 sm:border-8 border-transparent"
//                         style={{
//                           top: index < 14 ? '-12px' : 'auto',
//                           bottom: index < 14 ? 'auto' : '-12px',
//                           transform: index < 14 ? 'rotate(180deg)' : 'rotate(0deg)',
//                         }}
//                       >
//                         <div className="border-6 sm:border-8 border-transparent border-t-slate-900" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//           <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-5 shadow-lg border border-slate-300">
//             <div className="text-2xl font-black bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
//               {plots.length}
//             </div>
//             <div className="text-sm text-slate-600 mt-1">Total Plots</div>
//           </div>
//           <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl p-5 shadow-lg border border-emerald-400">
//             <div className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
//               {plots.filter(p => p.status === 'available').length}
//             </div>
//             <div className="text-sm text-emerald-700 font-bold mt-1">Available</div>
//           </div>
//           <div className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl p-5 shadow-lg border border-rose-400">
//             <div className="text-2xl font-black bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">
//               {plots.filter(p => p.status === 'sold').length}
//             </div>
//             <div className="text-sm text-rose-700 font-bold mt-1">Sold</div>
//           </div>
//         </div>
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         @keyframes blob {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         @keyframes scale-in {
//           from { opacity: 0; transform: scale(0.8); }
//           to { opacity: 1; transform: scale(1); }
//         }
        
//         @keyframes bounce-in {
//           0% { opacity: 0; transform: translate(-50%, 10px) scale(0.9); }
//           50% { transform: translate(-50%, -5px) scale(1.05); }
//           100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
//         }
        
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
        
//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out backwards;
//         }
        
//         .animate-bounce-in {
//           animation: bounce-in 0.3s ease-out;
//         }
        
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }




import React, { useState, useMemo } from "react";
import { Home, MapPin, X } from "lucide-react";
import MasterPlanImg from "../assets/images/Master Plan.jpg"; // update path

// Seeded random for consistent pattern
function seededRandom(seed = 42) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function PlotLayout() {
  const [hoveredPlot, setHoveredPlot] = useState(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  const plots = useMemo(() => {
    const result = [];
    for (let i = 1; i <= 112; i++) {
      const rand = seededRandom(i + 17);
      const status = rand > 0.48 ? "available" : "sold";
      result.push({ id: i, status });
    }
    return result;
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">

      <div className="max-w-screen-2xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 mb-6 shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 bg-[#203370] rounded-xl shadow-lg">
                <MapPin className="w-6 h-6 text-[#d1a32c]" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-medium font-black bg-gradient-to-r from-[#203370] to-[#d1a32c] bg-clip-text text-transparent">
                Villa Plot Layout
              </h1>
            </div>
            <p className="text-gray-600">
              Place Cursor on plots to see availability status
            </p>
          </div>
        </div>

        {/* SIDE BY SIDE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ================= LEFT SIDE – PLOT GRID ================= */}
          <div className="overflow-x-auto bg-white p-6 rounded-3xl shadow-lg">
            <div className="grid grid-cols-14 gap-2 min-w-[900px]">
              {plots.map((plot, index) => (
                <div
                  key={plot.id}
                  className="relative aspect-square group"
                  onMouseEnter={() => setHoveredPlot(plot)}
                  onMouseLeave={() => setHoveredPlot(null)}
                >
                  <div
                    className={`w-full h-full rounded-xl cursor-pointer transition-all duration-300 
                    flex flex-col items-center justify-center
                    ${
                      plot.status === "available"
                        ? "bg-emerald-200 border border-emerald-500"
                        : "bg-rose-200 border border-rose-500"
                    }
                    ${
                      hoveredPlot?.id === plot.id
                        ? "scale-110 z-10 shadow-xl ring-4 ring-purple-400/60"
                        : "hover:scale-105"
                    }`}
                  >
                    <Home
                      className={`w-4 h-4 mb-1 ${
                        plot.status === "available"
                          ? "text-emerald-700"
                          : "text-rose-700"
                      }`}
                    />
                    <span className="text-xs font-bold">
                      {plot.id}
                    </span>
                  </div>

                  {/* Tooltip */}
                  {hoveredPlot?.id === plot.id && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                      style={{
                        top: index < 14 ? "100%" : "auto",
                        bottom: index < 14 ? "auto" : "100%",
                        marginTop: index < 14 ? "8px" : "0",
                        marginBottom: index < 14 ? "0" : "8px",
                      }}
                    >
                      <div className="bg-slate-900 text-white px-4 py-2 rounded-xl shadow-lg text-sm whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <span className="font-bold">
                            Plot #{plot.id}
                          </span>
                          <div
                            className={`px-2 py-1 rounded-full text-xs font-bold ${
                              plot.status === "available"
                                ? "bg-emerald-400 text-emerald-900"
                                : "bg-rose-400 text-rose-900"
                            }`}
                          >
                            {plot.status.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE – MASTERPLAN ================= */}
          <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-center">
            <h2 className="text-2xl font-medium text-center mb-6 text-[#203370]">
              Master Plan Overview
            </h2>

            <div
              onClick={() => setIsMasterOpen(true)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={MasterPlanImg}
                alt="Master Plan"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Click to View Full Image
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN MODAL ================= */}
      {isMasterOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <button
            onClick={() => setIsMasterOpen(false)}
            className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <X className="w-6 h-6 text-black" />
          </button>

          <img
            src={MasterPlanImg}
            alt="Full Master Plan"
            className="max-w-7xl w-full max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
