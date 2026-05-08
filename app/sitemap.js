import { getPosts } from "../lib/notion";

const BASE = "https://ai-doption.nl";

export default async function sitemap() {
  const posts = await getPosts();

  // lastModified = datum van meest recente artikel (= site is bijgewerkt)
  const latestPost = posts[0];
  const latestDate = latestPost?.date ? new Date(latestPost.date) : new Date();

  const staticPages = [
    { url: BASE,                              lastModified: latestDate,   changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blog`,                    lastModified: latestDate,   changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/ai-voor-beginners`,       lastModified: latestDate,   changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/chatgpt-voor-beginners`,  lastModified: latestDate,   changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-prompts-schrijven`,    lastModified: latestDate,   changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-woordenlijst`,         lastModified: latestDate,   changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE}/over`,                    lastModified: latestDate,   changeFrequency: "monthly", priority: 0.50 },
    { url: `${BASE}/privacy`,                 lastModified: "2026-05-01", changeFrequency: "yearly",  priority: 0.30 },
  ];

  const postPages = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: (() => { try { const d = new Date(post.date); return isNaN(d.getTime()) ? new Date() : d; } catch { return new Date(); } })(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...postPages];
}
