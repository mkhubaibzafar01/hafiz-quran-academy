import { buildOgImage, OG_SIZE } from "@/lib/og";
import { SITE_TITLE } from "@/lib/site";

export const alt = SITE_TITLE;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return buildOgImage({
    kicker: "Online Quran Academy",
    title: "Master the Holy Quran with Expert One-to-One Guidance",
    subtitle:
      "Noorani Qaida, Tajweed & Hifz — live one-to-one classes for kids & adults, UK, USA & worldwide.",
  });
}
