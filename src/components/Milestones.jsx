import React, { useEffect, useState, useRef } from "react";

export default function OdometerMilestones() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const milestones = [
    { label: "Homes Delivered", value: 250 },
    { label: "Happy Families", value: 180 },
    { label: "Acres Developed", value: 45 },
    { label: "Ongoing Projects", value: 5 },
  ];

  // Intersection Observer (Triggers on Enter + Exit)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setInView(true); // Start animation
        } else {
          setInView(false); // Reset animation when leaving section
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Counter Component (Animated every time section comes in view)
  const Counter = ({ value, active }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!active) {
        setCount(0); // Reset on exit
        return;
      }

      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }, [active, value]);

    return <span>{count}</span>;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-16 bg-gradient-to-br from-white to-[#f5f8fb]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-4xl font-medium text-[#0f2537]">
            Our Milestones
          </h2>

          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Numbers that reflect our commitment, growth, and the trust our
            community places in AMR Legacy.
          </p>
        </div>

        {/* Odometer counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {milestones.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg py-10 px-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-5xl md:text-4xl font-bold text-[#0f2537]">
                <Counter value={item.value} active={inView} />
                <span className="text-[#d1a32c]">+</span>
              </h3>

              <p className="text-gray-600 text-lg mt-3 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
