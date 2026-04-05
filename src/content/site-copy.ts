import type { StaticImageData } from "next/image";

import founderImage from "@/app/assets/founder.jpg";

export type Locale = "pt-BR" | "en";

export type PracticeItem = {
  title: string;
  body: string;
};

type OfficeLocation = {
  city: string;
  region: string;
  venue?: string;
  lines: string[];
  postalCode: string;
  mapHref: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string | StaticImageData;
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
  locations: {
    label: string;
    title: string;
    intro: string;
    mapCta: string;
    items: OfficeLocation[];
  };
  footer: {
    description: string;
    connectLabel: string;
    socialLinks: { label: string; href: string }[];
    locationsLabel: string;
    contactLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    phoneDisplay: string;
    whatsappDisplay: string;
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
          title: "Empresarial, Fus\u00f5es e Aquisi\u00e7\u00f5es",
          body: "Estrutura\u00e7\u00e3o societ\u00e1ria, negocia\u00e7\u00f5es estrat\u00e9gicas e opera\u00e7\u00f5es de M&A.",
        },
        {
          title: "Imobili\u00e1rio",
          body: "Assessoria em aquisi\u00e7\u00f5es, estrutura\u00e7\u00f5es, contratos e lit\u00edgios do setor.",
        },
        {
          title: "Holding e Blindagem Patrimonial",
          body: "Organiza\u00e7\u00e3o patrimonial, prote\u00e7\u00e3o de ativos e governan\u00e7a familiar.",
        },
        {
          title: "Tribut\u00e1rio",
          body: "Planejamento, contencioso e consultoria fiscal para pessoas f\u00edsicas e jur\u00eddicas.",
        },
        {
          title: "Sucess\u00f5es e Planejamento Sucess\u00f3rio",
          body: "Estrutura\u00e7\u00e3o sucess\u00f3ria, continuidade patrimonial e preven\u00e7\u00e3o de conflitos.",
        },
        {
          title: "M\u00e9dico e Sa\u00fade",
          body: "Defesa profissional, responsabilidade civil e consultoria regulat\u00f3ria para o setor.",
        },
        {
          title: "Ambiental",
          body: "Assessoria preventiva, licenciamento, contencioso e adequa\u00e7\u00e3o normativa.",
        },
        {
          title: "Concursos P\u00fablicos",
          body: "Atua\u00e7\u00e3o administrativa e judicial em etapas, elimina\u00e7\u00f5es e nomea\u00e7\u00f5es.",
        },
        {
          title: "Banc\u00e1rio",
          body: "Revis\u00e3o contratual, lit\u00edgios financeiros e defesa em rela\u00e7\u00f5es com institui\u00e7\u00f5es banc\u00e1rias.",
        },
        {
          title: "Penal Tribut\u00e1rio e Empresarial",
          body: "Defesa estrat\u00e9gica em investiga\u00e7\u00f5es e processos ligados \u00e0 atividade empresarial e fiscal.",
        },
      ],
    },
    team: {
      label: "S\u00f3cios & Conselheiros",
      title: "Guiados pela Estrat\u00e9gia",
      members: [
        {
          name: "Bruno Goldner",
          role: "Sócio-Fundador",
          image: {
            src: founderImage,
            alt: "Retrato de Bruno Goldner, fundador do escrit\u00f3rio, em traje formal.",
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
    locations: {
      label: "Nossos Endereços",
      title: "Presença institucional em praças estratégicas.",
      intro:
        "Atendimento em endereços de referência, com estrutura compatível com operações empresariais e patrimoniais de maior exigência.",
      mapCta: "Abrir no mapa",
      items: [
        {
          city: "Juiz de Fora",
          region: "Minas Gerais",
          lines: [
            "Rua Ataliba de Barros, 182",
            "Conj. 1301 / 1303, São Mateus, Juiz de Fora - MG",
          ],
          postalCode: "36025-275",
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Rua+Ataliba+de+Barros,+182,+Conj.+1301+1303,+S%C3%A3o+Mateus,+Juiz+de+Fora,+MG,+36025-275",
        },
        {
          city: "São Paulo",
          region: "São Paulo",
          lines: [
            "Av Brigadeiro Faria Lima, 4509",
            "8º andar, Itaim Bibi, São Paulo - SP",
          ],
          postalCode: "04538-133",
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Av+Brigadeiro+Faria+Lima,+4509,+8%C2%BA+andar,+Itaim+Bibi,+S%C3%A3o+Paulo,+SP,+04538-133",
        },
        {
          city: "Belo Horizonte",
          region: "Minas Gerais",
          venue: "Ed. Centro Empresarial Parque Avenida",
          lines: [
            "Av. Raja Gabaglia, 2000 - Torre I",
            "Conj. 802, Belo Horizonte - MG",
          ],
          postalCode: "30494-170",
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Ed.+Centro+Empresarial+Parque+Avenida,+Av.+Raja+Gabaglia,+2000,+Torre+I,+Conj.+802,+Belo+Horizonte,+MG,+30494-170",
        },
      ],
    },
    footer: {
      description:
        "Representa\u00e7\u00e3o jur\u00eddica de alto n\u00edvel para clientes privados e corpora\u00e7\u00f5es. Excel\u00eancia conduzida por vis\u00e3o estrat\u00e9gica desde 2018.",
      connectLabel: "Conecte-se",
      socialLinks: [
        {
          label: "Instagram",
          href: "https://instagram.com/goldner_dias_paes",
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/goldnerdiaspaes/",
        },
        {
          label: "LinkedIn",
          href: "https://br.linkedin.com/company/goldnerdiaspaeschamarelli",
        },
      ],
      locationsLabel: "Localizações",
      contactLabel: "Contato Direto",
      phoneLabel: "Telefone",
      whatsappLabel: "WhatsApp",
      phoneDisplay: "(32) 3512-7880",
      whatsappDisplay: "(32) 3512-7880",
      copyright:
        "\u00a9 2026 Goldner & Dias Paes Advocacia. TODOS OS DIREITOS RESERVADOS.",
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
          title: "Corporate, Mergers & Acquisitions",
          body: "Corporate structuring, strategic negotiations, and M&A transactions.",
        },
        {
          title: "Real Estate",
          body: "Advisory on acquisitions, structuring, contracts, and disputes in the sector.",
        },
        {
          title: "Holdings & Asset Protection",
          body: "Asset organization, wealth protection, and family governance structures.",
        },
        {
          title: "Tax",
          body: "Planning, disputes, and tax advisory for individuals and companies.",
        },
        {
          title: "Succession & Estate Planning",
          body: "Succession structuring, wealth continuity, and conflict prevention.",
        },
        {
          title: "Medical & Healthcare",
          body: "Professional defense, civil liability, and regulatory advisory for the sector.",
        },
        {
          title: "Environmental",
          body: "Preventive advisory, licensing, disputes, and regulatory compliance.",
        },
        {
          title: "Public Examinations",
          body: "Administrative and judicial action in exam phases, disqualifications, and appointments.",
        },
        {
          title: "Banking",
          body: "Contract review, financial disputes, and defense in banking relationships.",
        },
        {
          title: "Corporate & Tax Criminal Law",
          body: "Strategic defense in investigations and proceedings tied to business and tax activity.",
        },
      ],
    },
    team: {
      label: "Partners & Counselors",
      title: "Guided by Strategy",
      members: [
        {
          name: "Bruno Goldner",
          role: "Founder",
          image: {
            src: founderImage,
            alt: "Portrait of Bruno Goldner, founder of the firm, in formal attire.",
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
    locations: {
      label: "Our Offices",
      title: "Institutional presence in key business centres.",
      intro:
        "Meetings are hosted in established addresses suited to sophisticated corporate, wealth, and succession matters.",
      mapCta: "Open map",
      items: [
        {
          city: "Juiz de Fora",
          region: "Minas Gerais",
          lines: [
            "Rua Ataliba de Barros, 182",
            "Suite 1301 / 1303, São Mateus, Juiz de Fora - MG",
          ],
          postalCode: "36025-275",
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Rua+Ataliba+de+Barros,+182,+Conj.+1301+1303,+S%C3%A3o+Mateus,+Juiz+de+Fora,+MG,+36025-275",
        },
        {
          city: "São Paulo",
          region: "São Paulo",
          lines: [
            "Av Brigadeiro Faria Lima, 4509",
            "8th floor, Itaim Bibi, São Paulo - SP",
          ],
          postalCode: "04538-133",
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Av+Brigadeiro+Faria+Lima,+4509,+8%C2%BA+andar,+Itaim+Bibi,+S%C3%A3o+Paulo,+SP,+04538-133",
        },
        {
          city: "Belo Horizonte",
          region: "Minas Gerais",
          venue: "Centro Empresarial Parque Avenida",
          lines: [
            "Av. Raja Gabaglia, 2000 - Tower I",
            "Suite 802, Belo Horizonte - MG",
          ],
          postalCode: "30494-170",
          mapHref:
            "https://www.google.com/maps/search/?api=1&query=Ed.+Centro+Empresarial+Parque+Avenida,+Av.+Raja+Gabaglia,+2000,+Torre+I,+Conj.+802,+Belo+Horizonte,+MG,+30494-170",
        },
      ],
    },
    footer: {
      description:
        "Elite legal representation for private clients and corporations. Delivering excellence through strategic insight since 2018.",
      connectLabel: "Connect",
      socialLinks: [
        {
          label: "Instagram",
          href: "https://instagram.com/goldner_dias_paes",
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/goldnerdiaspaes/",
        },
        {
          label: "LinkedIn",
          href: "https://br.linkedin.com/company/goldnerdiaspaeschamarelli",
        },
      ],
      locationsLabel: "Locations",
      contactLabel: "Direct Contact",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      phoneDisplay: "+55 (32) 3512-7880",
      whatsappDisplay: "+55 (32) 3512-7880",
      copyright:
        "\u00a9 2026 Goldner & Dias Paes Advocacia. ALL RIGHTS RESERVED.",
      privacy: "PRIVACY POLICY",
      terms: "LEGAL TERMS",
    },
  },
};
