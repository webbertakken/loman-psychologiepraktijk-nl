import NavBar from './navbar/NavBar'

interface Props {
  children: JSX.Element
  menu?: Record<string, any>[]
}

const Layout = ({ children, menu }: Props): JSX.Element => {
  return (
    <div className="font-serif">
      <NavBar menu={menu} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
