import React, { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Disc3, Radio } from "lucide-react";
import { soundManager } from "../audio/soundManager";

export const AudioPlayerHUD: React.FC = () => {
  const [, setTick] = useState(0);
  const [equalizerBars, setEqualizerBars] = useState<number[]>([40, 60, 30, 80, 50, 70, 90, 45]);
  const [isExpanded, setIsExpanded] = useState(false);
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
            freqData[1] || 40,
            freqData[3] || 60,
            freqData[5] || 35,
            freqData[7] || 85,
            freqData[9] || 50,
            freqData[11] || 75,
            freqData[13] || 65,
            freqData[15] || 45
          ].map((val) => Math.max(15, Math.min(100, (val / 255) * 100)));
          setEqualizerBars(sample);
        } else {
          // Fallback animated wave
          const t = Date.now() / 200;
          setEqualizerBars([
            Math.sin(t) * 30 + 50,
            Math.cos(t * 1.2) * 35 + 50,
            Math.sin(t * 0.8) * 40 + 50,
            Math.cos(t * 1.5) * 45 + 50,
            Math.sin(t * 1.1) * 35 + 50,
            Math.cos(t * 0.9) * 40 + 50,
            Math.sin(t * 1.3) * 30 + 50,
            Math.cos(t * 1.4) * 45 + 50
          ]);
        }
      } else {
        setEqualizerBars([15, 15, 15, 15, 15, 15, 15, 15]);
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
    soundManager.playBeep(700, 0.04);
    soundManager.togglePlay();
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playBeep(600, 0.04);
    soundManager.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    soundManager.setVolume(val);
  };

  return (
    <div className="relative flex items-center">
      <div
        className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#031122]/90 border border-[#00f5ff]/30 shadow-[0_0_15px_rgba(0,245,255,0.15)] backdrop-blur-md transition-all duration-300 hover:border-[#00f5ff]/60"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Play/Pause Button */}
        <button
          onClick={handlePlayToggle}
          title={soundManager.isPlaying ? "Pausar Audio" : "Reproducir Audio"}
          className="w-7 h-7 rounded-full bg-[#00f5ff]/15 hover:bg-[#00f5ff]/30 text-[#00f5ff] flex items-center justify-center transition-all cursor-pointer shadow-[0_0_10px_rgba(0,245,255,0.2)]"
        >
          {soundManager.isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </button>

        {/* Live Equalizer Visualizer */}
        <div
          onClick={handlePlayToggle}
          className="flex items-end gap-0.5 h-4 cursor-pointer"
          title="Frecuencias de 'Evolution of the Machine'"
        >
          {equalizerBars.map((height, idx) => (
            <span
              key={idx}
              className="w-1 rounded-full transition-all duration-75"
              style={{
                height: `${height}%`,
                backgroundColor: idx % 2 === 0 ? "#00F5FF" : "#A378C6",
                boxShadow: soundManager.isPlaying ? "0 0 6px rgba(0,245,255,0.6)" : "none"
              }}
            />
          ))}
        </div>

        {/* Track Label */}
        <div className="hidden sm:flex flex-col text-left pr-1">
          <div className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-[#00f5ff] uppercase">
            <Radio className="w-2.5 h-2.5 animate-pulse text-[#00f5ff]" />
            <span>SOUNDTRACK OFICIAL</span>
          </div>
          <span className="text-xs font-semibold text-white tracking-wide truncate max-w-[130px]">
            Evolution of the Machine
          </span>
        </div>

        {/* Mute Button */}
        <button
          onClick={handleMuteToggle}
          title={soundManager.isMuted ? "Activar Sonido" : "Silenciar"}
          className="w-6 h-6 rounded-md hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          {soundManager.isMuted || soundManager.volume === 0 ? (
            <VolumeX className="w-3.5 h-3.5 text-rose-400" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-[#00f5ff]" />
          )}
        </button>

        {/* Volume Slider dropdown on hover */}
        {isExpanded && (
          <div className="absolute top-full mt-2 right-0 p-2.5 rounded-xl bg-[#041024]/95 border border-[#00f5ff]/30 shadow-[0_0_20px_rgba(0,245,255,0.25)] backdrop-blur-xl flex items-center gap-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            <VolumeX className="w-3 h-3 text-slate-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={soundManager.isMuted ? 0 : soundManager.volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00f5ff]"
            />
            <Volume2 className="w-3 h-3 text-[#00f5ff]" />
            <span className="text-[10px] font-mono text-slate-300 w-7 text-right">
              {Math.round((soundManager.isMuted ? 0 : soundManager.volume) * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
