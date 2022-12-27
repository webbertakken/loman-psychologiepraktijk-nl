import MenuItems from '../../menu/MenuItems';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

interface Props {}

const CopyrightAndLinksLayer = ({}: Props): JSX.Element => {
  const { footerMenu: menu } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-between text-center lg:flex-row p-2 gap-2">
      <p className="order-last text-sm leading-tight text-gray-400 lg:order-first">
        <strong>Loman Psychologiepraktijk</strong>
        <strong> | </strong>
        <span>Alle rechten voorbehouden</span>
      </p>
      <MenuItems
        menu={menu}
        ariaLabel="Footer navigation"
        className="flex flex-col md:flex-row justify-center pb-3 -ml-4 -mr-4 text-sm"
        itemClassName="mx-4 text-gray-400 hover:text-gray-300"
      />
    </div>
  );
};

export default CopyrightAndLinksLayer;
