import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {media} from 'sanity-plugin-media'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'pageMeta',
      title: 'Page Settings',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'post_title',
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
      name: 'post_excerpt',
      type: 'text',
      group: 'content',
      validation: (rule) => rule.max(200).error(`max 200 characters`),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      group: 'pageMeta',
      // Add in a generate button on slug which will create slug based on page title
      options: {source: 'post_title'},
      // Make Slug a required field
      validation: (rule) => rule.required().error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      group: 'pageMeta',
      to: [{type: 'users'}],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      group: 'pageMeta',
      of: [{type: 'reference', to: [{type: 'postCategory'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'post_title',
      media: 'media',
      subtitle: 'post_excerpt',
    },
  },
})
