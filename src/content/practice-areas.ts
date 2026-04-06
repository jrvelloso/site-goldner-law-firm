export type PracticeArea = {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  overview: string;
  highlights?: string[];
  whatsappTopic: string;
};

type PracticeAreasContent = {
  sectionLabel: string;
  sectionTitle: string;
  sectionIntro: string;
  listHint: string;
  learnMore: string;
  modalOverviewLabel: string;
  modalCloseLabel: string;
  modalInstitutionalLabel: string;
  modalInstitutionalText: string;
  modalCtaLabel: string;
  items: PracticeArea[];
};

export const practiceAreasByLocale: Record<"pt-BR" | "en", PracticeAreasContent> = {
  "pt-BR": {
    sectionLabel: "Áreas de atuação",
    sectionTitle: "Especialidades estruturadas para decisões jurídicas de alta consequência.",
    sectionIntro:
      "Cada frente combina leitura estratégica, rigor técnico e condução precisa para patrimônios, empresas e operações que exigem clareza na tomada de decisão.",
    listHint: "Selecione uma área para ver a visão institucional e iniciar uma conversa direcionada.",
    learnMore: "Abrir detalhes",
    modalOverviewLabel: "Visão geral",
    modalCloseLabel: "Fechar",
    modalInstitutionalLabel: "Goldner & Dias Paes Advocacia",
    modalInstitutionalText:
      "Conteúdo detalhado desta especialidade pode ser expandido aqui com estrutura própria, benefícios, etapas e contexto jurídico.",
    modalCtaLabel: "Falar sobre esta área",
    items: [
      {
        id: "imobiliario",
        slug: "imobiliario",
        title: "Imobiliário",
        eyebrow: "Operações imobiliárias",
        overview:
          "Atuação estratégica em operações imobiliárias, com foco em segurança jurídica, estruturação eficiente e mitigação de riscos.",
        highlights: [
          "Aquisições, vendas e reorganização de ativos",
          "Contratos, due diligence e estruturação documental",
          "Leitura preventiva para reduzir contingências relevantes",
        ],
        whatsappTopic: "Imobiliário",
      },
      {
        id: "empresarial-mna",
        slug: "empresarial-fusoes-aquisicoes",
        title: "Empresarial, Fusões e Aquisições",
        eyebrow: "Societário e M&A",
        overview:
          "Assessoria jurídica em operações societárias complexas, garantindo estrutura eficiente e proteção dos interesses envolvidos.",
        highlights: [
          "Reorganizações societárias e governança",
          "Negociação e fechamento de operações estratégicas",
          "Suporte técnico alinhado à dinâmica do negócio",
        ],
        whatsappTopic: "Empresarial, Fusões e Aquisições",
      },
      {
        id: "holding-blindagem",
        slug: "holding-e-blindagem-patrimonial",
        title: "Holding e Blindagem Patrimonial",
        eyebrow: "Estrutura patrimonial",
        overview:
          "Estruturação de mecanismos legais para proteção e organização do patrimônio, com foco em segurança e eficiência fiscal.",
        highlights: [
          "Planejamento patrimonial com racionalidade societária",
          "Proteção de ativos e governança familiar",
          "Organização preventiva para ciclos de longo prazo",
        ],
        whatsappTopic: "Holding e Blindagem Patrimonial",
      },
      {
        id: "sucessoes",
        slug: "sucessoes-e-planejamento-sucessorio",
        title: "Sucessões e Planejamento Sucessório",
        eyebrow: "Continuidade patrimonial",
        overview:
          "Planejamento sucessório estratégico para garantir a continuidade patrimonial e evitar conflitos futuros.",
        highlights: [
          "Estruturação de sucessão com previsibilidade",
          "Preservação patrimonial e organização familiar",
          "Prevenção de disputas e ruídos futuros",
        ],
        whatsappTopic: "Sucessões e Planejamento Sucessório",
      },
      {
        id: "ambiental",
        slug: "ambiental",
        title: "Ambiental",
        eyebrow: "Conformidade regulatória",
        overview:
          "Assessoria em questões ambientais, com foco em conformidade legal e mitigação de riscos regulatórios.",
        highlights: [
          "Acompanhamento preventivo e contencioso",
          "Leitura regulatória voltada à operação",
          "Redução de exposição jurídica em temas sensíveis",
        ],
        whatsappTopic: "Ambiental",
      },
      {
        id: "bancario",
        slug: "bancario",
        title: "Bancário",
        eyebrow: "Contratos e defesa financeira",
        overview:
          "Atuação estratégica em demandas bancárias, com foco na revisão de contratos e defesa de interesses financeiros.",
        highlights: [
          "Revisão de contratos e obrigações financeiras",
          "Discussões judiciais e extrajudiciais",
          "Proteção patrimonial em relações com instituições bancárias",
        ],
        whatsappTopic: "Bancário",
      },
      {
        id: "tributario",
        slug: "tributario",
        title: "Tributário",
        eyebrow: "Estratégia fiscal",
        overview:
          "Planejamento e atuação tributária voltados à redução de carga fiscal e conformidade com a legislação.",
        highlights: [
          "Consultoria preventiva e contencioso qualificado",
          "Leitura estratégica da carga tributária",
          "Estruturas aderentes à legislação e ao negócio",
        ],
        whatsappTopic: "Tributário",
      },
      {
        id: "medico-saude",
        slug: "medico-e-saude",
        title: "Médico e Saúde",
        eyebrow: "Setor da saúde",
        overview:
          "Assessoria jurídica especializada para profissionais e instituições da área da saúde.",
        highlights: [
          "Suporte a profissionais, clínicas e operações do setor",
          "Responsabilidade civil e temas regulatórios",
          "Atuação técnica sensível à prática assistencial",
        ],
        whatsappTopic: "Médico e Saúde",
      },
      {
        id: "concursos-publicos",
        slug: "concursos-publicos",
        title: "Concursos Públicos",
        eyebrow: "Defesa de candidatos",
        overview:
          "Atuação jurídica na defesa de candidatos em concursos públicos, com foco na garantia de direitos.",
        highlights: [
          "Impugnações, eliminações e fases específicas do certame",
          "Estratégia administrativa e judicial coordenada",
          "Foco na preservação objetiva de direitos",
        ],
        whatsappTopic: "Concursos Públicos",
      },
      {
        id: "penal-tributario-empresarial",
        slug: "penal-tributario-e-empresarial",
        title: "Penal Tributário e Empresarial",
        eyebrow: "Defesa estratégica",
        overview:
          "Defesa estratégica em questões penais relacionadas a atividades empresariais e tributárias.",
        highlights: [
          "Atuação técnica em investigações e processos",
          "Leitura integrada entre risco penal e operação empresarial",
          "Condução discreta, precisa e orientada à proteção institucional",
        ],
        whatsappTopic: "Penal Tributário e Empresarial",
      },
    ],
  },
  en: {
    sectionLabel: "Practice areas",
    sectionTitle: "Structured expertise for legal decisions with material consequence.",
    sectionIntro:
      "Each discipline combines strategic judgement, technical depth, and precise execution for companies, wealth structures, and high-stakes matters.",
    listHint: "Select a practice area to review the institutional overview and open a direct conversation.",
    learnMore: "Open details",
    modalOverviewLabel: "Overview",
    modalCloseLabel: "Close",
    modalInstitutionalLabel: "Goldner & Dias Paes Advocacia",
    modalInstitutionalText:
      "Detailed content for this practice area can be expanded here with its own structure, benefits, stages, and legal context.",
    modalCtaLabel: "Discuss this practice area",
    items: [
      {
        id: "real-estate",
        slug: "real-estate",
        title: "Real Estate",
        eyebrow: "Real estate operations",
        overview:
          "Strategic legal work in real estate transactions, focused on legal certainty, efficient structuring, and risk mitigation.",
        highlights: [
          "Acquisitions, disposals, and asset reorganisation",
          "Contracts, due diligence, and document structuring",
          "Preventive analysis to reduce material exposure",
        ],
        whatsappTopic: "Real Estate",
      },
      {
        id: "corporate-ma",
        slug: "corporate-mergers-acquisitions",
        title: "Corporate, Mergers & Acquisitions",
        eyebrow: "Corporate and M&A",
        overview:
          "Legal advisory in complex corporate transactions, ensuring efficient structuring and protection of the interests involved.",
        highlights: [
          "Corporate reorganisations and governance",
          "Negotiation and closing of strategic transactions",
          "Technical guidance aligned with business priorities",
        ],
        whatsappTopic: "Corporate, Mergers & Acquisitions",
      },
      {
        id: "holdings-asset-protection",
        slug: "holdings-and-asset-protection",
        title: "Holdings & Asset Protection",
        eyebrow: "Wealth structuring",
        overview:
          "Structuring legal mechanisms for the protection and organisation of assets, with emphasis on security and tax efficiency.",
        highlights: [
          "Wealth planning through corporate structures",
          "Asset protection and family governance",
          "Preventive organisation for long-term continuity",
        ],
        whatsappTopic: "Holdings & Asset Protection",
      },
      {
        id: "succession-estate-planning",
        slug: "succession-estate-planning",
        title: "Succession & Estate Planning",
        eyebrow: "Wealth continuity",
        overview:
          "Strategic succession planning designed to preserve wealth continuity and avoid future conflicts.",
        highlights: [
          "Succession structures with long-term predictability",
          "Wealth preservation and family alignment",
          "Preventive handling of future disputes",
        ],
        whatsappTopic: "Succession & Estate Planning",
      },
      {
        id: "environmental",
        slug: "environmental",
        title: "Environmental",
        eyebrow: "Regulatory compliance",
        overview:
          "Advisory in environmental matters, with focus on legal compliance and mitigation of regulatory risk.",
        highlights: [
          "Preventive support and dispute handling",
          "Operational reading of environmental regulation",
          "Reduced legal exposure in sensitive matters",
        ],
        whatsappTopic: "Environmental",
      },
      {
        id: "banking",
        slug: "banking",
        title: "Banking",
        eyebrow: "Contracts and financial defence",
        overview:
          "Strategic legal work in banking disputes, focused on contract review and the protection of financial interests.",
        highlights: [
          "Review of contracts and financial obligations",
          "Judicial and out-of-court disputes",
          "Wealth protection in banking relationships",
        ],
        whatsappTopic: "Banking",
      },
      {
        id: "tax",
        slug: "tax",
        title: "Tax",
        eyebrow: "Tax strategy",
        overview:
          "Tax planning and advocacy aimed at reducing tax burden while maintaining compliance with applicable law.",
        highlights: [
          "Preventive advisory and qualified disputes",
          "Strategic review of tax exposure",
          "Structures aligned with law and business reality",
        ],
        whatsappTopic: "Tax",
      },
      {
        id: "medical-healthcare",
        slug: "medical-healthcare",
        title: "Medical & Healthcare",
        eyebrow: "Healthcare sector",
        overview:
          "Specialised legal advisory for healthcare professionals and institutions.",
        highlights: [
          "Support for professionals, clinics, and healthcare operations",
          "Civil liability and regulatory matters",
          "Technical guidance attuned to clinical practice",
        ],
        whatsappTopic: "Medical & Healthcare",
      },
      {
        id: "public-examinations",
        slug: "public-examinations",
        title: "Public Examinations",
        eyebrow: "Candidate defence",
        overview:
          "Legal advocacy in defence of candidates in public examinations, focused on the protection of rights.",
        highlights: [
          "Challenges to disqualification and specific exam stages",
          "Coordinated administrative and judicial strategy",
          "Objective protection of candidate rights",
        ],
        whatsappTopic: "Public Examinations",
      },
      {
        id: "corporate-tax-criminal",
        slug: "corporate-tax-criminal-law",
        title: "Corporate & Tax Criminal Law",
        eyebrow: "Strategic defence",
        overview:
          "Strategic defence in criminal matters related to corporate and tax activity.",
        highlights: [
          "Technical advocacy in investigations and proceedings",
          "Integrated view of criminal risk and business operations",
          "Discrete, precise, and institutionally protective conduct",
        ],
        whatsappTopic: "Corporate & Tax Criminal Law",
      },
    ],
  },
};
