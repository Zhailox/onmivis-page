import React, { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { soundManager } from "../audio/soundManager";

export const AudioPlayerHUD: React.FC = () => {
  const [, setTick] = useState(0);
  const [equalizerBars, setEqualizerBars] = useState<number[]>([30, 60, 40, 80]);
  const [showVolume, setShowVolume] = useState(false);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const unsubscribe = soundManager.subscribe(() => {
      setTick((prev) => prev + 1);
    });

    const updateBars = () => {
      if (soundManager.isPlaying && !soundManager.isMuted) {
        const freqData = soundManager.getFrequencyData();
        if (freqData.length > 0) {
          const sample = [
            freqData[2] || 40,
            freqData[6] || 80,
            freqData[10] || 50,
            freqData[14] || 70
          ].map((val) => Math.max(20, Math.min(100, (val / 255) * 100)));
          setEqualizerBars(sample);
        } else {
          const t = Date.now() / 200;
          setEqualizerBars([
            Math.sin(t) * 30 + 50,
            Math.cos(t * 1.3) * 35 + 50,
            Math.sin(t * 0.9) * 30 + 50,
            Math.cos(t * 1.6) * 35 + 50
          ]);
        }
      } else {
        setEqualizerBars([20, 20, 20, 20]);
      }
      animRef.current = requestAnimationFrame(updateBars);
    };

    animRef.current = requestAnimationFrame(updateBars);

    return () => {
      unsubscribe();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playBeep(750, 0.03);
    soundManager.togglePlay();
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playBeep(600, 0.03);
    soundManager.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    soundManager.setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="relative flex items-center">
      {/* Sleek Music Pill */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-[#040e20]/90 border border-[#00f5ff]/30 hover:border-[#00f5ff]/60 shadow-[0_0_15px_rgba(0,245,255,0.15)] backdrop-blur-xl transition-all">
        
        {/* Play/Pause Button with mini equalizer */}
        <button
          onClick={handlePlayToggle}
          title={soundManager.isPlaying ? "Pausar música" : "Reproducir 'Evolution of the Machine'"}
          className={`flex items-center gap-1.5 px-1.5 sm:px-2 py-0.5 rounded-full transition-all cursor-pointer ${
            soundManager.isPlaying
              ? "text-[#00f5ff] bg-[#00f5ff]/15 shadow-[0_0_10px_rgba(0,245,255,0.3)]"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          {soundManager.isPlaying ? (
            <Pause className="w-3 h-3 fill-current" />
          ) : (
            <Play className="w-3 h-3 fill-current ml-0.5" />
          )}

          {/* Mini 4-bar equalizer */}
          <div className="flex items-end gap-0.5 h-3">
            {equalizerBars.map((height, idx) => (
              <span
                key={idx}
                className="w-0.5 rounded-full transition-all duration-75"
                style={{
                  height: `${height}%`,
                  backgroundColor: soundManager.isPlaying ? (idx % 2 === 0 ? "#00F5FF" : "#A378C6") : "#64748b"
                }}
              />
            ))}
          </div>
        </button>

        {/* Volume / Mute Button */}
        <button
          onClick={handleMuteToggle}
          onMouseEnter={() => setShowVolume(true)}
          title={soundManager.isMuted ? "Activar sonido" : "Silenciar"}
          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          {soundManager.isMuted || soundManager.volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 text-rose-400" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#00f5ff]" />
          )}
        </button>

        {/* Inline discreet volume control that expands on hover (Desktop only to avoid touch overflow) */}
        <div
          className={`hidden md:flex overflow-hidden transition-all duration-300 items-center ${
            showVolume ? "w-16 opacity-100 pr-1" : "w-0 opacity-0"
          }`}
          onMouseLeave={() => setShowVolume(false)}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={soundManager.isMuted ? 0 : soundManager.volume}
            onChange={handleVolumeChange}
            className="w-14 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00f5ff]"
          />
        </div>
      </div>
    </div>
  );
};
