import React from "react";
import { Rocket, ExternalLink } from "lucide-react";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";
import confetti from "canvas-confetti";

export const LaunchCTA: React.FC = () => {
  const handleLaunch = () => {
    soundManager.playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#061838]/90 via-[#030e22]/90 to-[#020713]/95 border border-[#00f5ff]/40 shadow-[0_0_50px_rgba(0,245,255,0.25)] backdrop-blur-2xl">
          
          <h2 className="text-3xl sm:text-5xl font-orbitron font-black text-white uppercase tracking-tight mb-4">
            ¿Listo para asumir el <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#835f9e] to-white">
              Mando de la Estación?
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8">
            Ingresa al simulador directamente desde tu navegador en Vercel. 
            Sin descargas ni registros previos.
          </p>

          <div className="flex justify-center">
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLaunch}
              onMouseEnter={() => soundManager.playBeep(1000, 0.02)}
              className="relative group px-10 py-4 rounded-full text-sm font-orbitron font-black tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_30px_rgba(0,245,255,0.6)] hover:shadow-[0_0_45px_rgba(0,245,255,0.9)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
            >
              <Rocket className="w-5 h-5 fill-current animate-bounce" />
              <span>DESPLEGAR EN VERCEL</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
