"use client";

import { useEffect, useId, useRef } from "react";

import type { PracticeArea } from "@/content/practice-areas";
import type { Locale } from "@/content/site-copy";

type PracticeAreaModalProps = {
  area: PracticeArea | null;
  locale: Locale;
  institutionalLabel: string;
  institutionalText: string;
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
  institutionalLabel,
  institutionalText,
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
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,#fcfbf8_0%,#f5f1ea_100%)] shadow-[0_32px_100px_rgba(9,11,19,0.36)] sm:rounded-[2.25rem]"
      >
        <div className="grid gap-0 md:grid-cols-[minmax(0,1.35fr)_320px]">
          <div className="px-5 py-5 sm:px-8 sm:py-7 md:px-10 md:py-10">
            <div className="flex items-start justify-between gap-4 border-b border-[rgba(122,119,109,0.16)] pb-6">
              <div className="pr-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-primary">
                  {area.eyebrow}
                </div>
                <h3
                  id={titleId}
                  className="font-headline mt-4 max-w-2xl text-[2rem] leading-[0.98] text-[#292d45] sm:text-[2.5rem] md:text-[3.35rem]"
                >
                  {area.title}
                </h3>
              </div>
              <button
                ref={closeButtonRef}
                className="shrink-0 rounded-full border border-[rgba(122,119,109,0.2)] bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#292d45] transition-colors hover:border-primary/40 hover:text-primary"
                type="button"
                onClick={onClose}
              >
                {closeLabel}
              </button>
            </div>

            <div className="pt-6 sm:pt-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#7a776d]">
                {overviewLabel}
              </div>
              <p
                id={descriptionId}
                className="mt-5 max-w-2xl text-[1rem] leading-8 text-[rgba(41,45,69,0.78)] sm:text-[1.08rem]"
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
                        <div className="text-sm leading-6 text-[rgba(41,45,69,0.76)]">
                          {highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="border-t border-[rgba(122,119,109,0.16)] bg-[#292d45] px-5 py-6 text-stone-50 md:border-l md:border-t-0 md:px-7 md:py-10">
            <div className="sticky top-0">
              <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-[rgba(207,170,118,0.86)]">
                {institutionalLabel}
              </div>
              <p className="mt-6 text-[0.98rem] leading-7 text-[rgba(244,239,228,0.8)]">
                {institutionalText}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.26em] !text-white transition-opacity hover:opacity-90"
              >
                {ctaLabel}
              </a>
              <p className="mt-5 text-xs leading-6 text-[rgba(244,239,228,0.55)]">
                {locale === "pt-BR"
                  ? "Conversa inicial objetiva, com encaminhamento conforme a especialidade selecionada."
                  : "An objective first conversation, directed according to the selected practice area."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
