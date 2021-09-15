import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'
import { PageEntry } from './page'

interface BasicSectionProps {
  title: string
  subtitle: string
  slug: string
  content: Document
}

type BasicSectionEntry = Entry<BasicSectionProps>

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
  slug: string
  subtitle: string
  content: Document
  pageToLinkTo?: PageEntry
}

type TherapyTypeCardEntry = Entry<TherapyTypeCardProps>

interface TypesOfTherapyProps {
  title: string
  slug: string
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
