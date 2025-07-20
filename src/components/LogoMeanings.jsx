import React from "react";

const LogoMeanings = () => {
  return (
    <section id="logo-meanings" className="px-6 md:px-16 py-12 space-y-6">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        Logo Meanings
      </h2>

      <p className="text-gray-700 text-base md:text-lg">
        The meaning of the Pertamina logo is:
      </p>

      <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
        <li>
          <strong>Blue</strong> means reliable, trustworthy, and responsible.
        </li>
        <li>
          <strong>Green</strong> means environmentally friendly energy resources.
        </li>
        <li>
          <strong>Red</strong> means persistence, firmness, and courage in facing various kinds of difficulties.
        </li>
      </ul>

      <p className="text-gray-700 text-base md:text-lg">
        Graphic symbols mean:
      </p>

      <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
        <li>
          The <strong>arrow shape</strong> represents Pertamina's organizational aspiration to always move forward, progressively. It also symbolizes the letter “P”.
        </li>
        <li>
          The <strong>three colored elements</strong> represent the islands of different sizes that make up the country of Indonesia.
        </li>
      </ul>

      {/* Gambar Logo */}
      <div className="w-full mt-8">
        <img
          src="/assets/logo-pertamina-text.png" 
          alt="Pertamina Logo"
          className="mx-auto w-full max-w-sm md:max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default LogoMeanings;
