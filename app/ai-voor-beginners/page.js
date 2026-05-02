import Link from "next/link";
import ReceptCard from "../../components/ReceptCard";
import NewsletterForm from "../../components/NewsletterForm";
import { getPosts } from "../../lib/notion";

const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "AI voor beginners: wat het is en hoe je vandaag begint",
  description: "Wat is kunstmatige intelligentie, welke tools zijn er en hoe gebruik je AI in je dagelijks leven? Een praktische introductie zonder vakjargon.",
  alternates: { canonical: `${BASE}/ai-voor-beginners` },
  openGraph: {
    type: "article",
    url: `${BASE}/ai-voor-beginners`,
    title: "AI voor beginners: wat het is en hoe je vandaag begint",
    description: "Wat is kunstmatige intelligentie en welke AI-tools zijn er? Praktisch uitgelegd, zonder vakjargon.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI voor beginners: wat het is en hoe je vandaag begint",
  description: "Wat is kunstmatige intelligentie, welke tools zijn er en hoe gebruik je AI in je dagelijks leven?",
  author: { "@type": "Person", name: "Stefan" },
  publisher: { "@type": "Organization", name: "AIdoption", url: BASE },
  url: `${BASE}/ai-voor-beginners`,
  inLanguage: "nl-NL",
};

export const revalidate = 3600;

