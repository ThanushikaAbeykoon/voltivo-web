import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import DashboardMock from "./DashboardMock";

const points = [
  "Seamless OT/IT Integration",
  "High-Density Information Displays",
  "Indestructible Core Architecture",
];

export default function Intro() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Powering Innovation. Automating the Future.
            </h2>
            <span className="mt-4 block h-1 w-16 rounded-full bg-accent" />

            <p className="mt-6 leading-relaxed text-muted">
              At Voltivo Technologies, we bring together industrial
              automation, electrical engineering, electronics, IoT, PLC
              systems, and IT to create intelligent solutions for modern
              businesses and industries.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From automation and control systems to connected technologies
              and digital solutions, we help our clients transform ideas and
              challenges into reliable, practical solutions.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                    <Check size={14} />
                  </span>
                  <span className="text-sm font-medium text-foreground/90">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <DashboardMock />
        </div>
      </Container>
    </section>
  );
}
