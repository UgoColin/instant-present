import type { CollectionConfig } from 'payload'

import { defaultPrenatalMassagePage } from '@/lib/default-content'

export const MaternityServicePages: CollectionConfig = {
  slug: 'maternity-service-pages',
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
      defaultValue: defaultPrenatalMassagePage.title,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      defaultValue: defaultPrenatalMassagePage.slug,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultPrenatalMassagePage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.hero.backgroundImageAlt,
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
          defaultValue: defaultPrenatalMassagePage.practicalInfo.duration,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.practicalInfo.price,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.practicalInfo.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.practicalInfo.ctaHref,
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
          defaultValue: defaultPrenatalMassagePage.overview.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.overview.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultPrenatalMassagePage.overview.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultPrenatalMassagePage.overview.imageAlt,
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
          defaultValue: defaultPrenatalMassagePage.audience.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultPrenatalMassagePage.audience.items.map((text) => ({ text })),
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
          defaultValue: defaultPrenatalMassagePage.benefits.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultPrenatalMassagePage.benefits.items,
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
          defaultValue: defaultPrenatalMassagePage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultPrenatalMassagePage.cta.text,
        },
        {
          name: 'primaryLabel',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.cta.primaryLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.cta.primaryHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.cta.secondaryLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          defaultValue: defaultPrenatalMassagePage.cta.secondaryHref,
        },
      ],
    },
  ],
  timestamps: true,
}
