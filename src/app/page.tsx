import type { Metadata } from "next";

import { SitePage } from "@/components/site-page";
import { locales } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Goldner & Dias Paes Advocacia",
  description:
    "Representação jurídica de alto nível para clientes privados e corporações, com atuação estratégica no Brasil e no exterior.",
};

export default function HomePage() {
  return <SitePage locale="pt-BR" copy={locales["pt-BR"]} />;
}
