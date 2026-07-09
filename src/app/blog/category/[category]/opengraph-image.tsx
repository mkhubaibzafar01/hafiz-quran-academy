import { buildOgImage, OG_SIZE } from "@/lib/og";
import { categoryFromSlug } from "@/lib/blog";

export const alt = "Quran Academy Blog Category";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlugParam } = await params;
  const category = categoryFromSlug(categorySlugParam);

  return buildOgImage({
    kicker: "Quran Academy Blog",
    title: category ? `${category} Articles` : "Quran Academy Blog",
    subtitle: category
      ? `Guides and articles about ${category} for Quran students and parents.`
      : undefined,
  });
}
