/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Automatisch WebP en AVIF serveren — kleinere bestanden, snellere laadtijd
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Voorkomt clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Voorkomt MIME-sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Stuurt minimale referrer-informatie mee
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Schakelt onnodige browser-API's uit
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Versnelt DNS-prefetching
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
