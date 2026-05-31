// components/ServicesSection.tsx
import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "🏭",
    title: "Industrial Supply",
    description: "Premium industrial materials and equipment delivered on time, every time.",
  },
  {
    icon: "🏗️",
    title: "Construction",
    description: "End-to-end construction management with precision and quality assurance.",
  },
  {
    icon: "🚚",
    title: "Procurement",
    description: "Strategic procurement solutions to reduce costs and maximize efficiency.",
  },
  {
    icon: "📊",
    title: "Consulting",
    description: "Expert business consulting to scale operations and improve margins.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-10 py-16 bg-[#FAFAF7]">
      <p className="text-xs tracking-[3px] uppercase text-yellow-700 font-medium mb-1">
        What We Do
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-10">
        Our Core Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#FAFAF7] hover:bg-[#F5F0E8] transition-colors p-6"
          >
            <div className="w-10 h-10 border border-yellow-600 flex items-center justify-center mb-4 rounded-sm text-lg">
              {service.icon}
            </div>
            <h3 className="text-sm font-medium text-[#0D0D0D] mb-2">{service.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}