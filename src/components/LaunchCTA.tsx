import React from "react";
import { Rocket, ExternalLink, Sparkles, Terminal, Shield, ArrowRight } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";
import confetti from "canvas-confetti";

export const LaunchCTA: React.FC = () => {
  const handleLaunch = () => {
    soundManager.playSuccess();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020713] via-[#04122a] to-[#020713] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#00f5ff]/20 via-[#835f9e]/25 to-[#00f5ff]/20 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 holo-grid opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Hologram Card Box */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#061838]/90 via-[#030e22]/90 to-[#020713]/95 border border-[#00f5ff]/50 shadow-[0_0_60px_rgba(0,245,255,0.3)] backdrop-blur-3xl overflow-hidden">
          
          {/* Tech borders */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#031b36] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(0,245,255,0.25)]">
            <Rocket className="w-3.5 h-3.5 text-[#00f5ff] animate-bounce" />
            <span>ACCESO INMEDIATO Y GRATUITO EN LA WEB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-orbitron font-black text-white uppercase tracking-tight mb-6">
            La Estación Necesita a su <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">
              Próximo Oficial de Aviónica
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-10">
            Sin instalaciones complejas ni pagos ocultos. Abre el simulador directamente en tu navegador 
            gracias a la infraestructura de Vercel y pon a prueba tus capacidades de programación bajo fuego.
          </p>

          {/* Large CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLaunch}
              onMouseEnter={() => soundManager.playBeep(1000, 0.03)}
              className="w-full sm:w-auto relative group px-10 py-5 rounded-2xl text-base font-orbitron font-black tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_35px_rgba(0,245,255,0.7)] hover:shadow-[0_0_60px_rgba(0,245,255,1)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none" />
              <Rocket className="w-5 h-5 fill-current animate-pulse" />
              <span>DESPLEGAR EN VERCEL</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <a
              href="#terminal"
              onClick={() => soundManager.playBeep(650, 0.03)}
              className="w-full sm:w-auto px-8 py-5 rounded-2xl text-sm font-orbitron font-bold tracking-wider text-slate-200 bg-[#041228] hover:bg-[#00f5ff]/15 border border-[#00f5ff]/30 hover:border-[#00f5ff] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-[#00f5ff]" />
              <span>TERMINAL DE PRUEBA</span>
            </a>
          </div>

          {/* Quick telemetry badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              COMPILADOR DETERMINISTA
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00f5ff]" />
              ESPAÑOL & FRANCÉS
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#835f9e]" />
              LICENCIA ABIERTA MIT
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
