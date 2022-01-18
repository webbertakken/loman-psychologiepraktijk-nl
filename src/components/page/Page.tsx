import Layout from './Layout';
import LoadingPage from '../loading/LoadingPage';
import { PageEntry } from '../../types/page';
import Section from '../section/Section';
import { MenuProps } from '../../types/menu';
import { BannerNotificationEntry } from '../../types/banner';
import { AppContext } from './AppContext';

interface Props {
  page: PageEntry;
  headerMenu: MenuProps;
  footerMenu: MenuProps;
  banner?: BannerNotificationEntry;
}

const Page = ({ page, headerMenu, footerMenu, banner }: Props): JSX.Element => {
  if (!page) return <LoadingPage />;

  const { sections, isHomePage, subtitle } = page.fields;

  const pageContext = { menu: { isDark: isHomePage, isTransparent: isHomePage } };

  return (
    <AppContext.Provider value={{ headerMenu, footerMenu }}>
      <Layout banner={banner} pageContext={pageContext}>
        {page ? (
          <>
            {isHomePage ? null : (
              <div className="text-center pt-6">
                <h1 className="text-3xl">{subtitle}</h1>
              </div>
            )}
            {sections?.map((section, index) => {
              return <Section key={section.sys.id} section={section} index={index} />;
            })}
          </>
        ) : (
          <LoadingPage />
        )}
      </Layout>
    </AppContext.Provider>
  );
};

export default Page;
