import { GetStaticProps, GetStaticPaths } from 'next'
import { getContentfulClient } from '../core/contentful'
import Page from '../components/layout/Page'
import { PageEntry, PageProps } from '../types/page'

const client = getContentfulClient()

const getPages = async (): Promise<PageEntry[]> => {
  const { items: pages } = await client.getEntries<PageProps>({
    content_type: 'page',
  })

  return pages
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPages()

  const paths = pages.map((page) => {
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

  let currentPath = ''
  if (slug) {
    currentPath =
      typeof params.slug === 'string' ? params.slug : params.slug.join('/')
  }

  const page = slug
    ? pages.find((page) => page.fields.slug === slug)
    : pages.find((page) => page.fields.isHomePage)

  const menu = pages
    .sort((a, b) => (b.fields.isHomePage ? 1 : -1))
    .filter(({ fields }) => fields.shouldBeShownInTheMenu)
    .filter(({ fields }) => !fields.parentPage)
    .map((page) => {
      const { slug: rootPageSlug, menuItemTitle: title } = page.fields
      const path = page.fields.isHomePage ? '' : rootPageSlug

      const subPages = pages
        .filter(({ fields }) => fields.parentPage?.sys.id === page.sys.id)
        .filter(({ fields }) => fields.shouldBeShownInTheMenu)
        .map((subPage) => {
          const { menuItemTitle: title, slug: subPageSlug } = subPage.fields
          const subPagePath = `${slug}/${subPageSlug}`
          const isActive = subPagePath === currentPath

          return { title, path: `/${subPagePath}`, isActive }
        })

      return {
        title,
        path: `/${path}`,
        isActive: path === currentPath,
        subPages,
      }
    })

  return page
    ? { props: { page, menu }, revalidate: 3 }
    : { redirect: { destination: '/', permanent: false } }
}

export default Page
