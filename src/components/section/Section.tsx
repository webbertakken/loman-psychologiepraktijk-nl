import ProfileCardSection from './ProfileCardSection/ProfileCardSection'
import { Entry } from 'contentful'
import TherapyTypesSection from './TherapyTypesSection/TherapyTypesSection'
import BasicSection from './BasicSection/BasicSection'

interface Props {
  section: Entry<any>
  index?: number
}
const Section = ({ section, index }: Props): JSX.Element => {
  const sectionType = section.sys.contentType.sys.id

  switch (sectionType) {
    case 'section':
      return <BasicSection section={section} index={index} />
    case 'profileCardSection':
      return <ProfileCardSection section={section} />
    case 'therapyTypesSection':
      return <TherapyTypesSection section={section} />
    default:
      return null
  }
}

export default Section
