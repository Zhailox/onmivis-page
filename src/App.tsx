import React from "react";
import { SpaceCanvas } from "./components/SpaceCanvas";
import { HeaderHUD } from "./components/HeaderHUD";
import { BrandOmnivis } from "./components/BrandOmnivis";
import { HeroGame } from "./components/HeroGame";
import { GameFeatures } from "./components/GameFeatures";
import { SectorShowcase } from "./components/SectorShowcase";
import { LiveMiniTerminal } from "./components/LiveMiniTerminal";
import { SoundtrackSection } from "./components/SoundtrackSection";
import { LaunchCTA } from "./components/LaunchCTA";
import { FooterHUD } from "./components/FooterHUD";

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020713] text-slate-100 selection:bg-[#00f5ff]/30 selection:text-[#00f5ff] overflow-x-hidden">
      {/* Interactive 3D Cosmic Starfield Canvas */}
      <SpaceCanvas />

      {/* Global Floating HUD Navigation Header */}
      <HeaderHUD />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Omnivis Brand Section: Story, Vision, Manifesto & Core Pillars */}
        <BrandOmnivis />

        {/* 2. Hero Game Section: Estación Versalles Presentation & 3D Tilt Centerpiece */}
        <HeroGame />

        {/* 3. Deep Mechanics & Hard Sci-Fi Engine: UNIX Terminal, Python/Java, Crisis Scenarios */}
        <GameFeatures />

        {/* 4. Interactive Orbital Sector Telemetry Explorer */}
        <SectorShowcase />

        {/* 5. In-Page Live Interactive Terminal */}
        <LiveMiniTerminal />

        {/* 6. Soundtrack Section: Evolution of the Machine */}
        <SoundtrackSection />

        {/* 7. Final Launchpad Conversion CTA */}
        <LaunchCTA />
      </main>

      {/* 8. Maximalist Footer with Social Media & Telemetry */}
      <FooterHUD />
    </div>
  );
};

export default App;
