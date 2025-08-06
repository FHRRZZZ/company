import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Sustainability() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[50vh] md:h-[75vh]">
        <img src="/assets/sustainability1.jpg" alt="Sustainability Hero" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end">
          <div className="p-6 md:p-12 text-white max-w-4xl">
            <Link to="/">Home</Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Sustainability</h1>
            <p className="text-base md:text-lg leading-relaxed">
              Pertamina is committed to sustainable growth through ESG strategies, renewable energy, and social inclusion to achieve net zero emissions.
            </p>
          </div>
        </div>
      </div>
      <section className="px-4 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold text-blue-700 uppercase mb-2">Energizing You</p>
            <h2 className="text-3xl md:text-4xl font-bold">Pertamina Sustainability Highlights</h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              Pertamina is dedicated to sustainable growth through Environmental, Social, and Governance (ESG) initiatives, aiming to achieve Net Zero Emissions by 2060 or sooner by reducing carbon emissions and advancing renewable energy technologies. Pertamina also plays an active role in enhancing social welfare for both employees and communities while strengthening transparent and ethical corporate governance and supporting a just energy transition in Indonesia.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold text-blue-700 uppercase mb-2">Pertamina ESG</p>
            <h2 className="text-3xl md:text-4xl font-bold">ESG Rating</h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">Several ESG ratings achieved this year reflect our strong performance and ongoing sustainability efforts.</p>
            <button className="inline-flex items-center px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100">
              Read More <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <img src="/public/assets/medium-risk-2.webp" alt="ESG Rating 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/public/assets/msci-esg-bbb.webp" alt="ESG Rating 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src="/public/assets/Screenshot 2025-08-06 132643.png" alt="ESG Rating 3" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </section>
      <section className="px-4 md:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold text-blue-700 uppercase mb-2">Sustainability</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore Pertamina’s efforts on sustainability through:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow bg-white">
            <img src="/assets/pekerja-pertamina.jpg" alt="Sustainability Governance" className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-4 left-4 z-10"><h3 className="text-white text-lg font-semibold">Sustainability Governance</h3></div>
            <div className="absolute bottom-4 right-4 z-10 text-white text-xl">→</div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow bg-white">
            <img src="/assets/sustainability2.jpg" alt="Sustainability Rating & Reports" className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-4 left-4 z-10"><h3 className="text-white text-lg font-semibold">Sustainability Rating & Reports</h3></div>
            <div className="absolute bottom-4 right-4 z-10 text-white text-xl">→</div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow bg-white">
            <img src="/assets/sustainability3.jpg" alt="Sustainability Initiatives" className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-4 left-4 z-10"><h3 className="text-white text-lg font-semibold">Sustainability Initiatives</h3></div>
            <div className="absolute bottom-4 right-4 z-10 text-white text-xl">→</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Sustainability;
