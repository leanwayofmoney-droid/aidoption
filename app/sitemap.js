import { getPosts } from "../lib/notion";

const BASE = "https://ai-doption.nl";

export default async function sitemap() {
  const posts = await getPosts();

  const staticPages = [
    { url: BASE,                              lastModified: "2026-04-23", changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/blog`,                    lastModified: "2026-04-23", changeFrequency: "daily",   priority: 0.9 },
    { url: `${BASE}/ai-voor-beginners`,       lastModified: "2026-04-20", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/chatgpt-voor-beginners`,  lastModified: "2026-04-20", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-prompts-schrijven`,    lastModified: "2026-04-20", changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/ai-woordenlijst`,         lastModified: "2026-04-20", changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE}/over`,                    lastModified: "2026-04-23", changeFrequency: "monthly", priority: 0.50 },
  ];

  const postPages = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: (() => { try { const d = new Date(post.date); return isNaN(d.getTime()) ? new Date() : d; } catch { return new Date(); } })(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...postPages];
}
