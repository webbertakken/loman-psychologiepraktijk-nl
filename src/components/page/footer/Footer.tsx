import CopyrightAndLinksLayer from './CopyrightAndLinksLayer'
import LogoAndSocialLayer from './LogoAndSocialLayer'

interface Props {}

const Footer = ({}: Props): JSX.Element => {
  return (
    <section className="py-10 bg-black mt-auto">
      <div className="px-10 mx-auto max-w-7xl">
        <LogoAndSocialLayer />
        <CopyrightAndLinksLayer />
      </div>
    </section>
  )
}

export default Footer
