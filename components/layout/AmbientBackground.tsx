import Image from "next/image";

/**
 * Subtle fixed background layer. Uses the glass artwork at low opacity
 * so it reads as ambient atmosphere rather than a loud decorative image.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#04120D]">
      <Image
        src="/assets/backgrounds/bg-glass-crystals-dark.jpg"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04120D] via-transparent to-[#04120D]" />
    </div>
  );
}
