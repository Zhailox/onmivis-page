import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, translations } from "./translations";
import { soundManager } from "../audio/soundManager";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("omnivis_lang") as Language | null;
    if (saved === "es" || saved === "fr") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    soundManager.playBeep(lang === "es" ? 650 : 750, 0.03);
    setLanguageState(lang);
    localStorage.setItem("omnivis_lang", lang);
  };

  const toggleLanguage = () => {
    const next: Language = language === "es" ? "fr" : "es";
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
