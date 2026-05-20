import type { GlobalConfig } from 'payload'

import { defaultHeadSpaPage } from '@/lib/default-content'

export const HeadSpaPage: GlobalConfig = {
  slug: 'head-spa-page',
  label: 'Page Head Spa',
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
          defaultValue: defaultHeadSpaPage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultHeadSpaPage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultHeadSpaPage.hero.backgroundImageAlt,
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
          defaultValue: defaultHeadSpaPage.intro.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultHeadSpaPage.intro.paragraphs.map((text) => ({ text })),
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
          name: 'itemCtaLabel',
          type: 'text',
          defaultValue: defaultHeadSpaPage.services.itemCtaLabel,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultHeadSpaPage.services.items,
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
          defaultValue: defaultHeadSpaPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultHeadSpaPage.benefits.items,
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
          defaultValue: defaultHeadSpaPage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultHeadSpaPage.cta.text,
        },
        {
          name: 'buttonLabel',
          type: 'text',
          defaultValue: defaultHeadSpaPage.cta.buttonLabel,
        },
        {
          name: 'buttonHref',
          type: 'text',
          defaultValue: defaultHeadSpaPage.cta.buttonHref,
        },
      ],
    },
  ],
}
