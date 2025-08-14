import { promises as fs } from "fs";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const SITE_URL = isProd ? "https://rustejahren.no" : "http://localhost:3000";

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

export default async function sitemap() {
  const blogDirectory = path.join(process.cwd(), "src", "app", "blog");
  const slugs = await getNoteSlugs(blogDirectory);

  return slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));
}
