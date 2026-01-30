import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  X,
  Youtube,
  Instagram,
} from "lucide-react";

import logo from "../assets/images/amr-whitelogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ===================== TOP INFO BAR ===================== */}
      {!scrolled && (
        <div className="bg-[#d1a32c] text-white text-[15px] py-3 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-1 flex justify-between items-center">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-9">
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                Battaglia Veneto, Italy
              </span>

              {/* Divider */}
              <div className="w-[1px] h-5 bg-white/60"></div>

              <span className="flex items-center gap-2">
                <Phone size={18} />
                +00 123 456789
              </span>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-8">

              

              <span className="flex items-center gap-2">
                <Clock size={18} />
                Mon to Sat - 09:00 to 21:00
              </span>

              {/* Divider */}
              <div className="w-[1px] h-5 bg-white/60"></div>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full 
                                bg-white/20 border border-white/70 
                                hover:bg-white/40 transition cursor-pointer">
                  <Facebook size={16} className="text-white" />
                </div>

                <div className="w-8 h-8 flex items-center justify-center rounded-full 
                                bg-white/20 border border-white/70 
                                hover:bg-white/40 transition cursor-pointer">
                  <X size={16} className="text-white" />
                </div>

                <div className="w-8 h-8 flex items-center justify-center rounded-full 
                                bg-white/20 border border-white/70 
                                hover:bg-white/40 transition cursor-pointer">
                  <Youtube size={16} className="text-white" />
                </div>

                <div className="w-8 h-8 flex items-center justify-center rounded-full 
                                bg-white/20 border border-white/70 
                                hover:bg-white/40 transition cursor-pointer">
                  <Instagram size={16} className="text-white" />
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ===================== MAIN NAVBAR ===================== */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#203370] shadow-lg"
            : "bg-black/40 backdrop-blur-[4px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-1 flex items-center justify-between py-5">

          {/* LEFT → LOGO */}
          <img src={logo} alt="Logo" className="h-14 cursor-pointer" />

          {/* CENTER → NAV ITEMS */}
          <ul className="hidden md:flex items-center gap-22 font-medium text-[17px] text-white transition-colors">
            <li className="hover:text-[#d1a32c] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#d1a32c] cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-[#d1a32c] cursor-pointer">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="hover:text-[#d1a32c] cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* RIGHT → BUTTON */}
          <button
            className={`px-7 py-3 rounded-full font-semibold transition ${
              scrolled
                ? "bg-[#d1a32c] text-white hover:bg-[#b88d22]"
                : "bg-[#d1a32c] text-white hover:bg-[#bb8c19]"
            }`}
          >
            Enquiry Now
          </button>

        </div>
      </nav>
    </header>
  );
}
