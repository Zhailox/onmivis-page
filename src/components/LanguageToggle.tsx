import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full bg-[#030c1d]/90 border border-[#00f5ff]/25 p-0.5 shadow-sm backdrop-blur-md ${className}`}
    >
      <button
        onClick={() => setLanguage("es")}
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-orbitron font-bold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
          language === "es"
            ? "bg-[#00f5ff] text-slate-950 shadow-[0_0_10px_rgba(0,245,255,0.6)]"
            : "text-slate-400 hover:text-white"
        }`}
        title="Español (Venezuela)"
      >
        <span className="text-[11px] leading-none">🇻🇪</span>
        <span>ES</span>
      </button>

      <button
        onClick={() => setLanguage("fr")}
        className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-orbitron font-bold transition-all duration-200 cursor-pointer flex items-center gap-1 ${
          language === "fr"
            ? "bg-[#00f5ff] text-slate-950 shadow-[0_0_10px_rgba(0,245,255,0.6)]"
            : "text-slate-400 hover:text-white"
        }`}
        title="Français"
      >
        <span className="text-[11px] leading-none">🇫🇷</span>
        <span>FR</span>
      </button>
    </div>
  );
};
