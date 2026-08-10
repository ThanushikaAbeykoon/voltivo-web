import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/lib/blog-data";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on industrial automation, PLC programming, industrial IoT, and engineering best practices from the Voltivo Technologies team.",
  path: "/blog",
});

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        kicker="Insights"
        title="Engineering Notes & Field Insights"
        description="Practical perspectives on automation, IoT, PLC programming, and the engineering decisions behind reliable industrial systems."
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/40"
              >
                <div className="flex h-40 items-center justify-center border-b border-border bg-surface-2">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold leading-snug text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read Article
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
