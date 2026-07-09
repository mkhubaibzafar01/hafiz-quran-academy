import { buildOgImage, OG_SIZE } from "@/lib/og";
import { getCourseBySlug } from "@/lib/courses";

export const alt = "Quran Academy Course";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  return buildOgImage({
    kicker: course ? `${course.audience} · Quran Academy` : "Quran Academy",
    title: course ? `${course.name} — Online Classes` : "Quran Academy",
    subtitle: course?.cardDescription,
  });
}
