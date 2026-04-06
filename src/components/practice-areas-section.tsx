"use client";

import { useState } from "react";

import { PracticeAreaModal } from "@/components/practice-area-modal";
import { practiceAreasByLocale } from "@/content/practice-areas";
import type { Locale } from "@/content/site-copy";

const WHATSAPP_NUMBER = "553235127880";

type PracticeAreasSectionProps = {
  locale: Locale;
};

export function PracticeAreasSection({ locale }: PracticeAreasSectionProps) {
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);
  const content = practiceAreasByLocale[locale];
  const activeArea =
    activeAreaId === null
      ? null
      : content.items.find((item) => item.id === activeAreaId) ?? null;

  const whatsappHref = activeArea
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        locale === "pt-BR"
          ? `Olá, gostaria de falar sobre a área de ${activeArea.whatsappTopic}.`
          : `Hello, I would like to discuss the practice area of ${activeArea.whatsappTopic}.`,
      )}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <>
      <section
        id="atuacao"
        className="bg-[linear-gradient(180deg,#f6f3ed_0%,#fbf8f3_45%,#f3eee6_100%)] px-4 py-18 sm:px-8 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-7xl md:px-12 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20">
            <div className="lg:pt-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
                {content.sectionLabel}
              </span>
              <div className="mt-4 h-px w-20 bg-primary opacity-30"></div>
              <p className="mt-8 max-w-[15rem] text-[0.98rem] leading-7 text-[rgba(41,45,69,0.58)]">
                {content.listHint}
              </p>
            </div>

            <div>
              <div className="max-w-4xl">
                <h2 className="font-headline max-w-3xl text-4xl leading-[1.04] text-[#292d45] text-balance md:text-5xl">
                  {content.sectionTitle}
                </h2>
                <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-[rgba(41,45,69,0.72)] md:text-[1.08rem]">
                  {content.sectionIntro}
                </p>
              </div>

              <div className="mt-12 rounded-[2rem] border border-[rgba(122,119,109,0.14)] bg-[rgba(255,255,255,0.62)] p-3 shadow-[0_24px_70px_rgba(41,45,69,0.06)] backdrop-blur-sm sm:p-4 md:p-5">
                <div className="grid gap-3 md:grid-cols-2">
                  {content.items.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveAreaId(item.id)}
                      className="group rounded-[1.6rem] border border-transparent bg-[rgba(252,250,247,0.92)] px-5 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(207,170,118,0.32)] hover:shadow-[0_18px_36px_rgba(41,45,69,0.08)] focus-visible:border-[rgba(207,170,118,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(207,170,118,0.28)] sm:px-6 sm:py-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7a776d]">
                            {item.eyebrow}
                          </div>
                          <h3 className="font-headline mt-4 max-w-[18rem] text-[1.65rem] leading-[1.08] text-[#292d45] text-balance transition-colors duration-300 group-hover:text-primary sm:text-[1.9rem]">
                            {item.title}
                          </h3>
                        </div>
                        <span className="pt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(122,119,109,0.5)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="mt-5 max-w-[31rem] text-base leading-8 text-[rgba(41,45,69,0.66)]">
                        {item.overview}
                      </p>
                      <div className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#292d45] transition-colors duration-300 group-hover:text-primary">
                        <span>{content.learnMore}</span>
                        <span
                          aria-hidden="true"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(122,119,109,0.16)] text-sm transition-colors duration-300 group-hover:border-[rgba(207,170,118,0.28)]"
                        >
                          +
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PracticeAreaModal
        area={activeArea}
        locale={locale}
        overviewLabel={content.modalOverviewLabel}
        closeLabel={content.modalCloseLabel}
        ctaLabel={content.modalCtaLabel}
        whatsappHref={whatsappHref}
        onClose={() => setActiveAreaId(null)}
      />
    </>
  );
}
