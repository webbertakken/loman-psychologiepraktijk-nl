// import { Document } from '@contentful/rich-text-types'

import { Entry } from 'contentful'

interface PageProps {
  title: string
  subtitle?: string
  isHomePage: boolean
  slug: string
  menuItemTitle: string
  parentPage: any
  shouldBeShownInTheMenu: boolean
  sections: any
}

type PageEntry = Entry<PageProps>
