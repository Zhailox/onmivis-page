import React, { useState } from "react";
import { Rocket, Terminal, Play, ShieldAlert, Cpu, Sparkles, Compass, Radio, ExternalLink } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";

export const HeroGame: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="juego" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 holo-grid-dense opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00f5ff]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Telemetry Ticker */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-[11px] font-mono tracking-wider">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#031528]/80 border border-[#00f5ff]/30 text-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ESTADO: SIMULADOR 100% OPERATIVO EN VERCEL</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#120a24]/80 border border-[#835f9e]/40 text-[#a378c6]">
            <span>🇻🇪 ES (VE)</span>
            <span className="text-slate-600">|</span>
            <span>🇫🇷 FR</span>
            <span className="text-slate-400">ARQUITECTURA BILINGÜE</span>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700 text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>MOTOR DE EJECUCIÓN DETERMINISTA</span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black text-white uppercase tracking-tight leading-none drop-shadow-[0_0_35px_rgba(0,245,255,0.4)]">
            ESTACIÓN <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">
              VERSALLES
            </span>
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl font-orbitron font-medium tracking-widest text-cyan-300 uppercase drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">
            {GAME_INFO.subtitle}
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Asume el mando de un complejo orbital en el siglo XXII. Resuelve fallas críticas de plasma, 
            audita subredes comprometidas y programa sistemas de vuelo en vivo con scripts deterministas de 
            <strong className="text-[#00f5ff] font-semibold"> Python</strong> y <strong className="text-[#a378c6] font-semibold">Java</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary Vercel Deploy Button */}
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playSuccess()}
              onMouseEnter={() => soundManager.playBeep(950, 0.03)}
              className="w-full sm:w-auto relative group px-8 py-4 rounded-xl text-sm font-orbitron font-black tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:shadow-[0_0_50px_rgba(0,245,255,0.9)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none" />
              <Rocket className="w-5 h-5 fill-current animate-bounce" />
              <span>JUGAR AHORA EN VERCEL</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            {/* Secondary Terminal Test Button */}
            <a
              href="#terminal"
              onClick={() => soundManager.playBeep(600, 0.03)}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-orbitron font-bold tracking-wider text-slate-200 bg-[#041226]/80 hover:bg-[#00f5ff]/15 border border-[#00f5ff]/30 hover:border-[#00f5ff] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-[#00f5ff]" />
              <span>PROBAR TERMINAL WEB</span>
            </a>
          </div>
        </div>

        {/* 3D Tilt Centerpiece: Space Station Hologram Showcase */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#061838]/90 via-[#030d1e]/80 to-[#020713] border border-[#00f5ff]/40 shadow-[0_0_50px_rgba(0,245,255,0.25)] backdrop-blur-2xl transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          }}
        >
          {/* Top HUD Frame Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#00f5ff]/20 text-[10px] sm:text-xs font-mono text-slate-400 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
              <span className="text-white font-bold tracking-wider">ESTACIÓN VERSALLES // MAPA GENERAL DE DISTRIBUCIÓN</span>
            </div>
            <div className="flex items-center gap-4 text-[#00f5ff]">
              <span className="hidden sm:inline">ORBITAL ID: VE-4091-ALPHA</span>
              <span>LIVE FEED</span>
            </div>
          </div>

          {/* Main Image with Radar & HUD Pins */}
          <div className="relative rounded-2xl overflow-hidden bg-[#010611] border border-slate-800 aspect-video flex items-center justify-center group">
            <img
              src="/assets/mapa_estacion_versalles.webp"
              alt="Plano General Estación Versalles"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Scanline CRT overlay */}
            <div className="absolute inset-0 scanlines opacity-40 pointer-events-none" />

            {/* Glowing HUD crosshairs */}
            <div className="absolute top-6 left-6 text-[10px] font-mono text-cyan-300 bg-slate-950/70 border border-[#00f5ff]/30 p-2 rounded backdrop-blur-sm">
              <div>ALTITUD: 412.8 KM</div>
              <div>VELOCIDAD: 7.66 KM/S</div>
              <div>INCLINACIÓN: 51.6°</div>
            </div>

            <div className="absolute bottom-6 right-6 text-[10px] font-mono text-[#a378c6] bg-slate-950/70 border border-[#835f9e]/40 p-2 rounded backdrop-blur-sm text-right">
              <div>REACTOR: TOROIDAL 94%</div>
              <div>TELEMETRÍA: ACTIVA</div>
              <div>LENGUAJE: PYTHON / JAVA</div>
            </div>

            {/* Interactive play overlay on hover */}
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playLaser()}
              className="absolute inset-0 bg-[#020713]/40 hover:bg-[#020713]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] cursor-pointer"
            >
              <div className="px-6 py-3 rounded-2xl bg-[#00f5ff] text-slate-950 font-orbitron font-black text-sm tracking-widest shadow-[0_0_30px_rgba(0,245,255,0.9)] flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                <Play className="w-5 h-5 fill-current" />
                <span>INICIAR SIMULACIÓN AHORA</span>
              </div>
            </a>
          </div>

          {/* Bottom Telemetry Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-3 pt-2 text-center text-xs font-mono">
            {GAME_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-2 rounded-xl bg-[#031124]/60 border border-[#00f5ff]/15">
                <div className="font-orbitron font-extrabold text-sm sm:text-base text-[#00f5ff]">
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-300 font-semibold">{stat.label}</div>
                <div className="text-[9px] text-slate-500 truncate">{stat.detail}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
