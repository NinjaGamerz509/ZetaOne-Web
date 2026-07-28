export default function Loading() {
  return (
    <div className="min-h-screen px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-content animate-pulse">
        <div className="mx-auto h-10 w-64 rounded-full bg-white/[0.08]" />
        <div className="mx-auto mt-4 h-5 w-96 max-w-full rounded-full bg-white/[0.06]" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-56 rounded-card border border-white/[0.08] bg-white/[0.04]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
