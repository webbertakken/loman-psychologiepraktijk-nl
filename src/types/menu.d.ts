import { Entry } from 'contentful'
import { PageEntry } from './page'

type MenuProps = Record<string, any>[]

interface MenuSortOrderProps {
  shouldShowSubmenus: boolean
  pages: PageEntry[]
}

type MenuSortOrderEntry = Entry<MenuSortOrderProps>
