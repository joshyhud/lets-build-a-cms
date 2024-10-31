import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const seoFields = defineType({
  name: 'seoFields',
  title: 'SEO Fields',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
    }),
    defineField({
      name: 'openGraphTitle',
      type: 'string',
      options: {source: 'metaTitle'},
    }),
    defineField({
      name: 'openGraphDescription',
      type: 'text',
      options: {source: 'metaDescription'},
    }),
    defineField({
      name: 'openGraphImage',
      type: 'image',
    }),
    defineField({
      name: 'twitterTitle',
      type: 'string',
      options: {source: 'metaTitle'},
    }),
    defineField({
      name: 'twitterDescription',
      type: 'text',
      options: {source: 'metaDescription'},
    }),
    defineField({
      name: 'twitterImage',
      type: 'image',
      options: {source: 'openGraphImage'},
    }),
  ],
})
