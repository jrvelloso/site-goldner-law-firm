import Image from "next/image";

import { partnerLogos } from "@/content/partners";
import type { Locale } from "@/content/site-copy";

type PartnersSectionProps = {
  locale: Locale;
};

export function PartnersSection({ locale }: PartnersSectionProps) {
  const copy =
    locale === "pt-BR"
      ? {
          label: "Parceiros",
          title: "Relações institucionais e ecossistema de confiança.",
          intro:
            "Uma seleção de marcas e entidades presentes no universo institucional do escritório.",
        }
      : {
          label: "Partners",
          title: "Institutional relationships and a trusted ecosystem.",
          intro:
            "A selection of brands and entities present in the firm's institutional environment.",
        };

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
              <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
                {partnerLogos.map((logo, index) => (
                  <div
                    key={`${logo.alt}-${index}`}
                    className="group flex min-h-24 min-w-[70%] snap-start items-center justify-center rounded-[1.35rem] border border-stone-200/80 bg-white px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_34px_rgba(41,45,69,0.10)] sm:min-w-0 sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(20%-0.6rem)] xl:w-[calc(16.666%-0.65rem)]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 w-auto max-w-full object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-20"
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
