import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Become a Tutor" };

export default function BecomeATutor() {
  return (
    <ComingSoon title={<>Teach with <em className="font-semibold">BrightPath</em></>}>
      Tutor applications and onboarding aren&apos;t open in this prototype yet. Soon you&apos;ll be able to create a profile, set your rate and choose your subjects.
    </ComingSoon>
  );
}
