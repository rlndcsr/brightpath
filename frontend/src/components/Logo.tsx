import Image from "next/image";

// Owl mascot from /public/images/brightpath-logo.svg plus the serif wordmark.
// The artwork has ~20% side padding in its 512px viewBox, hence the negative left margin.
export function Logo() {
  return (
    <span className="flex items-center">
      <Image
        src="/images/brightpath-logo.svg"
        alt=""
        width={52}
        height={52}
        className="-ml-2 size-11 sm:size-[52px]"
      />
      <span className="font-serif text-[22px] font-semibold tracking-[-0.02em] text-navy sm:text-[24px]">BrightPath</span>
    </span>
  );
}
