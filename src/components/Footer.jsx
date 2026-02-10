import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Home,
} from "lucide-react";
import img from "../assets/images/tact favicon.png";

const Footer = () => {
  const navy = "#203370";
  const gold = "#d1a32c";

  return (
    <footer className="text-white" style={{ backgroundColor: navy }}>
      <div className="max-w-7xl mx-auto px-20 py-25 grid grid-cols-1 md:grid-cols-4 gap-15">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Home className="w-6 h-6 text-white" />
            AMR Legacy
          </h2>
          <p className="text-white-300 text-sm leading-relaxed mb-6">
            Discover premium living with AMR Legacy — where elegance, comfort,
            and modern lifestyle come together to create your perfect space.
          </p>

          <ul className="space-y-3 text-white-300 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Gowrelly, Hyderabad, Telangana
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 9052 299 299
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> amrlivingspaces@gmail.com
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative">
            Navigation
            <span
              className="absolute left-0 -bottom-1 w-16 h-[2px]"
              style={{ backgroundColor: gold }}
            />
          </h3>

          <ul className="space-y-3 text-white-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Blogs</li>
            <li className="hover:text-white transition cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative">
            Useful Links
            <span
              className="absolute left-0 -bottom-1 w-16 h-[2px]"
              style={{ backgroundColor: gold }}
            />
          </h3>

          <ul className="space-y-4 text-white-300 text-sm">
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white transition cursor-pointer">Blogs</li>
          </ul>
        </div>

        {/* ============ BOOK SITE VISIT (Replaces Newsletter) ============ */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative">
            Book a Site Visit
            <span
              className="absolute left-0 -bottom-1 w-24 h-[2px]"
              style={{ backgroundColor: gold }}
            />
          </h3>

          <p className="text-white-300 text-sm leading-relaxed mb-4">
            Experience AMR Legacy in person. Explore the community, plots, and
            world-class amenities with a guided tour.
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="w-full py-3 font-semibold rounded-lg transition"
            style={{ backgroundColor: gold, color: navy }}
          >
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white py-6 text-center text-white-300 text-sm">
        © {new Date().getFullYear()} AMR Legacy. All Rights Reserved.

        <a
          href="https://www.tactadvertising.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white font-sm mx-1 transition"
        >
          Designed by
          <img
            src={img}
            alt="TACT Icon"
            className="w-4 h-4 object-contain"
          />
          TACT Advertising
        </a>
      </div>
    </footer>
  );
};

export default Footer;
