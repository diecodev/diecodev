import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const tone = z.enum(["lavender", "rose", "mint", "peach"]);

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "*.md" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().optional(),
      decisions: z
        .array(
          z.object({
            alternatives: z.string().optional(),
            choice: z.string(),
            title: z.string(),
            tradeoff: z.string().optional(),
          })
        )
        .min(1),
      gallery: z
        .array(
          z.object({
            alt: z.string(),
            caption: z.string().optional(),
            image: image(),
          })
        )
        .default([]),
      highlight: z.string(),
      links: z
        .array(z.object({ href: z.string(), label: z.string() }))
        .default([]),
      name: z.string(),
      order: z.number(),
      outcome: z.string(),
      period: z.string(),
      previewLabel: z.string(),
      problem: z.string().optional(),
      results: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .min(1),
      role: z.string(),
      stack: z.array(z.string()),
      summary: z.string(),
      tagline: z.string(),
      tone,
      video: z
        .object({
          alt: z.string(),
          caption: z.string().optional(),
          height: z.number(),
          poster: z.string(),
          src: z.string(),
          width: z.number(),
        })
        .optional(),
    }),
});

export const collections = { work };
