import React from "react";
import { Terminal, Code2, Compass, AlertTriangle, Cpu, Radio, CheckCircle2, Flame } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";

const featureIcons: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-6 h-6 text-[#00f5ff]" />,
  Code2: <Code2 className="w-6 h-6 text-[#a378c6]" />,
  Compass: <Compass className="w-6 h-6 text-[#00f5ff]" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-amber-400" />
};

export const GameFeatures: React.FC = () => {
  return (
    <section id="mecanicas" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020917]/70">
      <div className="absolute inset-0 holo-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#031528] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>ARQUITECTURA DE JUGABILIDAD</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            Mecánicas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">Ingeniería Orbital</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Olvida los tutoriales pasivos. En Estación Versalles cada orden ejecutada en la consola 
            altera parámetros físicos reales de navegación, presurización y mitigación de amenazas.
          </p>
        </div>

        {/* Features 2x2 Grid with Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {GAME_INFO.features.map((feat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundManager.playBeep(850, 0.02)}
              className="group relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#041228]/90 to-[#020b18]/90 border border-slate-800 transition-all duration-300 hover:border-[#00f5ff]/60 hover:shadow-[0_15px_40px_rgba(0,245,255,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#030e20] border border-slate-700 group-hover:border-[#00f5ff] flex items-center justify-center transition-colors">
                    {featureIcons[feat.icon]}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono tracking-widest text-[#00f5ff] uppercase">
                    {feat.tag}
                  </span>
                </div>

                <div className="text-xs font-mono tracking-widest text-[#a378c6] uppercase mb-1">
                  {feat.category}
                </div>

                <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-white mb-3 group-hover:text-[#00f5ff] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              {/* Code Snippet if present */}
              {feat.codeSnippet && (
                <div className="rounded-xl overflow-hidden bg-[#010610] border border-slate-800 p-3.5 font-mono text-xs text-slate-300 shadow-inner">
                  <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    <span className="ml-1 text-slate-400">avionics-core.sh</span>
                  </div>
                  <pre className="text-cyan-300 overflow-x-auto whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
                    {feat.codeSnippet}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Crisis Mode Deep Dive Banner */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#180a0a]/90 via-[#150a24]/90 to-[#031124]/90 border border-rose-500/30 shadow-[0_0_40px_rgba(244,63,94,0.15)] overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/50 text-rose-400 text-xs font-mono tracking-widest uppercase">
                <Flame className="w-3.5 h-3.5 animate-pulse text-rose-400" />
                <span>PROTOCOLOS DE EMERGENCIA ORBITAL</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-orbitron font-extrabold text-white">
                Modo Crisis: Sobrevive bajo Presión Crítica
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                Cuando una tormenta de radiación cósmica desalinea los escudos o un vector de inyección de código infecta 
                el bus de comunicaciones de la estación, los relojes de enfriamiento comienzan la cuenta regresiva. 
                Deberás diagnosticar, corregir y compilar antes del colapso térmico.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Fusión Toroidal de Plasma", "Desestabilización Magnética", "Inyección de Malware Avionics", "Decaimiento Orbital"].map((item, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-black/50 border border-rose-500/30 text-rose-300 text-xs font-mono">
                    ⚠️ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <a
                href={GAME_INFO.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playLaser()}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-orbitron font-bold tracking-widest text-white bg-gradient-to-r from-rose-600 via-purple-600 to-[#00f5ff] shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:shadow-[0_0_50px_rgba(244,63,94,0.8)] transition-all transform hover:-translate-y-1 text-center cursor-pointer"
              >
                PROBAR MODO CRISIS
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
