import cx from 'classnames';
import { useCallback, useContext, useEffect, useState } from 'react';
import { PageContext } from '../context/PageContext';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MobileMenuToggle from './MobileMenuToggle';
import { MenuContext } from '../context/MenuContext';
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/router';

interface Props {}

const Header = ({}: Props): JSX.Element => {
  const { hasDarkBackground } = useContext(PageContext);
  const [show, setShow] = useState<boolean>(false);
  const { headerMenu: menu } = useContext(AppContext);
  const router = useRouter();

  const hideMenu = useCallback(() => {
    setShow(false);
  }, [setShow]);

  useEffect(() => {
    router.events.on('routeChangeStart', hideMenu);

    return () => router.events.off('routeChangeStart', hideMenu);
  }, [hideMenu, router.events]);

  return (
    <header
      className={cx(
        'w-full text-gray-300 body-font z-10',
        { 'bg-white bg-opacity-80': !hasDarkBackground },
        { 'bg-black bg-opacity-50': hasDarkBackground },
      )}
      aria-label="Main navigation bar"
    >
      <MenuContext.Provider value={{ type: 'sidebar', show, setShow, hasDarkBackground, menu }}>
        <MobileMenu />
      </MenuContext.Provider>

      <MenuContext.Provider value={{ type: 'main', show, setShow, hasDarkBackground, menu }}>
        <div className="container flex flex-row items-center justify-between py-4 px-6 mx-auto max-w-7xl">
          <DesktopMenu />
          <MobileMenuToggle />
        </div>
      </MenuContext.Provider>
    </header>
  );
};

export default Header;
