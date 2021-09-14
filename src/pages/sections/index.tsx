import { GetStaticProps } from 'next'
import SectionPreview from '../../components/section/SectionPreview'
import Layout from '../../components/page/Layout'
import { getContentfulClient } from '../../core/contentful'
import { SectionEntry, SectionProps } from '../../types/section'

export const getStaticProps: GetStaticProps = async (_context) => {
  const client = getContentfulClient()
  const { items: sections } = await client.getEntries<SectionProps>({
    content_type: 'section',
  })

  return {
    props: { sections },
    revalidate: 3,
  }
}

interface Props {
  sections: SectionEntry[]
}

export default function Sections({ sections }: Props): JSX.Element {
  return (
    <Layout>
      <div className="list">
        {sections.map((section) => (
          <SectionPreview key={section.sys.id} section={section} />
        ))}
      </div>
    </Layout>
  )
}
