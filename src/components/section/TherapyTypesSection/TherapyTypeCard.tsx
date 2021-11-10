import { TherapyTypeCardEntry } from '../../../types/section'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import FadeIntoView from '../../animations/fade-into-view'

interface Props {
  card: TherapyTypeCardEntry
}

export const TherapyTypeCard = ({ card }: Props): JSX.Element => {
  const { title, slug, subtitle, content, image, pageToLinkTo } = card.fields

  const link = pageToLinkTo ? `/${pageToLinkTo.fields.slug}` : undefined

  const imageProps = {
    src: `https:${image.fields.file.url}`,
    width: image.fields.file.details.image.width,
    height: image.fields.file.details.image.height,
  }

  return (
    <div id={slug} className="max-w-3xl pb-8 mx-auto md:py-12 lg:py-16">
      <div className="pb-8 border-b md:px-8 md:pb-12 lg:pb-16 border-gray-150 dark:border-gray-750 sm:text-center">
        <FadeIntoView>
          <a href={link} className="block mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={title}
              {...imageProps}
              className="object-cover object-center w-full md:rounded h-72"
            />
          </a>
        </FadeIntoView>

        <div className="w-full px-6 md:px-0">
          <FadeIntoView>
            <h2 className="mt-4 mb-5">
              <a
                href={link}
                className="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl dark:text-gray-100 prata"
              >
                {title}
              </a>
            </h2>
          </FadeIntoView>

          <FadeIntoView>
            <p className="mt-5 mb-6 text-xs text-gray-500 md:text-sm">
              {subtitle}
            </p>
          </FadeIntoView>

          <FadeIntoView>
            <p className="prose text-base text-gray-600 lg:text-lg">
              {documentToReactComponents(content)}
            </p>
          </FadeIntoView>
        </div>
      </div>
    </div>
  )
}
