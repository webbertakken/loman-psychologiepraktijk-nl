import Link from 'next/link';
import cx from 'classnames';
import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RootMenuItemProps } from '../../types/menu';
import DynamicIcon from '../icons/DynamicIcon';
import { HiChevronDown } from 'react-icons/hi';

interface Props extends RootMenuItemProps {
  className?: string;
}

const MenuItem = ({ title, subtitle, path, isActive, subPages, className }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasSubpages = subPages.length >= 1;

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
            `group inline-flex outline-none items-center relative font-thin leading-6 transition duration-150 ease-out`,
            className,
            { 'text-gray-500': isOpen },
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
                'absolute inset-0 inline-block w-full h-1/2 transform group-hover:bg-gray-600',
                { 'bg-gray-500': isActive || isOpen },
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
            unmount={false}
            className="absolute z-10 right-0 -mr-4 pt-3 transform px-2 w-screen max-w-md sm:px-0 2xl:ml-0 2xl:left-1/2 2xl:-translate-x-1/2"
            aria-labelledby={`${title} submenu`}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <Link key={path} href={path}>
                  <a className="text-gray-600 hover:text-gray-800">
                    <strong>{subtitle}</strong>
                  </a>
                </Link>
                {subPages.map(({ path, title, subtitle, icon }) => {
                  return (
                    <Link key={path} href={path}>
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        <DynamicIcon
                          icon={icon}
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">{title}</p>
                          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
                        </div>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  );
};

export default MenuItem;
