import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const SITE_NAME = "Quran Academy";
const SITE_DESCRIPTION =
  "Online Quran classes for kids and adults, taught one-to-one by a qualified Hafiz-e-Quran. Learn Quran reading, Tajweed, and memorization (Hifz) live online, with class times you choose — flexible timings for families in the UK, USA, and Europe.";

export const metadata: Metadata = {
  // Placeholder — update once a production domain is available.
  metadataBase: new URL("https://www.your-domain-here.com"),
  title: {
    default: `${SITE_NAME} | Online Quran Classes with a Qualified Hafiz`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "online Quran classes",
    "learn Quran online",
    "online Quran teacher",
    "Quran classes for kids UK",
    "Quran classes for kids USA",
    "Quran classes for kids Europe",
    "Quran memorization online",
    "Hifz classes online",
    "Tajweed classes online",
    "Noorani Qaida online",
    "Quran teacher for adults",
  ],
  openGraph: {
    title: `${SITE_NAME} | Online Quran Classes with a Qualified Hafiz`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Online Quran Classes with a Qualified Hafiz`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "BHTneW1_oZDJHbD07zFWCCj9Sefnk-7fWpy5j5Bw0n0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-50 font-sans text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
