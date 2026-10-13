import React from "react";
import { SpaceCanvas } from "./components/SpaceCanvas";
import { HeaderHUD } from "./components/HeaderHUD";
import { BrandOmnivis } from "./components/BrandOmnivis";
import { HeroGame } from "./components/HeroGame";
import { GameFeatures } from "./components/GameFeatures";
import { SectorShowcase } from "./components/SectorShowcase";
import { SoundtrackSection } from "./components/SoundtrackSection";
import { LaunchCTA } from "./components/LaunchCTA";
import { FooterHUD } from "./components/FooterHUD";

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020713] text-slate-100 selection:bg-[#00f5ff]/30 selection:text-[#00f5ff] overflow-x-hidden">
      {/* Background Starfield Canvas */}
      <SpaceCanvas />

      {/* Floating HUD Navigation */}
      <HeaderHUD />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Omnivis Brand: Studio, Vision & Core Pillars */}
        <BrandOmnivis />

        {/* 2. Hero: Estación Versalles Showcase & Play Button */}
        <HeroGame />

        {/* 3. Game Mechanics: UNIX Shell, Python/Java & Crisis Scenarios */}
        <GameFeatures />

        {/* 4. Orbital Sectors Explorer */}
        <SectorShowcase />

        {/* 5. Official Soundtrack: Evolution of the Machine */}
        <SoundtrackSection />

        {/* 6. Final Launchpad CTA */}
        <LaunchCTA />
      </main>

      {/* 7. Clean Footer with Social Links */}
      <FooterHUD />
    </div>
  );
};

export default App;
