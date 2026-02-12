import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Compass, X } from 'lucide-react';
import East1 from "../assets/images/eastfacing fp.jpg";
import East2 from "../assets/images/eastfacing fp1.jpg";
import West1 from "../assets/images/westfacing fp.jpg";
import West2 from "../assets/images/westfacing fp1.jpg";

const FloorPlansComponent = () => {
  const [eastFacingIndex, setEastFacingIndex] = useState(0);
  const [westFacingIndex, setWestFacingIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // East Facing Floor Plans
  const eastFacingPlans = [
    {
      id: 1,
      title: "East Facing - Ground Floor",
      image: East1,
      description: "2 BHK | 1,250 Sq.Ft | Ground Floor",
      features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchen", "Balcony"]
    },
    {
      id: 2,
      title: "East Facing - First Floor",
      image: East2,
      description: "3 BHK | 1,450 Sq.Ft | First Floor",
      features: ["3 Bedrooms", "3 Bathrooms", "Living Room", "Kitchen", "2 Balconies"]
    }
  ];

  // West Facing Floor Plans
  const westFacingPlans = [
    {
      id: 1,
      title: "West Facing - Ground Floor",
      image: West1,
      description: "2 BHK | 1,200 Sq.Ft | Ground Floor",
      features: ["2 Bedrooms", "2 Bathrooms", "Living Room", "Kitchen", "Balcony"]
    },
    {
      id: 2,
      title: "West Facing - First Floor",
      image: West2,
      description: "3 BHK | 1,400 Sq.Ft | First Floor",
      features: ["3 Bedrooms", "2 Bathrooms", "Living Room", "Kitchen", "2 Balconies"]
    }
  ];

  const handleEastPrev = () => {
    setEastFacingIndex((prev) =>
      prev === 0 ? eastFacingPlans.length - 1 : prev - 1
    );
  };

  const handleEastNext = () => {
    setEastFacingIndex((prev) =>
      prev === eastFacingPlans.length - 1 ? 0 : prev + 1
    );
  };

  const handleWestPrev = () => {
    setWestFacingIndex((prev) =>
      prev === 0 ? westFacingPlans.length - 1 : prev - 1
    );
  };

  const handleWestNext = () => {
    setWestFacingIndex((prev) =>
      prev === westFacingPlans.length - 1 ? 0 : prev + 1
    );
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full bg-gray-100 py-22 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Floor Plans
          </h1>
          <p className="text-lg text-slate-600">
            Explore our East and West facing property layouts
          </p>
        </div>

        {/* East Facing Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Compass className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-800">
              East Facing
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              <div
                className="relative aspect-video bg-slate-200 cursor-pointer"
                onClick={() =>
                  openModal(eastFacingPlans[eastFacingIndex].image)
                }
              >
                <img
                  src={eastFacingPlans[eastFacingIndex].image}
                  alt={eastFacingPlans[eastFacingIndex].title}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEastPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-800" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEastNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-slate-800" />
                </button>

                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {eastFacingIndex + 1} / {eastFacingPlans.length}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {eastFacingPlans[eastFacingIndex].title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {eastFacingPlans[eastFacingIndex].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {eastFacingPlans[eastFacingIndex].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* West Facing Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Compass className="w-6 h-6 text-amber-600 rotate-180" />
            <h2 className="text-3xl font-bold text-slate-800">
              West Facing
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative">
              <div
                className="relative aspect-video bg-slate-200 cursor-pointer"
                onClick={() =>
                  openModal(westFacingPlans[westFacingIndex].image)
                }
              >
                <img
                  src={westFacingPlans[westFacingIndex].image}
                  alt={westFacingPlans[westFacingIndex].title}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWestPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-800" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWestNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 text-slate-800" />
                </button>

                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {westFacingIndex + 1} / {westFacingPlans.length}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {westFacingPlans[westFacingIndex].title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {westFacingPlans[westFacingIndex].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {westFacingPlans[westFacingIndex].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={selectedImage}
              alt="Full screen floor plan"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default FloorPlansComponent;
