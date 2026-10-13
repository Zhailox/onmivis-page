export interface BrandPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const BRAND_INFO = {
  name: "OMNIVIS",
  slogan: "INTELLIGENCE QUI TRANSFORME VOTRE ENVIRONNEMENT",
  subheading: "Estudio de Desarrollo y Experiencias Digitales Inmersivas",
  description: "En Omnivis creamos mundos interactivos que combinan ciencia ficción, desafíos lógicos y tecnología de vanguardia. Diseñamos experiencias memorables donde cada decisión importa.",
  links: {
    instagram: "https://www.instagram.com/omnivislabs?rpxt=MTkzbWoxMW95bHc5dA==",
    tiktok: "https://tiktok.com/@omnivislabs",
    githubRepo: "https://github.com/Zhailox/estacion-versalles",
    gameVercel: "https://estacion-versalles.vercel.app/"
  },
  pillars: [
    {
      id: "hard-scifi",
      title: "Ciencia Ficción Inmersiva",
      description: "Universos espaciales detallados con atmósferas envolventes, naves imponentes y sonido cinematográfico.",
      iconName: "Orbit"
    },
    {
      id: "logic",
      title: "Desafío y Lógica Real",
      description: "Mecánicas tácticas donde la resolución de problemas y el código real son el motor de supervivencia.",
      iconName: "Terminal"
    },
    {
      id: "design",
      title: "Diseño & Vanguardia",
      description: "Interfaces futuristas inspiradas en la alta aviónica, pensadas para fascinar al usuario en cada interacción.",
      iconName: "Sparkles"
    },
    {
      id: "performance",
      title: "Rendimiento Web Instantáneo",
      description: "Tecnología web moderna que carga en segundos y corre fluido en cualquier dispositivo sin instalaciones.",
      iconName: "Zap"
    }
  ] as BrandPillar[]
};
