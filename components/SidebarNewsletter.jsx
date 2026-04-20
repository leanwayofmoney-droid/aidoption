"use client";
import { useState } from "react";

export default function SidebarNewsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState(null); // null | "loading" | "success" | "error"

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div
      className="rounded-xl p-5"
      style={{ backgroundColor: "#1E2D3D" }}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-1"
        style={{ color: "#9BBCD8", letterSpacing: "0.16em" }}
      >
        Het Codeboek
      </p>
      <p className="text-sm font-semibold mb-2" style={{ color: "#FFFFFF" }}>
        De exacte prompts
      </p>
      <p className="text-xs leading-relaxed mb-4" style={{ color: "#6C7B8B" }}>
        Schrijf je in en ontvang de syntaxis direct.
      </p>

      {state === "success" ? (
        <p className="text-xs font-medium" style={{ color: "#10B981" }}>
          ✓ Je staat op de lijst!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@email.nl"
            className="w-full text-xs rounded-lg px-3 py-2.5 outline-none"
            style={{
              backgroundColor: "#2C3E50",
              border: "1px solid #3D5166",
              color: "#FFFFFF",
            }}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full text-xs font-semibold py-2.5 rounded-lg transition-opacity"
            style={{
              backgroundColor: "#2C5A85",
              color: "#FFFFFF",
              opacity: state === "loading" ? 0.7 : 1,
            }}
          >
            {state === "loading" ? "Even wachten…" : "Ontvang gratis →"}
          </button>
          {state === "error" && (
            <p className="text-xs" style={{ color: "#EF4444" }}>
              Probeer het opnieuw.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
