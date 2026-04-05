export type Locale = "pt-BR" | "en";

type PracticeItem = {
  title: string;
  body: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
};

export type SiteCopy = {
  language: {
    pt: string;
    en: string;
  };
  nav: {
    about: string;
    practices: string;
    team: string;
    contact: string;
    consultation: string;
  };
  hero: {
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    image: {
      src: string;
      alt: string;
    };
  };
  feature: {
    title: string;
    meta: string;
    image: {
      src: string;
      alt: string;
    };
  };
  practiceAreas: {
    label: string;
    learnMore: string;
    items: PracticeItem[];
  };
  team: {
    label: string;
    title: string;
    members: TeamMember[];
  };
  consultation: {
    title: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    description: string;
    connectLabel: string;
    briefs: string;
    press: string;
    locationsLabel: string;
    locations: { address: string; city: string }[];
    copyright: string;
    privacy: string;
    terms: string;
  };
};

const sharedImages = {
  hero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDNlZNiNk8zpL0M-ocJ1vdMeZqfOuv5fgwd0ve6ywtnJHzVCIYN02st44gLeD3TUs5ZwOWauEVcXfEaX3EI9ZvgKspSSp5U0LNs-KU-jQ6oqz0kAh5Bg8omVYalsnRtYHmbyFwI_I8QmSzfQ9WJMpnQUDWISWNH5coRBiErzUZkFyqKqEPyUP2iYqamLziRsOBeDuOIEdzuZPV71iQFY8OytkrR-WlZrbUESPB5qSy5S2qC04TMYeTgINHAKvuSYQZ-RTB-3OSp6nU",
  feature:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4gJnVEq-KZfun3JH8_fWts2HaRbN_z1L1kj7HUZC3s68gDHQBBvHZKEctHNiP6MUOVEzPzB6dzRsTXcI2I9HyzNYmMd-KHQl-5ESyjTWbcZSCIdnOFTfrzDo9J4-sgoODhzd2SqCp0VEuGG3Q4zn3D0D5LtOXVnv1nt_W8Nj7GyfoLsa5UlMo-ArwegU8jen-SbHoZ9Pkbce67UHfQz9n-xyTiuRPCHSH5QjLInhj-XRGQQETisgIqztO_hBQugiW8Rf803uYSqk",
  bruno:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2EuO_GvPKy3k_d_vWJ7ViyjRYqxjbHqAF924h1wWakNldYcYYu0K-NDRYwTHeOqSY-CmUwi-8caBgRVrM9ZM2TgnOpNkIT7DAhgsFZRlp6vthiFsfEd0DP8-8dfGQif0P1kPBGf_QH8Ezlw6x1VQBc3Gko5xawR5SNzKwtYFmnIec5Jkh8t9myB27moZ75X46W1duMupMns5Qx5-_UzILnV9UNd57de-RwrBXGbEWpGTGjkzXOjnmi3cMqbohrHQfkZVOo4_X9KA",
  helena:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCrVY5tn_txZJCWHUs8tkluGtpgWm1ykNGN5PDT2DwzE6ZnguS9iOJhzj1w4VyZVqUTpHGLX8ivjvDadMhvwj1e1K2sK-UFeASQ6Dp3ghRNW5U7pu_K7D_YNRM4cgvlUxXp_-VkJGY6p8LtRvxnn5tSL5n-bwhE5i8kgjRpgVilZowbSovbYeWJwTTq59XHNxwzGN-exc-xB6CZsQYztTS_dpgPLR1d3xVAgJSpacvWGHXEJg4SUQ_P3w6zv5NBMX5GTIi-5gbp9AY",
  dias:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjJTmu2Q6nHYOZxDv5SWGzwc6kgkB_lZH9ZIn8waPzhu_mWjb4ouLe04F-ZZzR8PJFnx0YAamxIzKMNhAdldJnwdOv2QGcdCcwUUljkl2Rso_daKxpSs-wRwie_ljlOQT9uB3ed71_hnhJbwYSWhl1_X2a8ZURb2fIyDXwYdwdNSjrOjzekMqY9aGLvele2SrJLDNu6MkmP4nm0TUez9QBzTeHiEwoowKMEfoTzAPLKQUQey0lTPAxFHdhYJk9Rp0Cs3ZXyrQHq0s",
} as const;

