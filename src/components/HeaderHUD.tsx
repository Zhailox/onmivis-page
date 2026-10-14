import React, { useState, useEffect } from "react";
import { Rocket, ExternalLink, Menu, X } from "lucide-react";
import { AudioPlayerHUD } from "./AudioPlayerHUD";
import { LanguageToggle } from "./LanguageToggle";
import { soundManager } from "../audio/soundManager";
import { GAME_INFO } from "../data/gameInfo";
import { useLanguage } from "../i18n/LanguageContext";

export const HeaderHUD: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.omnivis, href: "#omnivis" },
    { name: t.nav.game, href: "#juego" },
    { name: t.nav.features, href: "#mecanicas" },
    { name: t.nav.sectors, href: "#sectores" },
    { name: t.nav.soundtrack, href: "#soundtrack" }
  ];

  const handleLinkClick = () => {
    soundManager.playBeep(650, 0.02);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2.5 sm:px-6 lg:px-8 pt-2.5 sm:pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-3 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 border ${
          isScrolled
            ? "bg-[#020713]/90 border-[#00f5ff]/30 shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "bg-[#040e22]/80 border-white/10 shadow-[0_5px_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
        }`}
      >
        {/* Brand / Circular Logo */}
        <a
          href="#omnivis"
          onClick={() => soundManager.playBeep(800, 0.03)}
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-[#020918] border border-[#00f5ff]/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_14px_rgba(0,245,255,0.35)]">
            <img
              src="/assets/logo-circle.webp"
              alt="Omnivis"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-orbitron font-extrabold text-xs sm:text-base tracking-[0.14em] sm:tracking-[0.2em] text-white group-hover:text-[#00f5ff] transition-colors">
              OMNIVIS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] shadow-[0_0_6px_#00f5ff]" />
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              onMouseEnter={() => soundManager.playBeep(850, 0.015)}
              className="px-3 py-1.5 text-xs font-semibold tracking-wider text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Toggle, Audio Player & Play Button */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Bilingual Language Switcher (ES / FR) */}
          <LanguageToggle />

          {/* Audio Player Widget */}
          <AudioPlayerHUD />

          {/* Vercel Play Button */}
          <a
            href={GAME_INFO.vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playLaser()}
            onMouseEnter={() => soundManager.playBeep(950, 0.02)}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-orbitron font-black tracking-wider text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.8)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Rocket className="w-3.5 h-3.5 fill-current" />
            <span>{t.nav.playNow}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-1.5 rounded-full text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#00f5ff]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-md mx-auto mt-2 p-4 rounded-2xl bg-[#030e22]/95 border border-[#00f5ff]/35 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-4 py-2.5 rounded-xl text-sm font-orbitron font-semibold tracking-wider text-slate-200 hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 active:bg-[#00f5ff]/15 transition-colors flex items-center justify-between border border-transparent hover:border-[#00f5ff]/20"
              >
                <span>{link.name}</span>
                <span className="text-[#00f5ff] text-xs">→</span>
              </a>
            ))}

            <div className="pt-2.5 border-t border-white/10 mt-1">
              <a
                href={GAME_INFO.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  soundManager.playLaser();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-orbitron font-black tracking-widest text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_20px_rgba(0,245,255,0.5)]"
              >
                <Rocket className="w-4 h-4 fill-current" />
                <span>{t.nav.playNow}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
