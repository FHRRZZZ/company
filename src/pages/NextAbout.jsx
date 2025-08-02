import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TimelineSection from "../components/TimeLineSection";
import Footer from "../components/Footer";

function NextAbout() {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-[50vh] md:h-[75vh]">
        <img src="/assets/pekerja-pertamina.jpg" alt="Energizing Hero" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end">
          <div className="p-6 md:p-12 text-white max-w-4xl">
            <p className="text-sm md:text-base mb-2">
              <Link to="/" className="hover:underline">Home</Link> / About Us
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-base md:text-lg leading-relaxed">
              Explore our history, the vision and mission that underpin our business, our logo philosophy, and the corporate structure that supports our energy efficiency business.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap border border-gray-300 text-sm sm:text-base">
          <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center">
            <a href="#Glance">Pertamina at a Glance</a>
          </li>
          <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center">
            <a href="#Message">The Milestones</a>
          </li>
          <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center">
            <a href="#Story">Vision, Mission and Values</a>
          </li>
          <li className="flex-1 min-w-[50%] sm:min-w-0 border-r border-gray-300 px-4 py-3 flex items-center justify-center text-center">
            <a href="#Structure">Corporate Group Structure</a>
          </li>
          <li className="flex-1 min-w-[50%] sm:min-w-0 px-4 py-3 flex items-center justify-center text-center">
            <a href="#Logo">Logo Meanings</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col mt-10 gap-12">
        <section id="Glance" className="px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">Pertamina at a Glance</h1>
              <p className="text-sm md:text-base text-gray-600 w-full md:w-2/3 leading-relaxed">
                Pertamina always maintains its commitment to provide energy and develop new and renewable energy to support the creation of national energy independence. With the mandate as an energy holding company since its establishment by the Ministry of Public Enterprises of the Republic of the Indonesia on June 12, 2020, Pertamina now has a very strategic role in overseeing six subholdings engaged in the energy sector (type of business activity), namely Upstream Subholding operationally managed by PT Pertamina Hulu Energi, Gas Subholding managed by PT Pertamina Gas Negara, Refinery & Petrochemical Subholding operated by PT Kilang Pertamina Internasional, Power & NRE Subholding operated by PT Pertamina Power Indonesia, Commercial & Trading Subholding operated by PT Pertamina Patra Niaga, and Integrated Marine Logistics Subholding operated by PT Pertamina International Shipping. This important role assumed by Pertamina also marks a new milestone in the company's business journey after Pertamina's real contribution for more than six decades in providing energy that has powered the lives of the Indonesian people and various regions abroad. Pertamina's capabilities are built on a solid foundation and the company's long history of overseeing the realization of national energy independence. History records that Pertamina's existence was built since around the 1950s when the Government of the Republic of Indonesia entrusted the Army, which then established PT Eksploitasi Tambang Minyak Sumatera Utara, with the management of oil fields in the Sumatra region. The company then changed its name to PT Perusahaan Minyak Nasional, or PERMINA, on December 10, 1957, which is now celebrated as Pertamina's birthday. In 1960, PT Permina changed its status to state company (PN) Permina. Then PN Permina merged with PN Pertamin to form PN Pertambangan Minyak dan Gas Bumi Negara (Pertamina) on August 20, 1968. In addition, Pertamina's role became more strategic after the government, through Law No. 8 of 1971, mandated the company to produce and process oil and gas from oil fields and to provide fuel and gas needs in Indonesia. Then, through Law No. 22 of 2001, the government changed Pertamina's position so that the implementation of Public Service Obligation (PSO) was carried out through business activities. Based on Government Regulation No. 31 of 2003 dated June 18, 2003, Perusahaan Pertambangan Minyak dan Gas Bumi Negara changed its name to PT Pertamina (Persero) which conducts oil and gas business activities in upstream to downstream sectors. PT Pertamina (Persero) was established on September 17, 2003 based on Notarial Deed No.20 Year 2003. On December 10, 2005, Pertamina changed the seahorse symbol to an arrow with green, blue and red base colors reflecting dynamic elements and environmental awareness. Then, on July 20, 2006, PT Pertamina (Persero) carried out a fundamental transformation of the company and its business by changing the company's vision, namely "to become a world-class national oil company". Furthermore, on December 10, 2007, Pertamina, through its subsidiary PT Pertamina International EP, recorded an important momentum by acquiring a French oil and gas company, Maurel et Prom (M&P), with a 72.65% stake. In 2011, Pertamina refined its vision to "become a world-class national energy company" and through an EGMS on July 19, 2012, Pertamina increased its issued/paid-up capital and expanded the company's business activities. On 14 December 2015, the Minister of Public Enterprises as the GMS approved the amendments to Pertamina's Articles of Association in terms of optimization of resource utilization, increase in issued and subscribed capital by the state and actions of the Board of Directors that require written approval from the Board of Commissioners. These changes have been stated in Deed No.10 dated January 11, 2016, Notary Lenny Janis Ishak, SH. In 2017, Pertamina moved closer to realizing its vision of becoming a world-class national energy company after successfully completing the acquisition of shares in French oil and gas company Maurel et Prom (M&P). With this success, starting February 1, 2017, through its subsidiary PT Pertamina International EP, Pertamina became the majority shareholder of M&P with a 72.65% stake. Through majority shareholding in M&P, Pertamina has access to operations in 12 countries spread across 4 continents. In the future, Pertamina targets to produce 650 thousand BOEPD (Barrels of Oil Equivalents Per Day) in 2025 from international operations, as part of Pertamina's production target of 1.9 million BOEPD in 2025, in a real effort towards Indonesia's energy security and independence. Even after six decades of business development, Pertamina is committed to reflect the spirit of continuous transformation to perfect its steps to become a world-class energy company supported by an organization that is increasingly agile, aggressive, adaptable and focused on broader business development. With the new corporate structure, it is expected that Pertamina will be able to face the business dynamics in the coming years and foster optimism to always create promising new growth opportunities through investment and business optimization, so that Pertamina can continue to grow in line with the expectations of shareholders and all other stakeholders.
              </p>
            </div>
            <div className="mt-6">
              <img src="/assets/Section2About.png" alt="Energizing Visual" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
        <section id="Message" className="px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">The Milestones</h1>
              <div className="w-full md:w-2/3">
                <TimelineSection />
              </div>
            </div>
          </div>
        </section>
        <section id="Story" className="px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">Vision, Mission and Values</h1>
              <div className="w-full md:w-2/3">
                <img src="/assets/visimis.webp" alt="Energizing Visual" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="Logo" className="px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">Logo Meanings</h1>
              <div className="text-sm md:text-base w-full md:w-2/3 leading-relaxed">
                <p className="mb-2">The meaning of the Pertamina logo is:</p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>The blue color means reliable, trustworthy and responsible.</li>
                  <li>The green color means environmentally friendly energy resources.</li>
                  <li>The red color means persistence, firmness, and courage.</li>
                </ol>
                <p className="mt-4 mb-2">Graphic symbols mean:</p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>The arrow shape represents Pertamina’s aspiration to move forward and also forms the letter "P".</li>
                  <li>The three colored elements represent the islands of different sizes that make up Indonesia.</li>
                </ol>
              </div>
            </div>
            <div className="mt-6">
              <img src="/assets/logo-pertamina-text.png" alt="Pertamina Logo" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
        <section id="Structure" className="px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <h1 className="text-2xl md:text-3xl font-semibold w-full md:w-1/3">Corporate Group Structure</h1>
              <p className="text-sm md:text-base w-full md:w-2/3 leading-relaxed">
                Pertamina operates an integrated energy business from upstream to downstream...
              </p>
            </div>
            <div className="mt-6">
              <img src="/assets/struktur-grup-perusahaan-en.webp" alt="Corporate Structure" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
    );
}

export default NextAbout;