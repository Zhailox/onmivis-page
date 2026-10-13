export interface GameFeature {
  title: string;
  category: string;
  description: string;
  tag: string;
  codeSnippet?: string;
  icon: string;
}

export interface SectorItem {
  id: string;
  name: string;
  subtitle: string;
  status: "NORMAL" | "ALERTA" | "CRÍTICO" | "ÓPTIMO";
  image: string;
  description: string;
  stats: {
    energy: string;
    temperature: string;
    pressure: string;
    crew: string;
  };
}

export const GAME_INFO = {
  title: "ESTACIÓN VERSALLES",
  subtitle: "Simulador de Ingeniería Aeroespacial & Programación Orbital",
  vercelUrl: "https://estacion-versalles.vercel.app/",
  githubRepo: "https://github.com/Zhailox/onmivis-page.git",
  languages: [
    { code: "es", label: "Español (Venezuela)", flag: "🇻🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" }
  ],
  stats: [
    { value: "4+", label: "Sectores Planetarios", detail: "Versalles, Hyperion, Helios, Titán" },
    { value: "2", label: "Lenguajes Reales", detail: "Intérprete determinista Python & Java" },
    { value: "100%", label: "Basado en Vercel", detail: "Acceso instantáneo con 0 descargas" },
    { value: "Bilingüe", label: "ES (VE) / FR", detail: "Arquitectura orbital internacional" }
  ],
  features: [
    {
      title: "Consola Interactiva UNIX",
      category: "SISTEMAS OPERATIVOS",
      description: "Ejecuta comandos reales de navegación y auditoría: `ls`, `cat`, `grep`, `pwd`, `man`, `nano`, `python`, `javac`. Sin emulaciones superficiales: un shell determinista completo.",
      tag: "SHELL AVIONICS",
      codeSnippet: "$ avionics run diagnostics.py --sector=reactor\n[OK] MATRIZ DE ESCUDOS ESTABLE [94.2%]",
      icon: "Terminal"
    },
    {
      title: "Entorno Python & Java Real",
      category: "COMPILACIÓN DETERMINISTA",
      description: "Escribe código para calibrar toberas de maniobra, ajustar disipadores solares o reprogramar la matriz de neutrinos bajo fuego cruzado.",
      tag: "COMPILER ENGINE",
      codeSnippet: "def recalibrar_flujo(temperatura):\n    if temperatura > 1200:\n        return 'PURGA_EMERGENCIA'\n    return 'FLUJO_OPTIMO'",
      icon: "Code2"
    },
    {
      title: "Cartografía Interplanetaria",
      category: "NAVEGACIÓN ORBITAL",
      description: "Traza saltos hiperespaciales entre el Acorazado Hyperion, la estación de investigación Helios, la colonia minera Titán-IV y el complejo Versalles.",
      tag: "HYPERDRIVE V.4",
      icon: "Compass"
    },
    {
      title: "Protocolos de Crisis en Vivo",
      category: "SUPERVIVENCIA TÉCNICA",
      description: "Fusión inminente del núcleo de plasma, inyección de malware en cortafuegos de aviónica y decaimiento orbital en tiempo real.",
      tag: "CRITICAL FAILURE",
      icon: "AlertTriangle"
    }
  ] as GameFeature[],
  sectors: [
    {
      id: "puente",
      name: "Puente de Navegación",
      subtitle: "Centro de Mando & Telemetría Orbital",
      status: "ÓPTIMO",
      image: "/assets/puente_navegacion.webp",
      description: "Consolas principales de aviónica, enlace con constelaciones de satélites y control de propulsión subluz.",
      stats: { energy: "98%", temperature: "21.4°C", pressure: "1.01 atm", crew: "4 Oficiales" }
    },
    {
      id: "reactor",
      name: "Núcleo de Fusión de Plasma",
      subtitle: "Generación de Potencia Principal",
      status: "CRÍTICO",
      image: "/assets/vista_nucleo_reactor.webp",
      description: "Reactor magnético toroidal. Requiere calibración constante de refrigerante de deuterio mediante scripts deterministas.",
      stats: { energy: "41%", temperature: "1480°C", pressure: "3.40 atm", crew: "2 Ingenieros" }
    },
    {
      id: "datos",
      name: "Laboratorio de Datos & Ciberseguridad",
      subtitle: "Procesamiento de Subredes Hostiles",
      status: "ALERTA",
      image: "/assets/vista_laboratorio_datos.webp",
      description: "Búnker de criptografía y mitigación de inyecciones maliciosas en la matriz de aviónica de la estación.",
      stats: { energy: "87%", temperature: "18.2°C", pressure: "0.99 atm", crew: "3 Analistas" }
    },
    {
      id: "drones",
      name: "Estación de Drones & Hangar",
      subtitle: "Despliegue Táctico y Reparaciones",
      status: "NORMAL",
      image: "/assets/estacion_drones.webp",
      description: "Bahía presurizada automatizada para escuadrones no tripulados de inspección exterior y soldadura de casco.",
      stats: { energy: "92%", temperature: "16.0°C", pressure: "0.85 atm", crew: "Automático" }
    },
    {
      id: "escudos",
      name: "Matriz de Escudos Defensivos",
      subtitle: "Deflexión Electromagnética",
      status: "NORMAL",
      image: "/assets/matriz_escudos.webp",
      description: "Generadores de campos de fuerza de polaridad invertida contra radiación cósmica y micrometeoritos.",
      stats: { energy: "89%", temperature: "45.0°C", pressure: "1.00 atm", crew: "Remoto" }
    }
  ] as SectorItem[],
  soundtracks: [
    {
      title: "Evolution of the Machine",
      artist: "Omnivis Aerospace Lab",
      duration: "03:27",
      quality: "320 kbps High Definition Stereo",
      file: "/assets/evolution_of_the_machine.mp3",
      isMainTheme: true
    },
    {
      title: "Beautiful Void",
      artist: "Omnivis Aerospace Lab",
      duration: "04:12",
      quality: "320 kbps High Definition Stereo",
      file: "/assets/Beautiful Void.mp3",
      isMainTheme: false
    },
    {
      title: "Deep Space Arpeggio",
      artist: "Omnivis Aerospace Lab",
      duration: "02:45",
      quality: "320 kbps High Definition Stereo",
      file: "/assets/Deep Space Arpeggio.mp3",
      isMainTheme: false
    }
  ]
};
