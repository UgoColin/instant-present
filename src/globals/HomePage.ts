import type { GlobalConfig } from 'payload'

import { defaultHomePage } from '@/lib/default-content'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: "Page d'accueil",
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
          defaultValue: defaultHomePage.hero.scriptTitle,
        },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: defaultHomePage.hero.title,
        },
        {
          name: 'accentTitle',
          type: 'text',
          defaultValue: defaultHomePage.hero.accentTitle,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultHomePage.hero.subtitle,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultHomePage.hero.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultHomePage.hero.ctaHref,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultHomePage.hero.backgroundImageAlt,
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultHomePage.about.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHomePage.about.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultHomePage.about.paragraphs.map((text) => ({ text })),
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
          defaultValue: defaultHomePage.about.imageAlt,
        },
      ],
    },
    {
      name: 'approach',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHomePage.approach.title,
        },
        {
          name: 'introText',
          type: 'textarea',
          defaultValue: defaultHomePage.approach.introText,
        },
        {
          name: 'highlightedQuote',
          type: 'textarea',
          defaultValue: defaultHomePage.approach.highlightedQuote,
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultHomePage.services.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHomePage.services.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultHomePage.services.items,
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
        {
          name: 'itemCtaLabel',
          type: 'text',
          defaultValue: defaultHomePage.services.itemCtaLabel,
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: defaultHomePage.services.ctaLabel,
        },
        {
          name: 'ctaHref',
          type: 'text',
          defaultValue: defaultHomePage.services.ctaHref,
        },
      ],
    },
    {
      name: 'signatureFeature',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.title,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: defaultHomePage.signatureFeature.subtitle,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: defaultHomePage.signatureFeature.description,
        },
        {
          name: 'duration',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.duration,
        },
        {
          name: 'price',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.price,
        },
        {
          name: 'primaryCtaLabel',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.primaryCtaLabel,
        },
        {
          name: 'primaryCtaHref',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.primaryCtaHref,
        },
        {
          name: 'secondaryCtaLabel',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.secondaryCtaLabel,
        },
        {
          name: 'secondaryCtaHref',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.secondaryCtaHref,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue: defaultHomePage.signatureFeature.imageAlt,
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
          defaultValue: defaultHomePage.audience.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultHomePage.audience.paragraphs.map((text) => ({ text })),
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'highlightedText',
          type: 'textarea',
          defaultValue: defaultHomePage.audience.highlightedText,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imageAlt',
          type: 'text',
          defaultValue: defaultHomePage.audience.imageAlt,
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultHomePage.testimonials.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultHomePage.testimonials.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultHomePage.testimonials.items,
          fields: [
            {
              name: 'quote',
              type: 'textarea',
              required: true,
            },
            {
              name: 'author',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'contactBanner',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          defaultValue: defaultHomePage.contactBanner.text,
        },
      ],
    },
  ],
}
