"use client";
import { useState } from "react";
import Link from "next/link";
import { termen, CATEGORIE_KLEUREN } from "../lib/woordenlijst";

const CATEGORIEEN = ["Alles", ...Object.keys(CATEGORIE_KLEUREN)];

export default function WoordelijstClient() {
  const [actief, setActief] = useState("Alles");
  const [zoek, setZoek] = useState("");

  const gefilterd = termen.filter((t) => {
    const matchCat  = actief === "Alles" || t.categorie === actief;
    const matchZoek = zoek.trim() === "" ||
      t.term.toLowerCase().includes(zoek.toLowerCase()) ||
      t.definitie.toLowerCase().includes(zoek.toLowerCase());
    return matchCat && matchZoek;
  });

  return (
    <>
      {/* Zoekbalk */}
      <div className="relative mb-6">
        <input
          type="search"
          value={zoek}
          onChange={(e) => setZoek(e.target.value)}
          placeholder="Zoek een begrip..."
          aria-label="Zoek een begrip"
          className="w-full text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C5A85]"
          style={{ border: "1px solid #E2E6EA", backgroundColor: "#FFFFFF", color: "#1E2D3D" }}
        />
        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "#9BA8B5" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
      </div>

      {/* Categorie pills */}
      <div className="flex gap-2 flex-wrap mb-10">
        {CATEGORIEEN.map((cat) => {
          const isActief = actief === cat;
          const kleur = CATEGORIE_KLEUREN[cat] || "#2C5A85";
          return (
            <button
              key={cat}
              onClick={() => setActief(cat)}
              className="text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
              style={{
                backgroundColor: isActief ? kleur : "#F0F4F8",
                color: isActief ? "#FFFFFF" : "#6C7B8B",
                border: isActief ? `1px solid ${kleur}` : "1px solid #E2E6EA",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Resultaattelling */}
      <p className="text-xs mb-6" style={{ color: "#9BA8B5" }}>
        {gefilterd.length} {gefilterd.length === 1 ? "begrip" : "begrippen"}
        {zoek && ` voor "${zoek}"`}
      </p>

      {/* Grid */}
      {gefilterd.length === 0 ? (
        <p className="text-sm" style={{ color: "#9BA8B5" }}>Geen begrippen gevonden.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gefilterd.map((t) => {
            const kleur = CATEGORIE_KLEUREN[t.categorie] || "#2C5A85";
            return (
              <div
                key={t.term}
                className="bg-white rounded-xl p-5 flex flex-col"
                style={{
                  border: "1px solid #E2E6EA",
                  boxShadow: `inset 3px 0 0 ${kleur}`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-base leading-snug" style={{ color: "#1E2D3D" }}>
                    {t.term}
                  </h3>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap shrink-0"
                    style={{ backgroundColor: `${kleur}15`, color: kleur }}
                  >
                    {t.categorie}
                  </span>
                </div>

                {/* Definitie */}
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>
                  {t.definitie}
                </p>

                {/* Voorbeeld */}
                <div
                  className="rounded-lg px-4 py-3 text-sm leading-relaxed mb-3"
                  style={{ backgroundColor: "#F8F9FA", border: "1px solid #E2E6EA", color: "#6C7B8B" }}
                >
                  <span className="font-medium" style={{ color: "#1E2D3D" }}>Voorbeeld: </span>
                  {t.voorbeeld}
                </div>

                {/* Koppeling naar AI-fix */}
                {t.fixSlug && (
                  <Link
                    href={`/blog/${t.fixSlug}`}
                    className="mt-auto text-xs font-medium inline-flex items-center gap-1 transition-colors hover:underline"
                    style={{ color: kleur }}
                  >
                    Zie ook: {t.fixTitel} →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
