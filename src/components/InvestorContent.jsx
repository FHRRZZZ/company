import React from "react";
import InfoCard from "./InfoCard";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Corporate Newsletters",
    desc: "Ikuti perkembangan industri terbaru dan strategi inovatif kami secara berkala.",
  },
  {
    title: "Bonds",
    desc: "Jelajahi informasi terbaru tentang obligasi Pertamina, peluang investasi, serta komitmen kami terhadap pertumbuhan berkelanjutan.",
  },
  {
    title: "Shares",
    desc: "Ketahui lebih lanjut tentang kepemilikan saham dan pengelolaan keuangan.",
  },
  {
    title: "Corporate Newsletters",
    desc: "Ikuti perkembangan industri terbaru dan strategi inovatif kami secara berkala.",
  },
  {
    title: "Bonds",
    desc: "Jelajahi informasi terbaru tentang obligasi Pertamina, peluang investasi, serta komitmen kami terhadap pertumbuhan berkelanjutan.",
  },
  {
    title: "Shares",
    desc: "Ketahui lebih lanjut tentang kepemilikan saham dan pengelolaan keuangan.",
  },
  // Tambah card lain kalau mau
];

const InvestorContent = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Gambar kiri */}
          <div className="w-full">
            <img
              src="/assets/pekerja-pertamina.jpg"
              alt="Pekerja Pertamina"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Kartu kanan */}
          <div className="relative w-full">
            <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
              <div className="flex space-x-4 px-4 py-6">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="min-w-[280px] max-w-sm bg-blue-900 text-white p-6 rounded-xl flex-shrink-0 shadow-md"
                  >
                    <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                    <div className="w-10 h-[2px] bg-white mb-4" />
                    <p>{card.desc}</p>
                    <div className="mt-6 text-right">
                      <span className="text-xl">↗</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol navigasi */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-white text-blue-900 rounded-full shadow"
              >
                <ChevronLeft />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-white text-blue-900 rounded-full shadow"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorContent;
