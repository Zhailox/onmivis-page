import React, { useState, useEffect, useRef } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { soundManager } from "../audio/soundManager";

export const SoundtrackSection: React.FC = () => {
  const [, setTick] = useState(0);
  const [equalizerBars, setEqualizerBars] = useState<number[]>(Array(16).fill(25));
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const unsub = soundManager.subscribe(() => setTick((t) => t + 1));

    const updateVisualizer = () => {
      if (soundManager.isPlaying && !soundManager.isMuted) {
        const freq = soundManager.getFrequencyData();
        if (freq.length > 0) {
          const sample = Array.from({ length: 16 }, (_, i) => {
            const val = freq[Math.floor((i / 16) * freq.length)] || 30;
            return Math.max(15, Math.min(100, (val / 255) * 100));
          });
          setEqualizerBars(sample);
        } else {
          const t = Date.now() / 150;
          setEqualizerBars(
            Array.from({ length: 16 }, (_, i) => Math.sin(t + i * 0.4) * 35 + 50)
          );
        }
      } else {
        setEqualizerBars(Array(16).fill(15));
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
    soundManager.playBeep(750, 0.03);
    soundManager.togglePlay();
  };

  const handleMuteToggle = () => {
    soundManager.playBeep(600, 0.03);
    soundManager.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    soundManager.setVolume(parseFloat(e.target.value));
  };

  return (
    <section id="soundtrack" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030917]/80">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Header */}
        <div className="mb-10 space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#a378c6] uppercase">
            BANDA SONORA OFICIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            Evolution of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">Machine</span>
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-lg mx-auto">
            Música ambiental de ciencia ficción espacial compuesta para mantener el ritmo y la inmersión en la estación.
          </p>
        </div>

        {/* Clean, Simple Music Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#061838]/80 to-[#020b18]/90 border border-[#00f5ff]/25 shadow-xl backdrop-blur-xl">
          
          {/* Animated Equalizer Wave */}
          <div className="flex items-end justify-center gap-1.5 h-16 max-w-md mx-auto mb-8 px-4">
            {equalizerBars.map((height, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-full transition-all duration-75"
                style={{
                  height: `${height}%`,
                  background: idx % 2 === 0 ? "#00F5FF" : "#A378C6",
                  boxShadow: soundManager.isPlaying && !soundManager.isMuted ? "0 0 8px rgba(0,245,255,0.4)" : "none"
                }}
              />
            ))}
          </div>

          {/* Simple Control Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={handlePlayToggle}
              className="px-6 py-3 rounded-full bg-[#00f5ff] hover:bg-[#3effff] text-slate-950 font-orbitron font-black text-xs tracking-wider shadow-[0_0_20px_rgba(0,245,255,0.5)] flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              {soundManager.isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>PAUSAR</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>REPRODUCIR</span>
                </>
              )}
            </button>

            {/* Volume control */}
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#020815] border border-white/10">
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
                step="0.05"
                value={soundManager.isMuted ? 0 : soundManager.volume}
                onChange={handleVolumeChange}
                className="w-20 sm:w-28 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00f5ff]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
