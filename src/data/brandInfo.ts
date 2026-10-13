export interface BrandPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  stats: string;
  accent: string;
}

export const BRAND_INFO = {
  name: "OMNIVIS",
  slogan: "INTELLIGENCE QUI TRANSFORME VOTRE ENVIRONNEMENT",
  subheading: "Laboratorio de Innovación Tecnológica & Entretenimiento Científico",
  manifesto: [
    "En Omnivis fusionamos el rigor de la ingeniería aeroespacial con interfaces interactivas de vanguardia.",
    "Creemos en el software determinista, la resiliencia operativa y la democratización del aprendizaje técnico sin intermediarios opacos ni modelos inflados.",
    "Nuestras soluciones transforman el entorno digital en un campo de experimentación soberano y de alto rendimiento."
  ],
  links: {
    instagram: "https://www.instagram.com/omnivislabs?rpxt=MTkzbWoxMW95bHc5dA==",
    tiktok: "https://tiktok.com/@omnivislabs",
    githubRepo: "https://github.com/Zhailox/onmivis-page.git",
    gameVercel: "https://estacion-versalles.vercel.app/"
  },
  pillars: [
    {
      id: "sovereignty",
      title: "Soberanía & Cero Bloat",
      tagline: "Arquitectura Determinista",
      description: "Sistemas concebidos para operar sin recolección de datos personales, sin dependencias en la nube y con máxima eficiencia computacional.",
      iconName: "ShieldCheck",
      stats: "0% Telemetría Invasiva",
      accent: "#00F5FF"
    },
    {
      id: "hard-scifi",
      title: "Ciencia Ficción Dura",
      tagline: "Física & Aviónica Realista",
      description: "Simulaciones basadas en principios reales de termodinámica, empuje orbital, gestión de potencia y propagación de pulsos iónicos.",
      iconName: "Orbit",
      stats: "100% Simulación Física",
      accent: "#835F9E"
    },
    {
      id: "pedagogy",
      title: "Ingeniería Pedagógica",
      tagline: "Aprender Programando",
      description: "Entornos donde escribir scripts en Python o Java no es un ejercicio académico estéril, sino el único medio para evitar el colapso del reactor.",
      iconName: "Terminal",
      stats: "+50 Desafíos Lógicos",
      accent: "#00F5FF"
    },
    {
      id: "resilience",
      title: "Resiliencia Extrema",
      tagline: "Rendimiento Universal",
      description: "Diseñado para funcionar tanto en computadoras de última generación como en terminales escolares de recursos limitados.",
      iconName: "Cpu",
      stats: "< 4GB RAM Requerida",
      accent: "#A378C6"
    }
  ] as BrandPillar[]
};
