/**
 * Sound Manager for Omnivis & Estación Versalles
 * Handles background ambient music ("Evolution of the Machine") and tactical Web Audio SFX
 */

class SoundManager {
  private audio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private sourceNode: MediaElementAudioSourceNode | null = null;
  private hasUserInteracted = false;
  private listeners: Set<() => void> = new Set();

  public isPlaying = false;
  public isMuted = false;
  public volume = 0.28; // Default low background volume
  public trackTitle = "Evolution of the Machine";
  public artist = "Omnivis Aerospace Lab";

  constructor() {
    if (typeof window !== "undefined") {
      this.initAudioElement();
      this.setupAutoplayUnlock();
    }
  }

  private initAudioElement() {
    this.audio = new Audio("/assets/evolution_of_the_machine.mp3");
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.preload = "auto";

    this.audio.addEventListener("play", () => {
      this.isPlaying = true;
      this.notify();
    });

    this.audio.addEventListener("pause", () => {
      this.isPlaying = false;
      this.notify();
    });

    this.audio.addEventListener("ended", () => {
      this.isPlaying = false;
      this.notify();
    });
  }

  private setupWebAudio() {
    if (this.audioCtx || !this.audio) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioCtxClass();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;

      this.sourceNode = this.audioCtx.createMediaElementSource(this.audio);
      this.sourceNode.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    } catch {
      // AudioContext might be restricted until user gesture, graceful fallback
    }
  }

  private setupAutoplayUnlock() {
    const unlock = () => {
      if (this.hasUserInteracted) return;
      this.hasUserInteracted = true;
      
      // Initialize Web Audio
      this.setupWebAudio();
      if (this.audioCtx && this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      // Try autoplaying with low volume
      if (this.audio && !this.isMuted) {
        this.audio.play().then(() => {
          this.isPlaying = true;
          this.notify();
        }).catch(() => {
          // Autoplay denied, user can click HUD toggle
        });
      }

      window.removeEventListener("click", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("click", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });
  }

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((l) => l());
  }

  public async togglePlay() {
    if (!this.audio) return;
    this.setupWebAudio();
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      await this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      try {
        await this.audio.play();
        this.isMuted = false;
      } catch (err) {
        console.warn("Audio playback error:", err);
      }
    }
    this.notify();
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
      if (this.volume === 0) {
        this.isMuted = true;
      } else {
        this.isMuted = false;
      }
    }
    this.notify();
  }

  public toggleMute() {
    if (!this.audio) return;
    if (this.isMuted) {
      this.isMuted = false;
      this.audio.volume = this.volume || 0.28;
      if (!this.isPlaying) {
        this.audio.play().catch(() => {});
      }
    } else {
      this.isMuted = true;
      this.audio.volume = 0;
    }
    this.notify();
  }

  /**
   * Returns frequency data array for visualizers
   */
  public getFrequencyData(): Uint8Array {
    if (!this.analyser) {
      return new Uint8Array(16);
    }
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray;
  }

  // Tactical Web Audio SFX (Zero external dependencies)
  public playBeep(freq = 880, duration = 0.05, type: OscillatorType = "sine") {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = this.audioCtx || new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Fallback silent
    }
  }

  public playLaser() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = this.audioCtx || new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // Fallback
    }
  }

  public playSuccess() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = this.audioCtx || new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();

      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 chord
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);

        gain.gain.setValueAtTime(0.05, ctx.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.05 + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.05);
        osc.stop(ctx.currentTime + idx * 0.05 + 0.2);
      });
    } catch {
      // Fallback
    }
  }
}

export const soundManager = new SoundManager();
