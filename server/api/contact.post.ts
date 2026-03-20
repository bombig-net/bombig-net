import { readBody } from 'h3'
import { ZodError } from 'zod'
import { contactRequestSchema, contactSuccessSchema } from '../../shared/contracts/contact'
import { isLocaleCode } from '../../shared/contracts/locales'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const resendApiKey = runtimeConfig.resendApiKey
  const contactToEmail = runtimeConfig.contactToEmail
  const contactFromEmail = runtimeConfig.contactFromEmail

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Contact form is not configured',
    })
  }

  const body = await readBody(event)

  try {
    const payload = contactRequestSchema.parse(body)

    if (payload.company) {
      return contactSuccessSchema.parse({ ok: true })
    }

    const name = payload.name.trim()
    const email = payload.email.trim()
    const project = payload.project.trim()
    const locale = isLocaleCode(payload.locale) ? payload.locale : 'de'

    const subject = `New project inquiry from ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Locale: ${locale}`,
      '',
      project,
    ].join('\n')

    try {
      await $fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: {
          from: contactFromEmail,
          to: contactToEmail,
          reply_to: email,
          subject,
          text,
        },
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      throw createError({
        statusCode: 502,
        statusMessage: 'Failed to send message',
        data: { message, ok: false, code: 'service_unavailable' },
      })
    }

    return contactSuccessSchema.parse({ ok: true })
  } catch (error) {
    if (error instanceof ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid form submission',
        data: { ok: false, code: 'invalid_submission', message: error.issues[0]?.message || 'Invalid form submission' },
      })
    }

    throw error
  }
})
