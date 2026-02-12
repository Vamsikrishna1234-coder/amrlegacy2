import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Gamepad2,
  Heart,
  Book,
  Users,
  Baby,
  GraduationCap,
  BedDouble,
  Stethoscope,
  Film,
  Scissors,
  Sparkles,
  ArrowRight,
  X
} from "lucide-react";
import Clubhouse from "../assets/images/amr clubhouse.jpg";
import gym from "../assets/images/gym amr.jpg";
import yoga from "../assets/images/amr yoga.jpg";
import games from "../assets/images/indoorgames amr.jpg";

const ClubhouseAmenities = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(0);

  const [fullScreenOpen, setFullScreenOpen] = useState(false);

  const featuredAmenities = [
    {
      id: 0,
      title: "State-of-the-Art Gym",
      image: gym,
      description:
        "A fully equipped air-conditioned gym designed for modern fitness routines.",
      icon: Dumbbell
    },
    {
      id: 1,
      title: "Indoor Games Arena",
      image: games,
      description:
        "Enjoy multiple indoor recreational games in a fun, engaging environment.",
      icon: Gamepad2
    },
    {
      id: 2,
      title: "Yoga & Meditation Hall",
      image: yoga,
      description:
        "A calm hall designed exclusively for meditation and yoga practices.",
      icon: Heart
    }
  ];

  const allAmenities = [
    { name: "Indoor Games", icon: Gamepad2 },
    { name: "Yoga Hall", icon: Heart },
    { name: "Gym", icon: Dumbbell },
    { name: "Banquet Hall", icon: Users },
    { name: "Salon", icon: Scissors },
    { name: "Creche", icon: Baby },
    { name: "Study Room", icon: GraduationCap },
    { name: "Guest Rooms", icon: BedDouble },
    { name: "Library", icon: Book },
    { name: "Play Station", icon: Gamepad2 },
    { name: "First Aid", icon: Stethoscope },
    { name: "Theater", icon: Film }
  ];

  const gold = "#d1a32c";
  const navy = "#203370";

  return (
    <div className="w-full bg-gray-100">
      {/* ======================== HERO SECTION ========================== */}
      <div className="relative overflow-hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-5 py-2.5 rounded-full mb-6">
              <Sparkles className="w-5 h-5" style={{ color: gold }} />
              <span className="font-medium" style={{ color: navy }}>
                Premium Clubhouse Facilities
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-4xl font-medium mb-6"
              style={{ color: navy }}
            >
              Clubhouse Amenities
            </h1>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experience world-class facilities designed for comfort, wellness,
              and community.
            </p>
          </div>

          {/* MAIN CLUBHOUSE IMAGE */}
          <div
            className="relative group rounded-3xl overflow-hidden border border-gray-200 cursor-pointer"
            onClick={() => setFullScreenOpen(true)}
          >
            <img
              src={Clubhouse}
              alt="Clubhouse"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute bottom-5 right-5 bg-white/80 px-4 py-2 rounded-xl shadow-md text-sm font-medium text-gray-800">
              Click to view full image
            </div>
          </div>
        </div>
      </div>

      {/* ======================= FULL SCREEN POPUP ========================== */}
      {fullScreenOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setFullScreenOpen(false)}
        >
          <button
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            onClick={() => setFullScreenOpen(false)}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <img
            src={Clubhouse}
            alt="Full Clubhouse"
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ====================== ALL AMENITIES GRID ======================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-medium text-center mb-12" style={{ color: navy }}>
          Our Complete Amenities
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allAmenities.map((amenity, idx) => {
            const Icon = amenity.icon;
            return (
              <div
                key={idx}
                className="group bg-white border border-gray-300 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className="inline-flex p-4 rounded-xl mb-4 group-hover:scale-110 transition"
                  style={{ backgroundColor: `${gold}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color: gold }} />
                </div>
                <h4 className="font-semibold text-base" style={{ color: navy }}>
                  {amenity.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===================== FEATURED AMENITIES (CARD STYLE) ====================== */}
      <div className="max-w-7xl mx-auto px-6 py-5 ">
        <h2 className="text-4xl font-medium text-center mb-14" style={{ color: navy }}>
          Featured Amenities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredAmenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <div
                key={amenity.id}
                className="bg-white rounded-3xl shadow-2xl border border-gray-200 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Single Image */}
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  

                  <h3 className="text-xl font-semibold mb-3" style={{ color: navy }}>
                    {amenity.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {amenity.description}
                  </p>

                  <button
                    className="px-6 py-3 rounded-xl text-white font-semibold shadow-md hover:scale-105 transition flex items-center gap-2 mx-auto"
                    style={{ backgroundColor: navy }}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="h-2" style={{ backgroundColor: navy }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ClubhouseAmenities;
