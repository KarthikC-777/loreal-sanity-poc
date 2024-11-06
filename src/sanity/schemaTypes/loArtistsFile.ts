import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const loArtistsFile = defineType({
  name: 'loArtistsFile',
  title: 'Artists File',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'objectId',
      type: 'string',
      validation: (Rule) => Rule.required().error('objectID is required'), 
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
      name: 'file',
      type: 'file',
      options: {
        accept: '.zip', 
      },
      validation: (Rule) => Rule.required().error('File is required'), 
    }),
    defineField({
      name: 'version',
      type: 'number',
      validation: (Rule) => Rule.required().error('Version is required'), 
    }),
  ],
  preview: {
    select: {
      title: 'objectId', 
      version: 'version',
    },
    prepare(selection) {
      const { title, version } = selection;
      return {
        title: title || 'No Title', 
        subtitle: `Version: ${version || 'N/A'}`, 
      };
    },
  },
});
