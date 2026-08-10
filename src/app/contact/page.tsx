import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Voltivo Technologies for industrial automation, electrical, PLC, IoT, electronics, and IT solutions. Talk to our engineering team today.",
  path: "/contact",
});

const contactDetails = [
  {
    icon: MapPin,
    label: "Office",
    value: siteConfig.address,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Fri: 8:30 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get In Touch"
        title="Let's Talk About Your Project"
        description="Have an automation, electrical, IoT, electronics, PLC, or IT requirement? Tell us about it — our engineering team responds within one business day."
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 rounded-2xl border border-border bg-surface p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form and our team will follow up with next
                steps.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex gap-4 rounded-xl border border-border bg-surface-2 p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-surface text-accent">
                      <detail.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1 block text-sm font-medium text-foreground/90 hover:text-accent"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-foreground/90">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Voltivo Technologies location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=79.83%2C6.91%2C79.86%2C6.94&layer=mapnik"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
