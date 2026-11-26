// Decorative sky pieces shared by the hero and page headers.

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} viewBox="0 0 420 200" aria-hidden="true">
      <defs>
        <filter id="cloud-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>
      <g fill="#fff" filter="url(#cloud-blur)">
        <ellipse cx="210" cy="140" rx="185" ry="42" opacity="0.85" />
        <circle cx="130" cy="112" r="52" opacity="0.9" />
        <circle cx="205" cy="88" r="70" opacity="0.95" />
        <circle cx="290" cy="110" r="55" opacity="0.9" />
        <circle cx="350" cy="134" r="34" opacity="0.8" />
        <circle cx="70" cy="138" r="32" opacity="0.8" />
      </g>
    </svg>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow?: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="sky grain relative overflow-hidden pt-[88px]">
      <Cloud className="-left-24 top-24 w-[420px] opacity-80" />
      <Cloud className="-right-28 top-36 w-[460px] opacity-80" />
      <div className="relative mx-auto w-full max-w-[1152px] px-6 pb-16 pt-16 text-center md:pb-20 md:pt-20">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mx-auto mt-5 max-w-3xl font-serif text-[40px] leading-[1.05] tracking-[-0.025em] text-navy md:text-[60px]">{title}</h1>
        {children && <div className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ink">{children}</div>}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-white/55 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#245a6e] backdrop-blur-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#ef5f78" d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 5.2 3 1.6-1.9 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21Z" />
      </svg>
      {children}
    </p>
  );
}
