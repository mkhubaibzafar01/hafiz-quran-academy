import { buildOgImage, OG_SIZE } from "@/lib/og";
import { getPostBySlug } from "@/lib/blog";

export const alt = "Quran Academy Blog Post";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return buildOgImage({
    kicker: post ? `${post.category} · Quran Academy Blog` : "Quran Academy Blog",
    title: post?.title ?? "Quran Academy Blog",
    subtitle: post?.description,
  });
}
