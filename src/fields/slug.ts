import type { FieldHook, TextField } from 'payload'

const format = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, value }) => {
    if (typeof value === 'string' && value.length > 0) {
      return format(value)
    }

    const fallbackValue = data?.[fallback]

    if (typeof fallbackValue === 'string' && fallbackValue.length > 0) {
      return format(fallbackValue)
    }

    return value
  }

export const slugField = (fallback = 'title'): TextField => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique: true,
  required: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatSlug(fallback)],
  },
})
