import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {media} from 'sanity-plugin-media'
import {CustomLogo} from './components/CustomLogo'

const SANITY_STUDIO_PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id'
const SANITY_STUDIO_DATASET = process.env.SANITY_STUDIO_DATASET || 'production'
const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3333'

export default defineConfig({
  name: 'default',
  title: 'Lets Build a CMS',
  icon: CustomLogo,
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  plugins: [
    structureTool({structure}),
    visionTool(),
    media(),
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
