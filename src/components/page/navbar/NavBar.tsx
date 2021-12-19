import Link from 'next/link'
import Logo from '../../../assets/logo.svg'
import MenuItems from './MenuItems'
import { MenuProps } from '../../../types/menu'

interface Props {
  menu: MenuProps
}

const NavBar = ({ menu }: Props): JSX.Element => {
  return (
    <section className="hidden md:block relative w-full px-8 text-gray-300 body-font z-10">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link href="/">
          <a className="z-10">
            <Logo className="h-14 select-none cursor-pointer" />
          </a>
        </Link>

        <MenuItems menu={menu} />
      </div>
    </section>
  )
}

export default NavBar
