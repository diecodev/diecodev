import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const tone = z.enum(["lavender", "rose", "mint", "peach"]);

const work = defineCollection({
  loader: glob({ base: "./src/content/work", pattern: "*.md" }),
  schema: z.object({
    company: z.string(),
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
    results: z.array(z.object({ label: z.string(), value: z.string() })).min(1),
    role: z.string(),
    stack: z.array(z.string()),
    summary: z.string(),
    tagline: z.string(),
    tone,
  }),
});

export const collections = { work };
