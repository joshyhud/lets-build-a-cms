import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const pageCategoryType = defineType({
  name: 'pageCategory',
  title: 'Page Category',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Category Title',
      description: 'The title of the category',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
    }),
  ],
})
