// components/HeroBanner.tsx
import React from "react";

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "500+", label: "Projects Done" },
  { number: "18+", label: "Years Experience" },
  { number: "50+", label: "Clients Served" },
];

export default function HeroBanner() {
  return (
    <section className="relative min-h-[520px] bg-[#0D1117] flex flex-col justify-center px-10 py-12 overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #B8860B 1px, transparent 1px),
              linear-gradient(to bottom, #B8860B 1px, transparent 1px)
            `,
            backgroundSize: "200px 160px",
          }}
        />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-yellow-900/20 border border-yellow-700/40 text-yellow-400 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-sm mb-6 w-fit">
        ★ Est. Since 2005
      </div>

      {/* Heading */}
      <h1 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-4">
        Building{" "}
        <span className="text-yellow-400">Trust</span>,
        <br />
        Delivering Excellence
      </h1>

      {/* Subtext */}
      <p className="text-white/50 text-base max-w-lg leading-relaxed mb-8 font-light">
        Bhawant Enterprise delivers world-class industrial solutions, construction
        services, and procurement excellence across India and beyond.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        <button className="bg-yellow-600 hover:bg-yellow-500 text-[#0D1117] text-sm font-medium px-7 py-3 rounded-sm tracking-wide transition-colors">
          Explore Services →
        </button>
        <button className="border border-white/20 text-white text-sm font-light px-7 py-3 rounded-sm tracking-wide hover:bg-white/5 transition-colors">
          View Projects
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-10 mt-10 pt-8 border-t border-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-serif text-3xl font-bold text-yellow-400">
              {stat.number}
            </span>
            <span className="text-[11px] text-white/35 tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}