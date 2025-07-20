import React, { useState } from "react";

const cards = [
  {
    title: "Public Information",
    subtitle: "PPID PROFILE",
    image: "/assets/Card1.png",
    description:
      "Public information regarding Pertamina's services and policies for the public.",
  },
  {
    title: "Pertamina Fuel Price",
    subtitle: "INFORMATION",
    image: "/assets/Card2.png",
    description:
      "Latest fuel price information at all Pertamina gas stations in Indonesia.",
  },
  {
    title: "Corporate Governance",
    subtitle: "GCG",
    image: "/assets/Card3.png",
    description:
      "Corporate governance policies in maintaining transparency and integrity.",
  },
  {
    title: "Become a Pertamina",
    subtitle: "RECRUITMENT",
    image: "/assets/Card4.png",
    description:
      "Join Pertamina for a sustainable and challenging career.",
  },
];

const CardSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/4 h-[400px] cursor-pointer group overflow-hidden"
            onClick={() => toggleActive(index)}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            ></div>

            {/* Overlay content */}
            <div
              className={`absolute bottom-5 left-5 text-white z-10 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="uppercase text-sm tracking-widest">{card.subtitle}</p>
              <h3 className="text-lg md:text-xl font-bold">{card.title}</h3>
            </div>

            {/* Arrow button */}
            <div className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center bg-white/20 rounded-full z-10">
              <span className="text-white text-xl">→</span>
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Slide-up Description */}
            <div
              className={`absolute left-0 bottom-0 w-full bg-white text-black p-4 transform transition-transform duration-500 ${
                activeIndex === index ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-700">{card.description}</p>
              <button
                className="mt-3 text-blue-600 hover:underline"
                onClick={(e) => {
                  e.stopPropagation(); // biar ga nutup pas klik tombol
                  window.alert(`Aksi untuk ${card.title}`); // bisa diganti link ke halaman lain
                }}
              >
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
