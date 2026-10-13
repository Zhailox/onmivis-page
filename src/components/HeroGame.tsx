import React, { useState } from "react";
import { Rocket, Play, ExternalLink, Github } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";
import { useLanguage } from "../i18n/LanguageContext";

export const HeroGame: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="juego" className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Mini Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#031528]/80 border border-[#00f5ff]/30 text-[#00f5ff] text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Hero Title & Pitch */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-black text-white uppercase tracking-tight leading-none drop-shadow-[0_0_30px_rgba(0,245,255,0.3)]">
            {t.hero.titlePrefix} <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">
              {t.hero.titleSuffix}
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg font-orbitron font-medium tracking-widest text-cyan-300 uppercase">
            {t.hero.subtitle}
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.hero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playSuccess()}
              onMouseEnter={() => soundManager.playBeep(950, 0.02)}
              className="w-full sm:w-auto relative group px-8 py-3.5 rounded-full text-xs font-orbitron font-black tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_25px_rgba(0,245,255,0.5)] hover:shadow-[0_0_40px_rgba(0,245,255,0.8)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 overflow-hidden"
            >
              <Rocket className="w-4 h-4 fill-current" />
              <span>{t.hero.playVercel}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={GAME_INFO.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playBeep(650, 0.02)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-orbitron font-bold tracking-wider text-slate-300 hover:text-white bg-[#041024]/80 hover:bg-white/10 border border-white/10 hover:border-[#00f5ff]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>{t.hero.sourceGithub}</span>
            </a>
          </div>
        </div>

        {/* 3D Tilt Showcase: Game Map Card */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-4xl mx-auto rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#061838]/80 via-[#030d1e]/80 to-[#020713] border border-[#00f5ff]/30 shadow-[0_0_40px_rgba(0,245,255,0.2)] backdrop-blur-xl transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#010611] border border-white/10 group">
            <img
              src="/assets/mapa_estacion_versalles.webp"
              alt="Plano General Estación Versalles"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle scanline */}
            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

            {/* Hover CTA */}
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playLaser()}
              className="absolute inset-0 bg-[#020713]/40 hover:bg-[#020713]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] cursor-pointer"
            >
              <div className="px-6 py-3 rounded-full bg-[#00f5ff] text-slate-950 font-orbitron font-black text-xs tracking-widest shadow-[0_0_25px_rgba(0,245,255,0.8)] flex items-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                <span>{t.hero.launchSimulator}</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
