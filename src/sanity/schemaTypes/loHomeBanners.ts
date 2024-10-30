import { HomeIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const loHomeBanners = defineType({
  name: 'loHomeBanners',
  title: 'Home Banners',
  type: 'document',
  icon: HomeIcon,
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
  preview: {
    select: {
      title: 'header_1', // or another field you want as the main title
      categoryName: 'categoryName',
      objectId: 'objectId',
    },
    prepare(selection) {
      const { title, categoryName, objectId } = selection;
      return {
        title: title || 'No Title', // Fallback title if header_1 is not available
        subtitle: `Category: ${categoryName || 'N/A'}, ID: ${objectId || 'N/A'}`, // Display category and objectId in the subtitle
      };
    },
  },
});
