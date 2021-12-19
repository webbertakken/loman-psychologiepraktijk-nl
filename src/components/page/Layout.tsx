import NavBar from './navbar/NavBar'
import Banner from './Banner'
import { BannerNotificationEntry } from '../../types/banner'
import Footer from './footer/Footer'
import { MenuProps } from '../../types/menu'

interface Props {
  children: JSX.Element
  menu: MenuProps
  banner?: BannerNotificationEntry
}

const Layout = ({ children, menu, banner }: Props): JSX.Element => {
  return (
    <div className="font-serif min-h-screen flex flex-col">
      <Banner banner={banner} />
      <NavBar menu={menu} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
