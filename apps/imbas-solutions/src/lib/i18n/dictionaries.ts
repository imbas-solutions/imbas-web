export type Locale = "es" | "en";

export interface Dictionary {
  header: {
    philosophy: string;
    capabilities: string;
    estimate: string;
    initProject: string;
    /** Accessible label for the light/night theme switch */
    themeToggle: string;
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
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Order must match the `capabilityIcons` array in Capabilities.tsx */
    items: { title: string; desc: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Order must match the `processIcons` array in About.tsx */
    process: { title: string; desc: string }[];
    tiersTitle: string;
    tiers: { name: string; range: string; desc: string }[];
    tiersNote: string;
  };
  footer: {
    tagline: string;
    agentEndpoint: string;
    email: string;
    rights: string;
  };
  cta: {
    title: string;
    introLead: string;
    introFree: string;
    introTail: string;
    skipToForm: string;
    step1Title: string;
    /** Labels only — the underlying ProjectType values stay English (sent to the API) */
    types: { label: string; desc: string }[];
    step2Title: string;
    scopeDesc: { mvp: string; growth: string; enterprise: string };
    step3Title: string;
    /** Labels only — the underlying feature values stay English (sent to the API) */
    features: [string, string, string, string, string, string];
    continue: string;
    calculate: string;
    back: string;
    editFeatures: string;
    snapshotTitle: string;
    complexityTier: string;
    level: string;
    agenticIntegration: string;
    scalabilityIndex: string;
    high: string;
    standard: string;
    maximum: string;
    flexible: string;
    disclaimer: string;
    contactTitle: string;
    successMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    projectLabel: string;
    projectPlaceholder: string;
    errorSuffix: string;
    sending: string;
    submit: string;
  };
}

const es: Dictionary = {
  header: {
    philosophy: "Filosofía",
    capabilities: "Capacidades",
    estimate: "Estimación",
    initProject: "Iniciar Proyecto",
    themeToggle: "Cambiar tema",
  },
  hero: {
    eyebrow: "Imbas Solutions · Agentes de IA que Funcionan",
    headlineWords: ["Software", "que", "Aprende,", "se", "Adapta", "y", "Piensa."],
    highlightIndex: 4,
    sub: "Imbas Solutions construye agentes de IA y automatizaciones que hacen trabajo real — junto con las apps móviles, la infraestructura cloud y los sistemas legacy sobre los que operan.",
    ctaDemo: "Agenda una llamada",
    ctaExplore: "Mira lo que construimos",
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
      chat1: "“Quiero el reporte de ventas del último mes, comparado con el mismo mes del año pasado.”",
      chat1Meta: "09:41 · CEO",
      dashTitle: "Ventas (YoY)",
      adaptiveBadge: "ADAPTIVE",
      months: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      adaptedNote: "Panel reorganizado según tus preferencias",
      chat2: "¡Reporte generado! Adapté el panel a tus preferencias de visualización.",
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
          title: "Guardrails para IA",
          desc: "Políticas estrictas y barreras de seguridad para que los modelos operen dentro de parámetros corporativos.",
          chips: ["Compliance", "Auditable"],
        },
        {
          title: "Integración Legacy",
          desc: "Conectamos infraestructura legacy con flujos AI-first sin interrumpir la operación del negocio.",
          chips: ["SLA 99.99%", "Sin fricción"],
        },
      ],
    },
    phaseC: {
      eyebrow: "03 · Tecnología",
      title: "Profundidad Tecnológica",
      services: [
        { title: "Agentes de IA y Automatización", desc: "Agentes que resuelven soporte, operaciones y trabajo de datos real." },
        { title: "Modernización Legacy", desc: "Actualizaciones AI-ready para los sistemas que ya operas." },
        { title: "Apps Web y Móviles", desc: "iOS/Android nativo y PWA." },
        { title: "Infraestructura Cloud", desc: "Arquitecturas escalables." },
        { title: "Seguridad para IA", desc: "Protección de datos empresariales." },
        { title: "Pipelines de Datos", desc: "Sin cuellos de botella ni latencia." },
      ],
      caption: "Un solo núcleo · Infinitas ramas",
    },
  },
  capabilities: {
    eyebrow: "Lo que construimos",
    title: "Capacidades",
    intro:
      "Imbas Solutions es una software factory liderada por su fundador, trabajando con equipos de EE. UU. y Canadá. La mayoría de los proyectos van de $10k a $50k, desde una integración puntual de agentes de IA hasta una modernización completa.",
    items: [
      {
        title: "Agentes de IA y Automatización",
        desc: "Conectamos las herramientas de IA que ya pagas con tus flujos de trabajo reales — soporte, operaciones, carga de datos — para que produzcan resultados, no demos.",
      },
      {
        title: "Modernización Legacy y Guardrails de IA",
        desc: "Lleva la IA a tus sistemas actuales de forma segura: guardrails listos para cumplimiento, trazas de auditoría y migraciones sin downtime para software de misión crítica.",
      },
      {
        title: "Apps Móviles",
        desc: "Apps nativas iOS/Android y multiplataforma, construidas para publicar y escalar.",
      },
      {
        title: "Plataformas Web",
        desc: "Aplicaciones web y herramientas internas a medida, desde MVP hasta escala enterprise.",
      },
      {
        title: "Infraestructura Cloud",
        desc: "Arquitectura escalable y confiable que aguanta tráfico real.",
      },
      {
        title: "Seguridad de IA y Protección de Datos",
        desc: "Protección contra fugas y sanitización de datos de nivel empresarial para sistemas conectados a IA.",
      },
      {
        title: "Migración de Datos",
        desc: "Transiciones seguras y sin downtime, con integridad de datos garantizada.",
      },
      {
        title: "Sistemas Multiagente",
        desc: "Integración de múltiples LLMs y modelos en un solo sistema coherente.",
      },
    ],
  },
  about: {
    eyebrow: "Cómo trabajamos",
    title: "Liderado por el fundador. Hecho para publicar.",
    intro:
      "Cada proyecto lo define y lo construye la misma persona con la que hablas al inicio, respaldada por un equipo de contractors verificados para escalar — no se pasa a un equipo de cuentas rotativo.",
    process: [
      {
        title: "Descubrimiento y Alcance",
        desc: "Mapeamos el flujo de trabajo real antes de escribir una línea de código, y volvemos con un alcance y un precio cerrados — no un retainer abierto.",
      },
      {
        title: "Construcción a la Vista",
        desc: "Demos funcionando cada semana, no una caja negra. Ves el sistema evolucionar y puedes corregir el rumbo temprano, cuando es barato.",
      },
      {
        title: "Publicación y Soporte",
        desc: "Desplegamos, entregamos documentación y nos quedamos durante una ventana de soporte definida — no desaparecemos después del lanzamiento.",
      },
    ],
    tiersTitle: "Tamaños Típicos de Proyecto",
    tiers: [
      {
        name: "MVP",
        range: "$10k–$18k",
        desc: "Un desarrollo acotado para validar un flujo de trabajo o una idea de producto — un agente de IA, un conjunto de funciones central.",
      },
      {
        name: "Growth",
        range: "$18k–$35k",
        desc: "Un sistema en producción preparado para usuarios y datos reales, con espacio para crecer.",
      },
      {
        name: "Enterprise",
        range: "$35k–$50k+",
        desc: "Trabajo de misión crítica: integración legacy, guardrails de cumplimiento, infraestructura de alta disponibilidad.",
      },
    ],
    tiersNote:
      "Los rangos son una referencia inicial, no una cotización — cada proyecto se define individualmente.",
  },
  footer: {
    tagline: "Software que Aprende, se Adapta y Piensa.",
    agentEndpoint: "Endpoint de Agentes",
    email: "hello@imbas.solutions",
    rights: "Todos los derechos reservados.",
  },
  cta: {
    title: "Define tu Proyecto",
    introLead: "Responde tres preguntas rápidas y recibe una estimación al instante. ",
    introFree: "Esta herramienta es totalmente gratuita",
    introTail: " — o ",
    skipToForm: "sáltatela y envíanos los detalles de tu proyecto",
    step1Title: "1. Selecciona el Tipo de Proyecto",
    types: [
      { label: "Agentes de IA y Automatización", desc: "Pon la IA a trabajar en tareas reales: soporte, operaciones, carga de datos." },
      { label: "App Móvil", desc: "iOS/Android nativo o multiplataforma, lista para publicar." },
      { label: "Plataforma Web", desc: "Aplicaciones web y herramientas internas que escalan contigo." },
    ],
    step2Title: "2. Define el Nivel de Alcance",
    scopeDesc: {
      mvp: "Funciones esenciales para validar el mercado.",
      growth: "Arquitectura escalable para una base de usuarios en expansión.",
      enterprise: "Sistemas de misión crítica y alta disponibilidad.",
    },
    step3Title: "3. Selecciona Funcionalidades Clave",
    features: [
      "Integración de IA",
      "Pasarela de Pagos",
      "Analítica Avanzada",
      "CMS a Medida",
      "Autenticación",
      "Multi-idioma",
    ],
    continue: "Continuar",
    calculate: "Calcular Estructura",
    back: "← Volver",
    editFeatures: "← Editar Funcionalidades",
    snapshotTitle: "Resumen del Proyecto",
    complexityTier: "Nivel de Complejidad Estimado",
    level: "Nivel",
    agenticIntegration: "Integración de IA/Agentes",
    scalabilityIndex: "Índice de Escalabilidad",
    high: "Alta",
    standard: "Estándar",
    maximum: "Máximo",
    flexible: "Flexible",
    disclaimer:
      "Es una señal aproximada de tamaño, no una cotización — el precio real depende del alcance. Los proyectos típicos de Imbas van de $10k a $50k.",
    contactTitle: "Hablemos",
    successMessage:
      "Gracias — recibimos los detalles de tu proyecto y te respondemos dentro de un día hábil.",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    projectLabel: "Cuéntanos sobre tu proyecto",
    projectPlaceholder: "¿Qué quieres construir y en qué plazo?",
    errorSuffix: "También puedes escribirnos directamente a",
    sending: "Enviando…",
    submit: "Enviar Detalles del Proyecto",
  },
};

