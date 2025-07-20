import React from "react";

const cards = [
  {
    title: "ESG Achievements and Rankings",
    description:
      "The several national and international recognitions we achieved this year reflect our solid performance and commitment to sustainability.",
    image: "/assets/sustainability1.jpg",
  },
  {
    title: "Sustainability Commitment",
    description:
      "Discover Pertamina’s environmental, social and governance (ESG) achievements and ratings. Learn about our progress and recognition in sustainability efforts.",
    image: "/assets/sustainability2.jpg",
  },
  {
    title: "Reports and Publications",
    description:
      "Browse our latest reports, articles, press releases and updates highlighting our commitment to sustainability.",
    image: "/assets/sustainability3.jpg",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Text atas */}
        <div className="mb-12">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Sustainability
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Sustainability
          </h2>
          <p className="text-gray-700 max-w-4xl">
            Pertamina is dedicated to sustainable growth through Environment,
            Social and Governance (ESG), aiming to achieve Net Zero Emission by
            2060 or sooner by reducing carbon emissions and advancing renewable
            energy technologies.
          </p>
          <button className="mt-4 border border-gray-900 text-gray-900 rounded-full px-6 py-2 flex items-center gap-2 hover:bg-black hover:text-white transition">
            Read More <span className="text-lg">→</span>
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <button className="border border-gray-900 text-gray-900 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-black hover:text-white transition">
                Learn more <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
