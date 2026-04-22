"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SidebarSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/blog?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/blog");
    }
  }

  return (
    <div
      className="rounded-xl p-5"
      style={{ border: "1px solid #E2E6EA", backgroundColor: "#FFFFFF" }}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-3"
        style={{ color: "#2C5A85", letterSpacing: "0.16em" }}
      >
        Zoeken
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek een AI-fix..."
          aria-label="Zoek een AI-fix"
          className="flex-1 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2"
          style={{
            border: "1px solid #E2E6EA",
            backgroundColor: "#F8F9FA",
            color: "#1E2D3D",
            focusRingColor: "#2C5A85",
          }}
        />
        <button
          type="submit"
          aria-label="Zoeken"
          className="px-3 py-2 rounded-lg transition-colors"
          style={{ backgroundColor: "#2C5A85", color: "#FFFFFF" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
