import React from 'react'
import { MenuProps } from '../../types/menu'

type ContextProps = {
  headerMenu: MenuProps
  footerMenu: MenuProps
}

export const AppContext = React.createContext<Partial<ContextProps>>({
  headerMenu: [],
  footerMenu: [],
})
