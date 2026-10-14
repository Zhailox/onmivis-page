export type Language = "es" | "fr";

export interface Translations {
  nav: {
    omnivis: string;
    game: string;
    features: string;
    sectors: string;
    soundtrack: string;
    playNow: string;
  };
  brand: {
    badge: string;
    titleSuffix: string;
    slogan: string;
    description: string;
    pillars: {
      hardScifiTitle: string;
      hardScifiDesc: string;
      logicTitle: string;
      logicDesc: string;
      designTitle: string;
      designDesc: string;
      performanceTitle: string;
      performanceDesc: string;
    };
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleSuffix: string;
    subtitle: string;
    description: string;
    playVercel: string;
    sourceGithub: string;
    launchSimulator: string;
  };
  features: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    items: {
      unixTitle: string;
      unixCategory: string;
      unixDesc: string;
      unixTag: string;
      codeTitle: string;
      codeCategory: string;
      codeDesc: string;
      codeTag: string;
      exploreTitle: string;
      exploreCategory: string;
      exploreDesc: string;
      exploreTag: string;
      crisisTitle: string;
      crisisCategory: string;
      crisisDesc: string;
      crisisTag: string;
    };
    crisisBanner: {
      badge: string;
      title: string;
      description: string;
      cta: string;
    };
  };
  sectors: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    destinationsBadge: string;
    destinations: {
      hyperionType: string;
      heliosType: string;
      titanType: string;
      solarType: string;
    };
    items: Record<string, {
      name: string;
      subtitle: string;
      description: string;
    }>;
  };
  soundtrack: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    description: string;
    play: string;
    pause: string;
    trackTitle: string;
  };
  launchCta: {
    titlePrefix: string;
    titleAccent: string;
    description: string;
    cta: string;
  };
  footer: {
    slogan: string;
    rights: string;
    gameRepoLink: string;
    playVercelLink: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      omnivis: "Omnivis",
      game: "El Juego",
      features: "Mecánicas",
      sectors: "Sectores",
      soundtrack: "Soundtrack",
      playNow: "JUGAR"
    },
    brand: {
      badge: "ESTUDIO & VISIÓN",
      titleSuffix: "LABS",
      slogan: "INTELLIGENCE QUI TRANSFORME VOTRE ENVIRONNEMENT",
      description: "En Omnivis creamos mundos interactivos que combinan ciencia ficción, desafíos lógicos y tecnología de vanguardia. Diseñamos experiencias memorables donde cada decisión importa.",
      pillars: {
        hardScifiTitle: "Ciencia Ficción Inmersiva",
        hardScifiDesc: "Universos espaciales detallados con atmósferas envolventes, naves imponentes y sonido cinematográfico.",
        logicTitle: "Desafío y Lógica Real",
        logicDesc: "Mecánicas tácticas donde la resolución de problemas y el código real son el motor de supervivencia.",
        designTitle: "Diseño & Vanguardia",
        designDesc: "Interfaces futuristas inspiradas en la alta aviónica, pensadas para fascinar al usuario en cada interacción.",
        performanceTitle: "Rendimiento Web Instantáneo",
        performanceDesc: "Tecnología web moderna que carga en segundos y corre fluido en cualquier dispositivo sin instalaciones."
      }
    },
    hero: {
      badge: "VIDEOJUEGO OFICIAL // DISPONIBLE EN LÍNEA",
      titlePrefix: "ESTACIÓN",
      titleSuffix: "VERSALLES",
      subtitle: "Simulador de Ingeniería Aeroespacial & Programación Orbital",
      description: "Toma el control de un complejo orbital en el espacio profundo. Enfrenta crisis críticas de sistemas, comanda naves y estabiliza reactores mediante programación en Python y Java en una consola interactiva bilingüe.",
      playVercel: "JUGAR",
      sourceGithub: "CÓDIGO FUENTE (GITHUB)",
      launchSimulator: "INICIAR SIMULADOR"
    },
    features: {
      badge: "JUGABILIDAD & SISTEMAS",
      title: "Mecánicas de",
      titleAccent: "Ingeniería Orbital",
      subtitle: "Una experiencia técnica inmersiva donde el código real y el pensamiento crítico son la clave para mantener la estación con vida.",
      items: {
        unixTitle: "Consola Interactiva UNIX",
        unixCategory: "CONTROL AVANZADO",
        unixDesc: "Navega, inspecciona registros y ejecuta diagnósticos con herramientas reales como cat, grep, nano, python y javac.",
        unixTag: "TERMINAL REAL",
        codeTitle: "Programación en Python & Java",
        codeCategory: "RESOLUCIÓN DE CRISIS",
        codeDesc: "Escribe scripts para estabilizar el reactor, redistribuir energía a los escudos o calcular vectores orbitales en tiempo real.",
        codeTag: "SCRIPTS EN VIVO",
        exploreTitle: "Exploración Interplanetaria",
        exploreCategory: "CARTOGRAFÍA ESPACIAL",
        exploreDesc: "Viaja entre la Estación Versalles, el Acorazado Hyperion, la base Titán-IV y el Observatorio Helios a través del mapa estelar.",
        exploreTag: "MULTISECTOR",
        crisisTitle: "Emergencias en Tiempo Real",
        crisisCategory: "SUPERVIVENCIA TÁCTICA",
        crisisDesc: "Sobrevive a tormentas solares, sobrecargas de plasma, decaimiento de órbita e inyecciones de código malicioso.",
        crisisTag: "MODO CRISIS"
      },
      crisisBanner: {
        badge: "MODO CRISIS EN TIEMPO REAL",
        title: "Gestiona fallas térmicas y hackeos antes de que sea tarde",
        description: "Fusión de plasma, desestabilización magnética y decaimiento orbital pondrán a prueba tu velocidad y conocimiento.",
        cta: "ENFRENTAR CRISIS"
      }
    },
    sectors: {
      badge: "COMPARTIMENTOS ORBITALES",
      title: "Sectores de la",
      titleAccent: "Estación",
      subtitle: "Explora las áreas operativas clave a bordo del complejo orbital.",
      cta: "EXPLORAR EN EL JUEGO",
      destinationsBadge: "DESTINOS CARTOGRAFIADOS",
      destinations: {
        hyperionType: "Nave Militar",
        heliosType: "Observatorio Solar",
        titanType: "Base Minera",
        solarType: "Órbita Exterior"
      },
      items: {
        puente: {
          name: "Puente de Navegación",
          subtitle: "Centro de Mando & Control",
          description: "El corazón estratégico de la estación. Desde aquí se monitorean las comunicaciones interestelares y se coordinan las maniobras de propulsión."
        },
        reactor: {
          name: "Núcleo de Fusión",
          subtitle: "Generación de Potencia de Plasma",
          description: "Generador nuclear toroidal que abastece de energía a todos los sistemas vitales. Requiere balance térmico preciso para evitar sobrecargas."
        },
        datos: {
          name: "Laboratorio de Datos",
          subtitle: "Ciberseguridad y Telecomunicaciones",
          description: "Subred principal de aviónica. Aquí se auditan los cortafuegos y se ejecutan las pruebas de seguridad del software orbital."
        },
        drones: {
          name: "Bahía de Drones",
          subtitle: "Mantenimiento Exterior y Exploración",
          description: "Hangar presurizado que despliega unidades autónomas para inspecciones de casco y recolección de muestras en el vacío."
        },
        escudos: {
          name: "Matriz de Escudos",
          subtitle: "Defensa Electromagnética",
          description: "Campos de dispersión iónica que protegen a la tripulación contra radiación estelar de alta energía y micrometeoritos."
        }
      }
    },
    soundtrack: {
      badge: "BANDA SONORA OFICIAL",
      titlePrefix: "Evolution of the",
      titleAccent: "Machine",
      description: "Música ambiental de ciencia ficción espacial compuesta para mantener el ritmo y la inmersión en la estación.",
      play: "REPRODUCIR",
      pause: "PAUSAR",
      trackTitle: "Evolution of the Machine"
    },
    launchCta: {
      titlePrefix: "¿Listo para asumir el",
      titleAccent: "Mando de la Estación?",
      description: "Ingresa al simulador directamente desde tu navegador. Sin descargas ni registros previos.",
      cta: "JUGAR"
    },
    footer: {
      slogan: "INTELLIGENCE QUI TRANSFORME VOTRE ENVIRONNEMENT",
      rights: "Todos los derechos reservados.",
      gameRepoLink: "GitHub (Estación Versalles)",
      playVercelLink: "Jugar"
    }
  },
  fr: {
    nav: {
      omnivis: "Omnivis",
      game: "Le Jeu",
      features: "Mécaniques",
      sectors: "Secteurs",
      soundtrack: "Bande-Son",
      playNow: "JOUER"
    },
    brand: {
      badge: "STUDIO & VISION",
      titleSuffix: "LABS",
      slogan: "INTELLIGENCE QUI TRANSFORME VOTRE ENVIRONNEMENT",
      description: "Chez Omnivis, nous créons des univers interactifs alliant science-fiction, défis logiques et technologies d'avant-garde. Nous concevons des expériences mémorables où chaque décision compte.",
      pillars: {
        hardScifiTitle: "Science-Fiction Immersive",
        hardScifiDesc: "Des univers spatiaux détaillés avec des atmosphères captivantes, des vaisseaux imposants et une acoustique cinématographique.",
        logicTitle: "Défi & Vraie Logique",
        logicDesc: "Des mécaniques tactiques où la résolution de problèmes et le code réel constituent le moteur de survie.",
        designTitle: "Design & Avant-Garde",
        designDesc: "Des interfaces futuristes inspirées de la haute avionique, pensées pour fasciner l'utilisateur à chaque interaction.",
        performanceTitle: "Performance Web Instantanée",
        performanceDesc: "Une technologie web moderne qui charge en quelques secondes et fonctionne fluidement sur tout appareil sans installation."
      }
    },
    hero: {
      badge: "JEU VIDÉO OFFICIEL // DISPONIBLE EN LIGNE",
      titlePrefix: "STATION",
      titleSuffix: "VERSAILLES",
      subtitle: "Simulateur d'Ingénierie Aérospatiale & Programmation Orbitale",
      description: "Prenez les commandes d'un complexe orbital au cœur de l'espace profond. Affrontez des pannes critiques, pilotez des vaisseaux et stabilisez des réacteurs grâce à la programmation Python et Java sur console interactive bilingue.",
      playVercel: "JOUER",
      sourceGithub: "CODE SOURCE (GITHUB)",
      launchSimulator: "LANCER LE SIMULATEUR"
    },
    features: {
      badge: "GAMEPLAY & SYSTÈMES",
      title: "Mécaniques d'",
      titleAccent: "Ingénierie Orbitale",
      subtitle: "Une expérience technique immersive où la programmation réelle et l'esprit critique sont essentiels pour préserver la vie à bord.",
      items: {
        unixTitle: "Console Interactive UNIX",
        unixCategory: "CONTRÔLE AVANCÉ",
        unixDesc: "Naviguez, inspectez les journaux et exécutez des diagnostics avec des outils réels tels que cat, grep, nano, python et javac.",
        unixTag: "TERMINAL RÉEL",
        codeTitle: "Programmation Python & Java",
        codeCategory: "RÉSOLUTION DE CRISES",
        codeDesc: "Rédigez des scripts pour stabiliser le réacteur, réacheminer l'énergie vers les boucliers ou calculer des vecteurs orbitaux en temps réel.",
        codeTag: "SCRIPTS EN DIRECT",
        exploreTitle: "Exploration Interplanétaire",
        exploreCategory: "CARTOGRAPHIE SPATIALE",
        exploreDesc: "Naviguez entre la Station Versailles, le Cuirassé Hyperion, le Poste Titan-IV et l'Observatoire Hélios via la carte stellaire.",
        exploreTag: "MULTISECTEUR",
        crisisTitle: "Urgences en Temps Réel",
        crisisCategory: "SURVIE TACTIQUE",
        crisisDesc: "Survivez aux tempêtes solaires, surcharges de plasma, décrochages d'orbite et injections de codes malveillants.",
        crisisTag: "MODE CRISE"
      },
      crisisBanner: {
        badge: "MODE CRISE EN TEMPS RÉEL",
        title: "Gérez les avaries thermiques et intrusions avant le point de rupture",
        description: "Fusion de plasma, déstabilisation magnétique et décrochage orbital mettront à l'épreuve votre réactivité et vos compétences.",
        cta: "AFFRONTER LA CRISE"
      }
    },
    sectors: {
      badge: "COMPARTIMENTS ORBITAUX",
      title: "Secteurs de la",
      titleAccent: "Station",
      subtitle: "Explorez les zones opérationnelles stratégiques à bord du complexe orbital.",
      cta: "EXPLORER DANS LE JEU",
      destinationsBadge: "DESTINATIONS CARTOGRAPHIÉES",
      destinations: {
        hyperionType: "Vaisseau Militaire",
        heliosType: "Observatoire Solaire",
        titanType: "Base Minière",
        solarType: "Orbite Extérieure"
      },
      items: {
        puente: {
          name: "Passerelle de Commandement",
          subtitle: "Centre de Contrôle & Navigation",
          description: "Le cœur stratégique de la station. C'est ici que l'on supervise les transmissions interstellaires et coordonne les manœuvres de poussée."
        },
        reactor: {
          name: "Cœur de Fusion",
          subtitle: "Génération d'Énergie Plasma",
          description: "Générateur nucléaire toroïdal alimentant tous les systèmes vitaux. Exige un équilibre thermique rigoureux pour éviter la surchauffe."
        },
        datos: {
          name: "Laboratoire de Données",
          subtitle: "Cybersécurité & Télécommunications",
          description: "Sous-réseau principal de l'avionique. C'est ici que sont audités les pare-feux et validés les protocoles logiciels orbitaux."
        },
        drones: {
          name: "Baie de Drones",
          subtitle: "Maintenance Extérieure & Reconnaissance",
          description: "Hangar pressurisé déployant des unités autonomes pour l'inspection de la coque et la collecte d'échantillons dans le vide."
        },
        escudos: {
          name: "Matrice de Boucliers",
          subtitle: "Défense Electromagnétique",
          description: "Champs de dispersion ionique protégeant l'équipage contre le rayonnement stellaire à haute énergie et les micrométéorites."
        }
      }
    },
    soundtrack: {
      badge: "BANDE ORIGINALE OFFICIELLE",
      titlePrefix: "Evolution of the",
      titleAccent: "Machine",
      description: "Musique d'ambiance spatiale conçue pour maintenir le rythme et l'immersion complète dans la station.",
      play: "LECTURE",
      pause: "PAUSE",
      trackTitle: "Evolution of the Machine"
    },
    launchCta: {
      titlePrefix: "Prêt à prendre les",
      titleAccent: "Commandes de la Station ?",
      description: "Lancez le simulateur directement depuis votre navigateur. Sans téléchargement ni inscription.",
      cta: "JOUER"
    },
    footer: {
      slogan: "INTELLIGENCE QUI TRANSFORME VOTRE ENVIRONNEMENT",
      rights: "Tous droits réservés.",
      gameRepoLink: "GitHub (Station Versailles)",
      playVercelLink: "Jouer"
    }
  }
};
