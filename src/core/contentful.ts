import { ContentfulClientApi, createClient } from 'contentful'

export const getContentfulClient = (): ContentfulClientApi => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  return client
}
