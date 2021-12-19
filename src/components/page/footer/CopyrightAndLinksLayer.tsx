import { MenuProps } from '../../../types/menu'
import MenuItem from '../navbar/MenuItem'

interface Props {
  menu: MenuProps
}

const CopyrightAndLinksLayer = ({ menu }: Props): JSX.Element => {
  return (
    <div className="flex flex-col justify-between text-center md:flex-row">
      <p className="order-last text-sm leading-tight text-gray-500 md:order-first">
        <strong>Loman Psychologiepraktijk</strong>
        <strong> | </strong>
        <span>Alle rechten voorbehouden</span>
      </p>
      <nav className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
        {menu?.map(({ path, ...rest }) => (
          <MenuItem
            className="mx-4 text-gray-500 hover:text-white"
            key={path}
            path={path}
            {...rest}
          />
        ))}
      </nav>
    </div>
  )
}

export default CopyrightAndLinksLayer
