import Link from 'next/link'
import cx from 'classnames'

interface Props {
  menu?: Record<string, any>[]
}

const MenuLinks = ({ menu }: Props): JSX.Element => {
  return (
    <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
      {menu?.map(({ title, path, isActive }) => {
        return (
          <Link key={path} href={path}>
            <a
              key={path}
              className="group relative font-thin leading-6 text-gray-400 transition duration-150 ease-out hover:text-gray-400"
            >
              <span className="block pb-1">{title}</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 overflow-hidden">
                <span
                  className={cx(
                    'absolute inset-0 inline-block w-full h-1/2 transform group-hover:bg-gray-400',
                    { 'bg-gray-500': isActive }
                  )}
                />
              </span>
            </a>
          </Link>
        )
      })}
    </nav>
  )
}

export default MenuLinks
