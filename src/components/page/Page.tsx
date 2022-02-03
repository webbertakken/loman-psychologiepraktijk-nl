import Layout from './layout/Layout';
import LoadingPage from '../loading/LoadingPage';
import { PageEntry } from '../../types/page';
import Section from '../section/Section';
import { MenuProps } from '../../types/menu';
import { BannerNotificationEntry } from '../../types/banner';
import { AppContext } from './context/AppContext';
import { PageContext } from './context/PageContext';

interface Props {
  page: PageEntry;
  headerMenu: MenuProps;
  footerMenu: MenuProps;
  banner?: BannerNotificationEntry;
}

const Page = ({ page, headerMenu, footerMenu, banner }: Props): JSX.Element => {
  if (!page) return <LoadingPage />;

  const { sections, hasOwnHeader, hasDarkBackground, subtitle } = page.fields;

  return (
    <AppContext.Provider value={{ headerMenu, footerMenu, banner }}>
      <PageContext.Provider value={{ hasOwnHeader, hasDarkBackground }}>
        <Layout>
          <PageContext.Consumer>
            {({ hasOwnHeader }) =>
              page ? (
                <>
                  {hasOwnHeader ? null : (
                    <div className="text-center pt-6">
                      <h1 className="text-xl md:text-3xl px-6 break-words">{subtitle}</h1>
                    </div>
                  )}
                  {sections?.map((section, index) => {
                    return <Section key={section.sys.id} section={section} index={index} />;
                  })}
                </>
              ) : (
                <LoadingPage />
              )
            }
          </PageContext.Consumer>
        </Layout>
      </PageContext.Provider>
    </AppContext.Provider>
  );
};

export default Page;
