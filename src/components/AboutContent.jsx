import React from "react";

const AboutContent = () => {
  return (
    <section className="bg-white pt-6">

      {/* Konten Sekilas */}
      <div id="sekilas" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Pertamina</h2>
        <div className="space-y-6 text-justify leading-relaxed text-gray-800">
          <p>
            Pertamina consistently upholds its commitment to providing energy and developing new and renewable energy sources to support national energy independence. Appointed as a holding company in the energy sector by the Ministry of State-Owned Enterprises of the Republic of Indonesia on June 12, 2020, Pertamina now plays a highly strategic role overseeing six subholdings operating in various energy-related fields: Upstream Subholding (operated by PT Pertamina Hulu Energi), Gas Subholding (PT Pertamina Gas Negara), Refinery & Petrochemical Subholding (PT Kilang Pertamina Internasional), Power & NRE Subholding (PT Pertamina Power Indonesia), Commercial & Trading Subholding (PT Pertamina Patra Niaga), and Integrated Marine Logistics Subholding (PT Pertamina International Shipping).
          </p>
          <p>
            This important role marks a new historical milestone in the company’s business journey, following more than six decades of tangible contributions in supplying energy that drives the nation’s development and international operations.
          </p>
          <p>
            Pertamina’s strong capabilities are built upon a solid foundation and a long-standing history of contributing to national energy independence. Its roots trace back to the 1950s, when the Government of Indonesia assigned the Army to establish PT Eksploitasi Tambang Minyak Sumatera Utara to manage oil fields in the region. The company later changed its name to PT Perusahaan Minyak Nasional (PERMINA) on December 10, 1957 — a date now commemorated as Pertamina’s founding day.
          </p>
          <p>
            In 1960, PT Permina became a State-Owned Company (PN Permina). Later, PN Permina merged with PN Pertamin to form PN Pertambangan Minyak dan Gas Bumi Negara (Pertamina) on August 20, 1968.
          </p>
          <p>
            Pertamina's strategic role continued when the government, through Law No. 8 of 1971, assigned the company to produce and refine oil and gas and provide fuel and gas across Indonesia. Later, Law No. 22 of 2001 transformed Pertamina’s status and introduced a commercial-based model for its public service obligations.
          </p>
          <p>
            Based on Government Regulation No. 31 of 2003 dated June 18, 2003, the company was renamed PT Pertamina (Persero), operating in both upstream and downstream sectors. PT Pertamina (Persero) was officially established on September 17, 2003 under Notarial Deed No. 20 of 2003. On December 10, 2005, Pertamina modernized its logo from a seahorse to a dynamic arrow with green, blue, and red colors symbolizing dynamism and environmental awareness.
          </p>
          <p>
            On July 20, 2006, Pertamina undertook a fundamental transformation by revising its corporate vision to “become a world-class national oil company.”
          </p>
          <p>
            On December 10, 2007, through its subsidiary PT Pertamina International EP, the company marked a major milestone by acquiring a 72.65% stake in the French oil and gas company Maurel et Prom (M&P).
          </p>
          <p>
            In 2011, Pertamina refined its vision to “become a world-class national energy company.” During an Extraordinary General Meeting of Shareholders (EGMS) on July 19, 2012, the company increased its capital and expanded its business activities.
          </p>
          <p>
            On December 14, 2015, the Minister of SOEs, as the GMS, approved amendments to Pertamina’s Articles of Association to optimize resource use, increase capital ownership by the state, and refine the board of directors' responsibilities requiring approval from the board of commissioners. This amendment was declared in Notarial Deed No. 10 dated January 11, 2016 by Notary Lenny Janis Ishak, SH.
          </p>
          <p>
            In 2017, Pertamina furthered its global vision by finalizing the acquisition of Maurel et Prom shares, making Pertamina the majority shareholder (72.65%) through its subsidiary PT Pertamina International EP. As a result, Pertamina gained operational access in 12 countries across 4 continents. Looking ahead, the company targets a production rate of 650 thousand BOEPD (Barrels of Oil Equivalent Per Day) by 2025 from international operations, contributing to Pertamina’s overall target of 1.9 million BOEPD by 2025, in support of Indonesia’s energy resilience and independence.
          </p>
          <p>
            Even after decades of business evolution, Pertamina remains committed to continuous transformation, striving to become a world-class energy company supported by a more agile, adaptive, and business-focused organization. With this new corporate structure, Pertamina is expected to better respond to future business dynamics and create new growth opportunities through investment and business optimization, ensuring continuous value creation for shareholders and all stakeholders.
          </p>
        </div>
      </div>

      {/* Gambar Bawah */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <img
          src="/assets/Section2About.png"
          alt="Pertamina Structure"
          className="w-full rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutContent;
