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
    <div className="lang-pill flex items-center rounded-full bg-stone-200/70 p-1 text-xs font-bold uppercase tracking-widest">
      <Link
        href="/"
        className={`rounded-full px-3 py-2 transition-colors ${
          locale === "pt-BR" ? "bg-primary text-white" : "text-stone-400"
        }`}
        aria-current={!isEnglishPath ? "page" : undefined}
      >
        {ptLabel}
      </Link>
      <Link
        href="/en"
        className={`rounded-full px-3 py-2 transition-colors ${
          locale === "en" ? "bg-primary text-white" : "text-stone-400"
        }`}
        aria-current={isEnglishPath ? "page" : undefined}
      >
        {enLabel}
      </Link>
    </div>
  );
}
