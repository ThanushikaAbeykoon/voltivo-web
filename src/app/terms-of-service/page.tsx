import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Read the terms of service for ${siteConfig.name}, governing use of our website and engineering services.`,
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        description="Last updated: August 2026. These terms govern your use of the Voltivo Technologies website and services."
      />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Acceptance of Terms
              </h2>
              <p className="mt-2">
                By accessing this website, you agree to be bound by these
                Terms of Service and all applicable laws and regulations.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Services
              </h2>
              <p className="mt-2">
                Engineering services described on this website are subject to
                a separate signed agreement or statement of work between
                Voltivo Technologies and the client, which will govern scope,
                pricing, and delivery timelines.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Intellectual Property
              </h2>
              <p className="mt-2">
                All content on this website, including text, graphics, and
                logos, is the property of Voltivo Technologies unless
                otherwise noted, and may not be reproduced without
                permission.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-2">
                Voltivo Technologies is not liable for any indirect,
                incidental, or consequential damages arising from the use of
                this website.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact Us
              </h2>
              <p className="mt-2">
                Questions about these terms can be sent to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent hover:text-accent-2"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
