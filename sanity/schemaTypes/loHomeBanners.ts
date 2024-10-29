import {defineField, defineType} from 'sanity'

export const loHomeBanners = defineType({
  name: 'lohomebanners',
  title: 'loHomeBanners',
  type: 'document',
  fields: [
    defineField({
      name: 'objectId',
      type: 'string',
    }),
    defineField({
      name: 'startDateString',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'endDateString',
      type: 'string',
    }),
    defineField({
      name: 'categoryName',
      type: 'string',
    }),
    defineField({
      name: 'shopButtonTitle',
      type: 'string',
    }),
    defineField({
      name: 'header_1',
      type: 'string',
    }),
    defineField({
      name: 'header_2',
      type: 'string',
    }),
    defineField({
      name: 'header_3',
      type: 'string',
    }),
    defineField({
      name: 'imageURL',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'string',
    }),
    defineField({
      name: 'deeplinkURL',
      type: 'string',
    }),
  ],
})