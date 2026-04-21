import NewsletterForm from "../../components/NewsletterForm";
import FilteredPosts from "../../components/FilteredPosts";
import { getPosts } from "../../lib/notion";

export const metadata = {
  title: "Alle AI-Fixes",
  description:
    "Kant-en-klare AI-oplossingen voor je dagelijkse taken. Kopieer de prompt en bespaar direct tijd. Voor beginners.",
  alternates: { canonical: "https://ai-doption.nl/blog" },
  openGraph: {
    type: "website",
    url: "https://ai-doption.nl/blog",
    title: "Alle AI-Fixes — AIdoption",
    description: "Kant-en-klare AI-oplossingen voor je dagelijkse taken.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="pt-20 pb-12">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
          De AI Werkplaats
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight" style={{ color: "#1E2D3D" }}>
          Alle AI-Fixes
        </h1>
        <p className="max-w-lg leading-relaxed" style={{ color: "#6C7B8B" }}>
          Kant-en-klare oplossingen voor je dagelijkse taken. Kopieer de prompt en bespaar direct tijd.
        </p>
      </section>

      <FilteredPosts posts={posts} />

      <section className="pb-24">
        <NewsletterForm />
      </section>
    </div>
  );
}
