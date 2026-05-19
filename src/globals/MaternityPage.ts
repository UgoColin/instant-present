import type { GlobalConfig } from 'payload'

import { defaultMaternityPage } from '@/lib/default-content'

export const MaternityPage: GlobalConfig = {
  slug: 'maternity-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultMaternityPage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultMaternityPage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultMaternityPage.hero.backgroundImageAlt,
        },
      ],
    },
    {
      name: 'intro',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultMaternityPage.intro.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultMaternityPage.intro.paragraphs.map((text) => ({ text })),
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
      name: 'services',
      type: 'group',
      fields: [
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultMaternityPage.services.items,
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
              name: 'duration',
              type: 'text',
              required: true,
            },
            {
              name: 'price',
              type: 'text',
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'imageAlt',
              type: 'text',
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
          name: 'title',
          type: 'text',
          defaultValue: defaultMaternityPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultMaternityPage.benefits.items,
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
              defaultValue: 'sparkles',
              options: [
                { label: 'Sparkles', value: 'sparkles' },
                { label: 'Heart', value: 'heart' },
                { label: 'Wind', value: 'wind' },
              ],
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultMaternityPage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultMaternityPage.cta.text,
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: defaultMaternityPage.cta.buttonLabel,
        },
        {
          name: 'buttonHref',
          type: 'text',
          defaultValue: defaultMaternityPage.cta.buttonHref,
        },
      ],
    },
  ],
}
