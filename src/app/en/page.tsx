import type { Metadata } from "next";
import Script from "next/script";

import { SitePage } from "@/components/site-page";
import { locales } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Corporate and Tax Law",
  description:
    "Elite legal representation for private clients and corporations, with strategic advisory across Brazilian and international matters.",
  alternates: {
    canonical: "/en",
    languages: {
      "pt-BR": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Corporate and Tax Law | Goldner & Dias Paes Advocacia",
    description:
      "Elite legal representation for private clients and corporations, with strategic advisory across Brazilian and international matters.",
    url: "https://www.gdpc.adv.br/en",
    locale: "en_US",
  },
};

export default function EnglishPage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Goldner & Dias Paes Advocacia",
    url: "https://www.gdpc.adv.br/en",
    image: "https://www.gdpc.adv.br/opengraph-image",
    telephone: "+55-32-3512-7880",
    sameAs: [
      "https://instagram.com/goldner_dias_paes",
      "https://www.facebook.com/goldnerdiaspaes/",
      "https://br.linkedin.com/company/goldnerdiaspaeschamarelli",
    ],
    areaServed: ["Brazil", "São Paulo", "Minas Gerais"],
    serviceType: locales.en.practiceAreas.items.map((item) => item.title),
    address: locales.en.locations.items.map((location) => ({
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
        id="legalservice-schema-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <SitePage locale="en" copy={locales.en} />
    </>
  );
}
