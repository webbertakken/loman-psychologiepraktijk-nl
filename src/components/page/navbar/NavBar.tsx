import Link from 'next/link';
import Logo from '../../../assets/logo.svg';
import MenuItems from '../../menu/MenuItems';
import { MenuProps } from '../../../types/menu';
import cx from 'classnames';

interface Props {
  menu: MenuProps;
  isTransparent?: boolean;
  isDark?: boolean;
}

const NavBar = ({ menu, isTransparent, isDark }: Props): JSX.Element => {
  return (
    <header
      className="hidden md:block relative w-full px-8 text-gray-300 body-font z-10"
      aria-label="Main navigation bar"
    >
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link href="/">
          <a className="z-10" aria-label="Logo of Loman psychologiepraktijk">
            <Logo className="h-14 select-none cursor-pointer" />
          </a>
        </Link>

        <MenuItems
          role="navigation"
          ariaLabel="Main navigation"
          menu={menu}
          className={cx(
            'top-0 left-0 z-0 flex items-center justify-center h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0',
            { 'bg-white': !isTransparent },
          )}
          itemClassName={
            isDark ? 'text-gray-200 hover:text-gray-100' : 'text-gray-900 hover:text-gray-800'
          }
        />
      </div>
    </header>
  );
};

export default NavBar;
