import type { TocHeading } from "@/lib/markdown";

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-primary-100 bg-primary-50/50 p-6"
    >
      <p className="font-serif text-sm font-semibold uppercase tracking-wide text-primary-700">
        On This Page
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${heading.id}`}
              className="text-navy-700/90 transition-colors hover:text-primary-600"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
