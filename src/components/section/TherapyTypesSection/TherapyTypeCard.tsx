import { TherapyTypeCardEntry } from '../../../types/section'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface Props {
  card: TherapyTypeCardEntry
}

export const TherapyTypeCard = ({ card }: Props): JSX.Element => {
  const { title, subtitle, content, image, pageToLinkTo } = card.fields

  const link = pageToLinkTo ? `/${pageToLinkTo.fields.slug}` : undefined

  const imageSrc = `https:${image.fields.file.url}`
  return (
    <div className="max-w-3xl pb-8 mx-auto font-serif md:py-12 lg:py-16">
      <div className="pb-8 border-b md:px-8 md:pb-12 lg:pb-16 border-gray-150 dark:border-gray-750 sm:text-center">
        <a href={link} className="block mb-10">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover object-center w-full md:rounded h-72"
          />
        </a>

        <div className="w-full px-6 md:px-0">
          <h2 className="mt-4 mb-5">
            <a
              href={link}
              className="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl dark:text-gray-100 prata"
            >
              {title}
            </a>
          </h2>

          <p className="mt-5 mb-6 text-xs text-gray-500 md:text-sm">
            {subtitle}
          </p>
          <p className="text-base text-gray-600 lg:text-lg">
            {documentToReactComponents(content)}
          </p>
        </div>
      </div>
    </div>
  )
}
