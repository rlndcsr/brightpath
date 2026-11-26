import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Log In" };

export default function Login() {
  return (
    <ComingSoon title={<>Welcome <em className="font-semibold">back</em></>}>
      Accounts aren&apos;t available in this prototype yet. You can still browse sample tutors without logging in.
    </ComingSoon>
  );
}
