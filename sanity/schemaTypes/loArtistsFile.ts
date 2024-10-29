import {defineField, defineType} from 'sanity'

export const loArtistsFile = defineType({
    name: 'loartistsfile',
    title: 'loArtistsFile',
    type: 'document',
    fields: [
      defineField({
        name: 'objectId',
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
        name: 'file',
        type: 'document',
        fields: [
            {
              name: 'type',
              type: 'string',
            },
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'url',
              type: 'string',
            }
          ]
          
      }),
      defineField({
        name: 'version',
        type: 'string',
      }),
    ],
  })
