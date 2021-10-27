// import MenuLinks from './menu/MenuLinks'

import Menu from './menu/Menu'

interface Props {
  children: JSX.Element
  menu?: Record<string, any>[]
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Menu />
      {/*<header>*/}
      {/*  <MenuLinks menu={menu} />*/}
      {/*</header>*/}
      <main>{children}</main>
    </div>
  )
}

export default Layout
