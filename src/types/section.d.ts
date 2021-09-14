import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'
import { PageEntry } from './page'

interface SectionProps {
  title: string
  subtitle: string
  slug: string
  content: Document
}

type SectionEntry = Entry<SectionProps>

interface ProfileSectionProps {
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

type ProfileSectionEntry = Entry<ProfileSectionProps>

interface TherapyTypeCardProps {
  image: Entry<any>
  title: string
  subtitle: string
  content: Document
  pageToLinkTo?: PageEntry
}

type TherapyTypeCardEntry = Entry<TherapyTypeCardProps>

interface TypesOfTherapyProps {
  title: string
  therapyTypeCards: TherapyTypeCardEntry[]
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

type TypesOfTherapyEntry = Entry<TypesOfTherapyProps>
