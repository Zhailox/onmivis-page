import React, { useState } from "react";
import { Shield, Zap, Thermometer, Wind, Users, ChevronRight, Activity, Globe2 } from "lucide-react";
import { GAME_INFO, SectorItem } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";

export const SectorShowcase: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<SectorItem>(GAME_INFO.sectors[0]);

  const handleSelect = (sec: SectorItem) => {
    soundManager.playBeep(800, 0.03);
    setSelectedSector(sec);
  };

  const statusColors = {
    ÓPTIMO: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40",
    NORMAL: "text-[#00f5ff] bg-cyan-950/60 border-[#00f5ff]/40",
    ALERTA: "text-amber-400 bg-amber-950/60 border-amber-500/40",
    CRÍTICO: "text-rose-400 bg-rose-950/60 border-rose-500/40"
  };

  return (
    <section id="sectores" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 holo-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#041228] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono tracking-widest uppercase">
            <Activity className="w-3.5 h-3.5 text-[#00f5ff] animate-pulse" />
            <span>TELEMETRÍA DE COMPARTIMENTOS ORBITALES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            Explorador de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">Sectores Tácticos</span>
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300 font-light">
            Monitorea en tiempo real los signos vitales, diagramas de flujo energético y atmósfera 
            de cada sector estratégico a bordo de la Estación Versalles.
          </p>
        </div>

        {/* Sector Tabs Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {GAME_INFO.sectors.map((sec) => {
            const isSelected = selectedSector.id === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec)}
                className={`px-4 py-2.5 rounded-xl text-xs font-orbitron font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#00f5ff] text-slate-950 shadow-[0_0_20px_rgba(0,245,255,0.6)] scale-105"
                    : "bg-[#041024]/80 text-slate-300 border border-slate-800 hover:border-[#00f5ff]/40 hover:text-white"
                }`}
              >
                <span>{sec.name}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    sec.status === "CRÍTICO" ? "bg-rose-500 animate-ping" : "bg-emerald-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Active Sector Display: Big Holographic Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#061838]/90 via-[#030d1e]/90 to-[#0c0820]/90 border border-[#00f5ff]/30 shadow-[0_0_40px_rgba(0,245,255,0.2)] backdrop-blur-2xl">
          
          {/* Left: Big Interactive Viewport Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#010611] border border-[#00f5ff]/30 group shadow-2xl">
              <img
                src={selectedSector.image}
                alt={selectedSector.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Scanlines & HUD */}
              <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

              {/* Status Badge in viewport */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest border ${statusColors[selectedSector.status]}`}>
                  ESTADO: {selectedSector.status}
                </span>
              </div>

              {/* Coordinates info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-[#00f5ff]/20 backdrop-blur-md">
                <span>SECTOR: {selectedSector.id.toUpperCase()}</span>
                <span>TELEMETRÍA: TRANSMISIÓN ACTIVA</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Telemetry and Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#a378c6] uppercase mb-1">
                {selectedSector.subtitle}
              </div>

              <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-3">
                {selectedSector.name}
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                {selectedSector.description}
              </p>

              {/* Live Telemetry Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#020917] border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-950/50 text-[#00f5ff]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Potencia</div>
                    <div className="text-sm font-orbitron font-bold text-white">{selectedSector.stats.energy}</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#020917] border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-950/50 text-rose-400">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Temperatura</div>
                    <div className="text-sm font-orbitron font-bold text-white">{selectedSector.stats.temperature}</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#020917] border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-950/50 text-blue-400">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Presión</div>
                    <div className="text-sm font-orbitron font-bold text-white">{selectedSector.stats.pressure}</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#020917] border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-950/50 text-[#a378c6]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Tripulación</div>
                    <div className="text-sm font-orbitron font-bold text-white">{selectedSector.stats.crew}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Vercel link for this sector */}
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playLaser()}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-orbitron font-bold tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] to-[#a378c6] hover:shadow-[0_0_25px_rgba(0,245,255,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>OPERAR ESTE SECTOR EN VERCEL</span>
              <ChevronRight className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* Secondary Planet & Ship Destinations Grid */}
        <div className="mt-16">
          <div className="flex items-center gap-2 text-xs font-orbitron font-bold tracking-widest text-[#a378c6] uppercase mb-6">
            <Globe2 className="w-4 h-4 text-[#00f5ff]" />
            <span>DESTINOS HIPERESPACIALES CARTOGRAFIADOS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Acorazado Hyperion", type: "Nave Insignia Militar", img: "/assets/hyperion.webp" },
              { name: "Estación Helios", type: "Observatorio Corona Solar", img: "/assets/helios.webp" },
              { name: "Puesto Titán-IV", type: "Colonia Minera Subterránea", img: "/assets/titan.webp" },
              { name: "Sistema Solar Exterior", type: "Cinturón de Kuiper", img: "/assets/sistema_solar.webp" }
            ].map((dest, i) => (
              <div
                key={i}
                onMouseEnter={() => soundManager.playBeep(700, 0.015)}
                className="group relative rounded-2xl overflow-hidden bg-[#030e20] border border-slate-800 hover:border-[#00f5ff]/50 transition-all duration-300 aspect-[4/3] flex flex-col justify-end p-4"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-[#020713]/40 to-transparent" />
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-[#00f5ff] uppercase tracking-wider">{dest.type}</div>
                  <div className="text-sm font-orbitron font-bold text-white group-hover:text-cyan-200 transition-colors">{dest.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
