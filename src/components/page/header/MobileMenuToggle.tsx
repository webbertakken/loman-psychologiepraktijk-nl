import MenuIcon from '../../../assets/hamburger.svg';
import { MenuContext } from '../context/MenuContext';
import { useContext } from 'react';
import IconButton from '../../icons/IconButton';

interface Props {
  className?: string;
}

function MobileMenuToggle({ className }: Props): JSX.Element {
  const { show, setShow, hasDarkBackground } = useContext(MenuContext);

  return (
    <IconButton
      className={className}
      ariaLabel="open sidebar menu"
      onClick={() => setShow(!show)}
      dark={hasDarkBackground}
    >
      <MenuIcon className="icon" />
    </IconButton>
  );
}

export default MobileMenuToggle;
