import React, { useState } from "react";
import { ChevronRight, Globe2 } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";
import { useLanguage } from "../i18n/LanguageContext";

export const SectorShowcase: React.FC = () => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>("puente");
  const { t } = useLanguage();

  const currentSectorData = t.sectors.items[selectedSectorId] || t.sectors.items.puente;
  const currentSectorMeta = GAME_INFO.sectors.find((s) => s.id === selectedSectorId) || GAME_INFO.sectors[0];

  const handleSelect = (id: string) => {
    soundManager.playBeep(800, 0.02);
    setSelectedSectorId(id);
  };

  const destinations = [
    { name: "Acorazado Hyperion", type: t.sectors.destinations.hyperionType, img: "/assets/hyperion.webp" },
    { name: "Estación Helios", type: t.sectors.destinations.heliosType, img: "/assets/helios.webp" },
    { name: "Puesto Titán-IV", type: t.sectors.destinations.titanType, img: "/assets/titan.webp" },
    { name: "Sistema Solar", type: t.sectors.destinations.solarType, img: "/assets/sistema_solar.webp" }
  ];

  return (
    <section id="sectores" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#00f5ff] uppercase">
            {t.sectors.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            {t.sectors.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">{t.sectors.titleAccent}</span>
          </h2>

          <p className="text-sm text-slate-300 font-light">
            {t.sectors.subtitle}
          </p>
        </div>

        {/* Sector Tabs Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {GAME_INFO.sectors.map((sec) => {
            const isSelected = selectedSectorId === sec.id;
            const itemData = t.sectors.items[sec.id] || { name: sec.name };
            return (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec.id)}
                className={`px-4 py-2 rounded-full text-xs font-orbitron font-semibold tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#00f5ff] text-slate-950 shadow-[0_0_15px_rgba(0,245,255,0.6)] scale-105"
                    : "bg-[#041024]/80 text-slate-300 border border-white/10 hover:border-[#00f5ff]/40 hover:text-white"
                }`}
              >
                {itemData.name}
              </button>
            );
          })}
        </div>

        {/* Active Sector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#061838]/80 via-[#030d1e]/80 to-[#0c0820]/80 border border-[#00f5ff]/25 shadow-2xl backdrop-blur-xl mb-14">
          
          {/* Sector Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#010611] border border-white/10 group">
              <img
                src={currentSectorMeta.image}
                alt={currentSectorData.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />
            </div>
          </div>

          {/* Sector Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#a378c6] uppercase mb-1">
                {currentSectorData.subtitle}
              </div>

              <h3 className="text-2xl font-orbitron font-bold text-white mb-3">
                {currentSectorData.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                {currentSectorData.description}
              </p>
            </div>

            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playLaser()}
              className="w-full py-3 px-4 rounded-full text-xs font-orbitron font-bold tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] to-[#a378c6] hover:shadow-[0_0_20px_rgba(0,245,255,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.sectors.cta}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Secondary Destinations Grid */}
        <div>
          <div className="flex items-center gap-2 text-xs font-orbitron font-bold tracking-widest text-[#a378c6] uppercase mb-4">
            <Globe2 className="w-4 h-4 text-[#00f5ff]" />
            <span>{t.sectors.destinationsBadge}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-[#030e20] border border-white/10 hover:border-[#00f5ff]/40 transition-all duration-300 aspect-[4/3] flex flex-col justify-end p-3"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-[#020713]/40 to-transparent" />
                <div className="relative z-10">
                  <div className="text-[9px] font-mono text-[#00f5ff] uppercase tracking-wider">{dest.type}</div>
                  <div className="text-xs sm:text-sm font-orbitron font-bold text-white">{dest.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
