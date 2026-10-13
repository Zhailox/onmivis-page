import React from "react";
import { Instagram, Github, Rocket, ExternalLink, ShieldCheck, Heart, Radio, Share2 } from "lucide-react";
import { BRAND_INFO } from "../data/brandInfo";
import { GAME_INFO } from "../data/gameInfo";
import { soundManager } from "../audio/soundManager";

// TikTok custom SVG icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-5 h-5"}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14Z" />
  </svg>
);

export const FooterHUD: React.FC = () => {
  return (
    <footer className="relative border-t border-[#00f5ff]/20 bg-[#01050e] pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#00f5ff]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info & French Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden p-1 bg-[#041228] border border-[#00f5ff]/40 shadow-[0_0_15px_rgba(0,245,255,0.3)] flex items-center justify-center">
                <img
                  src="/assets/logo.webp"
                  alt="Omnivis Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-orbitron font-extrabold text-xl tracking-[0.2em] text-white">
                  OMNIVIS
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-[#00f5ff] uppercase -mt-0.5">
                  AEROSPACE & EDTECH LABS
                </span>
              </div>
            </div>

            <p className="text-xs font-mono tracking-wider text-[#a378c6] uppercase">
              "{BRAND_INFO.slogan}"
            </p>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              Laboratorio creador de simuladores técnicos basados en ciencia ficción dura, 
              resiliencia determinista y soberanía de aprendizaje sin intermediarios opacos.
            </p>

            {/* Social Media Links from User */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">
                REDES SOCIALES OFICIALES
              </div>
              <div className="flex items-center gap-3">
                
                {/* Instagram */}
                <a
                  href={BRAND_INFO.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playBeep(800, 0.03)}
                  className="w-10 h-10 rounded-xl bg-[#041228] hover:bg-[#e1306c]/20 border border-slate-800 hover:border-[#e1306c] text-slate-300 hover:text-[#e1306c] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                  title="Instagram @omnivislabs"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* TikTok */}
                <a
                  href={BRAND_INFO.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playBeep(800, 0.03)}
                  className="w-10 h-10 rounded-xl bg-[#041228] hover:bg-[#00f5ff]/20 border border-slate-800 hover:border-[#00f5ff] text-slate-300 hover:text-[#00f5ff] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                  title="TikTok @omnivislabs"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>

                {/* GitHub Repo */}
                <a
                  href={BRAND_INFO.links.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playBeep(800, 0.03)}
                  className="w-10 h-10 rounded-xl bg-[#041228] hover:bg-white/20 border border-slate-800 hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                  title="GitHub Repository Zhailox/onmivis-page"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* Game on Vercel */}
                <a
                  href={BRAND_INFO.links.gameVercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playLaser()}
                  className="w-10 h-10 rounded-xl bg-[#041228] hover:bg-[#00f5ff]/20 border border-slate-800 hover:border-[#00f5ff] text-slate-300 hover:text-[#00f5ff] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105"
                  title="Estación Versalles en Vercel"
                >
                  <Rocket className="w-4 h-4 fill-current" />
                </a>

              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-orbitron font-bold text-white tracking-widest uppercase">
              NAVEGACIÓN ORBITAL
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <a href="#omnivis" className="hover:text-[#00f5ff] transition-colors">
                  01 // Manifiesto Omnivis
                </a>
              </li>
              <li>
                <a href="#juego" className="hover:text-[#00f5ff] transition-colors">
                  02 // Estación Versalles
                </a>
              </li>
              <li>
                <a href="#mecanicas" className="hover:text-[#00f5ff] transition-colors">
                  03 // Mecánicas & Modo Crisis
                </a>
              </li>
              <li>
                <a href="#sectores" className="hover:text-[#00f5ff] transition-colors">
                  04 // Explorador de Sectores
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-[#00f5ff] transition-colors">
                  05 // Terminal Interactivo
                </a>
              </li>
              <li>
                <a href="#soundtrack" className="hover:text-[#00f5ff] transition-colors">
                  06 // Banda Sonora Oficial
                </a>
              </li>
            </ul>
          </div>

          {/* Telemetry and System Specifications */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-orbitron font-bold text-white tracking-widest uppercase flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-[#00f5ff] animate-pulse" />
              TELEMETRÍA DE PLATAFORMA
            </h4>
            
            <div className="p-3.5 rounded-xl bg-[#030e20] border border-slate-800 text-[11px] font-mono space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">HOST DEPLOY:</span>
                <span className="text-[#00f5ff] font-bold">Vercel Edge Network</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CANCIÓN OFICIAL:</span>
                <span className="text-[#a378c6]">Evolution of the Machine</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ARQUITECTURA:</span>
                <span>React 19 + TypeScript + Tailwind</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">COORDENADAS:</span>
                <span>51.6° N, 0.0° E // LEO Orbit</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500">
              Licencia de Código Abierto MIT. Desarrollado con orgullo para la soberanía técnica global.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} OMNIVIS LABS. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BRAND_INFO.links.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub Repo
            </a>
            <span>•</span>
            <a
              href={BRAND_INFO.links.gameVercel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f5ff] hover:underline transition-colors"
            >
              Jugar Estación Versalles
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
