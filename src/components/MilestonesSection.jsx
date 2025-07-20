import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const milestonesData = [
  {
    year: "1957 – 1967",
    title: "The Journey 1957–1967",
    content:
      "History records that Pertamina's existence was built since around the 1950s, when the Government of the Republic of Indonesia appointed the Army which then established PT North Sumatra Oil Mine Exploitation to manage oil fields in the Sumatra region...",
    bg: "/assets/M1.jpg",
  },
  {
    year: "1968 – 1977",
    title: "Transformation Era 1968–1977",
    content:
      "During this decade, Pertamina underwent strategic transformations to expand upstream activities and international cooperation...",
    bg: "/assets/M2.jpg",
  },
  {
    year: "1978 – 1987",
    title: "Innovation Period 1978–1987",
    content:
      "In this era, Pertamina focused on technological development and diversification of energy sources...",
    bg: "/assets/M3.jpg",
  },
  {
    year: "1988 – 1997",
    title: "The Expansion 1988–1997",
    content:
      "Pertamina expanded its reach to become a key player in Southeast Asia...",
    bg: "/assets/M4.jpg",
  },
  {
    year: "1998 – 2007",
    title: "Facing the Change 1998–2007",
    content:
      "Adapting to global economic challenges, Pertamina restructured and modernized its operations...",
    bg: "/assets/M5.jpg",
  },
  {
    year: "2008 – 2023",
    title: "Energy Transition Era 2008–2023",
    content:
      "Pertamina embraced green energy initiatives and innovation towards sustainability...",
    bg: "/assets/M6.jpg",
  },
];

const MilestonesSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgress(0);
  };

  return (
    <section id="milestones" className="relative w-full">
      <div className="px-6 md:px-16 pt-12 pb-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          The Milestones
        </h2>
      </div>

      {/* Tombol Tahun */}
      <div className="flex justify-center flex-wrap gap-4 px-4 md:px-10 py-4 bg-white sticky top-0 z-30 border-y">
        {milestonesData.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => {
              swiperRef.current?.swiper.slideToLoop(index);
              setProgress(0);
            }}
          >
            <p
              className={`text-sm md:text-base font-semibold transition-all duration-300 ${
                activeIndex === index ? "text-red-600" : "text-gray-600"
              }`}
            >
              {item.year}
            </p>
            {activeIndex === index && (
              <span
                className="absolute left-0 bottom-0 h-1 bg-red-500 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = { swiper })}
        className="w-full h-screen"
      >
        {milestonesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center px-6 md:px-20 relative"
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="max-w-4xl text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed drop-shadow">
                  {item.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MilestonesSection;
