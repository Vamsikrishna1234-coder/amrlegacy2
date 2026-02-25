import React, { useState } from "react";
import img from "../assets/images/parallalex img.jpg";

export default function ParallaxContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://amrlegacy.in/backend/sendMail.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2500);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(true);
        setTimeout(() => setError(false), 2500);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <section className="relative w-full py-55 overflow-hidden">

      {/* BG */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('${img}')` }}
      ></div>

      <div className="absolute inset-0 bg-black/20"></div>

      {/* SUCCESS POPUP — CENTER TOP */}
      {success && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-xl shadow-xl z-[99999] animate-slide-down">
          Message Sent Successfully!
        </div>
      )}

      {/* ERROR POPUP — CENTER TOP */}
      {error && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-4 rounded-xl shadow-xl z-[99999] animate-slide-down">
          Failed to send message!
        </div>
      )}

      {/* FORM */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/40">

          <h2 className="text-white text-4xl font-bold text-center mb-10 drop-shadow-lg">
            Get in Touch
          </h2>

          <form 
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-6 lg:items-start"
          >

            {/* LEFT */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:flex lg:flex-col gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              />
            </div>

            {/* RIGHT */}
            <div className="flex-1 flex flex-col gap-6">

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="bg-white/20 border border-white/30 placeholder-white/70 
                text-white px-5 py-4 rounded-xl focus:border-[#d1a32c] outline-none w-full"
              ></textarea>

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

      {/* Animations */}
      <style>{`
        .animate-slide-down {
          animation: slideDown 0.4s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>

    </section>
  );
}