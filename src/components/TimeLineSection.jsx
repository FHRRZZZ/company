import React, { useState } from "react";
import timelineData from "./TimelineData"

const TimelineSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = timelineData[activeIndex];

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Background Blur Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${activeItem.image})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        {/* Timeline Tabs */}
        <div className="flex space-x-6 overflow-x-auto pb-4 border-b border-gray-500">
          {timelineData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center space-x-2 text-sm md:text-base transition-all duration-300 ${
                index === activeIndex
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-red-500" : "bg-gray-500"
                }`}
              />
              <span>{item.year}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {activeItem.title}
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed">
            {activeItem.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
