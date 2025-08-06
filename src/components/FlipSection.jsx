import React from "react";
import FlipCard from "./FlipCard";

const FlipSection = () => {
  const cards = [
    {
      image: "/public/assets/download.jpeg",
      title: "Upstream Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Hulu Energi"
    },
    {
      image: "/public/assets/images.jpeg",
      title: "Gas Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Gas"
    },
    {
      image: "/public/assets/download (1).jpeg",
      title: "Power & NRE Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina NRE"
    },
    {
      image: "/public/assets/download (2).jpeg",
      title: "Commercial and Trading Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Patra Niaga"
    },
    {
      image: "/public/assets/download (3).jpeg",
      title: "Refining and Petrochemical Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Kilang"
    },
    {
      image: "/public/assets/download (4).jpeg",
      title: "Integrated Marine Logistics Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Shipping"
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-white">
      {cards.map((card, idx) => (
        <FlipCard key={idx} {...card} />
      ))}
    </section>
  );
};

export default FlipSection;
