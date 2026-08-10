import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ServiceIcon from "@/components/ServiceIcon";
import CtaSection from "@/components/CtaSection";
import { services } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Voltivo Technologies' full range of services: industrial automation, electrical automation, PLC & control systems, industrial IoT, electronics, and IT solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our Expertise"
        title="Full-Stack Engineering, Under One Roof"
        description="From the electrical panel to the cloud dashboard, we deliver every layer of your automation and digital infrastructure — engineered, integrated, and supported by one accountable team."
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-8 lg:grid-cols-5 lg:gap-12 lg:p-10"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-strong bg-surface-2 text-accent">
                      <ServiceIcon name={service.icon} size={22} />
                    </span>
                    <span className="font-mono text-xs tracking-wider text-muted">
                      {`${service.code} // ACTIVE`}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-foreground">
                    {index + 1}. {service.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-2"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="lg:col-span-2">
                  <div className="h-full rounded-xl border border-border bg-surface-2 p-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      What&apos;s Included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5">
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-success"
                          />
                          <span className="text-sm text-foreground/85">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
