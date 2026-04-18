import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../../../lib/posts";
import NewsletterForm from "../../../components/NewsletterForm";
import Codeboek from "../../../components/Codeboek";
import WinstSlider from "../../../components/WinstSlider";
import ReceptCard from "../../../components/ReceptCard";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — AIdoption`, description: post.excerpt };
}

export default function AIFixPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const c = post.color || "#2C5A85";

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <div className="pt-10 pb-8">
          <Link href="/blog" className="text-sm inline-flex items-center gap-1 transition-colors"
            style={{ color: "#9BA8B5" }}>
            ← Terug naar AI-Fixes
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-8" style={{ height: "260px" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to top, rgba(30,45,61,0.7) 0%, transparent 60%)`,
          }} />
          <div className="absolute bottom-4 left-5">
            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${c}30`, color: "#FFFFFF", backdropFilter: "blur(6px)", border: `1px solid ${c}50` }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Bespaart {post.savingsPerTask} min {post.frequentieLabel}
            </span>
          </div>
        </div>

        {/* Header */}
        <header className="pb-10" style={{ borderBottom: "1px solid #E2E6EA" }}>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4" style={{ color: "#1E2D3D" }}>
            {post.title}
          </h1>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#6C7B8B" }}>{post.excerpt}</p>
          <div className="flex items-center gap-3 text-xs" style={{ color: "#9BA8B5" }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} lezen</span>
            <span>·</span>
            <span style={{ color: "#6C7B8B" }}>{post.tool}</span>
          </div>
        </header>

        {/* Invalshoek */}
        <section className="pt-10 pb-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: c, letterSpacing: "0.16em" }}>
            De Invalshoek
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#1E2D3D" }}>
            {post.invalshoek}
          </p>
        </section>

        {/* Ingrediënten */}
        <section className="py-6" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: c, letterSpacing: "0.16em" }}>
            Wat heb je nodig
          </p>
          <ul className="space-y-2">
            {post.ingredienten.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#1E2D3D" }}>
                <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: `${c}15`, color: c }}>
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Werkwijze */}
        <section className="py-6" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ color: c, letterSpacing: "0.16em" }}>
            De Werkwijze
          </p>
          <ol className="space-y-4">
            {post.stappen.map((stap, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ backgroundColor: c, color: "#FFFFFF" }}>
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "#1E2D3D" }}>{stap}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Codeboek */}
        <section className="pt-6" style={{ borderTop: "1px solid #E2E6EA" }}>
          <Codeboek prompt={post.prompt} tip={post.promptTip} />
        </section>

        {/* Winst-Slider */}
        <section style={{ borderTop: "1px solid #E2E6EA" }}>
          <WinstSlider
            savingsPerTask={post.savingsPerTask}
            frequentieLabel={post.frequentieLabel}
            savingsEuro={post.savingsEuro}
            savingsEuroLabel={post.savingsEuroLabel}
          />
        </section>

      </div>

      {/* Meer AI-Fixes */}
      <section className="py-16" style={{ borderTop: "1px solid #E2E6EA" }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
          Meer AI-Fixes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {related.map((p) => (
            <ReceptCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <section className="pb-24">
        <NewsletterForm />
      </section>
    </div>
  );
}
