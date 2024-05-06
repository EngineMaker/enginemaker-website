import { defineCollection, z } from 'astro:content'

const houseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.union([z.string(), z.array(z.string())]),
    background: z.string(),
    arrow: z.string(),
    link: z.string().optional(),
    image: z.string(),
    publishDate: z.date(),
    order: z.number(),
  }),
})

export const collections = {
  house: houseCollection,
}
