import Link from 'next/link'

interface Props {
  fields: Record<string, unknown>
}

const SectionPreview = ({ fields }: Props): JSX.Element => {
  const { title, slug } = fields

  return (
    <div>
      <Link href={`/sections/${slug}`}>
        <a>{title}</a>
      </Link>
    </div>
  )
}

export default SectionPreview
