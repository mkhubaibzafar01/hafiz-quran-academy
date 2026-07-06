import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { CATEGORIES, categorySlug, getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/blog/category/${categorySlug(category)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryEntries,
    ...postEntries,
  ];
}
