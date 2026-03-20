import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'
import { blogSchema, caseStudySchema } from './shared/contracts/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: {
        include: '*/blog/*.md',
        cwd: 'content',
      },
      schema: z.object(blogSchema.shape),
    }),
    casestudies: defineCollection({
      type: 'page',
      source: {
        include: '*/case-studies/*.md',
        cwd: 'content',
      },
      schema: z.object(caseStudySchema.shape),
    }),
  },
})
