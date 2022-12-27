import MenuItems from '../../menu/MenuItems';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

interface Props {}

const CopyrightAndLinksLayer = ({}: Props): JSX.Element => {
  const { footerMenu: menu } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-between text-center lg:flex-row p-2 gap-2">
      <div className="order-last text-sm text-gray-400 lg:order-first flex justify-center gap-1 flex-col md:flex-row">
        <div>
          <strong>Loman Psychologiepraktijk</strong>
          <strong className="invisible md:visible"> |</strong>
        </div>
        <div>
          <span>Alle rechten voorbehouden</span>
        </div>
      </div>
      <MenuItems
        menu={menu}
        ariaLabel="Footer navigation"
        className="flex flex-col md:flex-row justify-center pb-0 -ml-4 -mr-4 text-sm"
        itemClassName="mx-4 text-gray-400 hover:text-gray-300"
      />
    </div>
  );
};

export default CopyrightAndLinksLayer;
