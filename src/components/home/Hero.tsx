import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-accent-2/10 blur-[120px]" />

      <Container className="relative py-24 sm:py-32 lg:py-36">
        <div className="mx-auto flex max-w-3xl flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-2/70 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
              System Online
            </span>
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Where Energy Meets{" "}
            <span className="text-accent">Intelligence</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Engineering smarter solutions through automation, electrical
            technology, electronics, IoT, PLC, and IT.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Voltivo Technologies delivers innovative technology and
            engineering solutions that help businesses improve efficiency,
            reliability, productivity, and connectivity.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/services" icon={<ArrowRight size={16} />}>
              Explore Our Services
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
