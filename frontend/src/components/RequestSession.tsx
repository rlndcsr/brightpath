"use client";

import { useRef } from "react";

export function RequestSession({ tutorName }: { tutorName: string }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => ref.current?.showModal()}>
        Request Session
      </button>
      <dialog
        ref={ref}
        aria-labelledby="request-title"
        className="m-auto w-[min(92vw,440px)] rounded-[28px] bg-white p-0 text-navy shadow-[0_24px_60px_rgb(27_37_80/0.25)] backdrop:bg-navy/40"
        onClick={(e) => {
          // Only a click on the backdrop lands on the <dialog> itself; the content sits in the inner div.
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
      >
        <div className="p-8">
          <h2 id="request-title" className="font-serif text-[28px] font-semibold leading-tight">Session requests are coming soon</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink">
            This prototype doesn&apos;t send requests yet. In the full version you&apos;ll pick a time with {tutorName} and describe what you&apos;d like to work on.
          </p>
          <form method="dialog" className="mt-6">
            <button className="btn btn-primary" autoFocus>Got it</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
