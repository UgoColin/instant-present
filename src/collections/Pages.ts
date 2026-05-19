import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
        },
        {
          name: 'headline',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'primaryActionLabel',
          type: 'text',
        },
        {
          name: 'primaryActionHref',
          type: 'text',
        },
        {
          name: 'secondaryActionLabel',
          type: 'text',
        },
        {
          name: 'secondaryActionHref',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
}
