import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw, Play } from "lucide-react";
import { EXECUTE_TERMINAL_COMMAND } from "../data/terminalCommands";
import { soundManager } from "../audio/soundManager";
import { GAME_INFO } from "../data/gameInfo";
import confetti from "canvas-confetti";

interface OutputLine {
  id: string;
  type: "command" | "success" | "warning" | "error" | "info" | "matrix";
  text: string;
}

export const LiveMiniTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<OutputLine[]>([
    { id: "1", type: "info", text: "╔══════════════════════════════════════════════════════════════════╗" },
    { id: "2", type: "info", text: "║     OMNIVIS AVIONICS OS // TERMINAL DETERMINISTA INTERACTIVO    ║" },
    { id: "3", type: "info", text: "╚══════════════════════════════════════════════════════════════════╝" },
    { id: "4", type: "success", text: "CONEXIÓN ESTABLECIDA CON ESTACIÓN VERSALLES [LATENCIA: 8ms]" },
    { id: "5", type: "info", text: "Escribe 'ayuda', 'diagnostico', 'omnivis' o 'play' para comenzar." }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (cmdString: string) => {
    const raw = cmdString.trim();
    if (!raw) return;

    soundManager.playBeep(900, 0.03);

    // Clear command check
    if (raw.toLowerCase() === "clear" || raw.toLowerCase() === "limpiar" || raw.toLowerCase() === "effacer") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const commandEntry: OutputLine = {
      id: Math.random().toString(),
      type: "command",
      text: `pilot@versalles:~$ ${raw}`
    };

    const res = EXECUTE_TERMINAL_COMMAND(raw);

    // Check special action for play
    if (raw.toLowerCase() === "play" || raw.toLowerCase() === "vercel" || raw.toLowerCase() === "jugar") {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
      window.open(GAME_INFO.vercelUrl, "_blank", "noopener,noreferrer");
    }

    const resultEntries: OutputLine[] = res.lines.map((line) => ({
      id: Math.random().toString(),
      type: res.type,
      text: line
    }));

    setHistory((prev) => [...prev, commandEntry, ...resultEntries]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommandSubmit(inputVal);
    }
  };

  const quickButtons = [
    { label: "ayuda", cmd: "ayuda" },
    { label: "omnivis", cmd: "omnivis" },
    { label: "diagnostico", cmd: "diagnostico" },
    { label: "vitales", cmd: "vitales" },
    { label: "play", cmd: "play" }
  ];

  return (
    <section id="terminal" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#020713]">
      <div className="absolute inset-0 holo-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#031528] border border-[#00f5ff]/40 text-[#00f5ff] text-xs font-mono tracking-widest uppercase">
            <TerminalIcon className="w-3.5 h-3.5 text-[#00f5ff]" />
            <span>SHELL DETERMINISTA EN VIVO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white uppercase tracking-tight">
            Terminal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a378c6]">Omnivis CLI</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light">
            Experimenta el motor de comandos del juego directamente desde este navegador antes de ingresar al simulador completo.
          </p>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-2">COMANDOS RÁPIDOS:</span>
          {quickButtons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleCommandSubmit(btn.cmd)}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-[#041228] hover:bg-[#00f5ff]/20 text-cyan-300 border border-[#00f5ff]/30 hover:border-[#00f5ff] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>$ {btn.label}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl overflow-hidden bg-[#020814] border border-[#00f5ff]/40 shadow-[0_0_40px_rgba(0,245,255,0.2)] font-mono text-xs sm:text-sm">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#030e20] border-b border-[#00f5ff]/20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-semibold text-slate-300">avionics-shell@estacion-versalles:~</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-xs">
              <span className="hidden sm:inline text-emerald-400">TTY: 01 // 60 FPS</span>
              <button
                onClick={() => setHistory([])}
                title="Limpiar Consola"
                className="hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="relative p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-1.5 cursor-text bg-[#010611]"
          >
            {/* Scanlines Effect */}
            <div className="absolute inset-0 scanlines opacity-25 pointer-events-none" />

            {/* History Output */}
            {history.map((line) => {
              let colorClass = "text-slate-300";
              if (line.type === "command") colorClass = "text-[#00f5ff] font-bold";
              if (line.type === "success") colorClass = "text-emerald-400 font-semibold";
              if (line.type === "warning") colorClass = "text-amber-300";
              if (line.type === "error") colorClass = "text-rose-400";
              if (line.type === "matrix") colorClass = "text-[#a378c6] font-mono tracking-widest";

              return (
                <div key={line.id} className={`${colorClass} leading-relaxed break-words whitespace-pre-wrap`}>
                  {line.text}
                </div>
              );
            })}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-2 text-[#00f5ff]">
              <span className="font-bold select-none">pilot@versalles:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="escribe un comando..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
                autoFocus
              />
              <button
                onClick={() => handleCommandSubmit(inputVal)}
                className="p-1 rounded bg-[#00f5ff]/20 hover:bg-[#00f5ff]/40 text-[#00f5ff] transition-colors cursor-pointer"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
