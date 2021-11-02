import NavBar from './navbar/NavBar'
import Banner from './Banner'
import { BannerNotificationEntry } from '../../types/banner'

interface Props {
  children: JSX.Element
  menu?: Record<string, any>[]
  banner?: BannerNotificationEntry
}

const Layout = ({ children, menu, banner }: Props): JSX.Element => {
  return (
    <div className="font-serif">
      <Banner banner={banner} />
      <NavBar menu={menu} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
