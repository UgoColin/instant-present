import type { GlobalConfig } from 'payload'

import { defaultSiteSettings } from '@/lib/default-content'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: defaultSiteSettings.siteName,
    },
    {
      name: 'shortSiteName',
      type: 'text',
      required: true,
      defaultValue: defaultSiteSettings.shortSiteName,
    },
    {
      name: 'tagline',
      type: 'textarea',
      defaultValue: defaultSiteSettings.tagline,
    },
    {
      name: 'navigation',
      type: 'array',
      defaultValue: defaultSiteSettings.navigation,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'submenu',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'footerDescription',
      type: 'textarea',
      defaultValue: defaultSiteSettings.footerDescription,
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          defaultValue: defaultSiteSettings.contact.address,
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: defaultSiteSettings.contact.phone,
        },
        {
          name: 'email',
          type: 'email',
          defaultValue: defaultSiteSettings.contact.email,
        },
      ],
    },
    {
      name: 'socials',
      type: 'group',
      fields: [
        {
          name: 'instagramUrl',
          type: 'text',
          defaultValue: defaultSiteSettings.socials.instagramUrl,
        },
        {
          name: 'facebookUrl',
          type: 'text',
          defaultValue: defaultSiteSettings.socials.facebookUrl,
        },
      ],
    },
    {
      name: 'bookingCta',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: defaultSiteSettings.bookingCta.label,
        },
        {
          name: 'href',
          type: 'text',
          defaultValue: defaultSiteSettings.bookingCta.href,
        },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      defaultValue: defaultSiteSettings.legalLinks,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
