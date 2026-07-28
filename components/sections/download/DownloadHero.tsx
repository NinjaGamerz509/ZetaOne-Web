import { LATEST_RELEASE } from "@/content/releases";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";

export function DownloadHero() {
  const release = LATEST_RELEASE;

  const stats = [
    { label: "Current Version", value: release.version },
    { label: "Release Channel", value: release.status },
    { label: "Release Date", value: formatDate(release.releaseDate) },
    { label: "Android Required", value: release.minAndroidVersion },
    { label: "APK Size", value: release.apkSize },
  ];

  return (
    <div className="text-center">
      <Reveal>
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          Download Zeta One
        </h1>
        <p className="mx-auto mt-4 max-w-prose text-lg text-white/55">
          Get the latest official version directly from the Zeta One website.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-xs uppercase tracking-wide text-white/35">{stat.label}</p>
              <p className="mt-1 text-[15px] font-medium text-white/85">{stat.value}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
