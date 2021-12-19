import { GetStaticPaths, GetStaticProps } from 'next'
import Page from '../components/page/Page'
import { getContentfulClient } from '../core/contentful'
import { PageEntry, PageProps } from '../types/page'
import {
  MenuOptions,
  MenuSortOrderEntry,
  MenuSortOrderProps,
} from '../types/menu'
import {
  BannerNotificationEntry,
  BannerNotificationProps,
} from '../types/banner'

const client = getContentfulClient()

const getPages = async (): Promise<PageEntry[]> => {
  const { items: pages } = await client.getEntries<PageProps>({
    content_type: 'page',
    include: 3,
  })

  return pages
}

const getMenuSortOrder = async (
  menu: MenuOptions
): Promise<MenuSortOrderEntry> => {
  const { items: sortOrders } = await client.getEntries<MenuSortOrderProps>({
    content_type: 'menuSortOrder',
  })

  return sortOrders?.find((order) => order.fields.menu === menu)
}

const createMenuSortFn = async (menu: MenuOptions) => {
  const menuSortOrder = await getMenuSortOrder(menu)
  const sortOrder = menuSortOrder?.fields.pages.map(({ fields }) => fields.slug)

  return (a, b) => {
    if (b.fields.isHomePage) return 1
    return sortOrder.indexOf(a.fields.slug) - sortOrder.indexOf(b.fields.slug)
  }
}

const getBannerNotification = async (): Promise<BannerNotificationEntry> => {
  const { items: banners } = await client.getEntries<BannerNotificationProps>({
    content_type: 'bannerNotification',
  })

  return banners?.[0]
}

const getActivePath = (slug: null | string | string[]) => {
  if (slug === null) return '/'
  return typeof slug === 'string' ? `/${slug}` : `/${slug.join('/')}`
}

const getMenuStructure = (pages, activePath) => {
  return pages
    .filter(({ fields }) => !fields.parentPage)
    .map((page) => {
      const {
        slug: rootPageSlug,
        menuItemTitle: title,
        subtitle = '',
        icon = '',
      } = page.fields
      const path = page.fields.isHomePage ? '/' : `/${rootPageSlug}`
      const isActive = path === activePath

      // Pages can have `parentPage`, which is a hydrated reference to another page.
      const subPages = pages
        .filter(({ fields }) => fields.parentPage?.sys.id === page.sys.id)
        .filter(({ fields }) => fields.shouldBeShownInSubmenus)
        .map((subPage) => {
          const {
            menuItemTitle: title,
            slug: subPageSlug,
            subtitle = '',
            icon = '',
          } = subPage.fields
          const subPath = `/${rootPageSlug}/${subPageSlug}`
          const isActive = subPath === activePath

          return { title, path: subPath, isActive, subtitle, icon }
        })

      return { title, path, isActive, subPages, subtitle, icon }
    })
}

// Todo - find simpler way for this
const removeKey = (obj, keyToRemove) =>
  JSON.parse(
    JSON.stringify(obj, (key, val) => (key === keyToRemove ? {} : val))
  )

const removeRecurseKey = (obj, keyToRemove) =>
  JSON.parse(
    JSON.stringify(obj, (key, val) =>
      key === keyToRemove ? removeKey(val, 'fields') : val
    )
  )

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
  const banner = await getBannerNotification()
  const activePath = getActivePath(slug)

  const headerMenu = getMenuStructure(
    pages
      .filter(({ fields }) => fields.shouldBeShownInHeader)
      .sort(await createMenuSortFn('header')),
    activePath
  )

  const footerMenu = getMenuStructure(
    pages
      .filter(({ fields }) => fields.shouldBeShownInFooter)
      .sort(await createMenuSortFn('footer')),
    'footer'
  )

  const page = slug
    ? pages.find((page) => page.fields.slug === slug)
    : pages.find((page) => page.fields.isHomePage)

  const sanitisedPage = removeRecurseKey(page, 'parentPage')

  if (!page) return { redirect: { destination: '/', permanent: false } }

  return {
    props: {
      page: sanitisedPage,
      headerMenu,
      footerMenu,
      banner,
    },
    revalidate: 3,
  }
}

export default Page
