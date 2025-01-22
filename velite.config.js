import { defineConfig, s } from "velite";

export default defineConfig({
  root: "content",
  assets: "public/",
  collections: {
    faculty: {
      name: "faculty",
      pattern: ["faculty/**/*.mdx"],
      schema: s
        .object({
          order: s.number(),
          slug: s.string(),
          metadesc: s.string(),
          name: s.string(),
          img: s.string(),
          title: s.string(),
          subtitle: s.string().optional(),
          email: s.string().optional(),
          alternateEmail: s.string().optional(),
          website: s.string().optional(),
          qualification: s
            .array(
              s.object({
                title: s.string(),
                course: s.string(),
                institution: s.string().optional(),
                year: s.number(),
              }),
            )
            .optional(),
          awards: s
            .array(
              s.object({
                title: s.string(),
                subtitle: s.string(),
              }),
            )
            .optional(),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `${data.slug}`,
        })),
    },
  },
});
