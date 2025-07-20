import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// List slide
const slides = [
  { type: "video", src: "/assets/Video-Hero.mp4", label: "67 Years of Energy" },
  { type: "image", src: "/assets/AJP-Hero.jpg", label: "AJP 2025" },
  { type: "image", src: "/assets/NZE-Hero.jpg", label: "NZE Commitment" },
  { type: "image", src: "/assets/Energizing-Hero.jpg", label: "Energizing You" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const duration = 7000; // durasi 7 detik per slide

  useEffect(() => {
    startProgress(); // mulai progress tiap slide aktif berubah

    return () => clearInterval(intervalRef.current); // bersihin interval pas unmount
  }, [currentSlide]);

  // Jalanin progress bar
  const startProgress = () => {
    clearInterval(intervalRef.current);
    let start = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      // Kalo progress udah penuh, lanjut ke slide berikutnya
      if (percent >= 100) {
        clearInterval(intervalRef.current);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }
    }, 100);
  };

  // Klik indikator, langsung loncat ke slide tsb
  const handleDotClick = (index) => {
    clearInterval(intervalRef.current);
    setProgress(0);
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {slide.type === "video" ? (
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.src}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            67 Years of Energizing Indonesia
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Energizing Lives, Empowering the Nation
          </p>
          <button className="flex items-center gap-2 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            <span>Watch Video</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Indikator dan timeline per slide */}
      <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-wrap items-start gap-4">
        {slides.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 w-fit">
            <button
              onClick={() => handleDotClick(index)}
              className="flex items-center gap-2 group text-white text-sm"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide
                    ? "bg-red-600"
                    : "bg-white opacity-50 group-hover:opacity-100"
                }`}
              />
              <span
                className={`${
                  index === currentSlide ? "text-white" : "opacity-70"
                }`}
              >
                {item.label}
              </span>
            </button>

            {/* Progress bar untuk label ini aja */}
            <div className="h-1 w-full bg-white bg-opacity-30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-red-600 rounded-full transition-all duration-200`}
                style={{
                  width: index === currentSlide ? `${progress}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
