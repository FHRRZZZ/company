import React from "react";

const FlipCard = ({ image, title, logo, subtitle }) => (
  <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer flex flex-row">
    <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 flex-1">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow-md">{title}</div>
    </div>
    <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-1">
      <img src={logo} alt="logo" className="w-28 h-auto mb-3" />
      <h3 className="text-base font-bold text-gray-800">{subtitle}</h3>
    </div>
  </div>
);

export default FlipCard;