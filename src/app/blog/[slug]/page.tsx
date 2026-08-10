import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import Container from "@/components/ui/Container";
import CtaSection from "@/components/CtaSection";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-border">
        <Container className="relative py-20 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
          >
            <ArrowLeft size={16} />
            All Articles
          </Link>

          <span className="mt-6 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
            {post.category}
          </span>

          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-foreground/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-border py-20">
          <Container>
            <h2 className="text-xl font-semibold text-foreground">
              More Articles
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {related.category}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {related.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read Article
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
