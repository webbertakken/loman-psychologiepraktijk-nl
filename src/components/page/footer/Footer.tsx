import CopyrightAndLinksLayer from './CopyrightAndLinksLayer'
import LogoAndSocialLayer from './LogoAndSocialLayer'
import { MenuProps } from '../../../types/menu'

interface Props {
  menu: MenuProps
}

const Footer = ({ menu }: Props): JSX.Element => {
  return (
    <section className="py-10 bg-black mt-auto">
      <div className="px-10 mx-auto max-w-7xl">
        {/*<LogoAndSocialLayer />*/}
        <CopyrightAndLinksLayer menu={menu} />
      </div>
    </section>
  )
}

export default Footer
