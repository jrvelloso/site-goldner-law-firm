import Image from "next/image";
import Link from "next/link";

import headerLogo from "@/app/assets/header_logo.svg";
import logo from "@/app/assets/logo.png";
import footerLogo from "@/app/assets/logo2.png";
import whatsappIcon from "@/app/assets/whatsapp.png";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PartnersSection } from "@/components/partners-section";
import { PracticeAreasSection } from "@/components/practice-areas-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import type { Locale, SiteCopy } from "@/content/site-copy";
import { testimonialsByLocale } from "@/content/testimonials";

type SitePageProps = {
  locale: Locale;
  copy: SiteCopy;
};

function SocialIcon({ label }: { label: string }) {
  const iconClassName = "h-[18px] w-[18px]";

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className={iconClassName}
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.35" cy="6.65" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={iconClassName}
      >
        <path d="M13.5 21v-7.2h2.43l.37-2.8H13.5V9.2c0-.8.22-1.35 1.37-1.35h1.57V5.34c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.81 1.38-3.81 3.92v1.86H8v2.8h2.35V21h3.15Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClassName}
    >
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38a1.56 1.56 0 0 1 0 3.12ZM5.6 9.9h2.67V18.4H5.6V9.9Zm4.35 0h2.56v1.16h.04c.36-.67 1.22-1.38 2.5-1.38 2.67 0 3.17 1.76 3.17 4.05v4.67h-2.67v-4.14c0-.99-.02-2.26-1.38-2.26-1.38 0-1.59 1.08-1.59 2.19v4.21H9.95V9.9Z" />
    </svg>
  );
}

