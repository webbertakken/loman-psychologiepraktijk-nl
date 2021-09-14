import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'

interface SectionProps {
  title: string
  subtitle: string
  slug: string
  content: Document
}

type SectionEntry = Entry<SectionProps>

interface ProfileCardProps {
  title: string
  slug: string
  photo: Entry<any>
  vocation: string
  location: string
  getInTouchText: string
  getInTouchLink: string
  shortDescription: Document
  instagramHandle: string
  facebookHandle: string
  twitterHandle: string
  youtubeHandle: string
  linkedInHandle: string
}

type ProfileCardEntry = Entry<ProfileCardProps>
