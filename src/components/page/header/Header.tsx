import cx from 'classnames';
import { useContext, useState } from 'react';
import { PageContext } from '../context/PageContext';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MobileMenuToggle from './MobileMenuToggle';
import { MenuContext } from '../context/MenuContext';
import { AppContext } from '../context/AppContext';

interface Props {}

const Header = ({}: Props): JSX.Element => {
  const { hasDarkBackground } = useContext(PageContext);
  const [show, setShow] = useState<boolean>(false);
  const { headerMenu: menu } = useContext(AppContext);

  return (
    <header
      className={cx(
        'w-full text-gray-300 body-font z-10',
        { 'bg-white bg-opacity-80': !hasDarkBackground },
        { 'bg-black bg-opacity-50': hasDarkBackground },
      )}
      aria-label="Main navigation bar"
    >
      <MenuContext.Provider value={{ show, setShow, hasDarkBackground, menu }}>
        <MobileMenu />

        <div className="container flex flex-row items-center justify-between py-4 px-6 mx-auto max-w-7xl">
          <DesktopMenu />
          <MobileMenuToggle />
        </div>
      </MenuContext.Provider>
    </header>
  );
};

export default Header;
