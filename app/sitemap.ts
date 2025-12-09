import { promises as fs } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

async function getNoteSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const notesDirectory = path.join(process.cwd(), "app", "n");
  const slugs = await getNoteSlugs(notesDirectory);

  const notes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `https://dieco.dev/n/${slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.5,
  }));

  const routes: MetadataRoute.Sitemap = [""].map((route) => ({
    url: `https://dieco.dev${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly",
    priority: 1,
  }));

  return [...routes, ...notes];
}
