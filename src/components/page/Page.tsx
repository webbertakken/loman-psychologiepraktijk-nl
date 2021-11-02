import Layout from './Layout'
import LoadingPage from '../loading/LoadingPage'
import { PageEntry } from '../../types/page'
import Section from '../section/Section'
import { MenuProps } from '../../types/menu'
import { BannerNotificationEntry } from '../../types/banner'

interface Props {
  page: PageEntry
  menu: MenuProps
  banner?: BannerNotificationEntry
}

const Page = ({ page, menu, banner }: Props): JSX.Element => {
  if (!page) return <LoadingPage />

  const { sections } = page.fields

  return (
    <Layout menu={menu} banner={banner}>
      {page ? (
        <>
          {sections?.map((section, index) => {
            return (
              <Section key={section.sys.id} section={section} index={index} />
            )
          })}
        </>
      ) : (
        <LoadingPage />
      )}
    </Layout>
  )
}

export default Page
