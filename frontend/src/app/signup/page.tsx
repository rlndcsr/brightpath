import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Sign Up" };

export default function Signup() {
  return (
    <ComingSoon title={<>Create your <em className="font-semibold">account</em></>}>
      Sign-up isn&apos;t open in this prototype yet. Learners and parents will be able to save tutors and send session requests.
    </ComingSoon>
  );
}
