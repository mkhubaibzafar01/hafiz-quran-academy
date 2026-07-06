import Link from "next/link";
import { CATEGORIES, categorySlug } from "@/lib/blog";

export default function CategoryPills({ active }: { active?: string }) {
  return (
    <nav aria-label="Filter by category" className="flex flex-wrap justify-center gap-2">
      <Link
        href="/blog"
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          !active
            ? "bg-primary-700 text-cream-50"
            : "bg-primary-50 text-primary-700 hover:bg-primary-100"
        }`}
      >
        All Posts
      </Link>
      {CATEGORIES.map((category) => {
        const slug = categorySlug(category);
        const isActive = active === slug;
        return (
          <Link
            key={category}
            href={`/blog/category/${slug}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary-700 text-cream-50"
                : "bg-primary-50 text-primary-700 hover:bg-primary-100"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}
