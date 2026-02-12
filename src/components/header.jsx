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
  Menu,
  X as Close
} from "lucide-react";

import logo from "../assets/images/amr-whitelogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ===================== TOP INFO BAR ===================== */}
      <div
        className={`${
          !scrolled ? "xl:block hidden" : "hidden"
        } bg-[#d1a32c] text-white text-[15px] py-3 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-3 flex justify-between items-center">

          {/* LEFT INFO */}
          <div className="flex items-center gap-9">
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              Gowrelly, Hyderabad, Telangana
            </span>

            <div className="w-[1px] h-5 bg-white/60"></div>

            <span className="flex items-center gap-2">
              <Phone size={18} />
              +91 9052 299 299
            </span>
          </div>

          {/* RIGHT INFO */}
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <Clock size={18} />
              Mon to Sat - 09:00 to 21:00
            </span>

            <div className="w-[1px] h-5 bg-white/60"></div>

            {/* SOCIAL MEDIA LINKS */}
            <div className="flex items-center gap-3">

              <a
                href="https://www.facebook.com/amrlivingspaces"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full 
                           bg-white/20 border border-white/70 
                           hover:bg-white/40 transition"
              >
                <Facebook size={16} className="text-white" />
              </a>

              <a
                href="https://x.com/AmrLiving"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full 
                           bg-white/20 border border-white/70 
                           hover:bg-white/40 transition"
              >
                <X size={16} className="text-white" />
              </a>

              <a
                href="https://www.youtube.com/@AMRLivingSpaces"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full 
                           bg-white/20 border border-white/70 
                           hover:bg-white/40 transition"
              >
                <Youtube size={16} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/amrlivingspaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full 
                           bg-white/20 border border-white/70 
                           hover:bg-white/40 transition"
              >
                <Instagram size={16} className="text-white" />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ===================== MAIN NAVBAR ===================== */}
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#203370] shadow-lg"
            : "bg-black/40 backdrop-blur-[4px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 flex items-center justify-between py-4">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 cursor-pointer" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-16 font-medium text-[17px] text-white">
            <li className="hover:text-[#d1a32c]"><Link to="/">Home</Link></li>
            <li className="hover:text-[#d1a32c]"><Link to="/about">About Us</Link></li>
            <li className="hover:text-[#d1a32c]"><Link to="/blogs">Blogs</Link></li>
            <li className="hover:text-[#d1a32c]"><Link to="/contact">Contact Us</Link></li>
          </ul>

          {/* ENQUIRY BUTTON */}
          <button
            onClick={() => window.location.href = "/contact"}
            className="hidden md:block px-7 py-3 bg-[#d1a32c] text-white rounded-full 
                       font-semibold hover:bg-[#bb8c19] transition"
          >
            Enquiry Now
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <Close size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-[#203370] text-white overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 p-5" : "max-h-0 p-0"
          }`}
        >
          <ul className="flex flex-col gap-5 text-lg font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

            <button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/contact";
              }}
              className="mt-2 w-full px-7 py-3 bg-[#d1a32c] text-white rounded-full font-semibold hover:bg-[#bb8c19] transition"
            >
              Enquiry Now
            </button>
          </ul>
        </div>

      </nav>
    </header>
  );
}
