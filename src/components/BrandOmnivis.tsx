import React, { useState } from "react";
import { Orbit, Terminal, Sparkles, Zap } from "lucide-react";
import { soundManager } from "../audio/soundManager";
import { useLanguage } from "../i18n/LanguageContext";

type LogoVariant = "square" | "circle-full" | "circle" | "icon" | "horizontal";

export const BrandOmnivis: React.FC = () => {
  const { t, language } = useLanguage();
  const [logoVariant, setLogoVariant] = useState<LogoVariant>("square");

  const logoVariants: {
    id: LogoVariant;
    label: string;
    src: string;
    containerClass: string;
    imgClass: string;
  }[] = [
    {
      id: "square",
      label: language === "es" ? "Cuadrada" : "Carré",
      src: "/assets/logo-square.webp",
      containerClass: "w-56 h-56 sm:w-72 sm:h-72 rounded-2xl p-3 sm:p-4",
      imgClass: "w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,245,255,0.45)]"
    },
    {
      id: "circle-full",
      label: language === "es" ? "Circular" : "Circulaire",
      src: "/assets/logo-circle-full.webp",
      containerClass: "w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1.5 sm:p-2",
      imgClass: "w-full h-full object-contain rounded-full drop-shadow-[0_0_25px_rgba(0,245,255,0.5)]"
    },
    {
      id: "circle",
      label: language === "es" ? "Emblema" : "Emblème",
      src: "/assets/logo-circle.webp",
      containerClass: "w-52 h-52 sm:w-64 sm:h-64 rounded-full p-1.5 sm:p-2",
      imgClass: "w-full h-full object-contain rounded-full drop-shadow-[0_0_25px_rgba(0,245,255,0.55)]"
    },
    {
      id: "icon",
      label: language === "es" ? "Isotipo" : "Icône",
      src: "/assets/logo-icon.webp",
      containerClass: "w-52 h-52 sm:w-64 sm:h-64 rounded-3xl p-4 sm:p-6",
      imgClass: "w-full h-full object-contain drop-shadow-[0_0_28px_rgba(0,245,255,0.6)]"
    },
    {
      id: "horizontal",
      label: language === "es" ? "Horizontal" : "Bannière",
      src: "/assets/logo-horizontal.webp",
      containerClass: "w-72 h-28 sm:w-[440px] sm:h-36 rounded-2xl px-4 py-3",
      imgClass: "w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,245,255,0.45)]"
    }
  ];

  const activeLogo = logoVariants.find((v) => v.id === logoVariant) || logoVariants[0];

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
    <section id="omnivis" className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[400px] bg-gradient-to-r from-[#00f5ff]/10 via-[#835f9e]/15 to-transparent blur-[90px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#00f5ff] uppercase mb-2 sm:mb-3">
            {t.brand.badge}
          </span>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-black tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(0,245,255,0.3)]">
            OMNIVIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">{t.brand.titleSuffix}</span>
          </h2>

          {/* Slogan */}
          <div className="mt-3 px-3 sm:px-4 py-1.5 rounded-xl sm:rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/25 text-[10px] sm:text-xs font-mono tracking-[0.1em] sm:tracking-[0.2em] text-[#00f5ff] uppercase max-w-full leading-relaxed">
            {t.brand.slogan}
          </div>

          <p className="mt-4 sm:mt-5 max-w-2xl text-xs sm:text-base text-slate-300 font-light leading-relaxed px-1">
            {t.brand.description}
          </p>
        </div>

        {/* Central Logo & Adaptive Container Presentation */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-14">
          <div
            className={`relative group p-3 sm:p-6 ${
              logoVariant === "circle" || logoVariant === "circle-full" ? "rounded-full" : "rounded-3xl"
            } bg-gradient-to-b from-[#061838]/85 via-[#041024]/95 to-[#0b091e]/90 border border-[#00f5ff]/30 shadow-[0_0_40px_rgba(0,245,255,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-[#00f5ff]/60`}
          >
            <div
              className={`relative flex items-center justify-center overflow-hidden bg-[#020815]/80 holo-grid border border-white/5 transition-all duration-300 ${activeLogo.containerClass}`}
            >
              {logoVariant !== "horizontal" && (
                <>
                  <div className="absolute inset-1.5 border border-[#00f5ff]/20 rounded-full animate-spin [animation-duration:40s] pointer-events-none" />
                  <div className="absolute inset-5 border border-[#835f9e]/25 rounded-full border-dashed animate-spin [animation-duration:25s] pointer-events-none" />
                </>
              )}

              <img
                src={activeLogo.src}
                alt={`Omnivis Logo - ${activeLogo.label}`}
                className={`relative z-10 transition-all duration-500 group-hover:scale-105 ${activeLogo.imgClass}`}
              />
            </div>
          </div>

          {/* Logo Format Selector Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2">
            {logoVariants.map((variant) => {
              const isSelected = logoVariant === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => {
                    soundManager.playBeep(820, 0.015);
                    setLogoVariant(variant.id);
                  }}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider uppercase transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/60 shadow-[0_0_12px_rgba(0,245,255,0.3)]"
                      : "bg-[#030d1e]/80 text-slate-400 border border-white/10 hover:text-slate-200 hover:border-white/25"
                  }`}
                >
                  {variant.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Clean Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {pillarsList.map((pillar) => (
            <div
              key={pillar.id}
              onMouseEnter={() => soundManager.playBeep(750, 0.015)}
              className="p-4 sm:p-6 rounded-2xl bg-[#030e22]/85 border border-white/10 hover:border-[#00f5ff]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,245,255,0.1)] flex flex-col justify-start"
            >
              <div className="flex items-center gap-3 sm:block mb-2.5 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-[#020713] border border-white/10 flex items-center justify-center sm:mb-4">
                  {pillar.icon}
                </div>
                <h4 className="text-sm sm:text-base font-orbitron font-bold text-white sm:mb-2 leading-snug">
                  {pillar.title}
                </h4>
              </div>

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
