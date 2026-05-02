import Link from "next/link";
import NewsletterForm from "../../components/NewsletterForm";

const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "AI-cursus | Binnenkort beschikbaar | AIdoption",
  description: "Een praktische AI-cursus voor mensen zonder technische kennis. Schrijf je in voor de nieuwsbrief en ontvang een melding zodra de cursus live gaat.",
  alternates: { canonical: `${BASE}/cursus` },
  robots: { index: false },
};

export default function CursusPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="max-w-xl mx-auto text-center py-24 md:py-36">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ backgroundColor: "#C8813F15", color: "#C8813F", border: "1px solid #C8813F40" }}>
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            backgroundColor: "#C8813F", display: "inline-block",
            animation: "pulse 2s ease-in-out infinite",
          }} />
          Wordt aan gewerkt
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight" style={{ color: "#1E2D3D" }}>
          De AIdoption-cursus<br />komt eraan
        </h1>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#6C7B8B" }}>
          Een praktische cursus voor mensen die AI willen gebruiken in hun dagelijks werk. Geen technische kennis vereist. Gewoon leren wat werkt, stap voor stap.
        </p>

        <p className="text-sm leading-relaxed mb-10" style={{ color: "#9BA8B5" }}>
          Schrijf je in voor de nieuwsbrief. Zodra de cursus live gaat, ben jij de eerste die het weet.
        </p>

        {/* Wat je kunt verwachten */}
        <div className="text-left rounded-2xl p-6 mb-10"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E6EA", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Wat je kunt verwachten
          </p>
          <div className="space-y-4">
            {[
              { icon: "⚡", titel: "Praktisch van dag één", tekst: "Geen theorie. Elke les is direct toepasbaar op jouw werk." },
              { icon: "🎯", titel: "Op jouw niveau", tekst: "Begrijpelijk voor iedereen, ook zonder technische achtergrond." },
              { icon: "🛠️", titel: "De beste tools", tekst: "ChatGPT, Claude en Gemini: wat wanneer te gebruiken." },
              { icon: "⏱️", titel: "Bespaar direct tijd", tekst: "Na de cursus gebruik je AI voor taken die nu uren kosten." },
            ].map((item) => (
              <div key={item.titel} className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "#1E2D3D" }}>{item.titel}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6C7B8B" }}>{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-left">
          <NewsletterForm />
        </div>

        {/* Terug naar blog */}
        <div className="mt-12">
          <Link href="/blog"
            className="text-sm transition-colors hover:underline"
            style={{ color: "#9BA8B5" }}>
            ← Bekijk alvast de gratis AI-fixes
          </Link>
        </div>

      </div>
    </div>
  );
}
