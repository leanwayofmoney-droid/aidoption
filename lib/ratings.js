/**
 * lib/ratings.js
 * KV-helpers voor star ratings. Geeft altijd een fallback terug
 * als KV niet geconfigureerd is (lokaal of tijdens preview).
 */
import { Redis } from "@upstash/redis";

const kv = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "",
});

export async function getRating(slug) {
  try {
    const data = await kv.hgetall(`rating:${slug}`);
    const total = Number(data?.total || 0);
    const count = Number(data?.count || 0);
    const avg = count > 0 ? Math.round((total / count) * 10) / 10 : 0;
    return { avg, count };
  } catch {
    return { avg: 0, count: 0 };
  }
}

export async function addRating(slug, stars) {
  const newTotal = await kv.hincrby(`rating:${slug}`, "total", stars);
  const newCount = await kv.hincrby(`rating:${slug}`, "count", 1);
  const avg = Math.round((newTotal / newCount) * 10) / 10;
  return { avg, count: newCount };
}

export async function getTopFixes(posts, limit = 5) {
  try {
    const rated = await Promise.all(
      posts.map(async (p) => {
        const { avg, count } = await getRating(p.slug);
        return { slug: p.slug, title: p.title, color: p.color, avg, count };
      })
    );
    return rated
      .filter((p) => p.count > 0)
      .sort((a, b) => b.avg - a.avg || b.count - a.count)
      .slice(0, limit);
  } catch {
    return [];
  }
}
