import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/page/Layout'
import { getContentfulClient } from '../../core/contentful'
import { Entry } from 'contentful'
import Section from '../../components/section/Section'
import { BasicSectionEntry } from '../../types/section'
import LoadingPage from '../../components/loading/LoadingPage'

const client = getContentfulClient()

export const getStaticPaths: GetStaticPaths = async () => {
  const { items: sections } = await client.getEntries({
    content_type: 'section',
  })

  const paths = sections.map((item: Entry<any>) => {
    const { slug } = item.fields
    return { params: { slug } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const { items } = await client.getEntries({
    content_type: 'section',
    'fields.slug': slug,
  })

  const section = items[0]
  return section
    ? { props: { section }, revalidate: 3 }
    : { redirect: { destination: '/', permanent: false } }
}

interface Props {
  section: BasicSectionEntry
}

export default function Sections({ section }: Props): JSX.Element {
  return (
    <Layout menu={[]}>
      {section ? <Section section={section} /> : <LoadingPage />}
    </Layout>
  )
}
