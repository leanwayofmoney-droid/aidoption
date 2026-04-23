import Link from "next/link";
import NewsletterForm from "../../components/NewsletterForm";

const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "Over AIdoption — Praktische AI-hulp voor Nederlandstalige beginners",
  description: "AIdoption is gemaakt door Stefan. Geen technische handleidingen, maar praktische AI-fixes die je vandaag nog kunt gebruiken. Leer wie er achter het project zit.",
  alternates: { canonical: `${BASE}/over` },
  openGraph: {
    type: "profile",
    url: `${BASE}/over`,
    title: "Over AIdoption — Wie zit er achter?",
    description: "Stefan maakt AI toegankelijk voor mensen zonder technische achtergrond. Praktisch, eerlijk en direct toepasbaar.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Stefan",
  url: `${BASE}/over`,
  worksFor: { "@type": "Organization", name: "AIdoption", url: BASE },
  knowsAbout: ["Artificial Intelligence", "ChatGPT", "AI productiviteit", "Claude AI", "Gemini AI"],
};

export default function OverPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="max-w-2xl">
        <section className="pt-20 pb-12">
          <p className="eyebrow mb-5">Over AIdoption</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight" style={{ color: "#1E2D3D" }}>
            Wie zit er achter AIdoption?
          </h1>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#6C7B8B" }}>
            <p>
              Ik ben Stefan. Ik werk fulltime en gebruik AI dagelijks om slimmer te werken — niet minder hard.
              AIdoption is mijn manier om te delen wat ik geleerd heb: welke tools werken, hoe je ze inzet
              en wat je er concreet mee bereikt.
            </p>
            <p>
              Geen technische achtergrond nodig. Geen ingewikkeld jargon. Alleen praktische{" "}
              <strong style={{ color: "#2C5A85" }}>AI-fixes</strong> die je vandaag nog kunt gebruiken.
            </p>
          </div>
        </section>

        <section className="py-10" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-6" style={{ color: "#1E2D3D" }}>Waarom AIdoption?</h2>
          <div className="space-y-5">
            {[
              {
                title: "Geen theorie, alleen resultaat",
                desc: "Elke AI-fix bevat de exacte stappen en de kant-en-klare prompt. Kopieer, plak en bespaar tijd.",
              },
              {
                title: "Voelbare tijdsbesparing",
                desc: "De winst-slider maakt concreet hoeveel tijd je bespaart. Niet 'AI bespaart je tijd', maar '23 uur per jaar op dit onderdeel'.",
              },
              {
                title: "Toegankelijk voor iedereen",
                desc: "Als je een recept kunt volgen, kun je een AI-fix gebruiken. Geen account, geen cursus, geen investering.",
              },
              {
                title: "Eerlijk over beperkingen",
                desc: "Elke fix heeft een sectie 'Wanneer werkt dit niet'. AI is geen wondermiddel — ik vertel je wanneer het wel en niet de moeite waard is.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: "#C8813F" }} />
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#1E2D3D" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6C7B8B" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-6" style={{ color: "#1E2D3D" }}>Veelgestelde vragen</h2>
          <div className="space-y-5">
            {[
              {
                v: "Is AIdoption gratis?",
                a: "Ja, volledig. De AI-fixes, prompts en uitleg zijn gratis beschikbaar. Geen account, geen betaalmuur.",
              },
              {
                v: "Welke AI-tools heb ik nodig?",
                a: "De meeste fixes werken met ChatGPT (gratis versie), Claude of Gemini. Alle drie zijn gratis te gebruiken via de browser.",
              },
              {
                v: "Ik heb geen technische kennis. Kan ik dit gebruiken?",
                a: "Juist voor jou is dit gemaakt. De fixes zijn ontworpen voor mensen die AI willen gebruiken zonder er iets van te hoeven begrijpen.",
              },
              {
                v: "Hoe vaak wordt AIdoption bijgewerkt?",
                a: "Er komen regelmatig nieuwe AI-fixes bij. Schrijf je in voor de nieuwsbrief om ze direct te ontvangen.",
              },
            ].map((item) => (
              <div key={item.v} className="rounded-xl p-5" style={{ border: "1px solid #E2E6EA", backgroundColor: "#FFFFFF" }}>
                <p className="font-semibold text-sm mb-2" style={{ color: "#1E2D3D" }}>{item.v}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6C7B8B" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1E2D3D" }}>Contact</h2>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#6C7B8B" }}>
            Vragen, opmerkingen of een samenwerking? Stuur een mail naar{" "}
            <a href="mailto:stefanwolfs@gmail.com" className="hover:underline" style={{ color: "#2C5A85" }}>
              stefanwolfs@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#F0F4F8", color: "#2C5A85", border: "1px solid #E2E6EA" }}>
              Bekijk alle AI-fixes →
            </Link>
            <Link href="/ai-voor-beginners" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#F0F4F8", color: "#2C5A85", border: "1px solid #E2E6EA" }}>
              Beginnen met AI →
            </Link>
          </div>
        </section>
      </div>

      <section className="pb-24 pt-8">
        <NewsletterForm />
      </section>
    </div>
  );
}
