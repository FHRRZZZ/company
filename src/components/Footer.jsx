import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fb] text-gray-700">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 py-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/assets/logo-pertamina-text.png"
            alt="Pertamina Logo"
            className="mx-auto mb-12 w-40"
          />
          <p className="text-sm">
            <strong>Address:</strong> Grha Pertamina, Jl. Medan Merdeka Timur
            No.11–13, Jakarta 10110 Indonesia
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:infopublik@pertamina.com"
              className="hover:underline"
            >
              infopublik@pertamina.com
            </a>
          </p>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm mb-8">
          {/* Announcement */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Announcement</h3>
            <ul className="space-y-1">
              <li>Pertamina Info</li>
              <li>General Procurement</li>
              <li>Announcement</li>
              <li>E-Procurement</li>
              <li>Investor Relations</li>
              <li>Annual GMS</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Network */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Network</h3>
            <ul className="space-y-1">
              <li>Subholding Upstream</li>
              <li>Subholding Refinery & Petrochemical</li>
              <li>Subholding Power & Renewable Energy</li>
              <li>Subholding Gas</li>
              <li>Subholding Marine Logistics</li>
              <li>Subholding Commercial & Trading</li>
            </ul>
          </div>

          {/* AP & Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">AP & Services</h3>
            <ul className="space-y-1">
              <li>PT Pertamina Bina Medika IHC</li>
              <li>PT Pertamina Training & Consulting</li>
              <li>PT Patra Jasa</li>
              <li>PT Pelita Air Service</li>
              <li>PT Asuransi Tugu Pratama Indonesia</li>
              <li>PT Pertamina Pedeve Indonesia</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Tools</h3>
            <ul className="space-y-1">
              <li>i-Serv</li>
              <li>Distributing Agents</li>
              <li>Good Corporate Governance</li>
              <li>Public Information Services</li>
            </ul>
          </div>

          {/* Contact Us */}
        <div>
        <h3 className="font-bold text-gray-900 mb-3">Contact Us</h3>
        <div className="flex items-center gap-3">
            <img
            src="/assets/135.svg"
            alt="Call 135"
            className="w-12 h-auto"
            />
            <a
            href="https://pertaminaclean.tipoffs.info/"
            target="_blank"
            rel="noreferrer"
            className="bg-white border rounded-full px-3 py-1 text-xs text-gray-600 shadow hover:shadow-md whitespace-nowrap"
            >
            Whistle Blowing System
            </a>
        </div>
        </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>
            © Copyright PT Pertamina (Persero) 2025. All Right Reserved. /{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            /{" "}
            <a href="#" className="hover:underline">
              Scam Alert
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-700 text-lg">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
