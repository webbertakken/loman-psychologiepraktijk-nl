import MenuLinks from './menu/MenuLinks'

interface Props {
  children: JSX.Element
  menu?: Record<string, any>[]
}

const Layout = ({ children, menu }: Props): JSX.Element => {
  return (
    <div>
      <header>
        <MenuLinks menu={menu} />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
