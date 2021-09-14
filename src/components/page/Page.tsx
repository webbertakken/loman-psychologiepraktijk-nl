import Layout from './Layout'
import LoadingPage from '../loading/LoadingPage'
import { PageEntry } from '../../types/page'
import Section from '../section/Section'

interface Props {
  page: PageEntry
  menu: MenuProps
}

const Page = ({ page, menu }: Props): JSX.Element => {
  if (!page) return <LoadingPage />

  const { sections } = page.fields

  return (
    <Layout menu={menu}>
      {page ? (
        <>
          {sections?.map((section) => {
            return <Section key={section.sys.id} section={section} />
          })}
        </>
      ) : (
        <LoadingPage />
      )}
    </Layout>
  )
}

export default Page
