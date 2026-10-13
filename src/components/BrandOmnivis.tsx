import React from "react";
import { ShieldCheck, Orbit, Terminal, Cpu, Sparkles, ChevronRight, Eye } from "lucide-react";
import { BRAND_INFO } from "../data/brandInfo";
import { soundManager } from "../audio/soundManager";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00f5ff]" />,
  Orbit: <Orbit className="w-6 h-6 text-[#835f9e]" />,
  Terminal: <Terminal className="w-6 h-6 text-[#00f5ff]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#a378c6]" />
};

export const BrandOmnivis: React.FC = () => {
  return (
    <section id="omnivis" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#00f5ff]/10 via-[#835f9e]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 holo-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#04132b]/80 border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
            <Eye className="w-3.5 h-3.5 animate-pulse text-[#00f5ff]" />
            <span>IDENTIDAD & VISIÓN CORPORATIVA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(0,245,255,0.3)]">
            OMNIVIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">LABS</span>
          </h2>

          {/* Authentic French Tagline from Logo */}
          <div className="mt-3 px-4 py-1 rounded-md bg-[#00f5ff]/10 border border-[#00f5ff]/30 text-xs sm:text-sm font-mono tracking-[0.25em] text-[#00f5ff] uppercase drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]">
            {BRAND_INFO.slogan}
          </div>

          <p className="mt-6 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            En Omnivis reinventamos la intersección entre la computación de alto rendimiento, la educación técnica 
            y la ciencia ficción interactiva. Nuestro propósito es forjar herramientas de entrenamiento intelectual 
            capaces de operar con total soberanía y rigor científico.
          </p>
        </div>

        {/* Central Brand Showcase Card: Logo + Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Logo Holographic Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group p-6 rounded-3xl bg-gradient-to-br from-[#061838]/80 via-[#0a152d]/90 to-[#120f26]/80 border border-[#00f5ff]/30 shadow-[0_0_40px_rgba(0,245,255,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-[#00f5ff] hover:shadow-[0_0_60px_rgba(0,245,255,0.4)]">
              
              {/* Corner tech marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00f5ff]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#00f5ff]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#00f5ff]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00f5ff]" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center overflow-hidden rounded-2xl bg-[#020b18]/60 p-4">
                {/* Orbital radar rings behind logo */}
                <div className="absolute inset-0 border border-[#00f5ff]/20 rounded-full animate-spin [animation-duration:35s]" />
                <div className="absolute inset-8 border border-[#835f9e]/30 rounded-full border-dashed animate-spin [animation-duration:20s]" />
                <div className="absolute inset-16 border border-[#00f5ff]/15 rounded-full" />

                <img
                  src="/assets/logo.webp"
                  alt="Omnivis Vortex Eye"
                  className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_0_20px_rgba(0,245,255,0.6)]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-[#00f5ff]/20 pt-3">
                <span className="text-[#00f5ff] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-ping" />
                  CORE ENGINE V.4
                </span>
                <span>SECURITY: DETERMINISTIC</span>
              </div>
            </div>
          </div>

          {/* Manifesto & Purpose */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-orbitron font-bold text-[#835f9e] tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00f5ff]" />
                MANIFIESTO TECNOLÓGICO
              </span>
              <h3 className="text-2xl sm:text-4xl font-orbitron font-bold text-white leading-tight">
                Software con alma de ingeniería, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">
                  resiliencia determinista y propósito pedagógico.
                </span>
              </h3>
            </div>

            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {BRAND_INFO.manifesto.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-[#041024]/50 border border-slate-800/80">
                  <div className="w-2 h-2 rounded-full bg-[#00f5ff] mt-2 shrink-0 shadow-[0_0_8px_#00f5ff]" />
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Quick stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#041228]/80 border border-[#00f5ff]/20 text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-black text-[#00f5ff]">100%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">OFFLINE & EDGETECH</div>
              </div>
              <div className="p-3 rounded-xl bg-[#041228]/80 border border-[#835f9e]/30 text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-black text-[#a378c6]">0%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">TELEMETRÍA INVASIVA</div>
              </div>
              <div className="p-3 rounded-xl bg-[#041228]/80 border border-[#00f5ff]/20 text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-black text-[#00f5ff]">Python/Java</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">EJECUCIÓN REAL</div>
              </div>
              <div className="p-3 rounded-xl bg-[#041228]/80 border border-[#835f9e]/30 text-center">
                <div className="text-xl sm:text-2xl font-orbitron font-black text-[#a378c6]">Vercel</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">DESPLIEGUE ZERO-LAG</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (Maximalist holographic cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_INFO.pillars.map((pillar) => (
            <div
              key={pillar.id}
              onMouseEnter={() => soundManager.playBeep(750, 0.02)}
              className="group relative p-6 rounded-2xl bg-[#030e20]/80 border border-slate-800 transition-all duration-300 hover:border-[#00f5ff]/60 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,245,255,0.15)] flex flex-col justify-between"
            >
              {/* Corner accent glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{ backgroundColor: pillar.accent }}
              />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#020b18] border border-slate-700 group-hover:border-[#00f5ff] flex items-center justify-center mb-4 transition-colors shadow-inner">
                  {iconMap[pillar.iconName] || <Sparkles className="w-6 h-6 text-[#00f5ff]" />}
                </div>

                <div className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: pillar.accent }}>
                  {pillar.tagline}
                </div>

                <h4 className="text-lg font-orbitron font-bold text-white mb-2 group-hover:text-[#00f5ff] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">MÉTRICA</span>
                <span className="font-bold text-white group-hover:text-[#00f5ff] transition-colors">
                  {pillar.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
