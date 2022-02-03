import { useContext } from 'react';
import Logo from '../../../assets/logo.svg';
import Cross from '../../../assets/cross.svg';
import Link from 'next/link';
import { MenuContext } from '../context/MenuContext';
import IconButton from '../../icons/IconButton';
import MenuItems from '../../menu/MenuItems';
import cx from 'classnames';

interface Props {}

function MobileMenu({}: Props): JSX.Element {
  const { show, setShow, menu } = useContext(MenuContext);

  return (
    <>
      <div
        className={
          show
            ? 'w-full h-full md:hidden absolute z-40 transform translate-x-0 '
            : 'w-full h-full md:hidden absolute z-40 transform -translate-x-full'
        }
      >
        <div
          className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
          onClick={() => setShow(!show)}
        />
        <div className="w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full">
            <div className="px-6 pt-4">
              <div className="flex justify-between items-center">
                <Link href="/">
                  <a className="z-10" aria-label="Logo of Loman psychologiepraktijk">
                    <Logo className="h-12 md:h-14 select-none cursor-pointer" />
                  </a>
                </Link>

                <IconButton ariaLabel="close sidebar menu" onClick={() => setShow(!show)}>
                  <Cross />
                </IconButton>
              </div>

              <MenuItems
                menu={menu}
                className={cx('flex-col py-5 space-y-4 text-base')}
                itemClassName={'text-gray-900 hover:text-gray-800'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
