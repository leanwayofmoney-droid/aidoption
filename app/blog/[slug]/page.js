import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "../../../lib/posts";
import NewsletterForm from "../../../components/NewsletterForm";
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

// Verwerk **vet** markers naar <strong>
function renderBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} style={{ color: "#1E2D3D" }}>{part}</strong>
      : part
  );
}

// Splits op lege regels en render alinea's
function renderParagraphs(text, color = "#4A5568") {
  return text.split("\n\n").map((para, i) => (
    <p key={i} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color }}>
      {renderBold(para)}
    </p>
  ));
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

        {/* Blok 1: Curiosity Header */}
        <section className="pt-10 pb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: c, letterSpacing: "0.16em" }}>
            De kern
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight"
            style={{ color: "#1E2D3D" }}>
            {post.curiosityHeader}
          </h2>
        </section>

        {/* Blok 2: Persoonlijke Missie */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: c, letterSpacing: "0.16em" }}>
            Waarom dit mij irriteerde
          </p>
          <div className="text-base leading-relaxed" style={{ color: "#4A5568" }}>
            {renderBold(post.persoonlijkeMissie)}
          </div>
        </section>

        {/* Blok 3: Transformatie */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: c, letterSpacing: "0.16em" }}>
            De transformatie
          </p>
          <div className="rounded-xl p-5 space-y-4" style={{ backgroundColor: "#F0F4F8", border: "1px solid #E2E6EA" }}>
            {renderParagraphs(post.transformatie, "#1E2D3D")}
          </div>
        </section>

        {/* Blok 4: Strategische Logica */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: c, letterSpacing: "0.16em" }}>
            De strategische logica
          </p>
          <div className="space-y-1">
            {renderParagraphs(post.strategischeLogica, "#4A5568")}
          </div>
        </section>

        {/* Het Codeboek — teaser */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: c, letterSpacing: "0.16em" }}>
            Het Codeboek
          </p>
          <div className="rounded-xl p-6" style={{ backgroundColor: "#1E2D3D" }}>
            <p className="text-sm font-medium mb-1" style={{ color: "#9BBCD8" }}>
              De exacte prompt
            </p>
            <p className="text-base font-semibold mb-4" style={{ color: "#FFFFFF" }}>
              Klaar om te kopiëren en plakken
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6C7B8B" }}>
              De volledige prompt die ik gebruik staat in Het Codeboek — inclusief de exacte instructies, variabelen en tips voor betere output. Schrijf je in voor de nieuwsbrief en ontvang hem direct.
            </p>
            <a href="#nieuwsbrief"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              style={{ backgroundColor: "#2C5A85", color: "#FFFFFF" }}>
              Ontvang Het Codeboek
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Blok 5: De Nuance */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <div className="flex gap-4 rounded-xl p-5" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" stroke="#EF4444" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#EF4444", letterSpacing: "0.12em" }}>
                Wanneer werkt dit niet
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                {renderBold(post.nuance)}
              </p>
            </div>
          </div>
        </section>

        {/* Blok 6: Impact & CTA + WinstSlider */}
        <section style={{ borderTop: "1px solid #E2E6EA" }}>
          <div className="pt-8 pb-2">
            <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
              {renderBold(post.impactCTA)}
            </p>
          </div>
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
