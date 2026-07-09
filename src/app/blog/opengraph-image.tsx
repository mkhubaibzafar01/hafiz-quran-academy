import { buildOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Quran Academy Blog";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    kicker: "Quran Academy Blog",
    title: "Guides for Learning & Teaching the Quran",
    subtitle:
      "Practical, honest guides on Tajweed, Hifz, Noorani Qaida, and choosing the right teacher.",
  });
}
