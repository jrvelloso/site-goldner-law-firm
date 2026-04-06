"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  locale: "pt-BR" | "en";
  ptLabel: string;
  enLabel: string;
};

export function LanguageSwitcher({
  locale,
  ptLabel,
  enLabel,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const isEnglishPath = pathname.startsWith("/en");

  return (
    <div className="lang-pill flex items-center rounded-full border border-white/10 bg-[rgba(122,119,109,0.26)] p-1 text-xs font-bold uppercase tracking-widest">
      <Link
        href="/"
        className={`rounded-full px-3 py-2 transition-colors ${
          locale === "pt-BR"
            ? "bg-[#cfaa76] !text-[#292d45]"
            : "text-[rgba(244,239,228,0.7)] hover:text-[#cfaa76]"
        }`}
        aria-current={!isEnglishPath ? "page" : undefined}
      >
        {ptLabel}
      </Link>
      <Link
        href="/en"
        className={`rounded-full px-3 py-2 transition-colors ${
          locale === "en"
            ? "bg-[#cfaa76] !text-[#292d45]"
            : "text-[rgba(244,239,228,0.7)] hover:text-[#cfaa76]"
        }`}
        aria-current={isEnglishPath ? "page" : undefined}
      >
        {enLabel}
      </Link>
    </div>
  );
}
