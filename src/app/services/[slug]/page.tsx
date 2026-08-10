import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";
import ServiceIcon from "@/components/ServiceIcon";
import CtaSection from "@/components/CtaSection";
import { services } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <Container className="relative py-20 sm:py-24">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
          >
            <ArrowLeft size={16} />
            All Services
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-strong bg-surface-2 text-accent">
              <ServiceIcon name={service.icon} size={26} />
            </span>
            <span className="font-mono text-xs tracking-wider text-muted">
              {`${service.code} // ACTIVE`}
            </span>
          </div>

          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <Kicker>Overview</Kicker>
              <p className="leading-relaxed text-muted">
                {service.description}
              </p>

              <div className="mt-10 rounded-xl border border-border bg-surface p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  What&apos;s Included
                </h3>
                <ul className="mt-5 space-y-4">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                        <Check size={14} />
                      </span>
                      <span className="text-sm font-medium text-foreground/90">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border-strong bg-surface-2 p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Ready to get started?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tell us about your facility or project, and our engineering
                  team will scope the right solution — no generic templates.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-cta px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cta-2"
                >
                  Talk to Our Team
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Other Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        {s.title}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
