import { z } from 'zod'

export const CONTENT_ENTRY_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export const contentEntryIdSchema = z.string().regex(CONTENT_ENTRY_ID_PATTERN)

export const blogSchema = z.object({
  entryId: contentEntryIdSchema,
  title: z.string().min(1),
  description: z.string().min(1),
  meta: z.object({
    date: z.string().min(1),
    category: z.string().min(1),
    read: z.string().min(1),
  }),
})

export const caseStudySchema = z.object({
  entryId: contentEntryIdSchema,
  title: z.string().min(1),
  description: z.string().min(1),
  meta: z.object({
    client: z.string().min(1),
    year: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    services: z.string().min(1),
    scope: z.string().min(1),
  }),
})

export type BlogFrontmatter = z.infer<typeof blogSchema>
export type CaseStudyFrontmatter = z.infer<typeof caseStudySchema>
