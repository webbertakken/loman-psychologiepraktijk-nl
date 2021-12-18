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

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: HiOutlineChartBar,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: HiOutlineCursorClick,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: HiOutlineShieldCheck,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: HiOutlineViewGrid,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: HiOutlineRefresh,
  },
]

interface Props {
  title?: string
  path?: string
  isActive?: boolean
}

const MenuItem = ({ title, path, isActive = false }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Popover
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Popover.Button
        className={cx(
          'group inline-flex outline-none items-center relative font-thin leading-6 text-gray-300 transition duration-150 ease-out hover:text-gray-400',
          { 'text-gray-400': isOpen }
        )}
      >
        <span className="block pb-1">Solutions</span>

        <HiChevronDown
          className={cx(
            isOpen ? 'text-gray-600' : 'text-gray-400',
            'ml-2 h-5 w-5 group-hover:text-gray-500'
          )}
          aria-hidden="true"
        />
        <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 overflow-hidden">
          <span
            className={cx(
              'absolute inset-0 inline-block w-full h-1/2 transform group-hover:bg-gray-500',
              { 'bg-gray-400': isActive || isOpen }
            )}
          />
        </span>
      </Popover.Button>

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
        <Popover.Panel className="absolute z-10 -ml-4 pt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <item.icon
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MenuItem
