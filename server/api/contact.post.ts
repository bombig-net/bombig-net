import { readBody } from 'h3'

type ContactPayload = {
  name?: string
  email?: string
  project?: string
  company?: string
  locale?: string
}

const isNonEmpty = (value: string | undefined, min = 2) =>
  typeof value === 'string' && value.trim().length >= min

const isValidEmail = (value: string | undefined) =>
  typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

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

  const body = await readBody<ContactPayload>(event)

  if (body?.company) {
    return { ok: true }
  }

  const name = body?.name?.trim()
  const email = body?.email?.trim()
  const project = body?.project?.trim()
  const locale = body?.locale?.trim() || 'en'

  if (!isNonEmpty(name) || !isValidEmail(email) || !isNonEmpty(project, 10)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid form submission',
    })
  }

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
      data: { message },
    })
  }

  return { ok: true }
})
