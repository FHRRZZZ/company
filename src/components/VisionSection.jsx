import React from "react";

const VisionSection = () => {
  return (
    <section id="vision-mission" className="relative w-full px-6 md:px-16 py-12">
      {/* Judul */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Vision, Mission and Values
      </h2>

      {/* Gambar */}
      <div className="w-full rounded-xl overflow-hidden">
        <img
          src="/assets/VisionMission.jpg" 
          alt="Vision, Mission and Values"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default VisionSection;
