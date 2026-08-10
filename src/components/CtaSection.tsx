import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaSection({
  heading = "Let's Build Something Smarter",
  description = "Have an automation, electrical, IoT, electronics, PLC, or IT requirement? Let's turn your challenge into an intelligent solution.",
  buttonLabel = "Talk to Our Team",
  buttonHref = "/contact",
}: {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-surface py-24 sm:py-28">
      <Container className="relative flex flex-col items-center text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
          <Sparkles size={20} />
        </span>
        <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          {description}
        </p>
        <Button href={buttonHref} className="mt-8">
          {buttonLabel}
        </Button>
      </Container>
    </section>
  );
}
