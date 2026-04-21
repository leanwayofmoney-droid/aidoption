export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://ai-doption.nl/sitemap.xml",
    host: "https://ai-doption.nl",
  };
}
