import NewsletterForm from "../../components/NewsletterForm";
import ReceptCard from "../../components/ReceptCard";
import { posts } from "../../lib/posts";

export const metadata = {
  title: "AI-Fixes — AIdoption",
  description: "Alle AI-Fixes voor je dagelijkse leven.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

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

      <section className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <ReceptCard post={featured} wide />
          </div>
          {rest.map((post) => (
            <ReceptCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <NewsletterForm />
      </section>
    </div>
  );
}
