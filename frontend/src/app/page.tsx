import Link from "next/link";
import { HeroPortraits } from "@/components/HeroPortraits";
import { Arrow } from "@/components/SiteHeader";
import { Cloud, Eyebrow } from "@/components/Sky";
import { categories, toneClasses } from "@/data/tutors";

const steps = [
  { n: "1", title: "Find a tutor", body: "Search by subject, compare rates in pesos and read each tutor's profile." },
  { n: "2", title: "Send a session request", body: "Pick a time that suits you and tell the tutor what you want to work on." },
  { n: "3", title: "Learn together", body: "Meet online or in person, then book the next session when you're ready." },
];

export default function Home() {
  return (
    <>
      <section className="sky grain relative overflow-hidden pt-[88px]">
        <Cloud className="-left-28 top-[230px] w-[360px] opacity-90 md:-left-16 md:w-[460px]" />
        <Cloud className="-right-32 top-[260px] w-[380px] opacity-90 md:-right-20 md:w-[500px]" />
        <div aria-hidden="true" className="absolute -left-24 bottom-0 h-[190px] w-[170px] rounded-t-full bg-[#cfe8f8] max-lg:hidden" />
        <div aria-hidden="true" className="absolute -right-24 bottom-0 h-[190px] w-[170px] rounded-t-full bg-[#c6dbf2] max-lg:hidden" />

        <div className="relative mx-auto w-full max-w-[1152px] px-6 pt-14 text-center md:pt-[76px]">
          <div className="rise" style={{ "--d": "40ms" } as React.CSSProperties}>
            <Eyebrow>Tutoring for learners across the Philippines</Eyebrow>
          </div>
          <h1 className="rise mx-auto mt-6 font-serif text-[44px] leading-[1.02] tracking-[-0.025em] sm:text-[60px] lg:text-[78px]" style={{ "--d": "80ms" } as React.CSSProperties}>
            <span className="block font-medium text-navy">
              Learn without <em className="font-bold">limits,</em>
            </span>
            <span className="block font-medium text-muted">with the right tutor.</span>
          </h1>
          <p className="rise mx-auto mt-6 max-w-[590px] text-[17px] leading-[1.6] text-ink" style={{ "--d": "300ms" } as React.CSSProperties}>
            Discover tutors for academics, languages, coding, and more. Learn at your own pace, wherever you are in the Philippines.
          </p>
          <div className="rise mt-8 flex justify-center" style={{ "--d": "360ms" } as React.CSSProperties}>
            <div className="pill-pair">
              <Link href="/tutors" className="btn btn-primary pr-9">
                Find Your Tutor
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary">
                How It Works <Arrow />
              </Link>
            </div>
          </div>
          <ul className="rise mt-6 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[13px] text-ink" style={{ "--d": "420ms" } as React.CSSProperties}>
            {["Academics", "Languages", "Coding", "Test prep"].map((s, i) => (
              <li key={s} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden="true" className="mr-1.5 h-3 w-px bg-ink/40" />}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-10 overflow-hidden md:mt-12">
          <HeroPortraits />
        </div>
      </section>

      <section aria-labelledby="categories" className="bg-cream/60">
        <div className="mx-auto w-full max-w-[1152px] px-6 py-20 md:py-24">
          <h2 id="categories" className="max-w-xl font-serif text-[34px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[46px]">
            Explore learning <em className="font-semibold">categories</em>
          </h2>
          <p className="mt-3 max-w-xl text-[17px] text-ink">Start with a subject, then compare tutors, rates and teaching styles.</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/tutors?category=${c.id}`}
                  className="group flex h-full flex-col rounded-[28px] bg-white p-6 ring-1 ring-navy/8 transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <span className={`flex size-12 items-center justify-center rounded-full ${toneClasses[c.tone].soft}`} aria-hidden="true">
                    <span className={`size-4 rounded-full ${toneClasses[c.tone].solid}`} />
                  </span>
                  <span className="mt-5 font-serif text-[24px] font-semibold text-navy">{c.label}</span>
                  <span className="mt-2 flex-1 text-[15px] leading-relaxed text-ink">{c.blurb}</span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-navy">
                    Browse tutors <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how" className="bg-paper">
        <div className="mx-auto w-full max-w-[1152px] px-6 py-20 md:py-24">
          <h2 id="how" className="font-serif text-[34px] leading-[1.1] tracking-[-0.02em] text-navy md:text-[46px]">
            How BrightPath <em className="font-semibold">works</em>
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-[28px] bg-sky-pale/60 p-7">
                <span className="font-serif text-[44px] font-semibold italic leading-none text-muted">{s.n}</span>
                <h3 className="mt-4 font-serif text-[24px] font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="cta" className="bg-paper pb-24">
        <div className="sky grain relative mx-auto w-[calc(100%-3rem)] max-w-[1104px] overflow-hidden rounded-[36px] px-6 py-16 text-center md:py-20">
          <Cloud className="-left-20 top-6 w-[340px] opacity-80" />
          <Cloud className="-right-24 bottom-0 w-[380px] opacity-80" />
          <h2 id="cta" className="relative font-serif text-[34px] leading-[1.08] tracking-[-0.02em] text-navy md:text-[52px]">
            Your next lesson is <em className="font-bold">one search</em> away.
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-[17px] text-ink">Browse sample tutors in this prototype, or see how session requests will work.</p>
          <div className="relative mt-8 flex justify-center">
            <div className="pill-pair">
              <Link href="/tutors" className="btn btn-primary pr-9">Find Your Tutor</Link>
              <Link href="/how-it-works" className="btn btn-secondary">How It Works <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
