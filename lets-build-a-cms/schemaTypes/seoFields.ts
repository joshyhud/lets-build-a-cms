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
      title: 'Meta Title',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
    }),
    defineField({
      name: 'focusKeyword',
      type: 'string',
      title: 'Focus Keyword',
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
      initialValue: (document) => {
        const slug = document?.slug?.current || ''
        return `https://yourdomain.com/${slug}`
      },
    }),
  ],
})
