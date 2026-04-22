import { getPosts } from "../lib/notion";

const BASE = "https://ai-doption.nl";

export default async function sitemap() {
  const posts = await getPosts();

  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/over`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const postPages = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...postPages];
}
