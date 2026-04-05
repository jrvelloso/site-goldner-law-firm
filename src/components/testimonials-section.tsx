"use client";

import { useEffect, useState } from "react";

import type { Testimonial } from "@/content/testimonials";

type TestimonialsSectionProps = {
  label: string;
  title: string;
  intro: string;
  items: Testimonial[];
  locale: "pt-BR" | "en";
};

export function TestimonialsSection({
  label,
  title,
  intro,
  items,
  locale,
}: TestimonialsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const previewItems = items.slice(0, 6);
  const ui =
    locale === "pt-BR"
      ? {
          viewAll: "Ver todos os depoimentos",
          close: "Fechar",
        }
      : {
          viewAll: "View all testimonials",
          close: "Close",
        };

  return (
    <>
      <section className="bg-stone-50 px-4 py-16 sm:px-8 sm:py-20 md:py-28">
        <div className="mx-auto max-w-[1920px] rounded-[1.5rem] bg-stone-100 px-5 py-12 sm:px-8 sm:py-16 md:rounded-[2rem] md:px-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
            <div className="lg:pt-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
                {label}
              </span>
              <div className="mt-4 h-px w-20 bg-primary opacity-30"></div>
              <h2 className="font-headline mt-8 text-4xl leading-tight text-stone-950 md:text-6xl">
                {title}
              </h2>
              <p className="mt-6 max-w-sm text-[1rem] leading-7 text-stone-600">
                {intro}
              </p>
              <button
                className="mt-8 rounded-full border border-stone-300 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.28em] text-stone-900 transition-colors hover:border-primary/40 hover:text-primary"
                type="button"
                onClick={() => setIsOpen(true)}
              >
                {ui.viewAll}
              </button>
            </div>

            <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3">
              {previewItems.map((item) => (
                <article
                  key={`${item.name}-${item.quote}`}
                  className="min-w-[85%] snap-start rounded-[1.4rem] border border-stone-200 bg-white p-5 sm:min-w-[70%] sm:p-6 md:min-w-0"
                >
                  <div className="text-3xl leading-none text-primary">"</div>
                  <p className="mt-4 line-clamp-6 text-[0.98rem] leading-7 text-stone-700">
                    {item.quote}
                  </p>
                  <div className="mt-6 border-t border-stone-200 pt-4">
                    <div className="text-[0.95rem] font-semibold text-stone-950">
                      {item.name}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[1.5rem] bg-stone-950 p-5 shadow-2xl sm:rounded-[2rem] sm:p-8 md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-8 flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#c9a85c]">
                  {label}
                </div>
                <h3 className="font-headline mt-3 text-3xl text-stone-50 md:text-5xl">
                  {title}
                </h3>
              </div>
              <button
                className="self-start rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-stone-100 transition-colors hover:border-[#c9a85c]/40"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                {ui.close}
              </button>
            </div>

            <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
              {items.map((item) => (
                <article
                  key={`${item.name}-${item.quote}-modal`}
                  className="mb-5 break-inside-avoid rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-6"
                >
                  <div className="text-3xl leading-none text-[#c9a85c]">"</div>
                  <p className="mt-4 text-[1rem] leading-8 text-stone-200">
                    {item.quote}
                  </p>
                  <div className="mt-8 border-t border-white/8 pt-4">
                    <div className="text-[0.95rem] font-semibold text-stone-50">
                      {item.name}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
