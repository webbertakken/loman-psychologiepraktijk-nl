import MenuItem from './MenuItem'
import { MenuProps } from '../../types/menu'

interface Props {
  menu: MenuProps
  className?: string
  itemClassName?: string
}

const MenuItems = ({ menu, className, itemClassName }: Props): JSX.Element => (
  <nav className={className}>
    {menu?.map(({ path, ...rest }) => (
      <MenuItem key={path} path={path} className={itemClassName} {...rest} />
    ))}
  </nav>
)

export default MenuItems
