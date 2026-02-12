import React, { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Visit Us",
      details: ["AMR Legacy", "Hyderabad, Telangana", "India - 500001"],
      color: "blue",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 9AM - 7PM"],
      color: "gold",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-current" fill="none" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email Us",
      details: ["info@amrlegacy.com", "sales@amrlegacy.com", "support@amrlegacy.com"],
      color: "blue",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-100 py-20 md:py-45 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#203370]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d1a32c]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #203370 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d1a32c]"></div>
            <span className="text-[#d1a32c] text-sm font-bold tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d1a32c]"></div>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-5xl font-medium text-[#203370] mb-6"
            style={{ fontFamily: '"Outfit", sans-serif' }}
          >
            Contact <span className="text-[#d1a32c]">Us</span>
          </h1>

          <p
            className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Have questions about our projects? We're here to help you find your dream home.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-[#d1a32c] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                  info.color === "blue"
                    ? "from-[#203370] to-[#2a4596]"
                    : "from-[#d1a32c] to-[#e6b84d]"
                } flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
              >
                {info.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-[#203370] mb-4"
                style={{ fontFamily: '"Outfit", sans-serif' }}
              >
                {info.title}
              </h3>

              {/* Details */}
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 text-base"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {detail}
                  </p>
                ))}
              </div>

              {/* Animated Bottom Border */}
              <div
                className={`mt-6 h-1 w-0 bg-gradient-to-r ${
                  info.color === "blue"
                    ? "from-[#203370] to-[#2a4596]"
                    : "from-[#d1a32c] to-[#e6b84d]"
                } rounded-full group-hover:w-full transition-all duration-700`}
              />
            </div>
          ))}
        </div>

        {/* Main Content: Form + Map */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl">
              <h3
                className="text-3xl md:text-4xl font-bold text-[#203370] mb-3"
                style={{ fontFamily: '"Outfit", sans-serif' }}
              >
                Send Us a Message
              </h3>

              <p
                className="text-gray-600 mb-8"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    className="block text-sm font-semibold text-[#203370] mb-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 outline-none ${
                        focusedField === "name"
                          ? "border-[#d1a32c] bg-white shadow-lg"
                          : "border-gray-200 bg-white"
                      }`}
                      placeholder="Enter your full name"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-semibold text-[#203370] mb-2"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 outline-none ${
                        focusedField === "email"
                          ? "border-[#d1a32c] bg-white shadow-lg"
                          : "border-gray-200 bg-white"
                      }`}
                      placeholder="your@email.com"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold text-[#203370] mb-2"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 outline-none ${
                        focusedField === "phone"
                          ? "border-[#d1a32c] bg-white shadow-lg"
                          : "border-gray-200 bg-white"
                      }`}
                      placeholder="+91 98765 43210"
                      style={{ fontFamily: '"Inter", sans-serif' }}
                    />
                  </div>
                </div>

                
                {/* Message */}
                <div>
                  <label
                    className="block text-sm font-semibold text-[#203370] mb-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    className={`w-full px-6 py-4 border-2 rounded-xl transition-all duration-300 outline-none resize-none ${
                      focusedField === "message"
                        ? "border-[#d1a32c] bg-white shadow-lg"
                        : "border-gray-200 bg-white"
                    }`}
                    placeholder="Tell us about your requirements..."
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-[#203370] to-[#2a4596] text-white font-bold py-5 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                  style={{ fontFamily: '"Outfit", sans-serif' }}
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-600 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Map Placeholder */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl h-80 relative group hover:border-[#d1a32c] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#203370]/10 to-[#d1a32c]/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <p
                    className="text-[#203370] font-bold text-xl"
                    style={{ fontFamily: '"Outfit", sans-serif' }}
                  >
                    Find Us on Map
                  </p>
                  <p
                    className="text-gray-600 mt-2"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>
              {/* Replace this div with actual Google Maps iframe */}
            </div>

            

            {/* Quick Info Box */}
            <div className="bg-gradient-to-br from-[#d1a32c] to-[#e6b84d] rounded-3xl p-8 text-white shadow-xl">
              <h4
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: '"Outfit", sans-serif' }}
              >
                Office Hours
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/30">
                  <span style={{ fontFamily: '"Inter", sans-serif' }}>Monday - Friday</span>
                  <span className="font-bold" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    9AM - 7PM
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/30">
                  <span style={{ fontFamily: '"Inter", sans-serif' }}>Saturday</span>
                  <span className="font-bold" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    10AM - 5PM
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;600;700&display=swap');

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}