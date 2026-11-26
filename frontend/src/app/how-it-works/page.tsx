import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/SiteHeader";
import { PageHeader } from "@/components/Sky";

export const metadata: Metadata = { title: "How It Works" };

const steps = [
  { n: "1", title: "Find a tutor", body: "Search by subject or city, compare hourly rates in pesos, and read each tutor's profile and teaching style.", tone: "bg-mint-soft" },
  { n: "2", title: "Send a session request", body: "Choose a time, say what you want to work on, and the tutor confirms. Requests are not live in this prototype.", tone: "bg-peach-soft" },
  { n: "3", title: "Learn together", body: "Meet online or in person. After each session, book the next one or try a different tutor.", tone: "bg-lavender-soft" },
];

export default function HowItWorks() {
  return (
    <>
      <PageHeader eyebrow="How it works" title={<>Three steps to your <em className="font-semibold">first lesson</em></>}>
        From search to session, BrightPath keeps the process short.
      </PageHeader>
      <div className="mx-auto w-full max-w-[1152px] px-6 py-16 md:py-20">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col rounded-[32px] bg-white p-8 ring-1 ring-navy/8">
              <span className={`flex size-14 items-center justify-center rounded-full font-serif text-[28px] font-semibold italic text-navy ${s.tone}`}>{s.n}</span>
              <h2 className="mt-6 font-serif text-[28px] font-semibold leading-tight text-navy">{s.title}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-ink">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <div className="pill-pair">
            <Link href="/tutors" className="btn btn-primary pr-9">Find Your Tutor</Link>
            <Link href="/become-a-tutor" className="btn btn-secondary ring-1 ring-navy/10">Become a Tutor <Arrow /></Link>
          </div>
        </div>
      </div>
    </>
  );
}
