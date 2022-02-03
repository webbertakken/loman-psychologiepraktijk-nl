import React from 'react';
import { MenuProps } from '../../../types/menu';

interface ContextProps {
  menu: MenuProps;
  show: boolean;
  setShow: (show: boolean) => void;
  hasDarkBackground: boolean;
}

export const MenuContext = React.createContext<Partial<ContextProps>>({
  menu: [],
  show: false,
  setShow: () => {},
  hasDarkBackground: false,
});
