import { buildOgImage, OG_SIZE } from "@/lib/og";

export const alt = "Online Quran Courses — Quran Academy";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    kicker: "Quran Academy",
    title: "A Course for Every Stage of Learning",
    subtitle:
      "Noorani Qaida, Quran reading with Tajweed, Hifz & more — one-to-one, online.",
  });
}
