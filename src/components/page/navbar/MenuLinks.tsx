import Link from 'next/link'

interface Props {
  menu?: Record<string, any>[]
}

const MenuLinks = ({ menu }: Props): JSX.Element => {
  return (
    <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
      {menu?.map(({ title, path }) => {
        return (
          <Link key={path} href={path}>
            <a
              key={path}
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            >
              <span className="block">{title}</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" />
              </span>
            </a>
          </Link>
        )
      })}
    </nav>
  )
}

export default MenuLinks
