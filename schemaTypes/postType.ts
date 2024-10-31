import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'post_title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      // Add in a generate button on slug which will create slug based on page title
      options: {source: 'name'},
      // Make Slug a required field
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
