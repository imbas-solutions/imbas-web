export type Locale = "es" | "en";

export interface Dictionary {
  header: {
    philosophy: string;
    capabilities: string;
    estimate: string;
    initProject: string;
  };
  hero: {
    eyebrow: string;
    /** Headline split into words for the staggered reveal */
    headlineWords: string[];
    /** Index of the word rendered with the gradient accent */
    highlightIndex: number;
    sub: string;
    ctaDemo: string;
    ctaExplore: string;
    scroll: string;
    dash: {
      live: string;
      efficiency: string;
      response: string;
      performance: string;
      window: string;
      agents: { data: string; ui: string; qa: string };
      states: { synced: string; adapting: string; verifying: string };
    };
  };
  niche: {
    /** Marketing labels for the phase navigation rail */
    rail: [string, string, string];
    phaseA: {
      eyebrow: string;
      title: string;
      chat1: string;
      chat1Meta: string;
      dashTitle: string;
      adaptiveBadge: string;
      months: [string, string, string, string, string, string];
      adaptedNote: string;
      chat2: string;
    };
    phaseB: {
      eyebrow: string;
      title: string;
      sub: string;
      pillars: { title: string; desc: string; chips: string[] }[];
    };
    phaseC: {
      eyebrow: string;
      title: string;
      services: { title: string; desc: string }[];
      caption: string;
    };
  };
  footer: {
    tagline: string;
    agentEndpoint: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  cta: {
    title: string;
    introLead: string;
    introFree: string;
    introTail: string;
    step1Title: string;
    typeDesc: string;
    step2Title: string;
    scopeDesc: { mvp: string; growth: string; enterprise: string };
    step3Title: string;
    continue: string;
    calculate: string;
    back: string;
    editFeatures: string;
    analysisTitle: string;
    complexityTier: string;
    level: string;
    agenticIntegration: string;
    scalabilityIndex: string;
    high: string;
    standard: string;
    maximum: string;
    flexible: string;
    contactTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    projectLabel: string;
    projectPlaceholder: string;
    submit: string;
  };
}

const es: Dictionary = {
  header: {
    philosophy: "Filosofía",
    capabilities: "Capacidades",
    estimate: "Estimación",
    initProject: "Iniciar Proyecto",
  },
  hero: {
    eyebrow: "Imbas Solutions · Ingeniería AI-First",
    headlineWords: ["Software", "que", "Aprende,", "se", "Adapta", "y", "Piensa."],
    highlightIndex: 4,
    sub: "Imbas Solutions lidera el futuro de la arquitectura inteligente, fusionando Agentic UX con frameworks de software auto-modificable.",
    ctaDemo: "Agenda una demo",
    ctaExplore: "Explora el ecosistema",
    scroll: "Scroll",
    dash: {
      live: "LIVE",
      efficiency: "Eficiencia",
      response: "Respuesta",
      performance: "Rendimiento del sistema",
      window: "24h",
      agents: { data: "Agente de datos", ui: "Agente de UI", qa: "Agente de QA" },
      states: { synced: "sincronizado", adapting: "adaptando", verifying: "verificando" },
    },
  },
  niche: {
    rail: ["Adaptabilidad", "Confianza", "Tecnología"],
    phaseA: {
      eyebrow: "01 · Adaptabilidad",
      title: "Experiencias Autoadaptativas",
      chat1: "“Quiero un reporte de ventas del último mes, comparado con el año anterior.”",
      chat1Meta: "09:41 · CEO",
      dashTitle: "Ventas (YoY)",
      adaptiveBadge: "ADAPTIVE",
      months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      adaptedNote: "Panel reorganizado según tus preferencias",
      chat2: "¡Reporte generado! He adaptado el panel a tus preferencias de visualización.",
    },
    phaseB: {
      eyebrow: "02 · Confianza",
      title: "Confianza Empresarial",
      sub: "Cimientos sólidos para entornos corporativos exigentes.",
      pillars: [
        {
          title: "Migración de Datos",
          desc: "Transiciones seguras, sin pérdida de información y con integridad garantizada para sistemas de misión crítica.",
          chips: ["Zero downtime", "Integridad total"],
        },
        {
          title: "Guard Rails para IA",
          desc: "Políticas estrictas y barreras de seguridad para que los modelos operen dentro de parámetros corporativos.",
          chips: ["Compliance", "Auditable"],
        },
        {
          title: "Integración Legacy",
          desc: "Conectamos infraestructuras antiguas con procesos AI-First sin interrumpir la operación del negocio.",
          chips: ["SLA 99.99%", "Sin fricción"],
        },
      ],
    },
    phaseC: {
      eyebrow: "03 · Tecnología",
      title: "Profundidad Tecnológica",
      services: [
        { title: "Apps Web y Móviles", desc: "iOS/Android nativo y PWA." },
        { title: "Infraestructura Cloud", desc: "Arquitecturas escalables." },
        { title: "Seguridad para IA", desc: "Protección de datos empresariales." },
        { title: "Sistemas Multiagente", desc: "Integración de modelos dispares." },
        { title: "Modernización Legacy", desc: "Evolución de sistemas a AI-First." },
        { title: "Pipelines de Datos", desc: "Sin cuellos de botella ni latencia." },
      ],
      caption: "Un solo núcleo · Infinitas ramas",
    },
  },
  footer: {
    tagline: "Software que Aprende, se Adapta y Piensa.",
    agentEndpoint: "Endpoint de Agentes",
    privacy: "Protocolo de Privacidad",
    terms: "Términos de Servicio",
    rights: "Todos los derechos reservados.",
  },
  cta: {
    title: "Inicia tu Arquitectura",
    introLead: "Define tu alcance y recibe una estimación estructural al instante. ",
    introFree: "Esta herramienta es totalmente gratuita",
    introTail: ", así que explora distintas opciones y descubre lo que podemos construir para ti.",
    step1Title: "1. Selecciona el Tipo de Proyecto",
    typeDesc: "Cimientos inteligentes para productos de nueva generación.",
    step2Title: "2. Define el Nivel de Alcance",
    scopeDesc: {
      mvp: "Funciones esenciales para validar el mercado.",
      growth: "Arquitectura escalable para una base de usuarios en expansión.",
      enterprise: "Sistemas de misión crítica y alta disponibilidad.",
    },
    step3Title: "3. Selecciona Funcionalidades Clave",
    continue: "Continuar",
    calculate: "Calcular Estructura",
    back: "← Volver",
    editFeatures: "← Editar Funcionalidades",
    analysisTitle: "Análisis Estructural",
    complexityTier: "Nivel de Complejidad Estimado",
    level: "Nivel",
    agenticIntegration: "Integración Agéntica",
    scalabilityIndex: "Índice de Escalabilidad",
    high: "Alta",
    standard: "Estándar",
    maximum: "Máximo",
    flexible: "Flexible",
    contactTitle: "Protocolo de Contacto",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    projectLabel: "Cuéntanos más sobre lo que quieres lograr",
    projectPlaceholder: "Describe tu visión, requisitos o cualquier detalle específico...",
    submit: "Iniciar Construcción del Sistema",
  },
};

const en: Dictionary = {
  header: {
    philosophy: "Philosophy",
    capabilities: "Capabilities",
    estimate: "Estimate",
    initProject: "Initialize Project",
  },
  hero: {
    eyebrow: "Imbas Solutions · AI-First Engineering",
    headlineWords: ["Software", "that", "Learns,", "Adapts,", "and", "Thinks."],
    highlightIndex: 3,
    sub: "Imbas Solutions pioneers the future of intelligent architecture, fusing Agentic UX with self-modifying software frameworks.",
    ctaDemo: "Book a demo",
    ctaExplore: "Explore the ecosystem",
    scroll: "Scroll",
    dash: {
      live: "LIVE",
      efficiency: "Efficiency",
      response: "Response",
      performance: "System performance",
      window: "24h",
      agents: { data: "Data agent", ui: "UI agent", qa: "QA agent" },
      states: { synced: "synced", adapting: "adapting", verifying: "verifying" },
    },
  },
  niche: {
    rail: ["Adaptability", "Trust", "Technology"],
    phaseA: {
      eyebrow: "01 · Adaptability",
      title: "Self-Adaptive Experiences",
      chat1: "“I want a sales report for last month, compared with the previous year.”",
      chat1Meta: "09:41 · CEO",
      dashTitle: "Sales (YoY)",
      adaptiveBadge: "ADAPTIVE",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      adaptedNote: "Panel reorganized to match your preferences",
      chat2: "Report generated! I've adapted the panel to your visualization preferences.",
    },
    phaseB: {
      eyebrow: "02 · Trust",
      title: "Enterprise Trust",
      sub: "Solid foundations for demanding corporate environments.",
      pillars: [
        {
          title: "Data Migration",
          desc: "Safe transitions with zero information loss and guaranteed integrity for mission-critical systems.",
          chips: ["Zero downtime", "Full integrity"],
        },
        {
          title: "AI Guard Rails",
          desc: "Strict policies and safety barriers so models operate within corporate parameters.",
          chips: ["Compliance", "Auditable"],
        },
        {
          title: "Legacy Integration",
          desc: "We connect existing infrastructure with AI-First processes without disrupting business operations.",
          chips: ["SLA 99.99%", "Frictionless"],
        },
      ],
    },
    phaseC: {
      eyebrow: "03 · Technology",
      title: "Technological Depth",
      services: [
        { title: "Web & Mobile Apps", desc: "Native iOS/Android and PWA." },
        { title: "Cloud Infrastructure", desc: "Scalable architectures." },
        { title: "AI Security", desc: "Enterprise data protection." },
        { title: "Multi-Agent Systems", desc: "Integrating disparate models." },
        { title: "Legacy Modernization", desc: "AI-First system upgrades." },
        { title: "Data Pipelines", desc: "No bottlenecks, no latency." },
      ],
      caption: "One core · Infinite branches",
    },
  },
  footer: {
    tagline: "Software that Learns, Adapts, and Thinks.",
    agentEndpoint: "Agent Endpoint",
    privacy: "Privacy Protocol",
    terms: "Terms of Service",
    rights: "All rights reserved.",
  },
  cta: {
    title: "Initiate Your Architecture",
    introLead: "Define your scope and receive an instant structural estimation. ",
    introFree: "This tool is completely free of charge",
    introTail: ", so feel free to explore different options and discover what we can build for you.",
    step1Title: "1. Select Project Type",
    typeDesc: "Intelligent foundations for next-gen products.",
    step2Title: "2. Define Scope Level",
    scopeDesc: {
      mvp: "Core features to validate market fit.",
      growth: "Scalable architecture for expanding user base.",
      enterprise: "Mission-critical, high-availability systems.",
    },
    step3Title: "3. Select Key Features",
    continue: "Continue",
    calculate: "Calculate Structure",
    back: "← Back",
    editFeatures: "← Edit Features",
    analysisTitle: "Structural Analysis",
    complexityTier: "Estimated Complexity Tier",
    level: "Level",
    agenticIntegration: "Agentic Integration",
    scalabilityIndex: "Scalability Index",
    high: "High",
    standard: "Standard",
    maximum: "Maximum",
    flexible: "Flexible",
    contactTitle: "Engage Protocol",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    projectLabel: "Tell us more about what you want to achieve",
    projectPlaceholder: "Describe your vision, requirements, or any specific details...",
    submit: "Initialize System Build",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