const en: Dictionary = {
  header: {
    philosophy: "Philosophy",
    capabilities: "Capabilities",
    estimate: "Estimate",
    initProject: "Start a Project",
    themeToggle: "Switch theme",
  },
  hero: {
    eyebrow: "Imbas Solutions · AI Agents That Ship",
    headlineWords: ["Software", "that", "Learns,", "Adapts,", "and", "Thinks."],
    highlightIndex: 3,
    sub: "Imbas Solutions builds AI agents and automation that do real work — plus the mobile apps, cloud infrastructure, and legacy systems they run on.",
    ctaDemo: "Book a Call",
    ctaExplore: "See What We Build",
    scroll: "Scroll",
    dash: {
      live: "LIVE",
      efficiency: "Efficiency",
      response: "Response",
      performance: "System Performance",
      window: "24h",
      agents: { data: "Data Agent", ui: "UI Agent", qa: "QA Agent" },
      states: { synced: "synced", adapting: "adapting", verifying: "verifying" },
    },
  },
  niche: {
    rail: ["Adaptability", "Trust", "Technology"],
    phaseA: {
      eyebrow: "01 · Adaptability",
      title: "Self-Adaptive Experiences",
      chat1: "“I need last month’s sales report, compared to the same month last year.”",
      chat1Meta: "09:41 · CEO",
      dashTitle: "Sales (YoY)",
      adaptiveBadge: "ADAPTIVE",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      adaptedNote: "Dashboard rearranged to match your preferences",
      chat2: "Report generated! I’ve adapted the dashboard to your display preferences.",
    },
    phaseB: {
      eyebrow: "02 · Trust",
      title: "Enterprise Trust",
      sub: "Solid foundations for demanding corporate environments.",
      pillars: [
        {
          title: "Data Migration",
          desc: "Secure transitions with zero data loss and guaranteed integrity for mission-critical systems.",
          chips: ["Zero downtime", "Full integrity"],
        },
        {
          title: "AI Guardrails",
          desc: "Strict policies and safety barriers so models operate within corporate parameters.",
          chips: ["Compliance", "Auditable"],
        },
        {
          title: "Legacy Integration",
          desc: "We connect legacy infrastructure to AI-first workflows without interrupting business operations.",
          chips: ["SLA 99.99%", "Frictionless"],
        },
      ],
    },
    phaseC: {
      eyebrow: "03 · Technology",
      title: "Technical Depth",
      services: [
        { title: "AI Agents & Automation", desc: "Agents that handle real support, ops, and data work." },
        { title: "Legacy Modernization", desc: "AI-ready upgrades to the systems you already run." },
        { title: "Web & Mobile Apps", desc: "Native iOS/Android and PWA." },
        { title: "Cloud Infrastructure", desc: "Scalable architectures." },
        { title: "AI Security", desc: "Enterprise data leak protection." },
        { title: "Data Pipelines", desc: "Solving bottlenecks & latency." },
      ],
      caption: "One core · Infinite branches",
    },
  },
  capabilities: {
    eyebrow: "What We Build",
    title: "Capabilities",
    intro:
      "Imbas Solutions is a founder-led software factory working with US and Canadian teams. Most engagements run $10k–$50k, from a focused AI-agent integration to a full modernization project.",
    items: [
      {
        title: "AI Agents & Automation",
        desc: "We connect the AI tools you already pay for to your actual workflows — support, ops, data entry — so they produce real output, not demos.",
      },
      {
        title: "Legacy Modernization & AI Guardrails",
        desc: "Bring AI into existing systems safely: compliance-ready guardrails, audit trails, and zero-downtime migrations for mission-critical software.",
      },
      {
        title: "Mobile Apps",
        desc: "Native iOS/Android and cross-platform apps, built to ship and scale.",
      },
      {
        title: "Web Platforms",
        desc: "Custom web apps and internal tools, from MVP to enterprise scale.",
      },
      {
        title: "Cloud Infrastructure",
        desc: "Scalable, reliable architecture that holds up under real traffic.",
      },
      {
        title: "AI Security & Data Protection",
        desc: "Enterprise-grade leak protection and data sanitization for AI-connected systems.",
      },
      {
        title: "Data Migration",
        desc: "Safe, zero-downtime transitions with guaranteed data integrity.",
      },
      {
        title: "Multi-Agent Systems",
        desc: "Integrating multiple LLMs and models into one coherent system.",
      },
    ],
  },
  about: {
    eyebrow: "How We Work",
    title: "Founder-Led. Built to Ship.",
    intro:
      "Every project is scoped and built by the same person you talk to first, backed by a vetted contractor bench for scale — not handed off to a rotating account team.",
    process: [
      {
        title: "Discovery & Scope",
        desc: "We map the actual workflow before writing a line of code, and come back with a fixed scope and price — not an open-ended retainer.",
      },
      {
        title: "Build in the Open",
        desc: "Weekly working demos, not a black box. You see the system evolve and can redirect early, when it’s cheap to.",
      },
      {
        title: "Ship & Support",
        desc: "We deploy, hand off documentation, and stay on for a defined support window — no disappearing after launch.",
      },
    ],
    tiersTitle: "Typical Engagement Sizes",
    tiers: [
      {
        name: "MVP",
        range: "$10k–$18k",
        desc: "A focused build to validate one workflow or product idea — one AI agent, one core feature set.",
      },
      {
        name: "Growth",
        range: "$18k–$35k",
        desc: "A production system built to handle real users and real data, with room to extend.",
      },
      {
        name: "Enterprise",
        range: "$35k–$50k+",
        desc: "Mission-critical work: legacy integration, compliance guardrails, high-availability infrastructure.",
      },
    ],
    tiersNote:
      "Ranges are a starting reference, not a quote — every project is scoped individually.",
  },
  footer: {
    tagline: "Software that Learns, Adapts, and Thinks.",
    agentEndpoint: "Agent Endpoint",
    email: "hello@imbas.solutions",
    rights: "All rights reserved.",
  },
  cta: {
    title: "Scope Your Project",
    introLead: "Answer three quick questions for an instant estimate. ",
    introFree: "This tool is completely free of charge",
    introTail: " — or ",
    skipToForm: "skip straight to sending us your project details",
    step1Title: "1. Select Project Type",
    types: [
      { label: "AI Agents & Automation", desc: "Put AI to work on real tasks — support, ops, data entry." },
      { label: "Mobile App", desc: "Native iOS/Android or cross-platform, built to ship." },
      { label: "Web Platform", desc: "Web apps and internal tools that scale with you." },
    ],
    step2Title: "2. Define Scope Level",
    scopeDesc: {
      mvp: "Core features to validate market fit.",
      growth: "Scalable architecture for expanding user base.",
      enterprise: "Mission-critical, high-availability systems.",
    },
    step3Title: "3. Select Key Features",
    features: [
      "AI Integration",
      "Payment Gateway",
      "Advanced Analytics",
      "Custom CMS",
      "User Auth",
      "Multi-language",
    ],
    continue: "Continue",
    calculate: "Calculate Structure",
    back: "← Back",
    editFeatures: "← Edit Features",
    snapshotTitle: "Project Snapshot",
    complexityTier: "Estimated Complexity Tier",
    level: "Level",
    agenticIntegration: "AI/Agentic Integration",
    scalabilityIndex: "Scalability Index",
    high: "High",
    standard: "Standard",
    maximum: "Maximum",
    flexible: "Flexible",
    disclaimer:
      "A rough sizing signal, not a quote — real pricing depends on scope. Typical Imbas engagements run $10k–$50k.",
    contactTitle: "Let’s Talk",
    successMessage:
      "Thanks — we got your project details and will reply within one business day.",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    projectLabel: "Tell us about your project",
    projectPlaceholder: "What are you trying to build, and what’s your timeline?",
    errorSuffix: "You can also email us directly at",
    sending: "Sending…",
    submit: "Send Project Details",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
