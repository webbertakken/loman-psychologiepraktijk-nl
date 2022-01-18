import NavBar from './navbar/NavBar';
import Banner from './Banner';
import { BannerNotificationEntry } from '../../types/banner';
import Footer from './footer/Footer';
import { AppContext } from './AppContext';

interface Props {
  children: JSX.Element;
  banner?: BannerNotificationEntry;
  pageContext?: any;
}

const Layout = ({ children, banner, pageContext }: Props): JSX.Element => {
  return (
    <AppContext.Consumer>
      {({ headerMenu, footerMenu }) => (
        <div className="font-serif min-h-screen flex flex-col">
          <Banner banner={banner} />
          <NavBar menu={headerMenu} {...pageContext?.menu} />
          <main>{children}</main>
          <Footer menu={footerMenu} />
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Layout;
