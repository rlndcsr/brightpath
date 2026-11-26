"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/tutors", label: "Find a Tutor" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources", chevron: true },
  { href: "/become-a-tutor", label: "Become a Tutor" },
];

export function SiteHeader() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so any navigation closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean | ((prev: boolean) => boolean)) =>
    setOpenOn((typeof v === "function" ? v(open) : v) ? pathname : null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="absolute inset-x-0 top-0 z-30 border-b border-white/60"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="mx-auto flex h-[88px] w-full max-w-[1152px] items-center justify-between px-6">
        <Link href="/" aria-label="BrightPath home" className="rounded-lg">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-navy/85">
            {links.map((l) => {
              const current = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={current ? "page" : undefined}
                    className="group relative inline-flex items-center gap-1 py-2 hover:text-navy aria-[current=page]:text-navy"
                  >
                    {l.label}
                    {l.chevron && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0.5 h-0.5 origin-left bg-current transition-transform duration-200 ${current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex">
          <div className="pill-pair">
            <Link href="/login" className="btn btn-primary pr-8">
              Log In
            </Link>
            <Link href="/signup" className="btn btn-secondary">
              Sign Up <Arrow />
            </Link>
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full bg-white/70 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mx-4 rounded-3xl bg-white p-3 shadow-[0_12px_40px_rgb(27_37_80/0.14)] lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === l.href || pathname.startsWith(`${l.href}/`) ? "page" : undefined}
                  className="flex min-h-14 items-center rounded-2xl px-4 text-base font-medium text-navy hover:bg-sky-pale aria-[current=page]:bg-sky-pale"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-2 p-1">
            <Link href="/login" onClick={() => setOpen(false)} className="btn btn-primary">
              Log In
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)} className="btn btn-secondary ring-1 ring-navy/10">
              Sign Up <Arrow />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Arrow() {
  return (
    <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
