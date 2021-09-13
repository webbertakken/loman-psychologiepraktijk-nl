// import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { SectionEntry } from '../types/section'

interface Props {
  section: SectionEntry
}
const Section = ({ section }: Props): JSX.Element => {
  const { title, subtitle, content } = section.fields

  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <div className="content">{documentToReactComponents(content)}</div>

      {/*<Image*/}
      {/*  src={`https:${featuredImage.fields.file.url}`}*/}
      {/*  width={featuredImage.fields.file.details.image.width}*/}
      {/*  height={featuredImage.fields.file.details.image.height}*/}
      {/*/>*/}
    </div>
  )
}

export default Section
