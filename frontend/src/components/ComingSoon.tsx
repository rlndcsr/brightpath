import Link from "next/link";
import { Arrow } from "./SiteHeader";
import { PageHeader } from "./Sky";

export function ComingSoon({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      <PageHeader eyebrow="Coming soon" title={title}>
        {children}
      </PageHeader>
      <div className="mx-auto flex w-full max-w-[1152px] justify-center px-6 py-16">
        <div className="pill-pair">
          <Link href="/" className="btn btn-primary pr-9">Back to Home</Link>
          <Link href="/tutors" className="btn btn-secondary ring-1 ring-navy/10">Find a Tutor <Arrow /></Link>
        </div>
      </div>
    </>
  );
}
