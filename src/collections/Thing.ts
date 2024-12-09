import type { CollectionConfig } from 'payload'

export const Thing: CollectionConfig = {
  slug: 'thing',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'count',
      type: 'number',
      label: 'SomeNumb',
      max: 100,
    },
  ],
}

export default Thing
