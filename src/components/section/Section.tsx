import ProfileCardSection from './ProfileCardSection/ProfileCardSection'
import { Entry } from 'contentful'
import TherapyTypesSection from './TherapyTypesSection/TherapyTypesSection'

interface Props {
  section: Entry<any>
}
const Section = ({ section }: Props): JSX.Element => {
  const sectionType = section.sys.contentType.sys.id

  switch (sectionType) {
    case 'profileCardSection':
      return <ProfileCardSection section={section} />
    case 'therapyTypesSection':
      return <TherapyTypesSection section={section} />
    default:
      return null
  }
}

export default Section
