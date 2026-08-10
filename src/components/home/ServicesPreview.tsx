import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/site-config";

export default function ServicesPreview() {
  return (
    <section className="border-t border-border bg-background py-24 sm:py-28">
      <Container>
        <Kicker>Capabilities</Kicker>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Our Expertise
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-strong bg-surface-2 text-accent">
                <ServiceIcon name={service.icon} size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.shortDescription}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-mono text-[11px] tracking-wider text-muted">
                  {`${service.code} // ACTIVE`}
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-2"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
