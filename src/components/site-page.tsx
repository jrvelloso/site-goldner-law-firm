import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale, SiteCopy } from "@/content/site-copy";

type SitePageProps = {
  locale: Locale;
  copy: SiteCopy;
};

export function SitePage({ locale, copy }: SitePageProps) {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-stone-50/70 shadow-sm transition-opacity duration-300 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2 text-xl font-serif font-bold text-stone-900 before:h-3 before:w-3 before:rounded-full before:bg-red-600 before:content-['']">
            Goldner Law
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <Link className="text-xs font-bold uppercase tracking-widest text-stone-600 transition-opacity duration-300 hover:text-stone-900" href="#">
              {copy.nav.about}
            </Link>
            <Link className="text-xs font-bold uppercase tracking-widest text-stone-600 transition-opacity duration-300 hover:text-stone-900" href="#">
              {copy.nav.practices}
            </Link>
            <Link className="text-xs font-bold uppercase tracking-widest text-stone-600 transition-opacity duration-300 hover:text-stone-900" href="#">
              {copy.nav.team}
            </Link>
            <Link className="text-xs font-bold uppercase tracking-widest text-stone-600 transition-opacity duration-300 hover:text-stone-900" href="#">
              {copy.nav.contact}
            </Link>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <LanguageSwitcher
              locale={locale}
              ptLabel={copy.language.pt}
              enLabel={copy.language.en}
            />
            <button
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:opacity-80 active:scale-95"
              type="button"
            >
              <span>{copy.nav.consultation}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative flex h-[942px] items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              className="h-full w-full object-cover"
              src={copy.hero.image.src}
              alt={copy.hero.image.alt}
              fill
              priority
              sizes="100vw"
            />
            <div className="hero-gradient absolute inset-0"></div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-20">
            <div className="max-w-4xl space-y-8">
              <h1
                className="font-headline text-kern-tight text-5xl leading-tight text-white md:text-8xl"
                dangerouslySetInnerHTML={{ __html: copy.hero.title }}
              />
              <p className="max-w-2xl text-lg font-light leading-relaxed text-stone-300 md:text-xl">
                {copy.hero.body}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  className="flex items-center gap-3 rounded-full bg-primary-container px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:opacity-90"
                  type="button"
                >
                  <span>{copy.hero.primaryCta}</span>
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                </button>
                <button
                  className="rounded-full border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
                  type="button"
                >
                  {copy.hero.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-20 md:py-32">
          <div className="group relative h-[665px] overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={copy.feature.image.src}
              alt={copy.feature.image.alt}
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
              <h2 className="font-headline text-4xl text-white md:text-6xl">
                {copy.feature.title}
              </h2>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-stone-300">
                {copy.feature.meta}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-20 md:px-20">
          <div className="mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
              {copy.practiceAreas.label}
            </span>
            <div className="mt-4 h-px w-20 bg-primary opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
            {copy.practiceAreas.items.map((item, index) => (
              <div
                key={item.title}
                className="group flex h-full flex-col border-t border-surface-container-high pt-8 transition-transform duration-500 hover:-translate-y-2"
              >
                <span className="mb-6 font-mono text-sm text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-headline mb-4 text-2xl transition-all duration-300 group-hover:text-primary group-hover:italic">
                  {item.title}
                </h3>
                <p className="mb-8 flex-grow leading-relaxed text-secondary">
                  {item.body}
                </p>
                <Link
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-primary"
                  href="#"
                >
                  {copy.practiceAreas.learnMore}
                  <span className="text-sm">-&gt;</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 py-20">
          <div className="mx-auto max-w-[1920px] overflow-hidden rounded-xl bg-stone-900 px-8 py-24 md:px-20">
            <div className="mb-20 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-stone-500">
                {copy.team.label}
              </span>
              <h2 className="font-headline mt-6 text-4xl text-stone-50 md:text-6xl">
                {copy.team.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {copy.team.members.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h4 className="font-headline mb-1 text-xl text-stone-50">
                    {member.name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-8 py-32 text-center">
          <h2
            className="font-headline mb-12 text-4xl text-on-surface md:text-6xl"
            dangerouslySetInnerHTML={{ __html: copy.consultation.title }}
          />
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <button
              className="flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:opacity-90"
              type="button"
            >
              <span>{copy.consultation.primaryCta}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
            </button>
            <button
              className="rounded-full border border-outline-variant/30 px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-surface-container-low"
              type="button"
            >
              {copy.consultation.secondaryCta}
            </button>
          </div>
        </section>
      </main>

      <footer className="w-full bg-stone-100 pb-10 pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-3 md:px-20">
          <div className="space-y-6">
            <div className="text-2xl font-serif font-bold text-stone-900">
              Goldner Law
            </div>
            <p className="Inter max-w-xs text-sm font-normal leading-relaxed text-stone-500">
              {copy.footer.description}
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="Newsreader text-lg font-serif text-stone-900">
              {copy.footer.connectLabel}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-sm text-stone-500 transition-colors hover:text-red-700"
                  href="#"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-stone-500 transition-colors hover:text-red-700"
                  href="#"
                >
                  {copy.footer.briefs}
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-stone-500 transition-colors hover:text-red-700"
                  href="#"
                >
                  {copy.footer.press}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="Newsreader text-lg font-serif text-stone-900">
              {copy.footer.locationsLabel}
            </h4>
            <ul className="space-y-4">
              {copy.footer.locations.map((location) => (
                <li
                  key={location.city}
                  className="text-sm leading-relaxed text-stone-500"
                >
                  {location.address}
                  <br />
                  {location.city}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-stone-200 px-8 pt-8 md:flex-row md:px-20">
          <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
            {copy.footer.copyright}
          </p>
          <div className="flex gap-8">
            <Link
              className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900"
              href="#"
            >
              {copy.footer.privacy}
            </Link>
            <Link
              className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900"
              href="#"
            >
              {copy.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
