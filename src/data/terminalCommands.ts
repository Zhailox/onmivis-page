export interface TerminalCommandResponse {
  type: "success" | "warning" | "error" | "info" | "matrix";
  lines: string[];
}

export const EXECUTE_TERMINAL_COMMAND = (rawInput: string): TerminalCommandResponse => {
  const input = rawInput.trim().toLowerCase();
  const parts = input.split(" ");
  const cmd = parts[0];

  switch (cmd) {
    case "ayuda":
    case "help":
    case "man":
      return {
        type: "info",
        lines: [
          "╔════════════════════════════════════════════════════════════════╗",
          "║               OMNIVIS // SUB-SISTEMA TERMINAL                  ║",
          "╚════════════════════════════════════════════════════════════════╝",
          "Comandos tácticos disponibles:",
          "  • omnivis        : Manifiesto corporativo y principios de ingeniería.",
          "  • play / vercel  : Iniciar despliegue del simulador en Vercel.",
          "  • diagnostico    : Telemetría de reactor y estado de subsistemas.",
          "  • sectores       : Muestra la lista de compartimentos orbitales.",
          "  • vitales        : Estado de oxígeno, escudos y reservas de energía.",
          "  • tripulacion    : Registro de oficiales a bordo de Versalles.",
          "  • audio          : Información del tema 'Evolution of the Machine'.",
          "  • matrix         : Activa la cascada de datos cuántica.",
          "  • clear / limpiar: Limpia la pantalla del terminal."
        ]
      };

    case "omnivis":
      return {
        type: "success",
        lines: [
          "[OMNIVIS LABS] Intelligence qui transforme votre environnement.",
          "Filosofía: EdTech de alta fidelidad, ciencia ficción dura y software sin bloatware.",
          "Sede de Desarrollo: Caracas / Paris // Redes: @omnivislabs",
          "Desarrollador de: Estación Versalles (Vite + React + Tailwind + Godot Core)."
        ]
      };

    case "play":
    case "jugar":
    case "vercel":
      return {
        type: "success",
        lines: [
          "INICIANDO ENLACE HIPERESPACIAL CON VERCEL...",
          "Destino: https://estacion-versalles.vercel.app/",
          "Abriendo compuerta de vuelo en 3, 2, 1..."
        ]
      };

    case "diagnostico":
    case "diagnostico()":
      return {
        type: "warning",
        lines: [
          "[TELEMETRÍA] ESCANEO DE SUBSISTEMAS EN CURSO...",
          "├─ NÚCLEO TOROIDAL : 41.2% EFICIENCIA [ALERTA: FUSIÓN DE PLASMA]",
          "├─ SOPORTE VITAL   : 99.8% O2 ESTABLE",
          "├─ MATRIZ ESCUDOS  : 89.4% CAPACIDAD NOMINAL",
          "├─ ENLACE VERCEL   : CONECTADO [LATENCIA: 12ms]",
          "└─ RECOMENDACIÓN   : Iniciar script 'recalibrar_deuterio.py'"
        ]
      };

    case "vitales":
    case "vitales()":
      return {
        type: "info",
        lines: [
          "[CONSTANTES VITALES ESTACIÓN VERSALLES]",
          "Presión Atmosférica : 1.01 atm (78% N2, 21% O2, 1% Ar)",
          "Temperatura Media   : 21.4 °C",
          "Generación Solar    : 450 kW (Colector Corona en ángulo)",
          "Estado de Tripulación: 6 Oficiales en servicio activo"
        ]
      };

    case "sectores":
      return {
        type: "info",
        lines: [
          "SECTORES IDENTIFICADOS EN EL PLANO GENERAL:",
          "1. [P-01] Puente de Navegación (Sector Alpha)",
          "2. [R-02] Núcleo de Fusión de Plasma (Sector Gamma)",
          "3. [D-03] Laboratorio de Datos & Ciberseguridad (Sector Delta)",
          "4. [H-04] Estación de Drones & Hangar (Sector Beta)",
          "5. [E-05] Matriz de Escudos Defensivos (Sector Exterior)"
        ]
      };

    case "tripulacion":
    case "crew":
      return {
        type: "info",
        lines: [
          "REGISTRO DE OFICIALES // ESTACIÓN VERSALLES:",
          "• Comandante Valery Vance     [Mando General - Ámbar]",
          "• Dr. Soren Chen              [Ingeniería & Aviónica - Cian]",
          "• Especialista Elena Rostova  [Ciberseguridad & Redes - Violeta]",
          "• Tte. Marcus Sterling        [Navegación & Cartografía - Verde]"
        ]
      };

    case "audio":
    case "music":
      return {
        type: "info",
        lines: [
          "TRACK ACTUAL: 'Evolution of the Machine'",
          "Compositor  : Omnivis Sound Division",
          "Formato     : 320 kbps High Fidelity Audio Stream",
          "Frecuencia  : 48,000 Hz / Stereo Binaural"
        ]
      };

    case "matrix":
      return {
        type: "matrix",
        lines: [
          "01001111 01001101 01001110 01001001 01010110 01001001 01010011",
          "DESENCRIPTANDO FLUJO CUÁNTICO // OVERRIDE SUCCESSFUL",
          "SISTEMA LISTO PARA COMPILACIÓN EN TIEMPO REAL."
        ]
      };

    case "":
      return { type: "info", lines: [] };

    default:
      return {
        type: "error",
        lines: [
          `Comando no reconocido: '${rawInput}'.`,
          "Escribe 'help' o 'ayuda' para visualizar la lista de protocolos autorizados."
        ]
      };
  }
};
