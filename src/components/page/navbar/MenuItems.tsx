import MenuItem from './MenuItem'
import { MenuProps } from '../../../types/menu'

interface Props {
  menu: MenuProps
}

const MenuItems = ({ menu }: Props): JSX.Element => (
  <nav className="top-0 left-0 z-0 flex items-center justify-center h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0">
    {menu?.map(({ path, ...rest }) => (
      <MenuItem key={path} path={path} {...rest} />
    ))}
  </nav>
)

export default MenuItems
