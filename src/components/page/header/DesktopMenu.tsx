import Logo from '../../../assets/logo.svg';
import MenuItems from '../../menu/MenuItems';
import Link from 'next/link';
import cx from 'classnames';
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

interface Props {}

function DesktopMenu({}: Props): JSX.Element {
  const { hasDarkBackground, menu } = useContext(MenuContext);

  return (
    <>
      <Link href="/">
        <a className="z-10 md:ml-8" aria-label="Logo of Loman psychologiepraktijk">
          <Logo className="h-12 md:h-14 select-none cursor-pointer" />
        </a>
      </Link>

      <MenuItems
        role="navigation"
        ariaLabel="Main navigation"
        menu={menu}
        className={cx(
          'hidden md:flex pr-8 top-0 left-0 z-0 flex  items-center justify-center h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0',
        )}
        itemClassName={
          hasDarkBackground
            ? 'text-gray-200 hover:text-gray-100'
            : 'text-gray-900 hover:text-gray-800'
        }
      />
    </>
  );
}

export default DesktopMenu;
