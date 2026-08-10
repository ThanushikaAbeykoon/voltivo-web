import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Read the privacy policy for ${siteConfig.name}, covering how we collect, use, and protect your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        description="Last updated: August 2026. This policy explains how Voltivo Technologies collects, uses, and safeguards your information."
      />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-muted">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Information We Collect
              </h2>
              <p className="mt-2">
                We collect information you provide directly to us, such as
                your name, email address, phone number, and project details
                when you submit a contact form or request a consultation.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p className="mt-2">
                We use the information we collect to respond to inquiries,
                provide quotes, deliver services, and communicate updates
                about your project. We do not sell your personal information
                to third parties.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Data Security
              </h2>
              <p className="mt-2">
                We implement reasonable technical and organizational measures
                to protect your information against unauthorized access,
                alteration, or disclosure.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Contact Us
              </h2>
              <p className="mt-2">
                If you have questions about this policy, contact us at{" "}
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
