import { GetStaticPaths, GetStaticProps } from 'next'
import Page from '../components/page/Page'
import { getContentfulClient } from '../core/contentful'
import { PageEntry, PageProps } from '../types/page'

const client = getContentfulClient()

const getPages = async (): Promise<PageEntry[]> => {
  const { items: pages } = await client.getEntries<PageProps>({
    content_type: 'page',
    include: 3,
  })

  return pages
}

const getActivePath = (slug: null | string | string[]) => {
  if (slug === null) return '/'
  return typeof slug === 'string' ? `/${slug}` : `/${slug.join('/')}`
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPages()).map((page) => {
    const { slug, isHomePage } = page.fields
    return { params: { slug: isHomePage ? null : [slug] } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug?.[0] || null

  const pages = await getPages()
  const activePath = getActivePath(slug)

  const page = slug
    ? pages.find((page) => page.fields.slug === slug)
    : pages.find((page) => page.fields.isHomePage)

  const menu = pages
    .sort((a, b) => (b.fields.isHomePage ? 1 : -1))
    .filter(({ fields }) => fields.shouldBeShownInTheMenu)
    .filter(({ fields }) => !fields.parentPage)
    .map((page) => {
      const { slug: rootPageSlug, menuItemTitle: title } = page.fields
      const path = page.fields.isHomePage ? '/' : `/${rootPageSlug}`
      const isActive = path === activePath

      // Pages can have `parentPage`, which is a hydrated reference to another page.
      const subPages = pages
        .filter(({ fields }) => fields.parentPage?.sys.id === page.sys.id)
        .filter(({ fields }) => fields.shouldBeShownInTheMenu)
        .map((subPage) => {
          const { menuItemTitle: title, slug: subPageSlug } = subPage.fields
          const subPath = `/${rootPageSlug}/${subPageSlug}`
          const isActive = subPath === activePath

          return { title, path: subPath, isActive }
        })

      return { title, path, isActive, subPages }
    })

  return page
    ? { props: { page, menu }, revalidate: 3 }
    : { redirect: { destination: '/', permanent: false } }
}

export default Page
