import Link from "next/link";
import ReceptCard from "../../components/ReceptCard";
import NewsletterForm from "../../components/NewsletterForm";
import { getPosts } from "../../lib/notion";

const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "ChatGPT gebruiken voor beginners: zo begin je in 5 minuten",
  description: "Een gratis account aanmaken, je eerste bericht sturen en vijf dingen die je vandaag kunt doen met ChatGPT. Stap voor stap, zonder technische kennis.",
  alternates: { canonical: `${BASE}/chatgpt-voor-beginners` },
  openGraph: {
    type: "article",
    url: `${BASE}/chatgpt-voor-beginners`,
    title: "ChatGPT gebruiken voor beginners",
    description: "Zo begin je met ChatGPT in vijf minuten. Gratis, geen technische kennis nodig.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ChatGPT gebruiken voor beginners: zo begin je in 5 minuten",
  description: "Een gratis account aanmaken, je eerste bericht sturen en vijf dingen die je vandaag kunt doen met ChatGPT.",
  author: { "@type": "Person", name: "Stefan" },
  publisher: { "@type": "Organization", name: "AIdoption", url: BASE },
  url: `${BASE}/chatgpt-voor-beginners`,
  inLanguage: "nl-NL",
};

export const revalidate = 3600;

export default async function ChatGPTVoorBeginnersPage() {
  const posts = await getPosts();
  const gerelateerd = posts
    .filter((p) => p.categorie === "Carrière")
    .slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-2xl">

        {/* Header */}
        <section className="pt-20 pb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Beginnen met AI
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight" style={{ color: "#1E2D3D" }}>
            ChatGPT gebruiken voor beginners
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#6C7B8B" }}>
            De eerste keer dat ik ChatGPT opende, staarde ik naar een leeg tekstvak en dacht: nu dan?
            Twee minuten later had ik meer gedaan dan in het uur ervoor. Dit is wat ik die eerste dag zou willen hebben geweten.
          </p>
        </section>

        {/* Sectie 1 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Wat is ChatGPT precies?
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              ChatGPT is een AI-assistent die je kunt aanspreken via gewone taal. Je typt een vraag of geeft een opdracht,
              en ChatGPT antwoordt in vloeiend Nederlands. Het is gemaakt door OpenAI, een Amerikaans bedrijf, en
              is wereldwijd de bekendste AI-tool voor dagelijks gebruik.
            </p>
            <p>
              Het werkt als een gesprek. Je stelt een vraag, ChatGPT antwoordt, jij reageert, enzovoort. ChatGPT onthoudt
              alles binnen één gesprek, maar begint bij een nieuw gesprek met een schone lei.
            </p>
          </div>
        </section>

        {/* Sectie 2 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Een gratis account aanmaken
          </h2>
          <ol className="space-y-3">
            {[
              { stap: "1", tekst: "Ga naar chatgpt.com" },
              { stap: "2", tekst: "Klik op \"Aanmelden\" en maak een gratis account aan met je e-mailadres" },
              { stap: "3", tekst: "Bevestig je e-mailadres via de mail die je ontvangt" },
              { stap: "4", tekst: "Log in en je ziet direct het gespreksvak" },
            ].map((item) => (
              <li key={item.stap} className="flex items-start gap-4">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(44,90,133,0.1)", color: "#2C5A85" }}
                >
                  {item.stap}
                </span>
                <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>{item.tekst}</p>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl p-4 text-sm leading-relaxed" style={{ backgroundColor: "#F0F4F8", border: "1px solid #E2E6EA", color: "#4A5568" }}>
            De gratis versie van ChatGPT is voor de meeste dagelijkse taken meer dan voldoende. Je hoeft niets te betalen om te beginnen.
          </div>
        </section>

        {/* Sectie 3 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Je eerste bericht sturen
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              Het tekstvak onderaan het scherm is alles wat je nodig hebt. Typ een vraag of opdracht en druk op Enter.
              Hoe specifieker je bent, hoe beter het antwoord.
            </p>
          </div>
          <div className="mt-5 rounded-xl overflow-hidden" style={{ border: "1px solid #E2E6EA" }}>
            <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: "#1E2D3D", color: "#9BBCD8" }}>
              Slecht vs. goed voorbeeld
            </div>
            <div className="divide-y" style={{ borderColor: "#E2E6EA" }}>
              <div className="px-4 py-4">
                <p className="text-xs font-medium mb-1" style={{ color: "#DC2626" }}>Te vaag</p>
                <p className="text-sm" style={{ color: "#4A5568" }}>Schrijf een e-mail.</p>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-medium mb-1" style={{ color: "#059669" }}>Goed</p>
                <p className="text-sm" style={{ color: "#4A5568" }}>
                  Schrijf een korte e-mail aan mijn verhuurder om te vragen wanneer de lekkage in de badkamer wordt opgelost.
                  Het probleem speelt al drie weken. Vriendelijk maar duidelijk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 4 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-5" style={{ color: "#1E2D3D" }}>
            Vijf dingen die je vandaag kunt doen met ChatGPT
          </h2>
          <div className="space-y-3">
            {[
              { nr: "01", titel: "Een lastige e-mail schrijven", tekst: "Beschrijf de situatie en vraag ChatGPT om een concept te schrijven. Pas het daarna aan in jouw woorden." },
              { nr: "02", titel: "Een tekst samenvatten", tekst: "Plak een lang artikel of document erin en vraag om de vijf belangrijkste punten." },
              { nr: "03", titel: "Iets uitgelegd krijgen", tekst: "Stel elke vraag die je normaal opzoekt. ChatGPT legt het uit in gewone taal, op jouw niveau." },
              { nr: "04", titel: "Ideeën bedenken", tekst: "Geef een situatie op en vraag om tien ideeën. Cadeau, activiteit, invulling van een project." },
              { nr: "05", titel: "Een beslissing overwegen", tekst: "Leg een dilemma voor en vraag om de voor- en nadelen. ChatGPT denkt mee, jij beslist." },
            ].map((item) => (
              <div key={item.nr} className="flex gap-4 rounded-xl p-4"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E6EA" }}>
                <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: "rgba(44,90,133,0.3)" }}>{item.nr}</span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#1E2D3D" }}>{item.titel}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6C7B8B" }}>{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 5 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Wat ChatGPT niet kan
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              ChatGPT maakt fouten. Het verzint soms feiten, cijfers of bronnen die niet bestaan. Controleer altijd informatie
              die je wilt gebruiken voor iets belangrijks.
            </p>
            <p>
              ChatGPT weet niet wat er gisteren is gebeurd. De gratis versie werkt met kennis tot een bepaalde datum.
              Voor actueel nieuws gebruik je Perplexity of Google.
            </p>
            <p>
              ChatGPT kent jou niet. Hoe meer context je geeft, hoe beter het antwoord. Vertel wie je bent,
              wat de situatie is en wat je nodig hebt.
            </p>
          </div>
        </section>

        {/* Andere tools */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            ChatGPT is niet de enige optie
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#4A5568" }}>
            Naast ChatGPT zijn er twee andere AI-assistenten die de moeite waard zijn om te kennen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { naam: "Claude", href: "/blog/claude-ai-gebruiken-nederlands", kleur: "#7C3AED",
                beschrijving: "Beter in genuanceerd schrijven en redeneren. Goed als ChatGPT generieke antwoorden geeft." },
              { naam: "Gemini", href: "/blog/gemini-google-gebruiken-nederlands", kleur: "#1A73E8",
                beschrijving: "Direct ingebouwd in Gmail en Google Docs. Handig als je al met Google werkt." },
            ].map((tool) => (
              <Link key={tool.naam} href={tool.href}
                className="group rounded-xl p-4 transition-all hover:-translate-y-0.5"
                style={{ border: "1px solid #E2E6EA", boxShadow: `inset 3px 0 0 ${tool.kleur}` }}>
                <p className="font-semibold text-sm mb-1" style={{ color: "#1E2D3D" }}>{tool.naam}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6C7B8B" }}>{tool.beschrijving}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Gerelateerde AI-fixes */}
      {gerelateerd.length > 0 && (
        <section className="py-16" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-8"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Zet ChatGPT direct aan het werk
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gerelateerd.map((p) => <ReceptCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}

      <section className="pb-24">
        <NewsletterForm />
      </section>
    </div>
  );
}
