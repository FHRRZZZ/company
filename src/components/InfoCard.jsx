import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function InfoCard({ title, desc, variant = "default" }) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`rounded-xl p-6 shadow-md transition-transform hover:scale-105 
        ${isPrimary ? "bg-blue-800 text-white" : "bg-white text-black border"}`}
    >
      <h3 className={`text-xl font-semibold mb-2`}>{title}</h3>

      <div
        className={`w-6 h-1 mb-4 ${isPrimary ? "bg-white" : "bg-red-600"}`}
      />

      <p className={`text-sm ${isPrimary ? "" : "text-gray-700"} mb-6`}>
        {desc}
      </p>

      <ArrowUpRight
        className={`w-5 h-5 ${isPrimary ? "text-white" : "text-black"}`}
      />
    </div>
  );
}
