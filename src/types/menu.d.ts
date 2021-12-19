import { Entry } from 'contentful'
import { PageEntry } from './page'

interface MenuItemProps {
  title: string
  subtitle: string
  icon: string
  path: string
  isActive: boolean
}

interface RootMenuItemProps extends MenuItemProps {
  subPages: Array<MenuItemProps>
}

type MenuProps = Array<RootMenuItemProps>

interface MenuSortOrderProps {
  shouldShowSubmenus: boolean
  pages: PageEntry[]
}

type MenuSortOrderEntry = Entry<MenuSortOrderProps>
