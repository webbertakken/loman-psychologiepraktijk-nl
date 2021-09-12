import { GetStaticProps } from 'next'
import SectionPreview from '../../components/SectionPreview'
import Layout from '../../components/Layout'
import { getContentfulClient } from '../../core/contentful'
import { ContentfulResponseProps, SectionProps } from '../../types/section'

export const getStaticProps: GetStaticProps = async (_context) => {
  const client = getContentfulClient()
  const { items: sections } = await client.getEntries({
    content_type: 'section',
  })

  return {
    props: { sections },
    revalidate: 3,
  }
}

interface Props {
  sections: SectionProps[] | ContentfulResponseProps[]
}

export default function Sections({ sections }: Props): JSX.Element {
  return (
    <Layout>
      <div className="list">
        {sections.map((section) => (
          <SectionPreview key={section.sys.id} fields={section.fields} />
        ))}
      </div>
    </Layout>
  )
}
