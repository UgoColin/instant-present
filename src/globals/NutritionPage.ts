import type { GlobalConfig } from 'payload'

import { defaultNutritionPage } from '@/lib/default-content'

export const NutritionPage: GlobalConfig = {
  slug: 'nutrition-page',
  label: 'Page nutrition',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: defaultNutritionPage.title,
    },
    {
      name: 'slug',
      type: 'text',
      defaultValue: defaultNutritionPage.slug,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultNutritionPage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultNutritionPage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          index: false,
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultNutritionPage.hero.backgroundImageAlt,
        },
      ],
    },
    {
      name: 'practicalInfo',
      type: 'group',
      fields: [
        {
          name: 'duration',
          type: 'text',
          defaultValue: defaultNutritionPage.practicalInfo.duration,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultNutritionPage.practicalInfo.price,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultNutritionPage.practicalInfo.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultNutritionPage.practicalInfo.ctaHref,
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
          defaultValue: defaultNutritionPage.overview.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultNutritionPage.overview.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultNutritionPage.overview.paragraphs.map((text) => ({ text })),
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
          index: false,
          relationTo: 'media',
        },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue: defaultNutritionPage.overview.imageAlt,
        },
      ],
    },
    {
      name: 'audience',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultNutritionPage.audience.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultNutritionPage.audience.items.map((text) => ({ text })),
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
          defaultValue: defaultNutritionPage.benefits.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultNutritionPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultNutritionPage.benefits.items,
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
              defaultValue: 'droplets',
              options: [
                { label: 'Droplets', value: 'droplets' },
                { label: 'Wind', value: 'wind' },
                { label: 'Leaf', value: 'leaf' },
              ],
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
          defaultValue: defaultNutritionPage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultNutritionPage.cta.text,
        },
        {
          name: 'primaryLabel',
          type: 'text',
          defaultValue: defaultNutritionPage.cta.primaryLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          defaultValue: defaultNutritionPage.cta.primaryHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          defaultValue: defaultNutritionPage.cta.secondaryLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          defaultValue: defaultNutritionPage.cta.secondaryHref,
        },
      ],
    },
  ],
}
