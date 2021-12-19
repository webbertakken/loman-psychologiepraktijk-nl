// import { Document } from '@contentful/rich-text-types'

import { Entry } from 'contentful'

interface PageProps {
  title: string
  slug: string
  menuItemTitle: string
  subtitle: string
  icon: string
  isHomePage: boolean
  parentPage: any
  shouldBeShownInTheMenu: boolean
  sections: any
}

type PageEntry = Entry<PageProps>
