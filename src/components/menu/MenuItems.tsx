import MenuItem from './MenuItem';
import { MenuProps } from '../../types/menu';

interface Props {
  menu: MenuProps;
  className?: string;
  itemClassName?: string;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

const MenuItems = ({
  menu,
  className,
  itemClassName,
  role,
  ariaLabel,
  ariaLabelledBy,
}: Props): JSX.Element => (
  <nav className={className} role={role} aria-label={ariaLabel} aria-labelledby={ariaLabelledBy}>
    {menu?.map(({ path, ...rest }) => (
      <MenuItem key={path} path={path} className={itemClassName} {...rest} />
    ))}
  </nav>
);

export default MenuItems;
