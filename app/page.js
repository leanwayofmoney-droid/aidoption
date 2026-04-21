import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import ReceptCard from "../components/ReceptCard";
import HeroIllustration from "../components/HeroIllustration";
import { getPosts } from "../lib/notion";

export default async function HomePage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;
  const recent = rest.slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* ── Hero (full-width) ──────────────────────────────────── */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-[420px] hidden md:block"
          style={{
            opacity: 0.2,
            maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%)",
          }}
        >
          <HeroIllustration />
        </div>
        <div className="relative z-10 max-w-xl">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Meer tijd voor wat telt
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-tight mb-5"
            style={{ color: "#1E2D3D" }}>
            Het digitale kookboek<br />voor je dagelijkse leven
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4"
            style={{ color: "#6C7B8B" }}>
            Gedreven door mijn passie voor AI help ik je om slimme technologie tastbaar te maken in je dagelijks leven. Geen ingewikkelde theorie, maar praktische{" "}
            <strong style={{ color: "#2C5A85", fontWeight: 600 }}>AI-fixes</strong>{" "}
            die direct voor je werken.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3 mt-8">
            <Link href="/blog"
              className="inline-flex items-center justify-center text-white px-6 py-3 rounded-full text-sm font-medium transition-colors bg-[#2C5A85] hover:bg-[#1A3A57]">
              Bekijk alle AI-Fixes
            </Link>
            <Link href="/#nieuwsbrief"
              className="inline-flex items-center justify-center bg-white border border-[#CDD3D9] text-[#6C7B8B] px-6 py-3 rounded-full text-sm font-medium hover:border-[#2C5A85] hover:text-[#2C5A85] transition-colors">
              Nieuwsbrief ontvangen
            </Link>
          </div>
        </div>
      </section>

      {/* Uitgelicht */}
      <section className="pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
          Uitgelicht
        </p>
        <ReceptCard post={featured} wide />
      </section>

      {/* Nieuwste AI-Fixes */}
      <section className="pb-20">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Nieuwste AI-Fixes
          </p>
          <Link href="/blog" className="text-sm transition-colors" style={{ color: "#6C7B8B" }}>
            Alle AI-Fixes →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recent.map((post) => (
            <ReceptCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ── Drie pijlers (full-width) ─────────────────────────── */}
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
        ].map((item) => (
          <div key={item.label} className="relative bg-white rounded-2xl p-6 overflow-hidden"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)", border: "1px solid #E2E6EA" }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ backgroundColor: "#2C5A85" }} />
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 mt-1"
              style={{ backgroundColor: "rgba(44,90,133,0.1)", color: "#2C5A85" }}>
              {item.icon}
            </div>
            <p className="font-semibold mb-1 text-sm" style={{ color: "#1E2D3D" }}>{item.label}</p>
            <p className="text-sm leading-snug" style={{ color: "#6C7B8B" }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ── Nieuwsbrief (full-width) ──────────────────────────── */}
      <section id="nieuwsbrief" className="pb-24">
        <NewsletterForm />
      </section>

    </div>
  );
}
