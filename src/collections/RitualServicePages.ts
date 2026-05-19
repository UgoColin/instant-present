import type { CollectionConfig } from 'payload'

import { defaultEmotionalReleasePage } from '@/lib/default-content'

export const RitualServicePages: CollectionConfig = {
  slug: 'ritual-service-pages',
  labels: {
    singular: 'Page de rituel spécifique',
    plural: 'Pages de rituels spécifiques',
  },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: defaultEmotionalReleasePage.title,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      defaultValue: defaultEmotionalReleasePage.slug,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultEmotionalReleasePage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.hero.backgroundImageAlt,
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
          defaultValue: defaultEmotionalReleasePage.practicalInfo.duration,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.practicalInfo.price,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.practicalInfo.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.practicalInfo.ctaHref,
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
          defaultValue: defaultEmotionalReleasePage.overview.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.overview.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultEmotionalReleasePage.overview.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultEmotionalReleasePage.overview.imageAlt,
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
          defaultValue: defaultEmotionalReleasePage.audience.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultEmotionalReleasePage.audience.items.map((text) => ({ text })),
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
          defaultValue: defaultEmotionalReleasePage.benefits.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultEmotionalReleasePage.benefits.items,
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
          defaultValue: defaultEmotionalReleasePage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultEmotionalReleasePage.cta.text,
        },
        {
          name: 'primaryLabel',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.cta.primaryLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.cta.primaryHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.cta.secondaryLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          defaultValue: defaultEmotionalReleasePage.cta.secondaryHref,
        },
      ],
    },
  ],
  timestamps: true,
}
