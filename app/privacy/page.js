const BASE = "https://ai-doption.nl";

export const metadata = {
  title: "Privacybeleid | AIdoption",
  description: "Hoe AIdoption omgaat met jouw gegevens. We verzamelen alleen wat nodig is en delen niets met derden.",
  alternates: { canonical: `${BASE}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="max-w-2xl py-20">

        <p className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#2C5A85", letterSpacing: "0.18em" }}>
          Transparantie
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight" style={{ color: "#1E2D3D" }}>
          Privacybeleid
        </h1>
        <p className="text-sm mb-12" style={{ color: "#9BA8B5" }}>
          Laatst bijgewerkt: mei 2026
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "#4A5568" }}>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#1E2D3D" }}>Wie zijn wij?</h2>
            <p>
              AIdoption is een Nederlandse website over praktisch gebruik van AI in het dagelijks leven.
              Je kunt contact opnemen via het nieuwsbriefformulier op de site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#1E2D3D" }}>Welke gegevens verzamelen we?</h2>
            <p className="mb-3">We verzamelen zo min mogelijk. Dit is wat er gebeurt:</p>
            <ul className="space-y-2 pl-4">
              {[
                { label: "Nieuwsbrief", tekst: "Als je je inschrijft bewaren we je e-mailadres via Brevo (Sendinblue). We sturen alleen praktische AI-tips. Je kunt je altijd uitschrijven via de link in elke mail." },
                { label: "Sterbeoordelingen", tekst: "Je beoordeling van een artikel wordt anoniem opgeslagen via Redis. We koppelen geen IP-adres of naam aan jouw stem." },
                { label: "Vercel Analytics", tekst: "We gebruiken Vercel Analytics voor anonieme bezoekersstatistieken (paginaweergaven, land). Geen cookies, geen tracking over sites heen." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="font-semibold shrink-0 mt-0.5" style={{ color: "#1E2D3D" }}>{item.label}:</span>
                  <span>{item.tekst}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#1E2D3D" }}>Cookies</h2>
            <p>
              AIdoption gebruikt geen tracking-cookies en plaatst geen advertentiecookies.
              De enige lokale opslag die we gebruiken is een browsergeheugen-item om bij te houden of je al een beoordeling hebt gegeven op een artikel (zodat je niet dubbel kunt stemmen). Dit verlaat je browser nooit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#1E2D3D" }}>Delen met derden</h2>
            <p>
              We verkopen of delen jouw gegevens niet met derden. Jouw e-mailadres wordt uitsluitend gebruikt
              voor de nieuwsbrief van AIdoption via Brevo, en voor geen ander doel.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#1E2D3D" }}>Jouw rechten</h2>
            <p>
              Je hebt het recht om je nieuwsbriefabonnement op te zeggen, je gegevens in te zien of te laten
              verwijderen. Stuur hiervoor een bericht via het contactformulier op de site of klik op de
              uitschrijflink in een nieuwsbrief.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#1E2D3D" }}>Beveiliging</h2>
            <p>
              De site draait volledig op HTTPS. Gegevens worden niet langer bewaard dan nodig.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
