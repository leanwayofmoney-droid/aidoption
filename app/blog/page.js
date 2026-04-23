import { Suspense } from "react";
import NewsletterForm from "../../components/NewsletterForm";
import FilteredPosts from "../../components/FilteredPosts";
import BlogTopFixes from "../../components/BlogTopFixes";
import { getPosts } from "../../lib/notion";

export const metadata = {
  title: "AI-Tips voor dagelijkse taken — Praktische ChatGPT-fixes | AIdoption",
  description:
    "Kant-en-klare AI-fixes voor e-mail, financiën, carrière en meer. Kopieer de prompt en bespaar direct tijd — geen technische kennis nodig.",
  alternates: { canonical: "https://ai-doption.nl/blog" },
  openGraph: {
    type: "website",
    url: "https://ai-doption.nl/blog",
    title: "AI-Tips voor dagelijkse taken — AIdoption",
    description: "Kant-en-klare AI-fixes voor e-mail, financiën, carrière en meer. Geen technische kennis nodig.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="pt-20 pb-12">
        <p className="eyebrow mb-5">De AI Werkplaats</p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight" style={{ color: "#1E2D3D" }}>
          AI-tips voor dagelijkse taken
        </h1>
        <p className="max-w-lg leading-relaxed" style={{ color: "#6C7B8B" }}>
          Kant-en-klare AI-fixes voor e-mail, financiën, carrière en meer. Kopieer de prompt en bespaar direct tijd — zonder technische kennis.
        </p>
      </section>

      {/* Top 5 meest gewaardeerd */}
      <BlogTopFixes />

      {/* Zoekbalk + filter + grid */}
      <Suspense fallback={null}>
        <FilteredPosts posts={posts} />
      </Suspense>

      <section className="pb-24">
        <NewsletterForm />
      </section>
    </div>
  );
}
