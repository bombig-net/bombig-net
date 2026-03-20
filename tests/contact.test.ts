import { describe, expect, it } from 'vitest'
import { contactRequestSchema } from '../shared/contracts/contact'

describe('contact contract', () => {
  it('accepts valid submissions and defaults locale', () => {
    const result = contactRequestSchema.parse({
      name: 'Deniz',
      email: 'deniz@example.com',
      project: 'We need a new launch site for an upcoming product release.',
      company: '',
    })

    expect(result.locale).toBe('de')
  })

  it('rejects invalid submissions', () => {
    expect(() => contactRequestSchema.parse({
      name: 'D',
      email: 'not-an-email',
      project: 'short',
      company: '',
      locale: 'en',
    })).toThrow()
  })
})
