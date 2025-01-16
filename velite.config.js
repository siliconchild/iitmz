import { defineConfig, s } from "velite";

export default defineConfig({
  root: "src/content",
  assets: "public/",
  collections: {
    programs: {
      name: "faculty",
      pattern: ["faculty/**/*.mdx"],
      schema: s
        .object({
          slug: s.string(),
          title: s.string().max(99),
          cover: s.union([s.string(), s.array(s.string())]),
          order: s.number(),
          tags: s.array(s.string()).optional(),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `${data.slug}`,
        })),
    },
  },
});
