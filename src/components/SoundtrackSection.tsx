import React, { useState, useEffect, useRef } from "react";
import { Music2, Play, Pause, Volume2, VolumeX, Disc3, Radio, Sparkles, Sliders } from "lucide-react";
import { soundManager } from "../audio/soundManager";
import { GAME_INFO } from "../data/gameInfo";

export const SoundtrackSection: React.FC = () => {
  const [, setTick] = useState(0);
  const [equalizerBars, setEqualizerBars] = useState<number[]>(Array(24).fill(20));
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const unsub = soundManager.subscribe(() => setTick((t) => t + 1));

    const updateVisualizer = () => {
      if (soundManager.isPlaying && !soundManager.isMuted) {
        const freq = soundManager.getFrequencyData();
        if (freq.length > 0) {
          const sample = Array.from({ length: 24 }, (_, i) => {
            const val = freq[Math.floor((i / 24) * freq.length)] || 30;
            return Math.max(12, Math.min(100, (val / 255) * 100));
          });
          setEqualizerBars(sample);
        } else {
          const t = Date.now() / 150;
          setEqualizerBars(
            Array.from({ length: 24 }, (_, i) => Math.sin(t + i * 0.4) * 35 + 50)
          );
        }
      } else {
        setEqualizerBars(Array(24).fill(12));
      }
      animRef.current = requestAnimationFrame(updateVisualizer);
    };

    animRef.current = requestAnimationFrame(updateVisualizer);

    return () => {
      unsub();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handlePlayToggle = () => {
    soundManager.playBeep(700, 0.04);
    soundManager.togglePlay();
  };

  const handleMuteToggle = () => {
    soundManager.playBeep(600, 0.04);
    soundManager.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    soundManager.setVolume(parseFloat(e.target.value));
  };

  return (
    <section id="soundtrack" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030917]/80">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#835f9e]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 holo-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#120a26] border border-[#835f9e]/40 text-[#a378c6] text-xs font-mono tracking-widest uppercase">
            <Music2 className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>PAISAJE SONORO ESPACIAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            Banda Sonora: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">Evolution of the Machine</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Sintetizadores modulares analógicos y arpegios espaciales que transportan la mente a las profundidades de la órbita terrestre.
          </p>
        </div>

        {/* Big Holographic Audio Deck */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#061838]/95 via-[#030e22]/90 to-[#120b24]/95 border border-[#00f5ff]/30 shadow-[0_0_50px_rgba(0,245,255,0.25)] backdrop-blur-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Spinning Vinyl / Audio Core Visual */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-[#00f5ff]/30 via-[#835f9e]/40 to-[#00f5ff]/20 border border-[#00f5ff]/50 shadow-[0_0_30px_rgba(0,245,255,0.3)] flex items-center justify-center">
                {/* Rotating ring */}
                <div
                  className={`absolute inset-0 rounded-full border-2 border-dashed border-[#00f5ff]/40 ${
                    soundManager.isPlaying ? "animate-spin [animation-duration:12s]" : ""
                  }`}
                />

                {/* Inner Disc */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#020b18] border border-slate-700 flex flex-col items-center justify-center overflow-hidden">
                  <img
                    src="/assets/logo.webp"
                    alt="Omnivis Mark"
                    className="w-20 h-20 object-contain filter drop-shadow-[0_0_10px_rgba(0,245,255,0.6)]"
                  />
                  <div className="text-[8px] font-mono text-cyan-300 mt-1 uppercase tracking-widest">
                    320 KBPS MASTER
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>FORMATO: BINAURAL SPACE STREAM</span>
              </div>
            </div>

            {/* Right: Controls & Large Equalizer Bars */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#00f5ff] mb-1">
                  <span>CANCIÓN PRINCIPAL</span>
                  <span className="text-slate-400">LOOP: AUTOMÁTICO</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mb-2">
                  Evolution of the Machine
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  Tema insignia de Estación Versalles. Diseñado para sostener el flujo de concentración 
                  mientras se ejecutan rutinas críticas de estabilización y compilación.
                </p>
              </div>

              {/* Large 24-Band Animated Equalizer */}
              <div className="p-4 rounded-2xl bg-[#020714] border border-[#00f5ff]/20">
                <div className="flex items-end justify-between gap-1 h-20 w-full px-2">
                  {equalizerBars.map((height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 rounded-t-full transition-all duration-75"
                      style={{
                        height: `${height}%`,
                        background:
                          idx % 3 === 0
                            ? "linear-gradient(to top, #00f5ff, #3effff)"
                            : idx % 3 === 1
                            ? "linear-gradient(to top, #835f9e, #a378c6)"
                            : "linear-gradient(to top, #00C2CB, #ffffff)",
                        boxShadow:
                          soundManager.isPlaying && !soundManager.isMuted
                            ? "0 0 8px rgba(0,245,255,0.4)"
                            : "none"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Control Buttons & Volume Slider */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
                
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayToggle}
                  className="px-6 py-3 rounded-xl bg-[#00f5ff] hover:bg-[#3effff] text-slate-950 font-orbitron font-black text-xs tracking-wider shadow-[0_0_20px_rgba(0,245,255,0.6)] flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                >
                  {soundManager.isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>PAUSAR MÚSICA</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>REPRODUCIR MÚSICA</span>
                    </>
                  )}
                </button>

                {/* Mute Toggle and Volume Slider */}
                <div className="flex items-center gap-3 bg-[#030e20] px-4 py-2 rounded-xl border border-slate-800">
                  <button
                    onClick={handleMuteToggle}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {soundManager.isMuted || soundManager.volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-[#00f5ff]" />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.02"
                    value={soundManager.isMuted ? 0 : soundManager.volume}
                    onChange={handleVolumeChange}
                    className="w-24 sm:w-28 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00f5ff]"
                  />

                  <span className="text-xs font-mono text-slate-300 w-8 text-right">
                    {Math.round((soundManager.isMuted ? 0 : soundManager.volume) * 100)}%
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
