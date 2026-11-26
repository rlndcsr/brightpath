import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-paper">
      <div className="mx-auto grid w-full max-w-[1152px] gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink">
            A tutoring marketplace for learners across the Philippines. This is a design prototype; tutors and rates shown are samples.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-navy">Learn</h2>
          <ul className="mt-3 space-y-2 text-[15px] text-ink">
            <li><Link className="hover:text-navy" href="/tutors">Find a Tutor</Link></li>
            <li><Link className="hover:text-navy" href="/how-it-works">How It Works</Link></li>
            <li><Link className="hover:text-navy" href="/resources">Resources</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-navy">Teach</h2>
          <ul className="mt-3 space-y-2 text-[15px] text-ink">
            <li><Link className="hover:text-navy" href="/become-a-tutor">Become a Tutor</Link></li>
            <li><Link className="hover:text-navy" href="/login">Log In</Link></li>
            <li><Link className="hover:text-navy" href="/signup">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto w-full max-w-[1152px] px-6 pb-8 text-[13px] text-ink">
        Stand-in photographs via Unsplash (adapted), by Vitaly Gariev, Ernest Flowers, Dynamic Wang and Carlos Gil.
      </p>
    </footer>
  );
}
