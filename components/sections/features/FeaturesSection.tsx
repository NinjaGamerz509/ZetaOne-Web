import { FEATURES } from "@/content/features";
import { FeatureCard } from "@/components/sections/features/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-hero text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Everything you need to study smarter.
            </h2>
            <p className="mt-4 text-lg text-white/55">
              Zeta One combines notes, productivity and study tools into one beautiful Android
              application.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} delay={index * 0.08} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 text-center">
            <h3 className="font-display text-2xl font-semibold text-white">
              Ready to experience Zeta One?
            </h3>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/download" size="lg" icon="download">
                Download Now
              </Button>
              <Button href="/docs" variant="secondary" size="lg" icon="description">
                View Documentation
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
