import type { GlobalConfig } from 'payload'

import { defaultWellnessPage } from '@/lib/default-content'

export const WellnessPage: GlobalConfig = {
  slug: 'wellness-page',
  label: 'Page soins bien-être',
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
          defaultValue: defaultWellnessPage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultWellnessPage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultWellnessPage.hero.backgroundImageAlt,
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
          defaultValue: defaultWellnessPage.intro.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultWellnessPage.intro.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultWellnessPage.services.items,
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
          defaultValue: defaultWellnessPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultWellnessPage.benefits.items,
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
                {
                  label: 'Sparkles',
                  value: 'sparkles',
                },
                {
                  label: 'Heart',
                  value: 'heart',
                },
                {
                  label: 'Wind',
                  value: 'wind',
                },
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
          defaultValue: defaultWellnessPage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultWellnessPage.cta.text,
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: defaultWellnessPage.cta.buttonLabel,
        },
        {
          name: 'buttonHref',
          type: 'text',
          defaultValue: defaultWellnessPage.cta.buttonHref,
        },
      ],
    },
  ],
}
