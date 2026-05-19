export type ContactFormValues = {
  email: string
  formStartedAt: string
  message: string
  name: string
  phone: string
  service: string
  website: string
}

export type ContactFormField = keyof Omit<ContactFormValues, 'formStartedAt' | 'website'>

export type ContactFormErrors = Partial<Record<ContactFormField, string>>

export const contactFormFieldOrder: ContactFormField[] = [
  'name',
  'phone',
  'email',
  'service',
  'message',
]

export const createEmptyContactFormValues = (): ContactFormValues => ({
  email: '',
  formStartedAt: String(Date.now()),
  message: '',
  name: '',
  phone: '',
  service: '',
  website: '',
})

export const sanitizePhoneInput = (value: string) => {
  let sanitized = value.replace(/[^\d+().\s-]/g, '')

  if (sanitized.startsWith('+')) {
    sanitized = `+${sanitized.slice(1).replace(/\+/g, '')}`
  } else {
    sanitized = sanitized.replace(/\+/g, '')
  }

  return sanitized
}

export const normalizePhone = (value: string) => value.replace(/[\s().-]/g, '')

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(value.trim())

export const isValidPhone = (value: string) => {
  const trimmed = value.trim()

  if (!trimmed) {
    return false
  }

  if (/[^+\d().\s-]/u.test(trimmed)) {
    return false
  }

  const normalized = normalizePhone(trimmed)

  return /^(?:\+33|0033|0)[1-9]\d{8}$/u.test(normalized)
}

export const getContactFieldError = (
  field: ContactFormField,
  values: ContactFormValues,
): string | undefined => {
  const name = values.name.trim()
  const phone = values.phone.trim()
  const email = values.email.trim()
  const service = values.service.trim()
  const message = values.message.trim()

  switch (field) {
    case 'name':
      if (!name) return 'Champ obligatoire'
      if (name.length < 2) return 'Veuillez saisir un nom valide'
      if (name.length > 120) return 'Le nom est trop long'
      return undefined

    case 'phone':
      if (!phone) return 'Champ obligatoire'
      if (!isValidPhone(phone)) return 'Veuillez saisir un numéro valide'
      return undefined

    case 'email':
      if (!email) return 'Champ obligatoire'
      if (!isValidEmail(email)) return 'Veuillez saisir une adresse e-mail valide'
      return undefined

    case 'service':
      if (!service) return 'Champ obligatoire'
      if (service.length > 120) return 'La prestation sélectionnée est invalide'
      return undefined

    case 'message':
      if (!message) return 'Champ obligatoire'
      if (message.length < 10) return 'Votre message doit contenir au moins 10 caractères'
      if (message.length > 3000) return 'Votre message est trop long'
      return undefined
  }
}

export const validateContactForm = (values: ContactFormValues): ContactFormErrors =>
  contactFormFieldOrder.reduce<ContactFormErrors>((errors, field) => {
    const error = getContactFieldError(field, values)

    if (error) {
      errors[field] = error
    }

    return errors
  }, {})

export const getSpamCheckResult = (values: ContactFormValues) => {
  if (values.website.trim()) {
    return {
      blocked: true,
      reason: 'honeypot',
    } as const
  }

  const startedAt = Number(values.formStartedAt)

  if (!Number.isFinite(startedAt)) {
    return {
      blocked: true,
      reason: 'invalid_timestamp',
    } as const
  }

  const elapsed = Date.now() - startedAt

  if (elapsed < 1500) {
    return {
      blocked: true,
      reason: 'too_fast',
    } as const
  }

  if (elapsed > 1000 * 60 * 60 * 12) {
    return {
      blocked: true,
      reason: 'expired',
    } as const
  }

  return {
    blocked: false,
    reason: null,
  } as const
}
