
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
    <section className="relative bg-gray-100 py-20 overflow-hidden">


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
