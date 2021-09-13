import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'

interface SectionProps {
  title: string
  subtitle: string
  slug: string
  content: Document
}

type SectionEntry = Entry<SectionProps>
