"use client";

import { useEffect, useState } from "react";

import type { PracticeItem } from "@/content/site-copy";

type PracticeAreasSectionProps = {
  label: string;
  learnMore: string;
  items: PracticeItem[];
  locale: "pt-BR" | "en";
};

export function PracticeAreasSection({
  label,
  learnMore,
  items,
  locale,
}: PracticeAreasSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;
  const modalTexts =
    locale === "pt-BR"
      ? {
          subtitle: "Especialidade",
          overview: "Visão geral",
          close: "Fechar",
          contact: "Agendar consultoria",
        }
      : {
          subtitle: "Practice area",
          overview: "Overview",
          close: "Close",
          contact: "Schedule consultation",
        };

  return (
    <>
      <section id="atuacao" className="bg-stone-100 px-4 py-18 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:px-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20 lg:px-20">
          <div className="lg:pt-2">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
              {label}
            </span>
            <div className="mt-4 h-px w-20 bg-primary opacity-30"></div>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-x-12 md:overflow-visible md:px-0 md:pb-0">
            {items.map((item, index) => (
              <button
                key={item.title}
                className="group min-w-[82%] snap-start rounded-[1.4rem] border border-stone-200 bg-stone-50 p-5 text-left shadow-[0_18px_40px_rgba(15,23,42,0.04)] md:min-w-0 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0 md:py-9 md:shadow-none md:first:pt-0 md:[&:nth-child(-n+2)]:pt-0"
                type="button"
                onClick={() => setActiveIndex(index)}
              >
                <div className="mb-4 flex items-start gap-3 sm:items-baseline sm:gap-4">
                  <span className="min-w-8 pt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-300 sm:text-[11px] sm:tracking-[0.32em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-headline text-[1.4rem] leading-tight text-stone-950 transition-colors duration-300 group-hover:text-primary sm:text-[1.55rem] md:text-[2rem]">
                    {item.title}
                  </h3>
                </div>
                <div className="pl-0 sm:pl-12 md:pl-0 lg:pl-12">
                  <p className="max-w-[28rem] text-[0.98rem] leading-7 text-stone-600 sm:text-[1.02rem] sm:leading-8">
                    {item.body}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-stone-900 transition-colors duration-300 group-hover:text-primary">
                    <span>{learnMore}</span>
                    <span aria-hidden="true">+</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.5rem] bg-stone-50 shadow-2xl sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-stone-200 px-4 py-4 sm:px-6 sm:py-5 md:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-primary">
                    {modalTexts.subtitle}
                  </div>
                  <h3 className="font-headline mt-3 max-w-2xl text-2xl leading-tight text-stone-950 sm:text-3xl md:text-5xl">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  className="self-start rounded-full border border-stone-300 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-950"
                  type="button"
                  onClick={() => setActiveIndex(null)}
                >
                  {modalTexts.close}
                </button>
              </div>
            </div>

            <div className="grid gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-stone-400">
                  {modalTexts.overview}
                </div>
                <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
                  {activeItem.body}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-stone-900 p-6 text-stone-50">
                <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-stone-400">
                  Goldner & Dias Paes Advocacia
                </div>
                <p className="mt-5 text-base leading-7 text-stone-300">
                  {locale === "pt-BR"
                    ? "Conteúdo detalhado desta especialidade pode ser expandido aqui com estrutura própria, benefícios, etapas e contexto jurídico."
                    : "Detailed content for this practice area can be expanded here with its own structure, benefits, stages, and legal context."}
                </p>
                <button
                  className="mt-8 rounded-full bg-primary px-6 py-3 text-[11px] font-bold uppercase tracking-[0.26em] !text-white transition-opacity hover:opacity-90"
                  type="button"
                >
                  {modalTexts.contact}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
