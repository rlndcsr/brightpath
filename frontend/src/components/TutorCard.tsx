import Image from "next/image";
import Link from "next/link";
import { peso, toneClasses, type Tutor } from "@/data/tutors";

export function TutorPhoto({ tutor, className = "", sizes }: { tutor: Tutor; className?: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden ${toneClasses[tutor.tone].soft} ${className}`}>
      <div aria-hidden="true" className={`absolute -bottom-16 left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full opacity-70 ${toneClasses[tutor.tone].solid}`} />
      <Image
        src={tutor.image.src}
        width={tutor.image.width}
        height={tutor.image.height}
        alt={`${tutor.name} (sample tutor)`}
        sizes={sizes}
        className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
      />
    </div>
  );
}

export function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[28px] bg-white ring-1 ring-navy/8">
      <TutorPhoto tutor={tutor} className="h-60" sizes="(max-width: 640px) 90vw, 360px" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-serif text-[24px] font-semibold leading-tight text-navy">{tutor.name}</h2>
          <p className="shrink-0 text-[15px] font-semibold text-navy">
            {peso(tutor.rate)}<span className="font-normal text-ink">/hr</span>
          </p>
        </div>
        <p className={`mt-1 text-[14px] font-medium ${toneClasses[tutor.tone].text}`}>{tutor.subject} · {tutor.location}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink">{tutor.intro}</p>
        <Link href={`/tutors/${tutor.id}`} className="btn btn-primary mt-5 self-start">
          View Profile<span className="sr-only"> of {tutor.name}</span>
        </Link>
      </div>
    </article>
  );
}
