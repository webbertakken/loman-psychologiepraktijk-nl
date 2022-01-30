import React from 'react';
import { MenuProps } from '../../../types/menu';

type ContextProps = {
  menu: MenuProps;
  show: boolean;
  setShow: (boolean: boolean) => void;
  hasDarkBackground: boolean;
};

export const MenuContext = React.createContext<Partial<ContextProps>>({
  menu: [],
  show: false,
  setShow: () => {},
  hasDarkBackground: false,
});
