import React from "react";
import { Terminal, Code2, Compass, AlertTriangle, Flame } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";

const featureIcons: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5 text-[#00f5ff]" />,
  Code2: <Code2 className="w-5 h-5 text-[#a378c6]" />,
  Compass: <Compass className="w-5 h-5 text-[#00f5ff]" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-amber-400" />
};

export const GameFeatures: React.FC = () => {
  return (
    <section id="mecanicas" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020917]/70">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#00f5ff] uppercase">
            JUGABILIDAD & SISTEMAS
          </span>

          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            Mecánicas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">Ingeniería Orbital</span>
          </h2>

          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Una experiencia técnica inmersiva donde el código real y el pensamiento crítico son la clave para mantener la estación con vida.
          </p>
        </div>

        {/* Features 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {GAME_INFO.features.map((feat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundManager.playBeep(850, 0.015)}
              className="p-6 rounded-2xl bg-[#041228]/80 border border-white/5 hover:border-[#00f5ff]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,245,255,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#020713] border border-white/10 flex items-center justify-center">
                    {featureIcons[feat.icon]}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono tracking-widest text-[#00f5ff] uppercase">
                    {feat.tag}
                  </span>
                </div>

                <div className="text-[10px] font-mono tracking-widest text-[#a378c6] uppercase mb-1">
                  {feat.category}
                </div>

                <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Crisis Mode Banner (clean & punchy) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#180a0a]/80 via-[#120a24]/80 to-[#031124]/80 border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-rose-950/60 text-rose-400 text-[10px] font-mono tracking-widest uppercase">
              <Flame className="w-3 h-3 text-rose-400" />
              <span>MODO CRISIS EN TIEMPO REAL</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white">
              Gestiona fallas térmicas y hackeos antes de que sea tarde
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
              Fusión de plasma, desestabilización magnética y decaimiento orbital pondrán a prueba tu velocidad y conocimiento.
            </p>
          </div>

          <a
            href={GAME_INFO.vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playLaser()}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-orbitron font-bold tracking-wider text-white bg-gradient-to-r from-rose-600 to-[#835f9e] hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] transition-all cursor-pointer"
          >
            ENFRENTAR CRISIS
          </a>
        </div>

      </div>
    </section>
  );
};
