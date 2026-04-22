import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import ReceptCard from "../components/ReceptCard";
import FadeInUp from "../components/FadeInUp";
import ScrollIndicator from "../components/ScrollIndicator";
import { getPosts } from "../lib/notion";

const CATEGORIES = [
  { label: "Communicatie",        icon: "💬", color: "#2C5A85" },
  { label: "Carrière",            icon: "💼", color: "#6B46C1" },
  { label: "Financiën",           icon: "💰", color: "#059669" },
  { label: "Dagelijks Leven",     icon: "🏠", color: "#D97706" },
  { label: "Persoonlijke Groei",  icon: "🌱", color: "#DC2626" },
];

export default async function HomePage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;
  const recent = rest.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-16 md:pt-24 pb-4 overflow-hidden">

        {/* Bewegende achtergrond blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-10 lg:gap-14 items-center">

          {/* Links: tekst */}
          <div>
            <p className="hero-animate text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
              Meer tijd voor wat telt
            </p>
            <h1 className="hero-animate-d1 text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-tight mb-5"
              style={{ color: "#1E2D3D" }}>
              Bespaar uren per week<br />met AI die voor jou werkt
            </h1>

            {/* Stat badges */}
            <div className="hero-animate-d2 flex flex-wrap gap-2 mb-6">
              {["25 AI-fixes", "Geen technische kennis", "Direct toepasbaar"].map((s) => (
                <span key={s}
                  className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(44,90,133,0.08)",
                    color: "#2C5A85",
                    border: "1px solid rgba(44,90,133,0.15)",
                  }}>
                  {s}
                </span>
              ))}
            </div>

            <p className="hero-animate-d2 text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "#6C7B8B" }}>
              Praktische{" "}
              <strong style={{ color: "#2C5A85", fontWeight: 600 }}>AI-fixes</strong>{" "}
              voor e-mail, financiën, carrière en meer. Stap voor stap uitgelegd, zonder technische kennis.
            </p>

            <div className="hero-animate-d3 flex flex-col sm:flex-row items-start gap-3">
              <Link href="/blog"
                className="inline-flex items-center justify-center text-white px-6 py-3 rounded-full text-sm font-medium transition-colors bg-[#2C5A85] hover:bg-[#1A3A57]">
                Kies jouw eerste AI-Fix
              </Link>
              <Link href="/#nieuwsbrief"
                className="inline-flex items-center justify-center bg-white border border-[#CDD3D9] text-[#6C7B8B] px-6 py-3 rounded-full text-sm font-medium hover:border-[#2C5A85] hover:text-[#2C5A85] transition-colors">
                Elke week een AI-tip
              </Link>
            </div>
          </div>

          {/* Rechts: uitgelichte fix — meteen zichtbaar */}
          <div className="hero-animate-d4 relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 60%, ${featured?.color || "#2C5A85"}28 0%, transparent 70%)`,
                filter: "blur(28px)",
                transform: "scale(1.12)",
              }}
            />
            <div className="relative">
              {featured && <ReceptCard post={featured} />}
            </div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ── Categorieën ───────────────────────────────────────── */}
      <FadeInUp>
        <section className="py-10" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Verken per onderwerp
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={`/blog?cat=${encodeURIComponent(cat.label)}`}
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E6EA",
                  color: "#1E2D3D",
                  boxShadow: `inset 3px 0 0 ${cat.color}`,
                }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </Link>
            ))}
          </div>
        </section>
      </FadeInUp>

      {/* ── Nieuwste AI-Fixes ─────────────────────────────────── */}
      <section className="pb-20">
        <FadeInUp>
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
              Nieuwste AI-Fixes
            </p>
            <Link href="/blog" className="text-sm transition-colors" style={{ color: "#6C7B8B" }}>
              Alle AI-Fixes →
            </Link>
          </div>
        </FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recent.map((post, i) => (
            <FadeInUp key={post.slug} delay={i * 100}>
              <ReceptCard post={post} />
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* ── Drie pijlers ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-20">
        {[
          {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
            label: "De Werkwijze",
            desc: "Stap-voor-stap uitleg, direct toepasbaar.",
          },
          {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
            label: "Het Codeboek",
            desc: "De exacte prompt. Kopieer en plak.",
          },
          {
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            label: "De Winst-Slider",
            desc: "Zie hoeveel uur jij per jaar bespaart.",
          },
        ].map((item, i) => (
          <FadeInUp key={item.label} delay={i * 120}>
            <div className="relative bg-white rounded-2xl p-6 overflow-hidden h-full"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #E2E6EA" }}>
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ backgroundColor: "#2C5A85" }} />
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 mt-1"
                style={{ backgroundColor: "rgba(44,90,133,0.1)", color: "#2C5A85" }}>
                {item.icon}
              </div>
              <p className="font-semibold mb-1 text-sm" style={{ color: "#1E2D3D" }}>{item.label}</p>
              <p className="text-sm leading-snug" style={{ color: "#6C7B8B" }}>{item.desc}</p>
            </div>
          </FadeInUp>
        ))}
      </section>

      {/* ── Nieuwsbrief ──────────────────────────────────────── */}
      <FadeInUp>
        <section id="nieuwsbrief" className="pb-24">
          <NewsletterForm />
        </section>
      </FadeInUp>

    </div>
  );
}
