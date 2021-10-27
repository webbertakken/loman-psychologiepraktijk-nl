import Link from 'next/link'
import Logo from '../../../assets/logo.svg'

const Menu = (): JSX.Element => {
  return (
    <section className="relative w-full px-8 text-gray-700 body-font -mb-24">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link href="/">
          <Logo className="h-12 select-none cursor-pointer" />
        </Link>

        {/*<nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">*/}
        {/*  <a*/}
        {/*    href="#_"*/}
        {/*    className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"*/}
        {/*  >*/}
        {/*    <span className="block">Home</span>*/}
        {/*    <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">*/}
        {/*      <span className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" />*/}
        {/*    </span>*/}
        {/*  </a>*/}
        {/*</nav>*/}

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

export default Menu
