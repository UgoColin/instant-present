import type { GlobalConfig } from 'payload'

import { defaultBookingPage } from '@/lib/default-content'

export const BookingPage: GlobalConfig = {
  slug: 'booking-page',
  label: 'Page contact et réservation',
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
          defaultValue: defaultBookingPage.hero.title,
        },
        {
          name: 'quote',
          type: 'text',
          defaultValue: defaultBookingPage.hero.quote,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'backgroundImageAlt',
          type: 'text',
          defaultValue: defaultBookingPage.hero.backgroundImageAlt,
        },
      ],
    },
    {
      name: 'intro',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          defaultValue: defaultBookingPage.intro.title,
        },
        {
          name: 'paragraphs',
          type: 'array',
          defaultValue: defaultBookingPage.intro.paragraphs.map((text) => ({ text })),
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
      name: 'reservation',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultBookingPage.reservation.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultBookingPage.reservation.title,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: defaultBookingPage.reservation.description,
        },
        {
          name: 'facebookLabel',
          type: 'text',
          defaultValue: defaultBookingPage.reservation.facebookLabel,
        },
        {
          name: 'facebookUrl',
          type: 'text',
          defaultValue: defaultBookingPage.reservation.facebookUrl,
        },
      ],
    },
    {
      name: 'contactMethods',
      type: 'group',
      fields: [
        {
          name: 'phoneTitle',
          type: 'text',
          defaultValue: defaultBookingPage.contactMethods.phoneTitle,
        },
        {
          name: 'emailTitle',
          type: 'text',
          defaultValue: defaultBookingPage.contactMethods.emailTitle,
        },
        {
          name: 'facebookTitle',
          type: 'text',
          defaultValue: defaultBookingPage.contactMethods.facebookTitle,
        },
      ],
    },
    {
      name: 'form',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultBookingPage.form.title,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: defaultBookingPage.form.description,
        },
        {
          name: 'nameLabel',
          type: 'text',
          defaultValue: defaultBookingPage.form.nameLabel,
        },
        {
          name: 'phoneLabel',
          type: 'text',
          defaultValue: defaultBookingPage.form.phoneLabel,
        },
        {
          name: 'emailLabel',
          type: 'text',
          defaultValue: defaultBookingPage.form.emailLabel,
        },
        {
          name: 'serviceLabel',
          type: 'text',
          defaultValue: defaultBookingPage.form.serviceLabel,
        },
        {
          name: 'servicePlaceholder',
          type: 'text',
          defaultValue: defaultBookingPage.form.servicePlaceholder,
        },
        {
          name: 'serviceOptions',
          type: 'array',
          defaultValue: defaultBookingPage.form.serviceOptions.map((value) => ({ value })),
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'messageLabel',
          type: 'text',
          defaultValue: defaultBookingPage.form.messageLabel,
        },
        {
          name: 'messagePlaceholder',
          type: 'textarea',
          defaultValue: defaultBookingPage.form.messagePlaceholder,
        },
        {
          name: 'submitLabel',
          type: 'text',
          defaultValue: defaultBookingPage.form.submitLabel,
        },
      ],
    },
    {
      name: 'giftCard',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.title,
        },
        {
          name: 'introParagraph',
          type: 'textarea',
          defaultValue: defaultBookingPage.giftCard.introParagraph,
        },
        {
          name: 'detailsParagraph',
          type: 'textarea',
          defaultValue: defaultBookingPage.giftCard.detailsParagraph,
        },
        {
          name: 'orderTitle',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.orderTitle,
        },
        {
          name: 'emailLabel',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.emailLabel,
        },
        {
          name: 'facebookLabel',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.facebookLabel,
        },
        {
          name: 'formLabel',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.formLabel,
        },
        {
          name: 'imageFrontAlt',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.imageFrontAlt,
        },
        {
          name: 'imageBackAlt',
          type: 'text',
          defaultValue: defaultBookingPage.giftCard.imageBackAlt,
        },
      ],
    },
    {
      name: 'importantInfo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultBookingPage.importantInfo.title,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultBookingPage.importantInfo.items.map((text) => ({ text })),
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
      name: 'access',
      type: 'group',
      fields: [
        {
          name: 'scriptTitle',
          type: 'text',
          defaultValue: defaultBookingPage.access.scriptTitle,
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultBookingPage.access.title,
        },
        {
          name: 'location',
          type: 'text',
          defaultValue: defaultBookingPage.access.location,
        },
        {
          name: 'note',
          type: 'textarea',
          defaultValue: defaultBookingPage.access.note,
        },
        {
          name: 'mapImageUrl',
          type: 'text',
          defaultValue: defaultBookingPage.access.mapImageUrl,
        },
        {
          name: 'mapImageAlt',
          type: 'text',
          defaultValue: defaultBookingPage.access.mapImageAlt,
        },
        {
          name: 'mapLabel',
          type: 'text',
          defaultValue: defaultBookingPage.access.mapLabel,
        },
      ],
    },
    {
      name: 'faq',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: defaultBookingPage.faq.title,
        },
        {
          name: 'introText',
          type: 'textarea',
          defaultValue: defaultBookingPage.faq.introText,
        },
        {
          name: 'items',
          type: 'array',
          defaultValue: defaultBookingPage.faq.items,
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
              defaultValue: 'clock',
              options: [
                { label: 'Clock', value: 'clock' },
                { label: 'Credit Card', value: 'credit-card' },
                { label: 'Alert Circle', value: 'alert-circle' },
                { label: 'Shield Check', value: 'shield-check' },
                { label: 'Heart Handshake', value: 'heart-handshake' },
              ],
            },
          ],
        },
        {
          name: 'acceptanceText',
          type: 'text',
          defaultValue: defaultBookingPage.faq.acceptanceText,
        },
      ],
    },
  ],
}
