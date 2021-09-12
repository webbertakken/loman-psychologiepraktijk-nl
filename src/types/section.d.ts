import { Document } from '@contentful/rich-text-types'

interface ContentfulResponseProps {
  sys: {
    id: string
  }
}

interface SectionProps {
  fields: {
    title: string
    subtitle: string
    slug: string
    content: Document
  }
}
