import React from "react";
import { Orbit, Terminal, Sparkles, Zap } from "lucide-react";
import { soundManager } from "../audio/soundManager";
import { useLanguage } from "../i18n/LanguageContext";

export const BrandOmnivis: React.FC = () => {
  const { t } = useLanguage();

  const pillarsList = [
    {
      id: "hard-scifi",
      title: t.brand.pillars.hardScifiTitle,
      description: t.brand.pillars.hardScifiDesc,
      icon: <Orbit className="w-5 h-5 text-[#835f9e]" />
    },
    {
      id: "logic",
      title: t.brand.pillars.logicTitle,
      description: t.brand.pillars.logicDesc,
      icon: <Terminal className="w-5 h-5 text-[#00f5ff]" />
    },
    {
      id: "design",
      title: t.brand.pillars.designTitle,
      description: t.brand.pillars.designDesc,
      icon: <Sparkles className="w-5 h-5 text-[#a378c6]" />
    },
    {
      id: "performance",
      title: t.brand.pillars.performanceTitle,
      description: t.brand.pillars.performanceDesc,
      icon: <Zap className="w-5 h-5 text-[#00f5ff]" />
    }
  ];

  return (
    <section id="omnivis" className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#00f5ff]/10 via-[#835f9e]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#00f5ff] uppercase mb-3">
            {t.brand.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-black tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(0,245,255,0.3)]">
            OMNIVIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">{t.brand.titleSuffix}</span>
          </h2>

          {/* Slogan */}
          <div className="mt-3 px-3.5 py-1 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/25 text-[11px] sm:text-xs font-mono tracking-[0.2em] text-[#00f5ff] uppercase">
            {t.brand.slogan}
          </div>

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.brand.description}
          </p>
        </div>

        {/* Central Logo & Visual Presentation */}
        <div className="flex justify-center mb-16">
          <div className="relative group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#061838]/80 via-[#0a152d]/90 to-[#120f26]/80 border border-[#00f5ff]/25 shadow-[0_0_35px_rgba(0,245,255,0.15)] backdrop-blur-xl transition-all duration-300 hover:border-[#00f5ff]/50">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center overflow-hidden rounded-2xl bg-[#020b18]/60 p-4">
              <div className="absolute inset-0 border border-[#00f5ff]/15 rounded-full animate-spin [animation-duration:40s]" />
              <div className="absolute inset-6 border border-[#835f9e]/20 rounded-full border-dashed animate-spin [animation-duration:25s]" />

              <img
                src="/assets/logo.webp"
                alt="Omnivis Logo"
                className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_0_25px_rgba(0,245,255,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillarsList.map((pillar) => (
            <div
              key={pillar.id}
              onMouseEnter={() => soundManager.playBeep(750, 0.015)}
              className="p-6 rounded-2xl bg-[#030e22]/80 border border-white/5 hover:border-[#00f5ff]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,245,255,0.1)] flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#020713] border border-white/10 flex items-center justify-center mb-4">
                {pillar.icon}
              </div>

              <h4 className="text-base font-orbitron font-bold text-white mb-2">
                {pillar.title}
              </h4>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
