import type { GlobalConfig } from 'payload'

import { defaultSignatureRitualPage } from '@/lib/default-content'

export const SignatureRitualPage: GlobalConfig = {
  slug: 'signature-ritual-page',
  label: 'Page soin signature',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.hero.scriptTitle,
        },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: defaultSignatureRitualPage.hero.title,
        },
        {
          name: 'quote',
          type: 'textarea',
          defaultValue: defaultSignatureRitualPage.hero.quote,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.hero.backgroundImageAlt,
        },
      ],
    },
    {
      name: 'practicalInfo',
      type: 'group',
      fields: [
        {
          name: 'durationLabel',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.practicalInfo.durationLabel,
        },
        {
          name: 'duration',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.practicalInfo.duration,
        },
        {
          name: 'priceLabel',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.practicalInfo.priceLabel,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.practicalInfo.price,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.practicalInfo.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.practicalInfo.ctaHref,
        },
      ],
    },
    {
      name: 'overview',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.overview.scriptTitle,
        },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: defaultSignatureRitualPage.overview.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultSignatureRitualPage.overview.paragraphs.map((text) => ({ text })),
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.overview.imageAlt,
        },
      ],
    },
    {
      name: 'profile',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.profile.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultSignatureRitualPage.profile.items.map((text) => ({ text })),
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'treatment',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.treatment.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultSignatureRitualPage.treatment.paragraphs.map((text) => ({ text })),
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'benefits',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.benefits.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultSignatureRitualPage.benefits.items,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'icon',
              type: 'select',
              required: true,
              defaultValue: 'release',
              options: [
                { label: 'Libération', value: 'release' },
                { label: 'Calme', value: 'calm' },
                { label: 'Énergie', value: 'energy' },
                { label: 'Équilibre', value: 'balance' },
                { label: 'Détente', value: 'relax' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'closingCta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.closingCta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultSignatureRitualPage.closingCta.text,
        },
        {
          name: 'primaryLabel',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.closingCta.primaryLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.closingCta.primaryHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.closingCta.secondaryLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          defaultValue: defaultSignatureRitualPage.closingCta.secondaryHref,
        },
      ],
    },
  ],
}
