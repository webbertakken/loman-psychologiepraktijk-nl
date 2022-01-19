import NavBar from './navbar/NavBar';
import Banner from './Banner';
import { BannerNotificationEntry } from '../../types/banner';
import Footer from './footer/Footer';

interface Props {
  children: JSX.Element;
  banner?: BannerNotificationEntry;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="font-serif min-h-screen flex flex-col">
      <Banner />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
