import Link from 'next/link'
import Logo from '../../../assets/logo.svg'
import MenuItems from '../../menu/MenuItems'
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

        <MenuItems
          menu={menu}
          className="top-0 left-0 z-0 flex items-center justify-center h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0"
        />
      </div>
    </section>
  )
}

export default NavBar
