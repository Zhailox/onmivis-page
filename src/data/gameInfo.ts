export interface GameFeature {
  title: string;
  category: string;
  description: string;
  tag: string;
  icon: string;
}

export interface SectorItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
}

export const GAME_INFO = {
  title: "ESTACIÓN VERSALLES",
  subtitle: "Simulador de Ingeniería Aeroespacial & Programación Orbital",
  description: "Toma el control de un complejo orbital en el espacio profundo. Enfrenta crisis críticas de sistemas, comanda naves y estabiliza reactores mediante programación en Python y Java en una consola interactiva bilingüe.",
  vercelUrl: "https://estacion-versalles.vercel.app/",
  githubRepo: "https://github.com/Zhailox/estacion-versalles",
  features: [
    {
      title: "Consola Interactiva UNIX",
      category: "CONTROL AVANZADO",
      description: "Navega, inspecciona registros y ejecuta diagnósticos con herramientas reales como `cat`, `grep`, `nano`, `python` y `javac`.",
      tag: "TERMINAL REAL",
      icon: "Terminal"
    },
    {
      title: "Programación en Python & Java",
      category: "RESOLUCIÓN DE CRISIS",
      description: "Escribe scripts para estabilizar el reactor, redistribuir energía a los escudos o calcular vectores orbitales en tiempo real.",
      tag: "SCRIPTS EN VIVO",
      icon: "Code2"
    },
    {
      title: "Exploración Interplanetaria",
      category: "CARTOGRAFÍA ESPACIAL",
      description: "Viaja entre la Estación Versalles, el Acorazado Hyperion, la base Titán-IV y el Observatorio Helios a través del mapa estelar.",
      tag: "MULTISECTOR",
      icon: "Compass"
    },
    {
      title: "Emergencias en Tiempo Real",
      category: "SUPERVIVENCIA TÁCTICA",
      description: "Sobrevive a tormentas solares, sobrecargas de plasma, decaimiento de órbita e inyecciones de código malicioso.",
      tag: "MODO CRISIS",
      icon: "AlertTriangle"
    }
  ] as GameFeature[],
  sectors: [
    {
      id: "puente",
      name: "Puente de Navegación",
      subtitle: "Centro de Mando & Control",
      image: "/assets/puente_navegacion.webp",
      description: "El corazón estratégico de la estación. Desde aquí se monitorean las comunicaciones interestelares y se coordinan las maniobras de propulsión."
    },
    {
      id: "reactor",
      name: "Núcleo de Fusión",
      subtitle: "Generación de Potencia de Plasma",
      image: "/assets/vista_nucleo_reactor.webp",
      description: "Generador nuclear toroidal que abastece de energía a todos los sistemas vitales. Requiere balance térmico preciso para evitar sobrecargas."
    },
    {
      id: "datos",
      name: "Laboratorio de Datos",
      subtitle: "Ciberseguridad y Telecomunicaciones",
      image: "/assets/vista_laboratorio_datos.webp",
      description: "Subred principal de aviónica. Aquí se auditan los cortafuegos y se ejecutan las pruebas de seguridad del software orbital."
    },
    {
      id: "drones",
      name: "Bahía de Drones",
      subtitle: "Mantenimiento Exterior y Exploración",
      image: "/assets/estacion_drones.webp",
      description: "Hangar presurizado que despliega unidades autónomas para inspecciones de casco y recolección de muestras en el vacío."
    },
    {
      id: "escudos",
      name: "Matriz de Escudos",
      subtitle: "Defensa Electromagnética",
      image: "/assets/matriz_escudos.webp",
      description: "Campos de dispersión iónica que protegen a la tripulación contra radiación estelar de alta energía y micrometeoritos."
    }
  ] as SectorItem[]
};
