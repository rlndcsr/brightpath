import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Resources" };

export default function Resources() {
  return (
    <ComingSoon title={<>Learning <em className="font-semibold">resources</em></>}>
      Study guides, exam calendars and tips for parents and learners will live here.
    </ComingSoon>
  );
}
