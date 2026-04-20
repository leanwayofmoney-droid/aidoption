"use client";
import { useState } from "react";
import ReceptCard from "./ReceptCard";

const TOOLS = ["Alles", "Claude", "ChatGPT"];

export default function FilteredPosts({ posts }) {
  const [filter, setFilter] = useState("Alles");

  const filtered =
    filter === "Alles"
      ? posts
      : posts.filter((p) => p.tool?.includes(filter));

  const [featured, ...rest] = filtered;

  return (
    <section className="pb-24">
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

      {/* Post grid */}
      {filtered.length === 0 ? (
        <p className="text-sm" style={{ color: "#9BA8B5" }}>
          Geen fixes gevonden voor dit filter.
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
