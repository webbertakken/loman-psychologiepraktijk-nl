import Link from 'next/link'
import Logo from '../../../assets/logo.svg'
import MenuItems from './MenuItems'

interface Props {
  menu?: Record<string, any>[]
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

        {/*<div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">*/}
        {/*  <a*/}
        {/*    href="#"*/}
        {/*    className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"*/}
        {/*  >*/}
        {/*    🧑*/}
        {/*  </a>*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default NavBar
