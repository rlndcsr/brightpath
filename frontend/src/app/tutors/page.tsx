import type { Metadata } from "next";
import { PageHeader } from "@/components/Sky";
import { TutorBrowser } from "@/components/TutorBrowser";
import { categories, type Category } from "@/data/tutors";

export const metadata: Metadata = { title: "Find a Tutor" };

export default async function TutorsPage({ searchParams }: PageProps<"/tutors">) {
  const { category } = await searchParams;
  const initial = categories.some((c) => c.id === category) ? (category as Category) : "all";

  return (
    <>
      <PageHeader eyebrow="Find a tutor" title={<>Tutors for every <em className="font-semibold">subject</em></>}>
        Search by subject or city and compare sample rates in Philippine pesos.
      </PageHeader>
      <TutorBrowser key={initial} initialCategory={initial} />
    </>
  );
}
