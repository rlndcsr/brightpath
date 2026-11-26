import Image from "next/image";
import { tutors, type Tone } from "@/data/tutors";

type Slot = {
  tutorId: string;
  label: string;
  tone: Tone;
  left: number; // px within the 1152px row
  archTop: number;
  imgWidth: number;
  imgBottom: number; // how far the photo bleeds below the row
  labelTop: number;
  cursor?: "left" | "right";
};

// Geometry measured from the reference: three 352px arches, 48px gaps, middle arch raised.
const slots: Slot[] = [
  { tutorId: "ana-reyes", label: "English tutor", tone: "mint", left: 0, archTop: 168, imgWidth: 300, imgBottom: -24, labelTop: 58, cursor: "left" },
  { tutorId: "miguel-dela-cruz", label: "Math tutor", tone: "peach", left: 400, archTop: 68, imgWidth: 290, imgBottom: -96, labelTop: 6 },
  { tutorId: "bea-lim", label: "Coding tutor", tone: "lavender", left: 800, archTop: 178, imgWidth: 280, imgBottom: -24, labelTop: 68, cursor: "right" },
];

const palette: Record<string, { arch: string; shape: string; pill: string; cursor: string }> = {
  mint: { arch: "#27be91", shape: "#8fdfc2", pill: "#9fe6cb", cursor: "#1fa47c" },
  peach: { arch: "#ff9a48", shape: "#ffc78f", pill: "#ffc996", cursor: "#f08a35" },
  lavender: { arch: "#a78bfa", shape: "#cbbcfc", pill: "#d3c6fd", cursor: "#8f6ff3" },
};

function Petals({ color, rays }: { color: string; rays?: boolean }) {
  // Lighter four-lobed shape behind each tutor; the middle arch gets sun rays.
  return (
    <svg className="absolute left-1/2 top-6 w-[330px] -translate-x-1/2" viewBox="0 0 300 300" aria-hidden="true">
      {rays ? (
        <g fill={color}>
          {[0, 45, 90, 135].map((a) => (
            <path key={a} d="M150 150 L118 0 H182 Z" transform={`rotate(${a} 150 150)`} />
          ))}
          {[0, 45, 90, 135].map((a) => (
            <path key={`b${a}`} d="M150 150 L118 300 H182 Z" transform={`rotate(${a} 150 150)`} />
          ))}
          <circle cx="150" cy="150" r="80" />
        </g>
      ) : (
        <g fill={color}>
          <ellipse cx="150" cy="80" rx="58" ry="80" />
          <ellipse cx="150" cy="220" rx="58" ry="80" />
          <ellipse cx="80" cy="150" rx="80" ry="58" />
          <ellipse cx="220" cy="150" rx="80" ry="58" />
        </g>
      )}
    </svg>
  );
}

function CursorMark({ color, flip }: { color: string; flip?: boolean }) {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M2 2 L18 9 L10.5 11.5 L7 20 Z" fill={color} stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroPortraits() {
  return (
    <div className="relative mx-auto h-[211px] w-full overflow-visible sm:h-[273px] md:h-[317px] lg:h-[387px] xl:h-[440px]">
      <div className="settle absolute bottom-0 left-1/2 h-[440px] w-[1152px] -translate-x-1/2 origin-bottom scale-[0.48] sm:scale-[0.62] md:scale-[0.72] lg:scale-[0.88] xl:scale-100">
        {slots.map((s, i) => {
          const tutor = tutors.find((t) => t.id === s.tutorId)!;
          const c = palette[s.tone];
          const height = Math.round((tutor.image.height / tutor.image.width) * s.imgWidth);
          return (
            <div key={s.tutorId} className="absolute top-0 h-full w-[352px]" style={{ left: s.left }}>
              <div
                className="absolute inset-x-0 overflow-hidden rounded-t-full"
                style={{ top: s.archTop, height: 440, backgroundColor: c.arch }}
              >
                <Petals color={c.shape} rays={s.tone === "peach"} />
              </div>
              <Image
                src={tutor.image.src}
                width={tutor.image.width}
                height={tutor.image.height}
                alt={`${tutor.name}, ${tutor.subject.toLowerCase()} tutor (sample)`}
                sizes={`${s.imgWidth}px`}
                loading="eager"
                fetchPriority={i === 1 ? "high" : "auto"}
                className="absolute left-1/2 max-w-none -translate-x-1/2"
                style={{ width: s.imgWidth, height, bottom: s.imgBottom }}
              />
              <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 max-sm:hidden" style={{ top: s.labelTop }}>
                <span
                  className="inline-block whitespace-nowrap rounded-full px-5 py-2 font-serif text-[20px] font-semibold italic text-navy"
                  style={{ backgroundColor: c.pill }}
                >
                  {s.label}
                </span>
                {s.cursor && (
                  <span className={`absolute top-[46px] ${s.cursor === "left" ? "-left-1" : "-right-1"}`}>
                    <CursorMark color={c.cursor} flip={s.cursor === "right"} />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
