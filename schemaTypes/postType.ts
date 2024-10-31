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
      options: {source: 'post_title'},
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
      of: [{type: 'reference', to: [{type: 'postCategory'}]}],
    }),
    defineField({
      name: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})
