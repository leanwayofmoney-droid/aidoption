import Link from "next/link";
import ReceptCard from "../../components/ReceptCard";
import NewsletterForm from "../../components/NewsletterForm";
import { getPosts } from "../../lib/notion";

const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "AI-prompts schrijven: zo krijg je betere antwoorden in 2025",
  description: "Leer hoe je effectieve prompts schrijft voor ChatGPT, Claude en Gemini. Met concrete voorbeelden, vaste formules en veelgemaakte fouten om te vermijden.",
  alternates: { canonical: `${BASE}/ai-prompts-schrijven` },
  openGraph: {
    type: "article",
    url: `${BASE}/ai-prompts-schrijven`,
    title: "AI-prompts schrijven: betere antwoorden in minder tijd",
    description: "Concrete formules en voorbeelden voor betere AI-prompts. Voor ChatGPT, Claude en Gemini.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "AI-prompts schrijven: zo krijg je betere antwoorden",
  description: "Leer hoe je effectieve prompts schrijft voor AI-tools zoals ChatGPT, Claude en Gemini.",
  author: { "@type": "Person", name: "Stefan" },
  publisher: { "@type": "Organization", name: "AIdoption", url: BASE },
  url: `${BASE}/ai-prompts-schrijven`,
  inLanguage: "nl-NL",
  step: [
    { "@type": "HowToStep", name: "Geef context", text: "Vertel wie je bent en wat de situatie is." },
    { "@type": "HowToStep", name: "Beschrijf de taak", text: "Zeg precies wat je wilt dat de AI doet." },
    { "@type": "HowToStep", name: "Geef het formaat aan", text: "Zeg in welke vorm je het antwoord wilt: lijst, mail, samenvatting." },
    { "@type": "HowToStep", name: "Stel de toon in", text: "Formeel, informeel, kort, uitgebreid. Zeg het erbij." },
  ],
};

