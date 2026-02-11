import { useState, useEffect } from 'react';
import img1 from '../assets/images/amr hero1.jpg';
import img2 from '../assets/images/amr hero2.jpg';
import img3 from '../assets/images/amr hero3.jpg';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    img2,
    img1,
    img3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Images with Animation */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImage === index ? 1 : 0,
            animation: currentImage === index ? 'zoomIn 5s ease-out forwards' : 'none',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0 z-10"></div>


      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImage === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </section>
  );
}