export default async function AiVoorBeginnersPage() {
  const posts = await getPosts();
  const gerelateerd = posts
    .filter((p) => ["Dagelijks Leven", "Financiën", "Persoonlijke Groei"].includes(p.categorie))
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
            AI voor beginners
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#6C7B8B" }}>
            Een jaar geleden wist ik nauwelijks wat AI betekende. Nu gebruik ik het dagelijks voor mails, planningen
            en beslissingen. Je hoeft geen technische achtergrond te hebben. Dit is wat ik zou willen weten toen ik begon.
          </p>
        </section>

        {/* Sectie 1 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Wat is AI eigenlijk?
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              Kunstmatige intelligentie (AI) is software die taken uitvoert waarvoor normaal menselijk denken nodig is.
              Denk aan tekst begrijpen, vragen beantwoorden, patronen herkennen of code schrijven.
            </p>
            <p>
              Moderne AI-tools zijn getraind op enorme hoeveelheden tekst. Daardoor kunnen ze antwoorden geven
              in gewone taal, net als een gesprek met een collega. Geen commando's, geen handleidingen. Je typt
              gewoon wat je nodig hebt.
            </p>
            <p>
              Het grote verschil met een zoekmachine: een zoekmachine geeft links naar websites. Een AI-assistent
              geeft een direct antwoord en denkt met je mee.
            </p>
          </div>
        </section>

        {/* Sectie 2 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Welke AI-tools zijn er?
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#4A5568" }}>
            Er zijn drie grote AI-assistenten die je direct kunt gebruiken via de browser. Allemaal gratis te proberen.
          </p>
          <div className="space-y-3">
            {[
              {
                naam: "ChatGPT",
                maker: "OpenAI",
                kleur: "#10A37F",
                href: "/chatgpt-voor-beginners",
                beschrijving: "De bekendste. Goed voor vrijwel alle dagelijkse taken: schrijven, samenvatten, uitleggen, ideeën bedenken.",
              },
              {
                naam: "Claude",
                maker: "Anthropic",
                kleur: "#7C3AED",
                href: "/blog/claude-ai-gebruiken-nederlands",
                beschrijving: "Sterk in genuanceerd schrijven en langere teksten. Geeft minder generieke antwoorden dan ChatGPT.",
              },
              {
                naam: "Gemini",
                maker: "Google",
                kleur: "#1A73E8",
                href: "/blog/gemini-google-gebruiken-nederlands",
                beschrijving: "Ingebouwd in Gmail en Google Docs. Handig als je al in het Google-ecosysteem werkt.",
              },
            ].map((tool) => (
              <Link
                key={tool.naam}
                href={tool.href}
                className="group flex gap-4 rounded-xl p-4 transition-all hover:-translate-y-0.5"
                style={{ border: "1px solid #E2E6EA", boxShadow: `inset 3px 0 0 ${tool.kleur}` }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm" style={{ color: "#1E2D3D" }}>{tool.naam}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#F0F4F8", color: "#6C7B8B" }}>
                      {tool.maker}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#6C7B8B" }}>{tool.beschrijving}</p>
                </div>
                <span className="text-xs font-medium self-center shrink-0" style={{ color: tool.kleur }}>Lees meer →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Sectie 3 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Hoe werkt AI in de praktijk?
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              Je geeft een opdracht in gewone taal. Dat heet een prompt. Hoe beter je beschrijft wat je nodig hebt,
              hoe nuttiger het antwoord. Je hoeft daarvoor geen technische termen te kennen.
            </p>
          </div>
          <div className="mt-5 rounded-xl overflow-hidden" style={{ border: "1px solid #E2E6EA" }}>
            <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: "#1E2D3D", color: "#9BBCD8" }}>
              Voorbeeldopdrachten voor vandaag
            </div>
            <div className="divide-y" style={{ borderColor: "#E2E6EA" }}>
              {[
                "Vat dit artikel samen in vijf punten: [plak tekst]",
                "Schrijf een antwoordmail op dit bericht. Vriendelijk maar kort: [plak mail]",
                "Leg uit wat inflatie is, alsof ik twaalf ben.",
                "Bedenk tien namen voor mijn freelance bedrijf in grafisch ontwerp.",
                "Wat zijn de voor- en nadelen van thuiswerken? Geef een eerlijk overzicht.",
              ].map((voorbeeld, i) => (
                <div key={i} className="px-4 py-3">
                  <p className="text-sm" style={{ color: "#4A5568" }}>{voorbeeld}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectie 4 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-5" style={{ color: "#1E2D3D" }}>
            Vijf manieren waarop AI je dagelijks leven verandert
          </h2>
          <div className="space-y-3">
            {[
              {
                nr: "01",
                titel: "Minder tijd aan schrijven",
                tekst: "Mails, rapporten, berichten. AI schrijft een concept in seconden. Jij past het aan en stuurt het door.",
              },
              {
                nr: "02",
                titel: "Sneller informatie verwerken",
                tekst: "Lange documenten, contracten of artikelen. AI vat ze samen zodat jij snel de kern ziet.",
              },
              {
                nr: "03",
                titel: "Antwoorden op elke vraag",
                tekst: "Geen uur zoeken meer. Stel de vraag aan AI en krijg een helder antwoord in jouw taal.",
              },
              {
                nr: "04",
                titel: "Beter beslissen",
                tekst: "Leg een dilemma voor. AI helpt je de voor- en nadelen structureren zonder oordeel.",
              },
              {
                nr: "05",
                titel: "Meer doen in minder tijd",
                tekst: "Taken die een uur kosten, doen met AI vijf minuten. Geen expertise vereist.",
              },
            ].map((item) => (
              <div
                key={item.nr}
                className="flex gap-4 rounded-xl p-4"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E6EA" }}
              >
                <span className="text-sm font-bold shrink-0 mt-0.5" style={{ color: "rgba(44,90,133,0.3)" }}>
                  {item.nr}
                </span>
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
            Wat AI niet vervangt
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              AI maakt fouten. Het geeft soms verkeerde feiten, verzonnen cijfers of bronnen die niet bestaan.
              Controleer altijd informatie die je wilt gebruiken voor iets belangrijks.
            </p>
            <p>
              AI heeft geen mening en geen gevoel. Het simuleert empathie, maar begrijpt jouw situatie niet echt.
              Voor nuance, oordeel en menselijk contact blijf jij onmisbaar.
            </p>
            <p>
              AI is een gereedschap. Net als een rekenmachine rekent voor je, maar je moet begrijpen wat je berekent.
              AI schrijft voor je, maar jij bepaalt wat je zegt.
            </p>
          </div>
        </section>

        {/* Sectie 6: volgende stap */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Waar begin je?
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#4A5568" }}>
            De snelste manier om AI te leren is door het gewoon te gebruiken. Kies een tool, open het in je browser
            en geef een opdracht die je vandaag toch al moet doen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                titel: "ChatGPT voor beginners",
                href: "/chatgpt-voor-beginners",
                beschrijving: "Stap voor stap een account aanmaken en je eerste bericht sturen.",
                kleur: "#10A37F",
              },
              {
                titel: "AI-prompts schrijven",
                href: "/ai-prompts-schrijven",
                beschrijving: "Leer hoe je betere opdrachten geeft en meer uit AI haalt.",
                kleur: "#2C5A85",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl p-4 transition-all hover:-translate-y-0.5"
                style={{ border: "1px solid #E2E6EA", boxShadow: `inset 3px 0 0 ${item.kleur}` }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "#1E2D3D" }}>{item.titel}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6C7B8B" }}>{item.beschrijving}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Woordenlijst */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            AI-begrippen die je tegenkomt
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "#4A5568" }}>
            Je hoeft geen expert te worden. Maar een paar basisbegrippen helpen om te begrijpen wat je leest.
          </p>
          <Link
            href="/ai-woordenlijst"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
            style={{ color: "#2C5A85" }}
          >
            Bekijk de volledige AI-woordenlijst (50 begrippen) →
          </Link>
        </section>

      </div>

      {/* Gerelateerde AI-fixes */}
      {gerelateerd.length > 0 && (
        <section className="py-16" style={{ borderTop: "1px solid #E2E6EA" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-8"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Zet AI direct aan het werk
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