export const locales: Record<Locale, SiteCopy> = {
  "pt-BR": {
    language: { pt: "PT", en: "EN" },
    nav: {
      about: "SOBRE",
      practices: "ATUAÇÃO",
      team: "EQUIPE",
      contact: "CONTATO",
      consultation: "Consultoria",
    },
    hero: {
      title:
        'Clareza Jurídica, <br /><span class="font-light italic">Profunda</span> Resiliência.',
      body:
        "Uma experiência jurídica sob medida para navegar as complexidades dos cenários corporativos brasileiros e internacionais com precisão cirúrgica e visão estratégica.",
      primaryCta: "Explorar Atuação",
      secondaryCta: "Agendar Consultoria",
      image: {
        src: sharedImages.hero,
        alt:
          "Interior arquitetônico sóbrio de uma biblioteca moderna com madeira escura e iluminação ambiente suave.",
      },
    },
    feature: {
      title: "Proteção Estratégica.",
      meta: "Desde 2018 / São Paulo",
      image: {
        src: sharedImages.feature,
        alt:
          "Escritório moderno com janelas do chão ao teto e vista para o skyline da cidade ao pôr do sol.",
      },
    },
    practiceAreas: {
      label: "Especialidades",
      learnMore: "Saiba Mais",
      items: [
        {
          title: "Saúde & Médica",
          body: "Defesa jurídica e estratégias de compliance sob medida para profissionais da saúde e instituições médicas em toda a América Latina.",
        },
        {
          title: "Mercado Imobiliário",
          body: "Segurança jurídica em aquisições de alto valor, normas urbanísticas e contratos complexos de desenvolvimento.",
        },
        {
          title: "Proteção Patrimonial",
          body: "Estruturas sofisticadas de blindagem de ativos e preservação patrimonial para indivíduos e family offices.",
        },
        {
          title: "Planejamento Tributário",
          body: "Otimização tributária internacional e conformidade doméstica para arquiteturas societárias complexas.",
        },
        {
          title: "Sucessões & Herança",
          body: "Continuidade geracional por meio de instrumentos jurídicos precisos e orientação sensível.",
        },
        {
          title: "Direito Societário",
          body: "M&A, governança e assessoria estrutural para empresas em expansão e grupos já consolidados.",
        },
      ],
    },
    team: {
      label: "Sócios & Conselheiros",
      title: "Guiados pela Estratégia",
      members: [
        {
          name: "Bruno Goldner",
          role: "Sócio Sênior / M&A",
          image: {
            src: sharedImages.bruno,
            alt: "Retrato profissional de Bruno Goldner, um homem maduro em terno sob medida com expressão confiante.",
          },
        },
        {
          name: "Helena Moreira",
          role: "Líder Jurídica / Tributário",
          image: {
            src: sharedImages.helena,
            alt: "Retrato profissional de Helena Moreira, uma mulher sofisticada em traje executivo contemporâneo.",
          },
        },
        {
          name: "Dias Paes",
          role: "Sócio / Gestão Patrimonial",
          image: {
            src: sharedImages.dias,
            alt: "Retrato profissional de Dias Paes, advogado especialista em terno azul-marinho contra fundo arquitetônico neutro.",
          },
        },
      ],
    },
    consultation: {
      title:
        'Inicie sua <span class="italic text-[#E63946]">consultoria.</span>',
      primaryCta: "Consultar Online",
      secondaryCta: "Linha Direta: +55 (11) 4509-0000",
    },
    footer: {
      description:
        "Representação jurídica de alto nível para clientes privados e corporações. Excelência conduzida por visão estratégica desde 2018.",
      connectLabel: "Conecte-se",
      briefs: "Boletins Jurídicos",
      press: "Assessoria de Imprensa",
      locationsLabel: "Localizações",
      locations: [
        {
          address: "Av. Faria Lima, 4500",
          city: "São Paulo, SP - Brasil",
        },
        {
          address: "Rue du Rhône, 14",
          city: "Genebra, Suíça",
        },
      ],
      copyright: "© 2026 Goldner Law Firm. TODOS OS DIREITOS RESERVADOS.",
      privacy: "POLÍTICA DE PRIVACIDADE",
      terms: "TERMOS LEGAIS",
    },
  },
  en: {
    language: { pt: "PT", en: "EN" },
    nav: {
      about: "ABOUT",
      practices: "PRACTICES",
      team: "OUR TEAM",
      contact: "CONTACT",
      consultation: "Consultation",
    },
    hero: {
      title:
        'Legal Clarity, <br /><span class="font-light italic">Profound</span> Resilience.',
      body:
        "A bespoke legal experience for navigating the complexities of Brazilian and international corporate landscapes with surgical precision and strategic foresight.",
      primaryCta: "Explore Practices",
      secondaryCta: "Book Consultation",
      image: {
        src: sharedImages.hero,
        alt:
          "Moody architectural interior of a modern library with dark wood and soft ambient light hitting book stacks.",
      },
    },
    feature: {
      title: "Strategic Protection.",
      meta: "Est. 2018 / São Paulo",
      image: {
        src: sharedImages.feature,
        alt:
          "Sleek modern office space with floor to ceiling glass windows overlooking a city skyline at sunset.",
      },
    },
    practiceAreas: {
      label: "Expertise",
      learnMore: "Learn More",
      items: [
        {
          title: "Health & Medical",
          body: "Tailored legal defense and compliance strategies for healthcare providers and medical institutions across Latin America.",
        },
        {
          title: "Real Estate",
          body: "Navigating high-value property acquisitions, zoning regulations, and complex development contracts with security.",
        },
        {
          title: "Wealth Protection",
          body: "Sophisticated asset shielding and wealth preservation structures for private individuals and family offices.",
        },
        {
          title: "Tax Planning",
          body: "International tax optimization and domestic compliance tailored for complex corporate architectures.",
        },
        {
          title: "Estate & Succession",
          body: "Ensuring generational continuity through precise legal instruments and compassionate counsel.",
        },
        {
          title: "Corporate Law",
          body: "M&A, governance, and structural advisory for high-growth enterprises and established conglomerates.",
        },
      ],
    },
    team: {
      label: "Partners & Counselors",
      title: "Guided by Strategy",
      members: [
        {
          name: "Bruno Goldner",
          role: "Senior Partner / M&A",
          image: {
            src: sharedImages.bruno,
            alt: "Professional portrait of Bruno Goldner, a mature man in a tailored suit with a confident expression in a minimal studio setting.",
          },
        },
        {
          name: "Helena Moreira",
          role: "Lead Counsel / Tax",
          image: {
            src: sharedImages.helena,
            alt: "Professional portrait of Helena Moreira, a sophisticated woman in modern business attire with soft lighting.",
          },
        },
        {
          name: "Dias Paes",
          role: "Partner / Wealth Management",
          image: {
            src: sharedImages.dias,
            alt: "Professional portrait of Dias Paes, an expert lawyer in a navy suit against a neutral architectural background.",
          },
        },
      ],
    },
    consultation: {
      title:
        'Begin your <span class="italic text-[#E63946]">consultation.</span>',
      primaryCta: "Inquire Online",
      secondaryCta: "Direct Line: +55 (11) 4509-0000",
    },
    footer: {
      description:
        "Elite legal representation for private clients and corporations. Delivering excellence through strategic insight since 2018.",
      connectLabel: "Connect",
      briefs: "Legal Briefs",
      press: "Press Office",
      locationsLabel: "Locations",
      locations: [
        {
          address: "Av. Faria Lima, 4500",
          city: "São Paulo, SP - Brazil",
        },
        {
          address: "Rue du Rhône, 14",
          city: "Geneva, Switzerland",
        },
      ],
      copyright: "© 2026 Goldner Law Firm. ALL RIGHTS RESERVED.",
      privacy: "PRIVACY POLICY",
      terms: "LEGAL TERMS",
    },
  },
};
