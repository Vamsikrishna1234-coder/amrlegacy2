import React from "react";

export default function WhatsappButton() {
  const phoneNumber = "919052299299";
  const message = "Hello! I want to know more about AMR Legacy project.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50"
    >
      <div
        className="
          bg-green-500 
          w-14 h-14 
          rounded-full 
          shadow-xl 
          flex items-center justify-center 
          hover:scale-110 
          transition-transform 
          cursor-pointer
        "
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8 invert-0"
        />
      </div>
    </a>
  );
}