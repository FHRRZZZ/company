import React from "react";

const InvestorHero = () => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background image */}
      <img
        src="/assets/investor-hero.jpg"
        alt="Investor Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 h-full flex flex-col justify-center text-white">
        <p className="text-sm mb-2">Home / Investor Relations</p>
        <h1 className="text-4xl font-bold mb-6">Investor Relations</h1>

        <div>
          <p className="mb-2 text-lg font-semibold">Credit Ratings</p>
          <div className="flex flex-wrap gap-4">
            {/* Card 1 */}
            <div className="bg-white text-black px-4 py-3 rounded-lg shadow-md w-32 text-center">
              <a href="#" className="text-blue-600 font-semibold text-sm">
                Moody’s
              </a>
              <p className="text-lg font-bold">Baa2</p>
              <p className="text-sm text-gray-500">Stable</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-black px-4 py-3 rounded-lg shadow-md w-32 text-center">
              <a href="#" className="text-blue-600 font-semibold text-sm">
                S&amp;P
              </a>
              <p className="text-lg font-bold">BBB</p>
              <p className="text-sm text-gray-500">Stable</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black px-4 py-3 rounded-lg shadow-md w-32 text-center">
              <a href="#" className="text-blue-600 font-semibold text-sm">
                Fitch
              </a>
              <p className="text-lg font-bold">BBB</p>
              <p className="text-sm text-gray-500">Stable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHero;
