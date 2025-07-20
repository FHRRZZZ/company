import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Pencapaian dan Peringkat ESG",
    desc: "Beberapa pengakuan nasional dan internasional yang kami raih pada tahun ini mencerminkan kinerja solid dan upaya keberlanjutan kami.",
    image: "/assets/esg-1.jpg",
  },
  {
    title: "Komitmen Keberlanjutan",
    desc: "Temukan prestasi dan rating Pertamina di Lingkungan, Sosial, dan Tata Kelola (ESG). Pelajari kemajuan dan pengakuan kami dalam upaya keberlanjutan.",
    image: "/assets/esg-2.jpg",
  },
  {
    title: "Laporan dan Publikasi",
    desc: "Telusuri laporan, artikel, siaran pers, dan pembaruan terbaru kami yang menyoroti komitmen kami terhadap keberlanjutan.",
    image: "/assets/esg-3.jpg",
  },
];

const InvestorSustain = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {data.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-white shadow-sm border"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <button className="flex items-center gap-2 text-blue-900 border border-blue-900 px-4 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
                Selengkapnya
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorSustain;
