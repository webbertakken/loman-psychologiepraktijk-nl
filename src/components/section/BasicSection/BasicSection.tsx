import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { SectionEntry } from '../../../types/section'

interface Props {
  section: SectionEntry
}

const BasicSection = ({ section }: Props): JSX.Element => {
  {
    const { title, subtitle, content } = section.fields

    return (
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="content">{documentToReactComponents(content)}</div>
      </div>
    )
  }
}

export default BasicSection
