import Container from "@/components/ui/Container";
import Kicker from "@/components/ui/Kicker";

export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[110px]" />

      <Container className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Kicker>{kicker}</Kicker>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
