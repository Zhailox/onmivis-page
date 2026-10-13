import React, { useState, useEffect } from "react";
import { ExternalLink, Rocket, Menu, X, Shield, Sparkles } from "lucide-react";
import { AudioPlayerHUD } from "./AudioPlayerHUD";
import { soundManager } from "../audio/soundManager";
import { GAME_INFO } from "../data/gameInfo";

export const HeaderHUD: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Omnivis", href: "#omnivis" },
    { name: "Estación Versalles", href: "#juego" },
    { name: "Mecánicas", href: "#mecanicas" },
    { name: "Sectores", href: "#sectores" },
    { name: "Terminal CLI", href: "#terminal" },
    { name: "Banda Sonora", href: "#soundtrack" }
  ];

  const handleLinkClick = () => {
    soundManager.playBeep(650, 0.03);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 bg-[#020713]/85 backdrop-blur-xl border-b border-[#00f5ff]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "py-4 bg-gradient-to-b from-[#020713]/90 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand Mark */}
          <a
            href="#hero"
            onClick={() => soundManager.playBeep(800, 0.04)}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-1 bg-gradient-to-br from-[#00f5ff]/20 to-[#835f9e]/30 border border-[#00f5ff]/40 shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#00f5ff] group-hover:shadow-[0_0_25px_rgba(0,245,255,0.6)]">
              <img
                src="/assets/logo.webp"
                alt="Omnivis Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]"
              />
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-orbitron font-extrabold text-lg tracking-[0.2em] text-white drop-shadow-[0_0_10px_rgba(0,245,255,0.5)] transition-colors group-hover:text-[#00f5ff]">
                  OMNIVIS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] animate-ping" />
              </div>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5 group-hover:text-slate-300">
                AEROSPACE LABS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#041024]/70 border border-[#00f5ff]/15 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                onMouseEnter={() => soundManager.playBeep(900, 0.015)}
                className="px-3 py-1 text-xs font-semibold tracking-wider text-slate-300 hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Area: Audio Player & Play CTA */}
          <div className="flex items-center gap-3">
            {/* Audio Player Widget */}
            <AudioPlayerHUD />

            {/* Vercel Deploy Button */}
            <a
              href={GAME_INFO.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                soundManager.playLaser();
              }}
              onMouseEnter={() => soundManager.playBeep(1000, 0.02)}
              className="relative group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-orbitron font-bold tracking-wider text-slate-950 bg-gradient-to-r from-[#00f5ff] via-[#3effff] to-[#835f9e] shadow-[0_0_20px_rgba(0,245,255,0.5)] hover:shadow-[0_0_35px_rgba(0,245,255,0.8)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              <Rocket className="w-3.5 h-3.5 fill-current animate-bounce" />
              <span>JUGAR EN VERCEL</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#041024] border border-[#00f5ff]/30 text-[#00f5ff] hover:bg-[#00f5ff]/20 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#030e20]/95 border border-[#00f5ff]/30 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wider text-slate-200 hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#00f5ff]/60">→</span>
                </a>
              ))}
              <div className="pt-2 border-t border-[#00f5ff]/20 mt-1">
                <a
                  href={GAME_INFO.vercelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-orbitron font-bold tracking-wider text-slate-950 bg-gradient-to-r from-[#00f5ff] to-[#835f9e] shadow-[0_0_20px_rgba(0,245,255,0.6)] cursor-pointer"
                >
                  <Rocket className="w-4 h-4 fill-current" />
                  <span>DESPLEGAR EN VERCEL</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
