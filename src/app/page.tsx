import type { Metadata } from "next";
import Script from "next/script";

import { SitePage } from "@/components/site-page";
import { practiceAreasByLocale } from "@/content/practice-areas";
import { locales } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Direito Empresarial e Tributário",
  description:
    "Assessoria jurídica de alta precisão em Direito Empresarial e Tributário, com atuação em estruturas patrimoniais, sucessórias, imobiliárias e internacionais.",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Direito Empresarial e Tributário | Goldner & Dias Paes Advocacia",
    description:
      "Assessoria jurídica de alta precisão em Direito Empresarial e Tributário, com atuação em estruturas patrimoniais, sucessórias, imobiliárias e internacionais.",
    url: "https://www.gdpc.adv.br/",
    locale: "pt_BR",
  },
};

export default function HomePage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Goldner & Dias Paes Advocacia",
    url: "https://www.gdpc.adv.br/",
    image: "https://www.gdpc.adv.br/opengraph-image",
    telephone: "+55-32-3512-7880",
    sameAs: [
      "https://instagram.com/goldner_dias_paes",
      "https://www.facebook.com/goldnerdiaspaes/",
      "https://br.linkedin.com/company/goldnerdiaspaeschamarelli",
    ],
    areaServed: ["Brasil", "São Paulo", "Minas Gerais"],
    serviceType: practiceAreasByLocale["pt-BR"].items.map((item) => item.title),
    address: locales["pt-BR"].locations.items.map((location) => ({
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      postalCode: location.postalCode,
      streetAddress: [location.venue, ...location.lines].filter(Boolean).join(", "),
      addressCountry: "BR",
    })),
  };

  return (
    <>
      <Script
        id="legalservice-schema-pt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <SitePage locale="pt-BR" copy={locales["pt-BR"]} />
    </>
  );
}
