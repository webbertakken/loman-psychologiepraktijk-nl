import React from 'react';
import { MenuProps } from '../../types/menu';
import { BannerNotificationEntry } from '../../types/banner';

type ContextProps = {
  headerMenu: MenuProps;
  footerMenu: MenuProps;
  banner?: BannerNotificationEntry;
};

export const AppContext = React.createContext<Partial<ContextProps>>({
  headerMenu: [],
  footerMenu: [],
  banner: null,
});
