import {StructureResolver} from 'sanity/structure'
import {DocumentIcon, DocumentTextIcon, UserIcon, ImageIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Menu')
    .items([
      S.documentTypeListItem('post').title('Posts').icon(DocumentIcon),
      S.documentTypeListItem('page').title('Pages').icon(DocumentTextIcon),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([S.documentTypeListItem('users').title('Users').icon(UserIcon)]),
        ),
    ])
