import React from "react";

const CorporateStructure = () => {
  return (
    <section id="structure" className="px-6 md:px-16 py-12 space-y-6">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        Corporate Group Structure
      </h2>

      <p className="text-gray-700 text-base md:text-lg">
        Pertamina operates an integrated energy business from upstream to downstream. In its capacity as an energy sector holding company pursuant to the Decree of the Minister of Public Enterprises dated 12 June 2020, Pertamina's general business focus is to implement portfolio management activities and business synergies across the Pertamina Group, accelerate new business development and implement national programmes.
      </p>

      <p className="text-gray-700 text-base md:text-lg">
        Meanwhile, a number of activities that were previously the main business of the company will be carried out by the established sub-holding, which will, among other things, play a role in promoting the realisation of operational excellence by developing the scale and synergy of each business, accelerating business development and existing business capabilities, and increasing the ability and flexibility in partnerships and financing that are more profitable for the company.
      </p>

      <p className="text-gray-700 text-base md:text-lg">
        The following is a mapping of the sub-holding role of Pertamina Group:
      </p>

      <div className="w-full overflow-hidden rounded-xl shadow-md">
        <img
          src="/assets/Structure.jpg" 
          alt="Corporate Group Structure"
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="text-gray-700 text-base md:text-lg">
        In addition, Pertamina also runs a shipping company business through PT Pertamina International Shipping. Pertamina also carries out logistics and infrastructure functions by managing an integrated fuel and LPG distribution network throughout Indonesia. Pertamina also has a number of other subsidiaries engaged in various business sectors related to finance and services, including PT Pertamina Bina Medika, PT Seamless Pipe Indonesia Jaya, PT Asuransi Tugu Pratama Indonesia Tbk (Tugu Insurance), PT Pertamina Pedeve Indonesia, PT Patra Jasa, PT Pertamina Training & Consulting and PT Pelita Air Service.
      </p>

      <p className="text-gray-700 text-base md:text-lg">
        Through the establishment of this new Pertamina structure, Pertamina is expected to be more agile, focused and faster in developing world-class business capabilities to accelerate various innovations outside of Pertamina's traditional business chain, including in the areas of new and renewable energy, biofuels and digital technology, so that Pertamina is able to achieve greater business growth as a foundation for becoming a leading global energy company.
      </p>

    </section>
  );
};

export default CorporateStructure;
