"use client";

import Image from "next/image";
import { useState } from "react";

import { partnerLogos } from "@/content/partners";
import type { Locale } from "@/content/site-copy";

type PartnersSectionProps = {
  locale: Locale;
};

const MOBILE_VISIBLE_COUNT = 9;

export function PartnersSection({ locale }: PartnersSectionProps) {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const copy =
    locale === "pt-BR"
      ? {
          label: "Parceiros",
          title: "Relações institucionais e ecossistema de confiança.",
          intro:
            "Uma seleção de marcas e entidades presentes no universo institucional do escritório.",
          showAll: "Ver todos os parceiros",
          showLess: "Mostrar menos",
        }
      : {
          label: "Partners",
          title: "Institutional relationships and a trusted ecosystem.",
          intro:
            "A selection of brands and entities present in the firm's institutional environment.",
          showAll: "View all partners",
          showLess: "Show less",
        };

  const mobileLogos = showAllMobile
    ? partnerLogos
    : partnerLogos.slice(0, MOBILE_VISIBLE_COUNT);

  return (
    <section className="bg-stone-50 px-4 py-16 sm:px-8 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20">
          <div className="lg:pt-2">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
              {copy.label}
            </span>
            <div className="mt-4 h-px w-20 bg-primary opacity-30"></div>
          </div>
          <div>
            <h2 className="font-headline max-w-3xl text-4xl leading-tight text-stone-900 md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-stone-600 md:text-[1.05rem]">
              {copy.intro}
            </p>

            <div className="mt-10 rounded-[2rem] border border-stone-200 bg-[linear-gradient(180deg,#fff_0%,#f2ede4_100%)] p-4 shadow-[0_24px_70px_rgba(41,45,69,0.08)] sm:p-5 md:p-6">
              <div className="grid grid-cols-3 gap-2 sm:hidden">
                {mobileLogos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="flex min-h-[84px] items-center justify-center rounded-[1rem] border border-stone-200/80 bg-white px-2 py-2"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-9 w-auto max-w-full object-contain opacity-80 grayscale"
                    />
                  </div>
                ))}
              </div>

              {partnerLogos.length > MOBILE_VISIBLE_COUNT ? (
                <div className="mt-4 flex justify-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setShowAllMobile((current) => !current)}
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(122,119,109,0.18)] bg-white/80 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#292d45] transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {showAllMobile ? copy.showLess : copy.showAll}
                  </button>
                </div>
              ) : null}

              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 xl:grid-cols-6">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="group flex min-h-[112px] items-center justify-center rounded-[1.2rem] border border-stone-200/80 bg-white px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_34px_rgba(41,45,69,0.10)] sm:min-h-[128px] sm:rounded-[1.35rem]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-[4.5rem] lg:h-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
