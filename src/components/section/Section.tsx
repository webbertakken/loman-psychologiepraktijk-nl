import ProfileCardSection from './ProfileCardSection/ProfileCardSection'
import { Entry } from 'contentful'

interface Props {
  section: Entry<any>
}
const Section = ({ section }: Props): JSX.Element => {
  const sectionType = section.sys.contentType.sys.id

  switch (sectionType) {
    case 'profileCardSection':
      return <ProfileCardSection section={section} />
    default:
      return null
  }
}

export default Section
