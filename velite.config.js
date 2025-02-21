import { type } from "os";
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
          year: s.number().optional(),
          type: s.enum(['Permanent Faculty', 'Visiting Faculty']),
          website: s.string().optional(),
          link: s.string().optional(),
          qualification: s
            .array(
              s.object({
                title: s.string(),
                course: s.string(),
                institution: s.string().optional(),
                year: s.number(),
              })
            )
            .optional(),
          awards: s
            .array(
              s.object({
                title: s.string(),
                subtitle: s.string(),
              })
            )
            .optional(),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `${data.slug}`,
        })),
    },
    courses: {
      name: "courses",
      pattern: ["courses/**/*.mdx"],
      schema: s
        .object({
          slug: s.string(),
          type: s.enum(["online", "oncampus"]),
          title: s.string(),
          cardDesc: s.string(),
          cardImg: s.string(),
          coverImg: s.string(),
          duration: s.string(),
          credits: s.number(),
          department: s.string(),
          language: s.string(),
          flyerLink: s.string().optional(),
          applicationLink: s.string().optional(), // Application link
          applicationClosingDate: s.string().optional(),
          seo: s
            .object({
              desc: s.string(),
            })
            .optional(), // SEO details
          body: s.mdx(), // Body content
        })
        .transform((data) => ({
          ...data,
          permalink: `${data.slug}`,
        })),
    },
  },
});
