import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RequestSession } from "@/components/RequestSession";
import { Cloud } from "@/components/Sky";
import { TutorPhoto } from "@/components/TutorCard";
import { getTutor, peso, toneClasses, tutors } from "@/data/tutors";

export function generateStaticParams() {
  return tutors.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: PageProps<"/tutors/[id]">): Promise<Metadata> {
  const { id } = await params;
  const tutor = getTutor(id);
  return { title: tutor ? `${tutor.name}, ${tutor.subject} tutor` : "Tutor not found" };
}

export default async function TutorProfile({ params }: PageProps<"/tutors/[id]">) {
  const { id } = await params;
  const tutor = getTutor(id);
  if (!tutor) notFound();

  return (
    <section className="sky grain relative overflow-hidden pt-[88px]">
      <Cloud className="-left-24 top-28 w-[420px] opacity-80" />
      <Cloud className="-right-28 top-64 w-[460px] opacity-80" />
      <div className="relative mx-auto w-full max-w-[1152px] px-6 pb-20 pt-10 md:pt-14">
        <Link href="/tutors" className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-navy hover:underline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
          All tutors
        </Link>
        <div className="mt-6 grid gap-8 rounded-[36px] bg-white/85 p-5 ring-1 ring-white backdrop-blur-sm md:grid-cols-[380px_1fr] md:p-8">
          <TutorPhoto tutor={tutor} className="h-80 rounded-t-[999px] rounded-b-[28px] md:h-[440px]" sizes="380px" />
          <div className="flex flex-col py-2">
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink">Sample profile · prototype data</p>
            <h1 className="mt-2 font-serif text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-navy md:text-[56px]">{tutor.name}</h1>
            <p className={`mt-2 text-[16px] font-medium ${toneClasses[tutor.tone].text}`}>{tutor.subject} tutor · {tutor.location}</p>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink">{tutor.bio}</p>

            <h2 className="mt-7 text-[14px] font-semibold text-navy">Subjects offered</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tutor.subjects.map((s) => (
                <li key={s} className={`rounded-full px-4 py-1.5 text-[14px] font-medium text-navy ${toneClasses[tutor.tone].soft}`}>{s}</li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
              <p className="font-serif text-[32px] font-semibold text-navy">
                {peso(tutor.rate)}<span className="font-sans text-[16px] font-normal text-ink"> / hour (sample)</span>
              </p>
              <RequestSession tutorName={tutor.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
