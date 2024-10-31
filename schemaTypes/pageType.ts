import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'page_title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      // Add in a generaste button on slug which will create slug based on page title
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
