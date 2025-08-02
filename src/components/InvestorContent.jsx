import React, { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
    title: "Financial Reports",
    desc: "Akses laporan audit terbaru dan komitmen kami terhadap transparansi keuangan.",
  },
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
    <section className="py-12 px-4 sm:px-8 lg:px-20 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar */}
        <div className="w-full">
          <img
            src="/assets/pekerja-pertamina.jpg"
            alt="Pekerja Pertamina"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Konten kartu */}
        <div className="relative w-full">
          {/* Tombol panah hanya di desktop */}
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white text-blue-900 rounded-full shadow"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white text-blue-900 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </div>=

          {/* Kartu horizontal scroll */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide snap-x snap-mandatory"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-[85%] sm:w-72 md:w-64 lg:w-60 bg-white rounded-xl shadow px-6 py-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <div className="w-10 h-[2px] bg-blue-600 mt-2 mb-4" />
                <p className="text-gray-700">{card.desc}</p>
                <div className="mt-4 text-right text-xl text-blue-700">↗</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorContent;
