"use client";
import { useState } from "react";

export default function Codeboek({ prompt, tip }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="my-10 rounded-2xl overflow-hidden" style={{ border: "1px solid #CDD3D9" }}>
      {/* Header balk */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ backgroundColor: "#1E2D3D", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs font-semibold ml-2" style={{ color: "#9BBCD8", letterSpacing: "0.1em" }}>
            HET CODEBOEK — KOPIEER DEZE PROMPT
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150"
          style={{
            backgroundColor: copied ? "rgba(44,90,133,0.4)" : "rgba(255,255,255,0.08)",
            color: copied ? "#9BBCD8" : "#9BA8B5",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Gekopieerd!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Kopieer prompt
            </>
          )}
        </button>
      </div>

      {/* Prompt tekst */}
      <div
        className="px-6 py-5"
        style={{ backgroundColor: "#162030" }}
      >
        <pre
          className="text-sm leading-relaxed whitespace-pre-wrap font-mono"
          style={{ color: "#C8D8E8", fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace" }}
        >
          {prompt}
        </pre>
      </div>

      {/* Tip */}
      {tip && (
        <div
          className="px-5 py-3 flex items-start gap-2"
          style={{ backgroundColor: "#F8F9FA", borderTop: "1px solid #E2E6EA" }}
        >
          <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="#2C5A85" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs leading-relaxed" style={{ color: "#6C7B8B" }}>{tip}</p>
        </div>
      )}
    </div>
  );
}
