import StarRating from "./StarRating";
import SidebarTopFixes from "./SidebarTopFixes";
import SidebarNewsletter from "./SidebarNewsletter";

export default function Sidebar({ slug }) {
  return (
    <aside className="space-y-4">
      <StarRating slug={slug} />
      <SidebarTopFixes />
      <SidebarNewsletter />
    </aside>
  );
}
