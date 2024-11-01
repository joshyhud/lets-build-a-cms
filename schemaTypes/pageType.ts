import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'
import {media} from 'sanity-plugin-media'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'pagemeta',
      title: 'Page Settings',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'page_title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().error(`A Title is Required`),
    }),
    defineField({
      name: 'media',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'Content',
      type: 'array',
      group: 'content',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'page_excerpt',
      type: 'text',
      group: 'content',
      validation: (rule) => rule.max(200).error(`max 200 characters`),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'pagemeta',
      // Add in a generate button on slug which will create slug based on page title
      options: {source: 'page_title'},
      // Make Slug a required field
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      group: 'pagemeta',
      to: [{type: 'users'}],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      group: 'pagemeta',
      of: [{type: 'reference', to: [{type: 'pageCategory'}]}],
    }),
    defineField({
      name: 'seo',
      type: 'seoFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'page_title',
      media: 'media',
      subtitle: 'page_excerpt',
    },
  },
})
