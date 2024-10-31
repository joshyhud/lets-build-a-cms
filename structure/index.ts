import {StructureResolver} from 'sanity/structure'
import {DocumentIcon, DocumentTextIcon, UserIcon, CogIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Menu')
    .items([
      // Content section
      S.listItem()
        .title('Content')
        .icon(DocumentIcon)
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('post').title('Posts').icon(DocumentIcon),
              S.documentTypeListItem('page').title('Pages').icon(DocumentTextIcon),
            ]),
        ),

      // Settings section
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Settings')
            .items([S.documentTypeListItem('users').title('Users').icon(UserIcon)]),
        ),
    ])
