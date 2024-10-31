import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [structureTool({structure}), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
