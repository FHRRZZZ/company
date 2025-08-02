import React from "react";
import FlipCard from "./FlipCard";

const FlipSection = () => {
  const cards = [
    {
      image: "https://via.placeholder.com/400x500",
      title: "Upstream Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Hulu Energi"
    },
    {
      image: "https://via.placeholder.com/400x500",
      title: "Gas Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Gas"
    },
    {
      image: "",
      title: "Power & NRE Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina NRE"
    },
    {
      image: "",
      title: "Commercial and Trading Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Patra Niaga"
    },
    {
      image: "",
      title: "Refining and Petrochemical Subholding",
      logo: "/public/assets/logo-pertamina.png",
      subtitle: "Pertamina Kilang"
    },
    {
      image: "",
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
