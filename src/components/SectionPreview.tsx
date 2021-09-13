import Link from 'next/link'
import { SectionEntry } from '../types/section'

interface Props {
  section: SectionEntry
}

const SectionPreview = ({ section }: Props): JSX.Element => {
  const { title, slug } = section.fields

  return (
    <div>
      <Link href={`/sections/${slug}`}>
        <a>{title}</a>
      </Link>
    </div>
  )
}

export default SectionPreview
