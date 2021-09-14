import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'

interface Props {
  shortDescription: Document
}

const Bio = ({ shortDescription }: Props): JSX.Element => {
  return (
    <p className="pt-8 text-sm">
      {documentToReactComponents(shortDescription)}
    </p>
  )
}

export default Bio
