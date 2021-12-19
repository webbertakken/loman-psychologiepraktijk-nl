import Link from 'next/link'
import cx from 'classnames'
import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  HiOutlineChartBar,
  HiOutlineCursorClick,
  HiOutlineShieldCheck,
  HiOutlineViewGrid,
  HiOutlineRefresh,
  HiChevronDown,
} from 'react-icons/hi'
import { RootMenuItemProps } from '../../../types/menu'

const placeholders = [
  {
    description:
      'Get a better understanding of where your traffic is coming from.',
    icon: HiOutlineChartBar,
  },
  {
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: HiOutlineCursorClick,
  },
  {
    description: "Your customers' data will be safe and secure.",
    icon: HiOutlineShieldCheck,
  },
  {
    description: "Connect with third-party tools that you're already using.",
    icon: HiOutlineViewGrid,
  },
  {
    description:
      'Build strategic funnels that will drive your customers to convert',
    icon: HiOutlineRefresh,
  },
]

interface Props extends RootMenuItemProps {}

const MenuItem = ({ title, path, isActive, subPages }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const hasSubpages = subPages.length >= 1

  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link key={path} href={path}>
        <a
          key={path}
          className={cx(
            'group inline-flex outline-none items-center relative font-thin leading-6 text-gray-300 transition duration-150 ease-out hover:text-gray-400',
            { 'text-gray-400': isOpen }
          )}
        >
          <span className="block pb-1">{title}</span>

          {hasSubpages && (
            <HiChevronDown
              className={cx('text-gray-400 group-hover:text-gray-500 -mr-2', {
                'text-gray-600': isOpen,
              })}
              aria-hidden="true"
            />
          )}

          <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 overflow-hidden">
            <span
              className={cx(
                'absolute inset-0 inline-block w-full h-1/2 transform group-hover:bg-gray-500',
                { 'bg-gray-400': isActive || isOpen }
              )}
            />
          </span>
        </a>
      </Link>

      {hasSubpages && (
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          {/* these values assume that the menu is on the right-hand side */}
          <Popover.Panel
            static
            className="absolute z-10 right-0 -mr-4 pt-3 transform px-2 w-screen max-w-md sm:px-0 2xl:ml-0 2xl:left-1/2 2xl:-translate-x-1/2"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {subPages.map(({ path, title }, index) => {
                  // Todo - replace placeholders
                  const Icon = placeholders[index].icon
                  const description = placeholders[index].description
                  return (
                    <a
                      key={path}
                      href={path}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <Icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {description}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  )
}

export default MenuItem
