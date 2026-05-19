import { NextResponse } from 'next/server'

import {
  createEmptyContactFormValues,
  getSpamCheckResult,
  sanitizePhoneInput,
  type ContactFormValues,
  validateContactForm,
} from '@/lib/contact-form'
import { sendContactFormEmail } from '@/lib/contact-mail'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const coerceContactFormValues = (body: unknown): ContactFormValues => {
  const data = (typeof body === 'object' && body !== null ? body : {}) as Record<string, unknown>
  const values = createEmptyContactFormValues()

  return {
    email: typeof data.email === 'string' ? data.email : values.email,
    formStartedAt:
      typeof data.formStartedAt === 'string' ? data.formStartedAt : values.formStartedAt,
    message: typeof data.message === 'string' ? data.message : values.message,
    name: typeof data.name === 'string' ? data.name : values.name,
    phone: typeof data.phone === 'string' ? sanitizePhoneInput(data.phone) : values.phone,
    service: typeof data.service === 'string' ? data.service : values.service,
    website: typeof data.website === 'string' ? data.website : values.website,
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const values = coerceContactFormValues(body)
    const spamCheck = getSpamCheckResult(values)

    if (spamCheck.blocked) {
      return NextResponse.json({ ok: true })
    }

    const fieldErrors = validateContactForm(values)

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          fieldErrors,
          message: 'Le formulaire contient des erreurs.',
          ok: false,
        },
        { status: 400 },
      )
    }

    await sendContactFormEmail(values, 'Instant Present')

    return NextResponse.json({
      message: 'Votre demande a bien été envoyée.',
      ok: true,
    })
  } catch (error) {
    console.error('Contact form submission failed', error)

    return NextResponse.json(
      {
        message:
          "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer dans un instant.",
        ok: false,
      },
      { status: 500 },
    )
  }
}
