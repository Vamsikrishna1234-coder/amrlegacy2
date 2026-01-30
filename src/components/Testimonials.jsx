import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Hailey Mccray",
      location: "Los Angeles",
      review:
        "AMR Legacy has redefined what premium living means for us. The attention to detail, the architecture, and the peaceful surroundings make it truly feel like home.",
      image:
        "https://images.unsplash.com/photo-1586105459019-ff1f5f4c7a77?auto=format&fit=crop&w=900&q=80",
      house:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Daniel Carter",
      location: "New York",
      review:
        "From booking to handover, AMR Legacy delivered everything with exceptional professionalism. Truly a brand that values trust, quality, and customer satisfaction beyond expectations.",
      image:
        "https://images.unsplash.com/photo-1637916008618-7f3c7eca21e8?auto=format&fit=crop&w=900&q=80",
      house:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Sophia Parker",
      location: "Chicago",
      review:
        "Beautiful architecture, excellent amenities, and a strong sense of community. AMR Legacy made our dream home a reality with unmatched quality and thoughtful planning.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      house:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      name: "Michael Johnson",
      location: "Texas",
      review:
        "Living at an AMR Legacy property has been an incredible experience. The environment, layout, and comfort they provide truly stand out in the real estate market.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
      house:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3c5d?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  /* 🔥 AUTO-SLIDE EVERY 4 SECONDS */
  useEffect(() => {
    const slider = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="py-24 bg-[#f5f8fb] px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-4xl font-medium text-[#0f2537]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-[40px] shadow-xl p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center">

          {/* LEFT TEXT CONTENT */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="uppercase tracking-widest text-sm text-[#d1a32c] font-semibold">
              Hear From Our
            </p>

            <h3 className="text-4xl md:text-4xl font-medium text-[#0f2537]">
              Our Happy Homeowners!
            </h3>

            <div className="text-yellow-400 text-xl">★★★★★</div>

            <p className="text-gray-700 text-lg leading-relaxed italic line-clamp-3">
              “{testimonials[active].review}”
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                src={testimonials[active].image}
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <div>
                <h4 className="text-[#0f2537] font-semibold text-lg">
                  {testimonials[active].name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[active].location}
                </p>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-3 mt-6">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-full transition-all ${
                    i === active ? "bg-[#d1a32c]" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>

            {/* Slider Arrows */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={prev}
                className="p-2 bg-gray-100 rounded-full hover:bg-[#d1a32c] hover:text-white transition"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={next}
                className="p-2 bg-gray-100 rounded-full hover:bg-[#d1a32c] hover:text-white transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2">
            <img
              src={testimonials[active].house}
              className="rounded-[40px] w-full h-[380px] object-cover shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
