import React from "react";
import img from "../assets/images/parallalex img.jpg";


export default function ParallaxContactForm() {
  return (
    <section className="relative w-full py-55 overflow-hidden">

      {/* PARALLAX BG */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            `url('${img}')`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* FORM WRAPPER */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40">

          {/* TITLE */}
          <h2 className="text-white text-4xl font-bold text-center mb-10 drop-shadow-lg">
            Get in Touch
          </h2>

          {/* FORM ROW - FULL RESPONSIVE */}
          <form className="flex flex-col lg:flex-row gap-6 lg:items-start">

            {/* Left Column (3 Boxes) */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-col gap-6">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              />
            </div>

            {/* Right Column (Message Box + Button) */}
            <div className="flex-1 flex flex-col gap-6">

              {/* MESSAGE */}
              <textarea
                rows="4"
                placeholder="Your Message"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              ></textarea>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-[#d1a32c] hover:bg-[#b88a23] 
                text-white font-semibold px-10 py-4 rounded-full 
                shadow-xl transition-all hover:scale-105 text-center w-full"
              >
                Submit
              </button>

            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
