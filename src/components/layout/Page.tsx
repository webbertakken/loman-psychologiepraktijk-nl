import Layout from './Layout'
import LoadingPage from '../loading/LoadingPage'
import { PageEntry } from '../../types/page'

interface Props {
  page: PageEntry
  menu: MenuProps
}

const Page = ({ page, menu }: Props): JSX.Element => {
  return (
    <Layout menu={menu}>
      {page ? (
        <pre>
          <code>{JSON.stringify(page.fields, null, 2)}</code>
        </pre>
      ) : (
        <LoadingPage />
      )}
    </Layout>
  )
}

export default Page
