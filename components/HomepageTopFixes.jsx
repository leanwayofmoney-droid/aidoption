import Link from "next/link";
import { getPosts } from "../lib/notion";
import { getTopFixes } from "../lib/ratings";

export default async function HomepageTopFixes() {
  const posts = await getPosts();
  const top = await getTopFixes(posts, 5);

  // Verberg de sectie als er nog geen ratings zijn
  if (top.length === 0) return null;

  return (
    <section className="pb-20">
      <div className="flex items-center justify-between mb-6">
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#2C5A85", letterSpacing: "0.18em" }}
        >
          Meest gewaardeerd
        </p>
        <div className="flex items-center gap-1 text-xs" style={{ color: "#9BA8B5" }}>
          <svg className="w-3.5 h-3.5" fill="#F59E0B" viewBox="0 0 24 24">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          Door lezers beoordeeld
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {top.map((fix, i) => (
          <Link
            key={fix.slug}
            href={`/blog/${fix.slug}`}
            className="group relative rounded-xl p-4 transition-all"
            style={{
              border: "1px solid #E2E6EA",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* Gekleurde topbalk */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
              style={{ backgroundColor: fix.color || "#2C5A85" }}
            />

            {/* Rangnummer */}
            <span
              className="text-2xl font-bold leading-none block mb-3"
              style={{ color: fix.color || "#2C5A85", opacity: 0.25 }}
            >
              {i + 1}
            </span>

            {/* Titel */}
            <p
              className="text-sm font-semibold leading-snug mb-3 group-hover:underline"
              style={{ color: "#1E2D3D" }}
            >
              {fix.title}
            </p>

            {/* Sterren + score */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold" style={{ color: "#F59E0B" }}>
                ★ {fix.avg.toFixed(1)}
              </span>
              <span className="text-xs" style={{ color: "#CBD5E0" }}>
                · {fix.count} stem{fix.count !== 1 ? "men" : ""}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
