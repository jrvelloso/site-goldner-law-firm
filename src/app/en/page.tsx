import type { Metadata } from "next";

import { SitePage } from "@/components/site-page";
import { locales } from "@/content/site-copy";

export const metadata: Metadata = {
  title: "Goldner Law",
  description:
    "Elite legal representation for private clients and corporations, with strategic advisory across Brazilian and international matters.",
};

export default function EnglishPage() {
  return <SitePage locale="en" copy={locales.en} />;
}
