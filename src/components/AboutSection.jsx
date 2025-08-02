import React from "react";
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[.65]"
        style={{
        backgroundImage: "url('/assets/Section3.png')", // Background
        }}
        ></div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex items-center h-full">
        <div className="text-white max-w-xl">
          <p className="uppercase text-sm tracking-widest mb-2">Pertamina Overview</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-xl mb-6">
            More than six decades of providing energy to the entire country and a number of overseas territories.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="border border-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition">
              <Link to='/nextabout'>Read More</Link> <span className="text-xl">↗</span>
            </button>
            <button className="border border-white rounded-full px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition">
              Directors and Commissioners <span className="text-xl">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
