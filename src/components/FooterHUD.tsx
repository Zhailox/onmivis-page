import React from "react";
import { Instagram, Github, Rocket } from "lucide-react";
import { BRAND_INFO } from "../data/brandInfo";
import { soundManager } from "../audio/soundManager";
import { useLanguage } from "../i18n/LanguageContext";

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className || "w-4 h-4"}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14Z" />
  </svg>
);

export const FooterHUD: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10 bg-[#01050e] pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-[#020918] border border-[#00f5ff]/50 flex items-center justify-center shadow-[0_0_12px_rgba(0,245,255,0.3)]">
                <img
                  src="/assets/logo-circle.webp"
                  alt="Omnivis Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-orbitron font-extrabold text-base tracking-[0.2em] text-white">
                OMNIVIS
              </span>
            </div>

            <p className="text-[10px] sm:text-xs font-mono text-[#a378c6] uppercase tracking-wide sm:tracking-wider max-w-xs sm:max-w-none leading-relaxed">
              {t.footer.slogan}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href={BRAND_INFO.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playBeep(800, 0.02)}
              className="w-9 h-9 rounded-full bg-[#041228] hover:bg-[#e1306c]/20 border border-white/10 hover:border-[#e1306c] text-slate-300 hover:text-[#e1306c] flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              title="Instagram @omnivislabs"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a
              href={BRAND_INFO.links.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playBeep(800, 0.02)}
              className="w-9 h-9 rounded-full bg-[#041228] hover:bg-[#00f5ff]/20 border border-white/10 hover:border-[#00f5ff] text-slate-300 hover:text-[#00f5ff] flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              title="TikTok @omnivislabs"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            {/* GitHub Repo */}
            <a
              href={BRAND_INFO.links.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playBeep(800, 0.02)}
              className="w-9 h-9 rounded-full bg-[#041228] hover:bg-white/20 border border-white/10 hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              title="Repositorio del Juego en GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Game on Vercel */}
            <a
              href={BRAND_INFO.links.gameVercel}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playLaser()}
              className="w-9 h-9 rounded-full bg-[#041228] hover:bg-[#00f5ff]/20 border border-white/10 hover:border-[#00f5ff] text-slate-300 hover:text-[#00f5ff] flex items-center justify-center transition-all cursor-pointer hover:scale-105"
              title="Jugar Estación Versalles en Vercel"
            >
              <Rocket className="w-4 h-4 fill-current" />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} OMNIVIS. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BRAND_INFO.links.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              {t.footer.gameRepoLink}
            </a>
            <span>•</span>
            <a
              href={BRAND_INFO.links.gameVercel}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00f5ff] hover:underline transition-colors"
            >
              {t.footer.playVercelLink}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
