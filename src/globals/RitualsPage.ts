import type { GlobalConfig } from 'payload'

import { defaultRitualsPage } from '@/lib/default-content'

export const RitualsPage: GlobalConfig = {
  slug: 'rituals-page',
  label: 'Page rituels spécifiques',
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
          defaultValue: defaultRitualsPage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultRitualsPage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultRitualsPage.hero.backgroundImageAlt,
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
          defaultValue: defaultRitualsPage.intro.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultRitualsPage.intro.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultRitualsPage.services.items,
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
          defaultValue: defaultRitualsPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultRitualsPage.benefits.items,
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
          defaultValue: defaultRitualsPage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultRitualsPage.cta.text,
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: defaultRitualsPage.cta.buttonLabel,
        },
        {
          name: 'buttonHref',
          type: 'text',
          defaultValue: defaultRitualsPage.cta.buttonHref,
        },
      ],
    },
  ],
}
