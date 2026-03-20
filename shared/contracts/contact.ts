import { z } from 'zod'
import { DEFAULT_LOCALE, LOCALES } from './locales'

export const contactRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().email().max(320),
  project: z.string().trim().min(10).max(5000),
  company: z.string().trim().max(120).optional().default(''),
  locale: z.enum(LOCALES).default(DEFAULT_LOCALE),
})

export const contactSuccessSchema = z.object({
  ok: z.literal(true),
})

export const contactErrorSchema = z.object({
  ok: z.literal(false),
  code: z.enum(['invalid_submission', 'service_unavailable']),
  message: z.string(),
})

export type ContactRequest = z.infer<typeof contactRequestSchema>
export type ContactSuccess = z.infer<typeof contactSuccessSchema>
export type ContactError = z.infer<typeof contactErrorSchema>
