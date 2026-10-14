import React from "react";
import { Terminal, Code2, Compass, AlertTriangle, Flame } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";
import { useLanguage } from "../i18n/LanguageContext";

export const GameFeatures: React.FC = () => {
  const { t } = useLanguage();

  const featuresList = [
    {
      title: t.features.items.unixTitle,
      category: t.features.items.unixCategory,
      description: t.features.items.unixDesc,
      tag: t.features.items.unixTag,
      icon: <Terminal className="w-5 h-5 text-[#00f5ff]" />
    },
    {
      title: t.features.items.codeTitle,
      category: t.features.items.codeCategory,
      description: t.features.items.codeDesc,
      tag: t.features.items.codeTag,
      icon: <Code2 className="w-5 h-5 text-[#a378c6]" />
    },
    {
      title: t.features.items.exploreTitle,
      category: t.features.items.exploreCategory,
      description: t.features.items.exploreDesc,
      tag: t.features.items.exploreTag,
      icon: <Compass className="w-5 h-5 text-[#00f5ff]" />
    },
    {
      title: t.features.items.crisisTitle,
      category: t.features.items.crisisCategory,
      description: t.features.items.crisisDesc,
      tag: t.features.items.crisisTag,
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="mecanicas" className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020917]/70">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.25em] text-[#00f5ff] uppercase">
            {t.features.badge}
          </span>

          <h2 className="text-2xl sm:text-4xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            {t.features.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">{t.features.titleAccent}</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed px-1">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {featuresList.map((feat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundManager.playBeep(850, 0.015)}
              className="p-5 sm:p-6 rounded-2xl bg-[#041228]/85 border border-white/10 hover:border-[#00f5ff]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,245,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#020713] border border-white/10 flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/20 text-[9px] sm:text-[10px] font-mono tracking-wider sm:tracking-widest text-[#00f5ff] uppercase">
                    {feat.tag}
                  </span>
                </div>

                <div className="text-[10px] font-mono tracking-widest text-[#a378c6] uppercase mb-1">
                  {feat.category}
                </div>

                <h3 className="text-lg sm:text-xl font-orbitron font-bold text-white mb-2 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Crisis Mode Banner */}
        <div className="rounded-2xl p-5 sm:p-8 bg-gradient-to-r from-[#180a0a]/90 via-[#120a24]/90 to-[#031124]/90 border border-rose-500/35 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/70 border border-rose-500/30 text-rose-400 text-[10px] font-mono tracking-wider sm:tracking-widest uppercase">
              <Flame className="w-3 h-3 text-rose-400 shrink-0" />
              <span>{t.features.crisisBanner.badge}</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-orbitron font-bold text-white leading-snug">
              {t.features.crisisBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl leading-relaxed">
              {t.features.crisisBanner.description}
            </p>
          </div>

          <a
            href={GAME_INFO.vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playLaser()}
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 sm:py-3 rounded-full text-xs font-orbitron font-bold tracking-wider text-white bg-gradient-to-r from-rose-600 to-[#835f9e] shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:shadow-[0_0_25px_rgba(244,63,94,0.65)] transition-all cursor-pointer flex items-center justify-center text-center"
          >
            {t.features.crisisBanner.cta}
          </a>
        </div>

      </div>
    </section>
  );
};
