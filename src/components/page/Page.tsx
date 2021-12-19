import Layout from './Layout'
import LoadingPage from '../loading/LoadingPage'
import { PageEntry } from '../../types/page'
import Section from '../section/Section'
import { MenuProps } from '../../types/menu'
import { BannerNotificationEntry } from '../../types/banner'
import { AppContext } from './AppContext'

interface Props {
  page: PageEntry
  headerMenu: MenuProps
  footerMenu: MenuProps
  banner?: BannerNotificationEntry
}

const Page = ({ page, headerMenu, footerMenu, banner }: Props): JSX.Element => {
  if (!page) return <LoadingPage />

  const { sections } = page.fields

  return (
    <AppContext.Provider value={{ headerMenu, footerMenu }}>
      <Layout banner={banner}>
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
    </AppContext.Provider>
  )
}

export default Page
