import StarRating from "./StarRating";
import SidebarNewsletter from "./SidebarNewsletter";

export default function Sidebar({ slug }) {
  return (
    <aside className="space-y-4">
      <StarRating slug={slug} />
      <SidebarNewsletter />
    </aside>
  );
}
