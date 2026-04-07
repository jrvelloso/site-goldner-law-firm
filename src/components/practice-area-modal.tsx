"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";

import logo from "@/app/assets/logo.png";
import type { PracticeArea } from "@/content/practice-areas";
import type { Locale } from "@/content/site-copy";

type PracticeAreaModalProps = {
  area: PracticeArea | null;
  locale: Locale;
  overviewLabel: string;
  closeLabel: string;
  ctaLabel: string;
  onClose: () => void;
  whatsappHref: string;
};

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && !element.getAttribute("aria-hidden"));
}

export function PracticeAreaModal({
  area,
  locale,
  overviewLabel,
  closeLabel,
  ctaLabel,
  onClose,
  whatsappHref,
}: PracticeAreaModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!area) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = getFocusableElements(panelRef.current);
      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [area, onClose]);

  if (!area) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(14,16,24,0.72)] px-3 py-4 backdrop-blur-[6px] sm:px-5 sm:py-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto overscroll-contain rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,#fcfbf8_0%,#f5f1ea_100%)] shadow-[0_32px_100px_rgba(9,11,19,0.36)] sm:max-w-5xl sm:rounded-[2.25rem]"
      >
        <div className="grid gap-0 md:grid-cols-[minmax(0,1.35fr)_320px]">
          <div className="px-5 py-5 sm:px-8 sm:py-7 md:px-10 md:py-10">
            <div className="flex items-start justify-between gap-4 border-b border-[rgba(122,119,109,0.16)] pb-6">
              <div className="pr-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                  {area.eyebrow}
                </div>
                <h3
                  id={titleId}
                  className="font-headline mt-4 max-w-2xl text-[2.2rem] leading-[1.01] text-[#292d45] text-balance sm:text-[2.7rem] md:text-[3.35rem]"
                >
                  {area.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                className="shrink-0 rounded-full border border-[rgba(122,119,109,0.2)] bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#292d45] transition-colors hover:border-primary/40 hover:text-primary"
                type="button"
                onClick={onClose}
              >
                {closeLabel}
              </button>
            </div>

            <div className="pt-6 sm:pt-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7a776d]">
                {overviewLabel}
              </div>
              <p
                id={descriptionId}
                className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-[rgba(41,45,69,0.78)] sm:text-[1.08rem]"
              >
                {area.overview}
              </p>

              {area.highlights?.length ? (
                <div className="mt-8 border-t border-[rgba(122,119,109,0.16)] pt-6">
                  <div className="grid gap-3 md:grid-cols-3">
                    {area.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[1.25rem] border border-[rgba(122,119,109,0.14)] bg-white/78 px-4 py-4 shadow-[0_10px_26px_rgba(41,45,69,0.06)]"
                      >
                        <div className="text-[0.98rem] leading-7 text-[rgba(41,45,69,0.76)]">
                          {highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="mx-4 mb-4 mt-3 rounded-[1.45rem] border border-[rgba(255,255,255,0.08)] bg-[#292d45] px-5 py-6 text-stone-50 shadow-[0_18px_36px_rgba(9,11,19,0.18)] md:mx-0 md:mb-0 md:mt-0 md:rounded-none md:border-l md:border-t-0 md:px-7 md:py-10 md:shadow-none">
            <div className="sticky top-0 flex min-h-full flex-col md:min-h-[520px]">
              <div className="flex justify-center md:pt-4">
                <Image
                  src={logo}
                  alt="Goldner & Dias Paes Advocacia"
                  className="h-auto w-[180px] object-contain opacity-[0.94]"
                />
              </div>
              <div className="flex flex-1 items-center">
                <p className="mt-6 text-justify text-base leading-8 text-[rgba(244,239,228,0.8)] md:mt-0">
                  {locale === "pt-BR"
                    ? "Leitura estratégica, condução técnica e conversa inicial objetiva, com encaminhamento compatível com a natureza da demanda e da especialidade selecionada."
                    : "Strategic judgement, technical guidance, and an objective first conversation, aligned with both the nature of the matter and the selected practice area."}
                </p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] !text-white transition-opacity hover:opacity-90 md:mt-auto"
              >
                {ctaLabel}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
