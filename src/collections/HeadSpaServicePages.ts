import type { CollectionConfig } from 'payload'

import { defaultHeadSpaClassicPage } from '@/lib/default-content'

export const HeadSpaServicePages: CollectionConfig = {
  slug: 'head-spa-service-pages',
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
      defaultValue: defaultHeadSpaClassicPage.title,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      defaultValue: defaultHeadSpaClassicPage.slug,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.hero.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultHeadSpaClassicPage.hero.subtitle,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.hero.backgroundImageAlt,
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
          defaultValue: defaultHeadSpaClassicPage.practicalInfo.duration,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.practicalInfo.price,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.practicalInfo.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.practicalInfo.ctaHref,
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
          defaultValue: defaultHeadSpaClassicPage.overview.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.overview.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultHeadSpaClassicPage.overview.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultHeadSpaClassicPage.overview.imageAlt,
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
          defaultValue: defaultHeadSpaClassicPage.audience.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultHeadSpaClassicPage.audience.items.map((text) => ({ text })),
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
          defaultValue: defaultHeadSpaClassicPage.benefits.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.benefits.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultHeadSpaClassicPage.benefits.items,
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
          defaultValue: defaultHeadSpaClassicPage.cta.title,
        },
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultHeadSpaClassicPage.cta.text,
        },
        {
          name: 'primaryLabel',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.cta.primaryLabel,
        },
        {
          name: 'primaryHref',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.cta.primaryHref,
        },
        {
          name: 'secondaryLabel',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.cta.secondaryLabel,
        },
        {
          name: 'secondaryHref',
          type: 'text',
          defaultValue: defaultHeadSpaClassicPage.cta.secondaryHref,
        },
      ],
    },
  ],
  timestamps: true,
}
