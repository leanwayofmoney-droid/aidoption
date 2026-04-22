"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ReceptCard from "./ReceptCard";

const TOOLS = ["Alles", "Claude", "ChatGPT"];

export default function FilteredPosts({ posts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filter, setFilter] = useState("Alles");
  const [query, setQuery] = useState("");

  // Laad zoekopdracht uit URL bij mount
  useEffect(() => {
    const q = searchParams.get("q") || "";
    setQuery(q);
  }, [searchParams]);

  const filtered = posts.filter((p) => {
    const matchTool = filter === "Alles" || p.tool?.includes(filter);
    const matchQuery =
      query.trim() === "" ||
      p.title?.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(query.toLowerCase());
    return matchTool && matchQuery;
  });

  const [featured, ...rest] = filtered;

  function handleSearch(e) {
    e.preventDefault();
    const q = query.trim();
    const url = q ? `/blog?q=${encodeURIComponent(q)}` : "/blog";
    router.replace(url, { scroll: false });
  }

  function clearSearch() {
    setQuery("");
    router.replace("/blog", { scroll: false });
  }

  return (
    <section className="pb-24">
      {/* Zoekbalk */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek een AI-fix..."
            aria-label="Zoek een AI-fix"
            className="w-full text-sm px-4 py-2.5 rounded-full focus:outline-none focus:ring-2"
            style={{
              border: "1px solid #E2E6EA",
              backgroundColor: "#FFFFFF",
              color: "#1E2D3D",
            }}
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Zoekopdracht wissen"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 rounded-full text-sm font-medium transition-colors"
          style={{ backgroundColor: "#2C5A85", color: "#FFFFFF" }}
        >
          Zoek
        </button>
      </form>

      {/* Filter pills */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {TOOLS.map((tool) => {
          const active = filter === tool;
          return (
            <button
              key={tool}
              onClick={() => setFilter(tool)}
              className="text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
              style={{
                backgroundColor: active ? "#2C5A85" : "#F0F4F8",
                color: active ? "#FFFFFF" : "#6C7B8B",
                border: active ? "1px solid #2C5A85" : "1px solid #E2E6EA",
              }}
            >
              {tool}
            </button>
          );
        })}
      </div>

      {/* Resultaten */}
      {filtered.length === 0 ? (
        <p className="text-sm" style={{ color: "#9BA8B5" }}>
          Geen fixes gevonden{query ? ` voor "${query}"` : ""}.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured && (
            <div className="md:col-span-2">
              <ReceptCard post={featured} wide />
            </div>
          )}
          {rest.map((post) => (
            <ReceptCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
