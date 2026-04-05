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
      practices: "ATUA\u00c7\u00c3O",
      team: "EQUIPE",
      contact: "CONTATO",
      consultation: "Consultoria",
    },
    hero: {
      title:
        'Clareza Jur\u00eddica, <br /><span class="font-light italic">Profunda</span> Resili\u00eancia.',
      body:
        "Uma experi\u00eancia jur\u00eddica sob medida para navegar as complexidades dos cen\u00e1rios corporativos brasileiros e internacionais com precis\u00e3o cir\u00fargica e vis\u00e3o estrat\u00e9gica.",
      primaryCta: "Explorar Atua\u00e7\u00e3o",
      secondaryCta: "Agendar Consultoria",
      image: {
        src: sharedImages.hero,
        alt:
          "Interior arquitet\u00f4nico s\u00f3brio de uma biblioteca moderna com madeira escura e ilumina\u00e7\u00e3o ambiente suave.",
      },
    },
    feature: {
      title: "Prote\u00e7\u00e3o Estrat\u00e9gica.",
      meta: "Desde 2018 / S\u00e3o Paulo",
      image: {
        src: sharedImages.feature,
        alt:
          "Escrit\u00f3rio moderno com janelas do ch\u00e3o ao teto e vista para o skyline da cidade ao p\u00f4r do sol.",
      },
    },
    practiceAreas: {
      label: "Especialidades",
      learnMore: "Saiba Mais",
      items: [
        {
          title: "Sa\u00fade & M\u00e9dica",
          body: "Defesa jur\u00eddica e estrat\u00e9gias de compliance sob medida para profissionais da sa\u00fade e institui\u00e7\u00f5es m\u00e9dicas em toda a Am\u00e9rica Latina.",
        },
        {
          title: "Mercado Imobili\u00e1rio",
          body: "Seguran\u00e7a jur\u00eddica em aquisi\u00e7\u00f5es de alto valor, normas urban\u00edsticas e contratos complexos de desenvolvimento.",
        },
        {
          title: "Prote\u00e7\u00e3o Patrimonial",
          body: "Estruturas sofisticadas de blindagem de ativos e preserva\u00e7\u00e3o patrimonial para indiv\u00edduos e family offices.",
        },
        {
          title: "Planejamento Tribut\u00e1rio",
          body: "Otimiza\u00e7\u00e3o tribut\u00e1ria internacional e conformidade dom\u00e9stica para arquiteturas societ\u00e1rias complexas.",
        },
        {
          title: "Sucess\u00f5es & Heran\u00e7a",
          body: "Continuidade geracional por meio de instrumentos jur\u00eddicos precisos e orienta\u00e7\u00e3o sens\u00edvel.",
        },
        {
          title: "Direito Societ\u00e1rio",
          body: "M&A, governan\u00e7a e assessoria estrutural para empresas em expans\u00e3o e grupos j\u00e1 consolidados.",
        },
      ],
    },
    team: {
      label: "S\u00f3cios & Conselheiros",
      title: "Guiados pela Estrat\u00e9gia",
      members: [
        {
          name: "Bruno Goldner",
          role: "S\u00f3cio S\u00eanior / M&A",
          image: {
            src: sharedImages.bruno,
            alt: "Retrato profissional de Bruno Goldner, um homem maduro em terno sob medida com express\u00e3o confiante.",
          },
        },
        {
          name: "Helena Moreira",
          role: "L\u00edder Jur\u00eddica / Tribut\u00e1rio",
          image: {
            src: sharedImages.helena,
            alt: "Retrato profissional de Helena Moreira, uma mulher sofisticada em traje executivo contempor\u00e2neo.",
          },
        },
        {
          name: "Dias Paes",
          role: "S\u00f3cio / Gest\u00e3o Patrimonial",
          image: {
            src: sharedImages.dias,
            alt: "Retrato profissional de Dias Paes, advogado especialista em terno azul-marinho contra fundo arquitet\u00f4nico neutro.",
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
        "Representa\u00e7\u00e3o jur\u00eddica de alto n\u00edvel para clientes privados e corpora\u00e7\u00f5es. Excel\u00eancia conduzida por vis\u00e3o estrat\u00e9gica desde 2018.",
      connectLabel: "Conecte-se",
      briefs: "Boletins Jur\u00eddicos",
      press: "Assessoria de Imprensa",
      locationsLabel: "Localiza\u00e7\u00f5es",
      locations: [
        {
          address: "Av. Faria Lima, 4500",
          city: "S\u00e3o Paulo, SP - Brasil",
        },
        {
          address: "Rue du Rh\u00f4ne, 14",
          city: "Genebra, Su\u00ed\u00e7a",
        },
      ],
      copyright: "\u00a9 2026 Goldner Law Firm. TODOS OS DIREITOS RESERVADOS.",
      privacy: "POL\u00cdTICA DE PRIVACIDADE",
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
      meta: "Est. 2018 / S\u00e3o Paulo",
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
          city: "S\u00e3o Paulo, SP - Brazil",
        },
        {
          address: "Rue du Rh\u00f4ne, 14",
          city: "Geneva, Switzerland",
        },
      ],
      copyright: "\u00a9 2026 Goldner Law Firm. ALL RIGHTS RESERVED.",
      privacy: "PRIVACY POLICY",
      terms: "LEGAL TERMS",
    },
  },
};
