import React from 'react';

const FortuneHighlightsSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Judul & Deskripsi */}
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-700 uppercase">Fortune Global 500 (2024)</p>
          <h2 className="text-2xl md:text-4xl font-semibold mt-2 mb-4">
            The only Indonesian company in <br /> Fortune 500 Global 2024
          </h2>
          <p className="text-gray-700 max-w-3xl">
            PT Pertamina (Persero) is again firmly established as the only
            Indonesian company that is able to compete in the ranks of world
            companies at 165 Fortune 500 Global rankings.
          </p>
          <button className="mt-6 px-6 py-2 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Read More →
          </button>
        </div>

        {/* Highlight angka */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-sm font-medium text-blue-700 uppercase">Revenue (2024)</p>
            <h3 className="text-4xl font-semibold mt-2">USD 75,33</h3>
            <p className="text-xl mb-2">Billion</p>
            <p className="text-gray-500 text-sm">Total revenue achieved in 2024.</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-700 uppercase">Total Profit (2024)</p>
            <h3 className="text-4xl font-semibold mt-2">USD 3,13</h3>
            <p className="text-xl mb-2">Billion</p>
            <p className="text-gray-500 text-sm">Total profit in 2024.</p>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-700 uppercase">Pertamina ESG</p>
            <h3 className="text-4xl font-semibold mt-2">26,9</h3>
            <p className="text-xl mb-2">(Medium Risk)</p>
            <p className="text-gray-500 text-sm">ESG Risk Rating.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FortuneHighlightsSection;
