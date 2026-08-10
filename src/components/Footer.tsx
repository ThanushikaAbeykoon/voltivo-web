import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/site-config";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Voltivo
              <span className="block text-xs font-medium tracking-[0.2em] text-muted">
                TECHNOLOGIES
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Engineering smarter solutions through automation, electrical
              technology, electronics, IoT, PLC, and IT.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <LinkedinIcon width={16} height={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <FacebookIcon width={16} height={16} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <TwitterIcon width={16} height={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent" />
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="hover:text-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {year} Voltivo Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-accent">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
