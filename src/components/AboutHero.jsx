import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  const tabRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tabRef.current) {
        const offsetTop = tabRef.current.getBoundingClientRect().top;
        setIsSticky(offsetTop <= 64); // sticky aktif saat tab sampai di bawah navbar
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section id="overview" className="relative h-[85vh] w-full overflow-hidden flex items-end">
        {/* Gambar latar belakang */}
        <img
          src="/assets/Section3.png"
          alt="About Us"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Konten judul dan deskripsi */}
        <div className="relative z-10 w-full pl-10 pr-6 pb-28">
          <div className="text-white text-sm mb-4">
            <Link to="/" className="opacity-80 hover:underline">Home</Link> / <span className="font-semibold">About Us</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-white text-base md:text-lg max-w-2xl leading-relaxed">
            Explore our history, vision, and mission that serve as the foundation of our operations, logo philosophy, and corporate group structure that supports energy efficiency and operational excellence.
          </p>
        </div>

        {/* Navigasi tab asli */}
        <div
          ref={tabRef}
          className="absolute bottom-0 left-0 w-full bg-white border-t z-20"
        >
          <TabMenu />
        </div>
      </section>

      {/* Sticky tab muncul di bawah navbar (anggap navbar 64px) */}
      {isSticky && (
        <div className="fixed top-[64px] left-0 w-full bg-white border-b z-40 shadow-md">
          <TabMenu />
        </div>
      )}
    </>
  );
};

// Komponen tab menu biar reusable
const TabMenu = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap justify-between px-6 py-4 text-sm font-medium text-center">
      <button onClick={() => handleScroll('overview')} className="hover:underline py-2 px-3">Company Overview</button>
      <button onClick={() => handleScroll('milestones')} className="hover:underline py-2 px-3">The Milestones</button>
      <button onClick={() => handleScroll('vision-mission')} className="hover:underline py-2 px-3">Vision, Mission & Core Values</button>
      <button onClick={() => handleScroll('logo-meanings')} className="hover:underline py-2 px-3">Logo Meanings</button>
      <button onClick={() => handleScroll('structure')} className="hover:underline py-2 px-3">Corporate Group Structure</button>
    </div>
  );
};

export default AboutHero;
