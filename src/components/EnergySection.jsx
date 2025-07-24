import { Link } from 'react-router-dom';
import Energizing from '../pages/Energizing';

const EnergySection = () => {
  return (
    <section className="py-20 px-6 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Gambar Kiri */}
        <div className="w-full max-w-[300px] flex justify-center">
          <img
            src="/assets/Energi.png"
            alt="Energizing You"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        {/* Konten Kanan */}
        <div className="w-full md:w-1/2">
          <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-2">
            Energizing You
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Realizing Energy Sovereignty in Remote Areas of the Country
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Pertamina always echoes the spirit of sustainable transformation by
            innovating in green energy and digitalization. As the driving force
            of the energy transition in Indonesia, Pertamina is committed to
            becoming a leading global energy company that supports national
            energy independence and creates a more sustainable future.
          </p>
          <button className="border border-black rounded-full px-6 py-3 font-medium flex items-center gap-2 hover:bg-black hover:text-white transition">
            <Link to='/Energizing'>Read more</Link>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnergySection;
