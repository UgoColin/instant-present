import type { CollectionConfig } from 'payload'

import { defaultAyurvedicMassagePage } from '@/lib/default-content'

export const WellnessServicePages: CollectionConfig = {
  slug: 'wellness-service-pages',
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
      defaultValue: defaultAyurvedicMassagePage.title,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      defaultValue: defaultAyurvedicMassagePage.slug,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultAyurvedicMassagePage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.hero.backgroundImageAlt,
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
          defaultValue: defaultAyurvedicMassagePage.practicalInfo.duration,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.practicalInfo.price,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.practicalInfo.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.practicalInfo.ctaHref,
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
          defaultValue: defaultAyurvedicMassagePage.overview.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.overview.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultAyurvedicMassagePage.overview.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultAyurvedicMassagePage.overview.imageAlt,
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
          defaultValue: defaultAyurvedicMassagePage.audience.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultAyurvedicMassagePage.audience.items.map((text) => ({ text })),
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
          defaultValue: defaultAyurvedicMassagePage.benefits.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultAyurvedicMassagePage.benefits.items,
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
          defaultValue: defaultAyurvedicMassagePage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultAyurvedicMassagePage.cta.text,
        },
        {
          name: 'primaryLabel',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.cta.primaryLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.cta.primaryHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.cta.secondaryLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          defaultValue: defaultAyurvedicMassagePage.cta.secondaryHref,
        },
      ],
    },
  ],
  timestamps: true,
}
