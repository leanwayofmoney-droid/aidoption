import Link from "next/link";
import NewsletterForm from "../../components/NewsletterForm";

export const metadata = {
  title: "Over — AIdoption",
  description: "Wat is AIdoption en waarom bestaat deze website?",
};

export default function OverPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="max-w-2xl mx-auto">
        <section className="pt-20 pb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
            Over AIdoption
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight" style={{ color: "#1E2D3D" }}>
            Meer tijd voor wat telt
          </h1>
          <div className="space-y-5 leading-relaxed text-base" style={{ color: "#6C7B8B" }}>
            <p>
              Gedreven door mijn passie voor AI help ik je om slimme technologie tastbaar te maken in je dagelijks leven. Geen ingewikkelde theorie, maar praktische <strong style={{ color: "#2C5A85" }}>AI-fixes</strong> die direct voor je werken. Zo maken we complexe taken eenvoudig en houd jij meer tijd over voor wat er écht toe doet.
            </p>
          </div>
        </section>

        <section className="py-12" style={{ borderTop: "1px solid #E2E6EA" }}>
          <h2 className="text-xl font-semibold mb-6" style={{ color: "#1E2D3D" }}>
            Waarom AIdoption?
          </h2>
          <div className="space-y-4">
            {[
              { title: "Direct toepasbaar", desc: "Geen theorie, geen uitleg over hoe AI werkt. Alleen concrete stappen en klaar-om-te-plakken prompts." },
              { title: "Voelbaar resultaat", desc: "De winst-slider maakt de tijdsbesparing concreet. Niet 'AI bespaart je tijd', maar '23 uur per jaar op dit ene onderdeel'." },
              { title: "Voor iedereen", desc: "Je hoeft geen technische kennis te hebben. Als je een recept kunt volgen, kun je een AI-Fix gebruiken." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#2C5A85" }} />
                <div>
                  <p className="font-medium text-sm mb-1" style={{ color: "#1E2D3D" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6C7B8B" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="pb-24 pt-8">
        <NewsletterForm />
      </section>
    </div>
  );
}