export default async function AiPromptsSchrijvenPage() {
  const posts = await getPosts();
  const gerelateerd = posts
    .filter((p) =>
      ["email-inbox-samenvatten", "vergadering-samenvatten", "cv-en-sollicitatiebrief", "maandbudget-opstellen"].includes(p.slug)
    )
    .slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-2xl">

        {/* Header */}
        <section className="pt-20 pb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Meer uit AI halen
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight" style={{ color: "#1E2D3D" }}>
            AI-prompts schrijven
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "#6C7B8B" }}>
            Het verschil tussen een matige en een geweldige AI-respons zit bijna altijd in de prompt.
            Niet in de tool. Hier zijn de formules die ik zelf dagelijks gebruik.
          </p>
        </section>

        {/* Sectie 1 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Wat is een prompt?
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#4A5568" }}>
            <p>
              Een prompt is de opdracht die je aan een AI geeft. Alles wat je typt in het gespreksvak van
              ChatGPT, Claude of Gemini is een prompt. Het kan een vraag zijn, een verzoek, een stuk tekst
              om te bewerken of een combinatie van dit alles.
            </p>
            <p>
              AI begrijpt gewone taal. Maar hoe meer je het vertelt, hoe beter het antwoord aansluit op
              wat je echt nodig hebt. Denk aan het briefen van een nieuwe collega: context helpt.
            </p>
          </div>
        </section>

        {/* Sectie 2 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            De vier bouwstenen van een goede prompt
          </h2>
          <div className="space-y-3">
            {[
              {
                nr: "01",
                titel: "Context",
                tekst: "Vertel wie je bent en wat de situatie is. Schrijf je als ondernemer, medewerker of privépersoon? Wat is de aanleiding?",
                voorbeeld: "Ik ben freelance fotograaf en stuur een factuur na een trouwshoot.",
              },
              {
                nr: "02",
                titel: "Taak",
                tekst: "Beschrijf precies wat je wilt dat de AI doet. Schrijven, samenvatten, uitleggen, controleren, omzetten.",
                voorbeeld: "Schrijf een begeleidende mail bij de factuur.",
              },
              {
                nr: "03",
                titel: "Formaat",
                tekst: "Geef aan in welke vorm je het antwoord wilt. Lijst, alinea's, tabel, e-mail, bullet points.",
                voorbeeld: "Maximaal drie alinea's, geen onderwerpkoptekst nodig.",
              },
              {
                nr: "04",
                titel: "Toon",
                tekst: "Formeel of informeel? Vriendelijk of zakelijk? Kort of uitgebreid? Zeg het erbij.",
                voorbeeld: "Warm en persoonlijk, want ik ken het stel al een tijdje.",
              },
            ].map((item) => (
              <div key={item.nr} className="rounded-xl p-4" style={{ border: "1px solid #E2E6EA" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold" style={{ color: "rgba(44,90,133,0.4)" }}>{item.nr}</span>
                  <p className="font-semibold text-sm" style={{ color: "#1E2D3D" }}>{item.titel}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>{item.tekst}</p>
                <div className="rounded-lg px-3 py-2 text-xs leading-relaxed italic"
                  style={{ backgroundColor: "#F0F4F8", color: "#6C7B8B" }}>
                  {item.voorbeeld}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 3: compleet voorbeeld */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Een complete prompt in de praktijk
          </h2>
          <p className="text-base leading-relaxed mb-5" style={{ color: "#4A5568" }}>
            Combineer de vier bouwstenen in één opdracht. Dit is het verschil:
          </p>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E6EA" }}>
            <div className="px-4 py-2 text-xs font-semibold" style={{ backgroundColor: "#1E2D3D", color: "#9BBCD8" }}>
              Vaag vs. specifiek
            </div>
            <div className="divide-y" style={{ borderColor: "#E2E6EA" }}>
              <div className="px-4 py-4">
                <p className="text-xs font-medium mb-1" style={{ color: "#DC2626" }}>Te vaag</p>
                <p className="text-sm" style={{ color: "#4A5568" }}>Schrijf een mail.</p>
              </div>
              <div className="px-4 py-4">
                <p className="text-xs font-medium mb-1" style={{ color: "#059669" }}>Specifiek en compleet</p>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                  Ik ben freelance fotograaf en stuur een begeleidende mail bij een factuur aan een klant
                  waarvoor ik vorige week een trouwshoot heb gedaan. Schrijf een korte mail van twee
                  alinea's, warm en persoonlijk, zonder formele aanhef. Sluit af met dat ik uitkijk naar
                  eventuele samenwerking in de toekomst.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 4 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-5" style={{ color: "#1E2D3D" }}>
            Vijf prompts die je direct kunt gebruiken
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "Samenvatten",
                prompt: "Vat de tekst hieronder samen in maximaal vijf punten. Schrijf in gewone taal, geen vakjargon:\n[plak hier je tekst]",
              },
              {
                label: "Verbeteren",
                prompt: "Verbeter de onderstaande tekst. Houd de betekenis intact, maar maak de zinnen korter en de toon iets vriendelijker:\n[plak hier je tekst]",
              },
              {
                label: "Uitleggen",
                prompt: "Leg [onderwerp] uit alsof ik er niets van weet. Gebruik een concreet voorbeeld uit het dagelijks leven.",
              },
              {
                label: "Ideeën genereren",
                prompt: "Bedenk tien ideeën voor [situatie]. Geef elk idee een naam en een zin uitleg. Geen overlappende ideeën.",
              },
              {
                label: "Beslissing helpen",
                prompt: "Ik overweeg [optie A] of [optie B]. Geef een eerlijk overzicht van de voor- en nadelen van beide opties. Geen oordeel, alleen feiten.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-4" style={{ border: "1px solid #E2E6EA", backgroundColor: "#FAFBFC" }}>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full mb-3 inline-block"
                  style={{ backgroundColor: "rgba(44,90,133,0.1)", color: "#2C5A85" }}>
                  {item.label}
                </span>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#4A5568" }}>{item.prompt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 5 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Veelgemaakte fouten
          </h2>
          <div className="space-y-3">
            {[
              {
                fout: "Te kort en te vaag",
                fix: "Voeg context toe. Wie ben je, wat is de situatie, voor wie schrijf je?",
              },
              {
                fout: "Geen formaat opgeven",
                fix: "Zeg hoelang je het wilt, in welke vorm en welke toon.",
              },
              {
                fout: "Alles in één vraag stoppen",
                fix: "Splits complexe taken op. Stel eerst een vraag, gebruik het antwoord als basis voor de volgende.",
              },
              {
                fout: "Het eerste antwoord accepteren",
                fix: "Reageer op het antwoord. Vraag om aanpassingen, een andere toon of een korter formaat.",
              },
              {
                fout: "Feiten niet controleren",
                fix: "AI verzint soms bronnen of cijfers. Controleer altijd informatie die je ergens voor gebruikt.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl p-4" style={{ border: "1px solid #E2E6EA" }}>
                <div className="flex-1">
                  <p className="text-xs font-medium mb-1" style={{ color: "#DC2626" }}>{item.fout}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sectie 6 */}
        <section className="py-8" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>
            Werkt dit voor alle AI-tools?
          </h2>
          <div className="space-y-4 text-base leading-relaxed mb-5" style={{ color: "#4A5568" }}>
            <p>
              Ja. De vier bouwstenen werken voor ChatGPT, Claude en Gemini. De tools verschillen in karakter,
              maar reageren allemaal beter op specifieke, goed omschreven opdrachten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { naam: "ChatGPT", href: "/chatgpt-voor-beginners", kleur: "#10A37F" },
              { naam: "Claude", href: "/blog/claude-ai-gebruiken-nederlands", kleur: "#7C3AED" },
              { naam: "Gemini", href: "/blog/gemini-google-gebruiken-nederlands", kleur: "#1A73E8" },
            ].map((tool) => (
              <Link
                key={tool.naam}
                href={tool.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-center transition-all hover:-translate-y-0.5"
                style={{ border: "1px solid #E2E6EA", boxShadow: `inset 3px 0 0 ${tool.kleur}`, color: "#1E2D3D" }}
              >
                {tool.naam}
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
            Oefen direct met een AI-fix
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
