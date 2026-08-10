import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";
import CtaSection from "@/components/CtaSection";
import { stats, values } from "@/lib/about-data";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Voltivo Technologies unites industrial automation, electrical engineering, electronics, IoT, PLC, and IT expertise under one roof. Learn who we are and how we work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="Engineering Intelligence Into Every System"
        description="Voltivo Technologies was founded on a simple premise: modern industry runs on the intersection of electrical, mechanical, and digital systems — and that intersection deserves a single, accountable engineering partner."
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <Kicker>Our Story</Kicker>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From a Single Control Panel to Full-Facility Intelligence
              </h2>
              <p className="mt-6 leading-relaxed text-muted">
                Voltivo Technologies began as a small team of electrical and
                automation engineers frustrated by how disconnected the
                industry had become — one vendor for panels, another for
                PLCs, a third for IoT, a fourth for software. Every handoff
                introduced risk.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We built Voltivo to close those gaps. Today, our
                multidisciplinary teams design, build, and support systems
                that span the full stack — from the electrical panel on the
                factory floor to the dashboard on a plant manager&apos;s
                screen.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We don&apos;t just build systems. We architect intelligent
                ecosystems that bridge the physical and digital worlds, so
                every layer of your operation — mechanical, electrical, and
                informational — works as one.
              </p>
            </div>

            <div>
              <Kicker>Mission &amp; Vision</Kicker>
              <div className="space-y-5">
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    To engineer reliable, intelligent, and connected systems
                    that give businesses the operational confidence to scale
                    — without compromising on safety, precision, or
                    performance.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    To be the trusted engineering partner behind the
                    industrial and digital infrastructure that modern
                    businesses depend on — where energy meets intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <Kicker>What Drives Us</Kicker>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Core Values
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        heading="Let's Build Something Smarter, Together"
        description="Whatever stage your project is at, our team is ready to bring integrated engineering expertise to the table."
        buttonLabel="Get In Touch"
        buttonHref="/contact"
      />
    </>
  );
}
