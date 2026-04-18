import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="flex flex-col justify-between rounded-2xl p-6 h-full bg-white transition-all duration-200"
        style={{
          border: "1px solid #E2E6EA",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
            style={{ color: "#2C5A85", backgroundColor: "rgba(44,90,133,0.08)" }}
          >
            {post.tag}
          </span>
          <h3
            className="font-semibold text-base leading-snug mb-3 transition-colors duration-150"
            style={{ color: "#1E2D3D" }}
          >
            <span className="group-hover:text-[#2C5A85] transition-colors duration-150">
              {post.title}
            </span>
          </h3>
          <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "#6C7B8B" }}>
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid #F1F3F5" }}>
          <div className="flex items-center gap-2 text-xs" style={{ color: "#9BA8B5" }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <span
            className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            style={{ color: "#2C5A85" }}
          >
            Lees meer →
          </span>
        </div>
      </article>
    </Link>
  );
}
