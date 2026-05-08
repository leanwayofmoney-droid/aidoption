import LogoProposal from "../../components/LogoProposal";
import LogoWordmark from "../../components/Logo";

export const metadata = { robots: { index: false } };

export default function LogoPreviewPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>

      {/* Huidige logo — ter vergelijking */}
      <section style={{ padding: "48px", background: "#F8F9FA", borderBottom: "1px solid #E2E6EA" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9BA8B5", marginBottom: "24px" }}>
          Huidig logo
        </p>
        <div style={{ display: "flex", gap: "48px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ background: "#F8F9FA", padding: "16px 24px", borderRadius: "12px", border: "1px solid #E2E6EA" }}>
            <p style={{ fontSize: "0.6rem", color: "#9BA8B5", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Op lichte achtergrond</p>
            <LogoWordmark variant="light" />
          </div>
          <div style={{ background: "#0F1A26", padding: "16px 24px", borderRadius: "12px" }}>
            <p style={{ fontSize: "0.6rem", color: "#4E5D6C", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Op donkere achtergrond</p>
            <LogoWordmark variant="dark" />
          </div>
        </div>
      </section>

      {/* Nieuw voorstel */}
      <section style={{ padding: "48px", background: "#F8F9FA", borderBottom: "1px solid #E2E6EA" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C8813F", marginBottom: "24px" }}>
          Nieuw voorstel
        </p>

        <div style={{ display: "flex", gap: "48px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Lichte achtergrond — zonder tagline */}
          <div style={{ background: "#F8F9FA", padding: "20px 28px", borderRadius: "12px", border: "1px solid #E2E6EA" }}>
            <p style={{ fontSize: "0.6rem", color: "#9BA8B5", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Licht — zonder tagline</p>
            <LogoProposal variant="light" tagline={false} />
          </div>

          {/* Lichte achtergrond — met tagline */}
          <div style={{ background: "#F8F9FA", padding: "20px 28px", borderRadius: "12px", border: "1px solid #E2E6EA" }}>
            <p style={{ fontSize: "0.6rem", color: "#9BA8B5", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Licht — met tagline</p>
            <LogoProposal variant="light" tagline={true} />
          </div>

          {/* Donkere achtergrond — zonder tagline */}
          <div style={{ background: "#0F1A26", padding: "20px 28px", borderRadius: "12px" }}>
            <p style={{ fontSize: "0.6rem", color: "#4E5D6C", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Donker — zonder tagline (nav)</p>
            <LogoProposal variant="dark" tagline={false} />
          </div>

          {/* Donkere achtergrond — met tagline */}
          <div style={{ background: "#0F1A26", padding: "20px 28px", borderRadius: "12px" }}>
            <p style={{ fontSize: "0.6rem", color: "#4E5D6C", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Donker — met tagline</p>
            <LogoProposal variant="dark" tagline={true} />
          </div>

        </div>
      </section>

      {/* Grote weergave */}
      <section style={{ padding: "48px", background: "#0F1A26" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#4E5D6C", marginBottom: "32px" }}>
          Grote weergave — zoals het in de nav staat
        </p>
        <LogoProposal variant="dark" tagline={false} />
        <div style={{ marginTop: "40px" }}>
          <LogoProposal variant="dark" tagline={true} />
        </div>
      </section>

    </div>
  );
}
