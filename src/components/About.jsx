// import { useState, useEffect } from 'react';

// export default function AboutAMRLegacy() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     { icon: "🏛️", title: "10 Acres", desc: "Meticulously landscaped" },
//     { icon: "🏠", title: "Premium Villas", desc: "Modern architecture" },
//     { icon: "🌳", title: "Gated Community", desc: "Secure & exclusive" },
//     { icon: "🏊", title: "World-class Amenities", desc: "Clubhouse & more" }
//   ];

//   const highlights = [
//     {
//       title: "Strategic Location",
//       description: "Perfectly positioned between Gowrelly Road and Hayathnagar with excellent connectivity to Nagole and outer ring road networks."
//     },
//     {
//       title: "Luxury Amenities",
//       description: "Grand clubhouse, infinity swimming pool, well-equipped gymnasium, meditation zones, play areas, and expansive open spaces."
//     },
//     {
//       title: "Thoughtful Design",
//       description: "Each home crafted with attention to detail, ensuring a seamless balance of aesthetics, comfort, and functionality."
//     }
//   ];

//   return (
//     <section className="relative bg-white py-20 overflow-hidden">
      
//       {/* Animated Lines Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
//             style={{
//               width: `${Math.random() * 400 + 200}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `slideAcross ${Math.random() * 15 + 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm border border-amber-100">
//             <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
//             About AMR Legacy
//           </div>
            
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             An exclusive gated community crafted to redefine luxury living in Gowrelly, Hyderabad
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
//             >
//               <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
//               <h3 className="text-lg font-bold text-gray-800 mb-1">{feature.title}</h3>
//               <p className="text-sm text-gray-600">{feature.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
//           {/* Image Section */}
//           <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
//             <div className="relative group">
//               <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
//               <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-3xl shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
//                   alt="AMR Legacy Community"
//                   className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
//                 />
                
//                 {/* Floating Stats */}
//                 <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-4 border-amber-100">
//                   <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">10+</div>
//                   <div className="text-sm text-gray-600 font-medium">Acres of Luxury</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
//             <h3 className="text-3xl font-bold text-gray-800 mb-6">
//               Where Modern Architecture Meets Peaceful Surroundings
//             </h3>
            
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Developed by <span className="font-semibold text-amber-700">AMR Living Spaces</span>, 
//               AMR Legacy spans approximately 10 acres of meticulously landscaped land. The project 
//               brings together modern architecture, thoughtful planning, and world-class amenities to 
//               create homes that stand the test of time.
//             </p>

//             <p className="text-lg text-gray-700 leading-relaxed mb-8">
//               Each residence is crafted with attention to detail, ensuring a seamless balance of 
//               aesthetics, comfort, and functionality. This isn't just a place to live — it's a place 
//               to thrive and build lasting memories.
//             </p>

//             <div className="flex flex-wrap gap-3">
//               <div className="bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-sm font-semibold">
//                 Prime Location
//               </div>
//               <div className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold">
//                 Modern Lifestyle
//               </div>
//               <div className="bg-orange-100 text-orange-700 px-5 py-2 rounded-full text-sm font-semibold">
//                 Premium Quality
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Highlights Section */}
//         <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
//             <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
//               What Makes AMR Legacy Special
//             </h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {highlights.map((highlight, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
//                   onClick={() => setActiveTab(index)}
//                 >
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
//                       activeTab === index 
//                         ? 'bg-gradient-to-br from-amber-500 to-orange-500 scale-110' 
//                         : 'bg-amber-100 group-hover:bg-amber-200'
//                     }`}>
//                       <span className={`text-xl ${activeTab === index ? 'text-white' : 'text-amber-600'}`}>
//                         {index + 1}
//                       </span>
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-800">{highlight.title}</h4>
//                   </div>
                  
//                   <p className="text-gray-600 leading-relaxed">
//                     {highlight.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
//             Experience a lifestyle where luxury meets tranquility, and every detail is designed for your comfort and well-being.
//           </p>
          
//           <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
//             Explore AMR Legacy
//           </button>
//         </div>

//       </div>

//       <style jsx>{`
//         @keyframes slideAcross {
//           0% { transform: translateX(-100%) translateY(0); opacity: 0; }
//           10% { opacity: 1; }
//           90% { opacity: 1; }
//           100% { transform: translateX(200vw) translateY(-30px); opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }





import { useEffect, useState } from "react";
import { Building2, MapPin, Trees, Shield, Star } from "lucide-react";
import img1 from "../assets/images/amr project1.jpg";

export default function AboutAMRLegacy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const features = [
    { icon: <Building2 className="w-6 h-6" />, title: "Premium Villas", desc: "Contemporary architecture with elegant design." },
    { icon: <MapPin className="w-6 h-6" />, title: "Prime Location", desc: "Located in fast-growing Gowrelly – near ORR & Nagole." },
    { icon: <Trees className="w-6 h-6" />, title: "Green Living", desc: "Tree-lined avenues & world-class open spaces." },
    { icon: <Shield className="w-6 h-6" />, title: "Gated Community", desc: "24/7 security ensuring complete peace of mind." },
  ];

  const stats = [
    { label: "Total Area", value: "10+ Acres" },
    { label: "Villas", value: "100+" },
    { label: "Amenities", value: "20+" },
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">

      {/* Geometric Real Estate Background */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(32,51,112,.25),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#20337011_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-4xl font-medium text-[#203370] tracking-tight">
            About <span className="text-[#d1a32c]">AMR Legacy</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A premium gated community in Gowrelly, thoughtfully designed for comfort, luxury and modern living.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left – Image + Floating Boxes */}
          <div className={`relative transition-all duration-700 delay-200 ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>

            

            <div className="relative rounded-3xl overflow-hidden ">
              <img
                src={img1}
                className="w-full h-[490px] object-cover"
              />

              {/* Floating Stats */}
              <div className="absolute -bottom-3 left-6 flex gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-xl border-l-4 border-[#d1a32c] px-5 py-4 rounded-xl backdrop-blur-md"
                  >
                    <div className="text-xl font-bold text-[#203370]">{s.value}</div>
                    <div className="text-xs text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Details */}
          <div className={`transition-all duration-700 delay-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h3 className="text-3xl font-medium text-[#203370] leading-tight mb-4">
              A Perfect Blend of Luxury and Nature
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              AMR Legacy is crafted by <span className="text-[#d1a32c] font-semibold">AMR Living Spaces</span>,
              offering a lifestyle surrounded by greenery, premium features, and exceptional connectivity.
              Each villa is designed to bring elegance, natural light, and timeless architecture together.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-[#20337022] rounded-2xl shadow-md hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                  <div className="text-[#d1a32c] group-hover:scale-110 transition-transform mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-[#203370]">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            className="px-10 py-3 text-lg font-semibold rounded-full shadow-xl transition-all hover:scale-105"
            style={{ backgroundColor: "#d1a32c", color: "#203370" }}
          >
            Explore AMR Legacy
          </button>
        </div>
      </div>
    </section>
  );
}