export function SitePage({ locale, copy }: SitePageProps) {
  const whatsappHref =
    "https://wa.me/553235127880?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Goldner%20%26%20Dias%20Paes%20Advocacia.";
  const phoneHref = "tel:+553235127880";

  const officeSection =
    locale === "pt-BR"
      ? {
        label: "O Escritório",
        paragraphs: [
          "A Goldner & Dias Paes Advocacia atua de forma estratégica nas áreas de Direito Empresarial e Tributário, oferecendo soluções jurídicas sólidas para empresas que exigem segurança, clareza e eficiência.",
          "Com uma atuação orientada ao negócio, auxiliamos nossos clientes não apenas a cumprir obrigações legais, mas a tomar decisões mais inteligentes, reduzir riscos e estruturar operações de forma sustentável.",
          "Nossa equipa reúne profissionais experientes, com forte domínio técnico e visão prática, garantindo um acompanhamento próximo, ágil e alinhado às necessidades reais de cada cliente.",
          "Mais do que resolver problemas, antecipamos cenários e transformamos complexidade jurídica em vantagem competitiva.",
        ],
        values: [
          {
            title: "Tecnologia",
            body: "Atendimento ágil e digital, com processos otimizados para maior eficiência e rapidez nas decisões.",
          },
          {
            title: "Apoio Especializado",
            body: "Rede de especialistas que reforça cada estratégia com visão multidisciplinar.",
          },
          {
            title: "Flexibilidade",
            body: "Atuação adaptada à realidade de cada cliente, com proximidade e compreensão do negócio.",
          },
          {
            title: "Suporte Integral",
            body: "Acompanhamento completo — da estratégia à resolução final, com foco em resultado.",
          },
        ],
      }
      : {
        label: "The Firm",
        paragraphs: [
          "Goldner & Dias Paes Advocacia acts strategically in Corporate and Tax Law, delivering solid legal solutions for companies that require security, clarity, and efficiency.",
          "With a business-oriented approach, we help clients not only comply with legal obligations, but also make smarter decisions, reduce risk, and structure operations sustainably.",
          "Our team brings together experienced professionals with strong technical command and practical vision, ensuring close, agile support aligned with each client’s real needs.",
          "More than solving problems, we anticipate scenarios and turn legal complexity into competitive advantage.",
        ],
        values: [
          {
            title: "Technology",
            body: "Agile digital service with streamlined processes for faster, more efficient decisions.",
          },
          {
            title: "Specialized Support",
            body: "A network of specialists reinforcing each strategy with multidisciplinary perspective.",
          },
          {
            title: "Flexibility",
            body: "Work adapted to each client’s reality, with proximity and business understanding.",
          },
          {
            title: "Full Support",
            body: "End-to-end guidance from strategy to final resolution, always focused on outcomes.",
          },
        ],
      };

  const heroContent =
    locale === "pt-BR"
      ? [
        {
          label: "Atuação",
          body: "Estratégia jurídica para empresas, patrimónios e sucessões.",
        },
        {
          label: "Alcance",
          body: "Atuação no Brasil e em estruturas com dimensão internacional.",
        },
        {
          label: "Posicionamento",
          body: "Rigor técnico, comunicação clara e condução estratégica.",
        },
      ]
      : [
        {
          label: "Practice",
          body: "Legal strategy for companies, wealth structures, and succession matters.",
        },
        {
          label: "Reach",
          body: "Active in Brazil and across matters with an international dimension.",
        },
        {
          label: "Positioning",
          body: "Technical rigor, clear communication, and strategic execution.",
        },
      ];

  const heroText =
    locale === "pt-BR"
      ? {
        eyebrow: "Direito Empresarial e Tributário.",
        title:
          'Clareza jurídica,<br /><span class="font-light italic">visão estratégica.</span>',
        body: "Assessoria jurídica de alta precisão para estruturas empresariais, patrimoniais e sucessórias, no Brasil e em contextos internacionais.",
        primaryCta: "Agendar consultoria",
        secondaryCta: "Ver áreas de atuação",
        markLabel: "Assinatura institucional",
      }
      : {
        eyebrow: "Corporate and Tax Law.",
        title:
          'Legal clarity,<br /><span class="font-light italic">strategic vision.</span>',
        body: "High-precision legal counsel for corporate, wealth, and succession structures in Brazil and across international contexts.",
        primaryCta: "Schedule consultation",
        secondaryCta: "View practice areas",
        markLabel: "Institutional mark",
      };

  const testimonials =
    locale === "pt-BR"
      ? testimonialsByLocale["pt-BR"]
      : {
        ...testimonialsByLocale.en,
        items: testimonialsByLocale["pt-BR"].items,
      };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-[rgba(207,170,118,0.12)] bg-[rgba(41,45,69,0.92)] transition-opacity duration-300 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10 md:py-5">
          <Link
            href="/"
            aria-label="Goldner & Dias Paes Advocacia home"
            className="min-w-0 shrink"
          >
            <Image
              src={headerLogo}
              alt="Goldner & Dias Paes Advocacia"
              className="h-auto w-28 object-contain sm:w-40 md:w-60"
              priority
            />
          </Link>
          <div className="hidden items-center gap-9 lg:flex">
            <Link className="text-xs font-bold uppercase tracking-[0.2em] !text-[rgba(244,239,228,0.82)] transition-colors duration-300 hover:!text-[#cfaa76]" href="#sobre">
              {copy.nav.about}
            </Link>
            <Link className="text-xs font-bold uppercase tracking-[0.2em] !text-[rgba(244,239,228,0.82)] transition-colors duration-300 hover:!text-[#cfaa76]" href="#atuacao">
              {copy.nav.practices}
            </Link>
            <Link className="text-xs font-bold uppercase tracking-[0.2em] !text-[rgba(244,239,228,0.82)] transition-colors duration-300 hover:!text-[#cfaa76]" href="#equipe">
              {copy.nav.team}
            </Link>
            <Link className="text-xs font-bold uppercase tracking-[0.2em] !text-[rgba(244,239,228,0.82)] transition-colors duration-300 hover:!text-[#cfaa76]" href="#contato">
              {copy.nav.contact}
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <LanguageSwitcher
              locale={locale}
              ptLabel={copy.language.pt}
              enLabel={copy.language.en}
            />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#cfaa76] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] !text-[#292d45] transition-all duration-200 hover:bg-[#d6b486] active:scale-95 sm:px-6 sm:text-xs sm:tracking-[0.2em] md:px-8 md:py-3"
            >
              <span className="hidden sm:inline">{copy.nav.consultation}</span>
              <span className="sm:hidden">Contato</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#292d45]"></span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative flex min-h-[760px] items-center overflow-hidden sm:min-h-[860px]">
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
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,26,40,0.97)_0%,rgba(34,38,59,0.88)_46%,rgba(41,45,69,0.7)_100%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(207,170,118,0.14),transparent_24%)]"></div>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-10 pt-20 sm:px-6 sm:pb-0 sm:pt-28 md:px-12 md:pt-36 lg:px-20">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,760px)_minmax(280px,1fr)] lg:gap-10 xl:gap-16">
              <div className="max-w-[760px]">
              <div className="mb-5 inline-flex rounded-[1.15rem] border border-white/8 bg-black/18 p-2.5 backdrop-blur-sm sm:mb-8 sm:p-4 lg:hidden">
                <Image
                  src={logo}
                  alt="Goldner & Dias Paes Advocacia"
                  className="h-auto w-32 object-contain opacity-[0.94] sm:w-44"
                  priority
                />
              </div>
              <div className="inline-flex max-w-full items-center gap-2.5 border-b border-[rgba(207,170,118,0.28)] pb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#cfaa76] sm:text-xs sm:tracking-[0.24em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#cfaa76]"></span>
                <span className="truncate">{heroText.eyebrow}</span>
              </div>
              <div className="mt-7 max-w-[720px] sm:mt-9">
                <h1
                  className="font-headline text-kern-tight text-[2.8rem] leading-[0.98] font-medium tracking-[-0.03em] text-stone-50 text-balance sm:text-[3.85rem] md:text-[4.7rem] lg:text-[5.15rem]"
                  dangerouslySetInnerHTML={{ __html: heroText.title }}
                />
              </div>
              <p className="mt-6 max-w-[34rem] text-base leading-8 text-stone-200/92 sm:mt-9 sm:text-[1.08rem] md:text-[1.14rem]">
                {heroText.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#cfaa76] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] !text-[#292d45] transition-all hover:bg-[#d6b486] sm:min-h-0 sm:justify-start sm:px-9"
                >
                  <span>{heroText.primaryCta}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#292d45]"></span>
                </a>
                <a
                  href="#atuacao"
                  className="flex min-h-14 items-center justify-center rounded-full !border !border-white/35 !bg-white/8 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] !text-[#f4efe4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-all hover:!border-white/50 hover:!bg-white/12 sm:min-h-0 sm:px-9"
                >
                  {heroText.secondaryCta}
                </a>
              </div>
              <div className="mt-10 grid max-w-[980px] grid-cols-1 gap-4 sm:mt-16 md:grid-cols-3">
                {heroContent.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-black/24 px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-md sm:px-6 sm:py-6"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#cfaa76]">
                      {item.label}
                    </div>
                    <div className="mt-3 text-base leading-7 text-stone-100/92 sm:mt-4">
                      {item.body}
                    </div>
                  </div>
                ))}
              </div>
              </div>
              <div className="pointer-events-none hidden justify-center lg:flex lg:justify-end">
                <div className="flex w-full max-w-[440px] justify-center xl:justify-end">
                  <Image
                    src={logo}
                    alt=""
                    className="h-auto w-[300px] object-contain opacity-[0.96] xl:w-[360px]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-stone-50 px-4 py-16 sm:px-8 sm:py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 md:px-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-20 lg:px-20">
            <div className="lg:pt-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
                {officeSection.label}
              </span>
              <div className="mt-4 h-px w-20 bg-primary opacity-30"></div>
            </div>
            <div>
              <div className="max-w-4xl space-y-6">
                {officeSection.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[1.02rem] leading-8 text-stone-700 md:text-[1.14rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 md:grid-cols-2">
                {officeSection.values.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.6rem] border border-stone-200 bg-white px-6 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                      {item.title}
                    </div>
                    <p className="mt-4 max-w-[30rem] text-[1.02rem] leading-7 text-stone-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PracticeAreasSection
          locale={locale}
        />

        <section id="equipe" className="bg-stone-900 px-4 py-14 sm:px-8 sm:py-18">
          <div className="mx-auto max-w-7xl px-0 md:px-12 lg:px-20">
            <div className="mb-12 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-stone-500">
                {copy.team.label}
              </span>
              <h2 className="font-headline mt-5 text-3xl text-stone-50 md:text-5xl">
                {copy.team.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {copy.team.members.map((member) => (
                <article
                  key={member.name}
                  className="group overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.03] shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
                >
                  <div className="grid items-center gap-0 md:grid-cols-[340px_minmax(0,1fr)]">
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-800/70 md:h-full md:aspect-auto">
                      <Image
                        className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                        src={member.image.src}
                        alt={member.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 340px"
                      />
                    </div>
                    <div className="px-5 py-6 sm:px-8 md:px-10">
                      <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
                        {member.role}
                      </span>
                      <h3 className="font-headline mt-4 text-[2.35rem] leading-[0.98] text-stone-50 md:text-5xl">
                        {member.name}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300 md:mt-5 md:text-[1.05rem] md:leading-8">
                        {locale === "pt-BR"
                          ? "Atuação orientada por estratégia, rigor técnico e acompanhamento próximo em estruturas empresariais, patrimoniais e sucessórias."
                          : "Practice guided by strategy, technical rigor, and close counsel across corporate, wealth, and succession structures."}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection
          label={testimonials.label}
          title={testimonials.title}
          intro={testimonials.intro}
          items={testimonials.items}
          locale={locale}
        />

        <PartnersSection locale={locale} />

        <section id="contato" className="bg-stone-950 px-4 py-20 text-center sm:px-8 sm:py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <h2
              className="font-headline mb-10 text-4xl text-stone-50 md:text-6xl"
              dangerouslySetInnerHTML={{ __html: copy.consultation.title }}
            />
            <div className="flex items-center justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest !text-white transition-all hover:opacity-90 sm:w-auto sm:px-10"
              >
                <span>{copy.consultation.primaryCta}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-stone-100 pb-10 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-8 md:grid-cols-4 md:gap-10 md:px-20">
          <div className="space-y-6">
            <Link href="/" aria-label="Goldner & Dias Paes home" className="inline-block">
              <Image
                src={footerLogo}
                alt="Goldner & Dias Paes Advocacia"
                className="h-auto w-[170px] sm:w-[240px]"
              />
            </Link>
            <p className="max-w-[20rem] text-base leading-7 text-stone-600">
              {copy.footer.description}
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
              {copy.footer.connectLabel}
            </h4>
            <ul className="flex items-center gap-3">
              {copy.footer.socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-500 transition-colors hover:border-primary/40 hover:text-[#292d45]"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <SocialIcon label={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
              {copy.footer.locationsLabel}
            </h4>
            <ul className="space-y-6">
              {copy.locations.items.map((location) => (
                <li key={location.city} className="text-[0.97rem] leading-7 text-stone-500">
                  <p className="font-headline text-[1.25rem] leading-tight text-stone-900">
                    {location.city}
                  </p>
                  {location.venue ? <p>{location.venue}</p> : null}
                  {location.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>CEP {location.postalCode}</p>
                  <a
                    href={location.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-stone-700 transition-colors hover:text-primary"
                  >
                    {copy.locations.mapCta}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
              {copy.footer.contactLabel}
            </h4>
            <ul className="space-y-4 text-base leading-7 text-stone-500">
              <li>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
                  {copy.footer.phoneLabel}
                </span>
                <a
                  href={phoneHref}
                  className="mt-1 inline-block text-stone-800 transition-colors hover:text-primary"
                >
                  {copy.footer.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
                  {copy.footer.whatsappLabel}
                </span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-stone-800 transition-colors hover:text-primary"
                >
                  {copy.footer.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-stone-200 px-4 pt-8 text-center sm:px-8 md:mt-20 md:flex-row md:px-20 md:text-left">
          <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400">
              {copy.footer.copyright}
            </p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-stone-400">
              Made by{" "}
              <a
                href="https://perolamagnetizante.pt"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-stone-500 transition-colors hover:text-stone-900"
              >
                perolamagnetizante.pt
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:justify-end md:gap-8">
            <Link
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400 hover:text-stone-900"
              href="#"
            >
              {copy.footer.privacy}
            </Link>
            <Link
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-400 hover:text-stone-900"
              href="#"
            >
              {copy.footer.terms}
            </Link>
          </div>
        </div>
      </footer>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 z-[90] flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#1f9d55] text-white shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <Image
          src={whatsappIcon}
          alt=""
          className="h-full w-full object-cover"
        />
      </a>
    </>
  );
}
