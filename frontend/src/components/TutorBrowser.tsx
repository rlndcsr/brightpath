"use client";

import { useMemo, useState } from "react";
import { categories, tutors, type Category } from "@/data/tutors";
import { TutorCard } from "./TutorCard";

export function TutorBrowser({ initialCategory }: { initialCategory: Category | "all" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">(initialCategory);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tutors.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (!q) return true;
      return [t.name, t.subject, t.intro, t.location, ...t.subjects].join(" ").toLowerCase().includes(q);
    });
  }, [query, category]);

  const filters: { id: Category | "all"; label: string }[] = [{ id: "all", label: "All subjects" }, ...categories];

  return (
    <div className="mx-auto w-full max-w-[1152px] px-6 py-12 md:py-16">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">Search tutors</span>
          <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by subject, name or city"
            className="h-12 w-full rounded-full border border-navy/15 bg-white pl-11 pr-4 text-[15px] text-navy outline-none transition-shadow placeholder:text-ink focus:border-navy focus:shadow-[0_0_0_3px_rgb(27_37_80/0.12)]"
          />
        </label>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={category === f.id}
              onClick={() => setCategory(f.id)}
              className="min-h-11 rounded-full border border-navy/15 bg-white px-4 text-[14px] font-medium text-navy transition-colors hover:bg-sky-pale aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-[14px] text-ink" aria-live="polite">
        {results.length} {results.length === 1 ? "tutor" : "tutors"} · sample data
      </p>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <li key={t.id} className="flex">
              <TutorCard tutor={t} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-[28px] bg-sky-pale/60 p-10 text-center">
          <p className="font-serif text-[24px] text-navy">No tutors match that search yet.</p>
          <button type="button" className="btn btn-secondary mt-5" onClick={() => { setQuery(""); setCategory("all"); }}>
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
