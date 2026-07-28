export default function Loading() {
  return (
    <section className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 md:grid-cols-[220px_1fr] animate-pulse">
        <div className="hidden md:block space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-9 rounded-xl bg-white/[0.06]" />
          ))}
        </div>

        <div>
          <div className="h-4 w-24 rounded-full bg-white/[0.06]" />
          <div className="mt-4 h-9 w-2/3 rounded-full bg-white/[0.08]" />
          <div className="mt-4 h-5 w-full max-w-md rounded-full bg-white/[0.06]" />

          <div className="mt-10 space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 w-40 rounded-full bg-white/[0.07]" />
                <div className="h-4 w-full rounded-full bg-white/[0.05]" />
                <div className="h-4 w-5/6 rounded-full bg-white/[0.05]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
