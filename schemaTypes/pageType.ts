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
      // Add in a generate button on slug which will create slug based on page title
      options: {source: 'page_title'},
      // Make Slug a required field
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'users'}],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'pageCategory'}]}],
    }),
    defineField({
      name: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'seo',
      type: 'seoFields',
    }),
  ],
})
