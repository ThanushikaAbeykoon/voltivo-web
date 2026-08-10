import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";
import { whyVoltivo } from "@/lib/site-config";

export default function WhyVoltivo() {
  return (
    <section className="border-t border-border bg-surface py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Kicker>The Voltivo Advantage</Kicker>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why Choose Voltivo Technologies?
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Architected for resilience. Engineered for scale. We provide the
              structural integrity your digital transformation requires.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface-2">
            {whyVoltivo.map((item, index) => (
              <div key={item.title} className="flex gap-4 p-5 sm:p-6">
                <span className="font-mono text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
