import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BasicSectionEntry } from '../../../types/section'

interface Props {
  section: BasicSectionEntry
  index: number
}

const BasicSection = ({ section, index }: Props): JSX.Element => {
  const { title, subtitle, content } = section.fields

  const backgroundClass = index % 2 === 0 ? 'bg-[#bfc6d6]' : 'bg-white'

  return (
    <section
      className={`w-full px-8 py-16 md:py-24 ${backgroundClass} xl:px-0`}
    >
      <div className="flex flex-col max-w-4xl mx-auto">
        <h3 className="text-4xl font-extrabold leading-none sm:text-5xl md:text-6xl lg:leading-7 mb-12">
          {title}
        </h3>

        <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
          <div className="w-full pr-5 md:w-3/12 xl:pr-12">
            <h3 className="text-2xl font-bold leading-7">{subtitle}</h3>
          </div>

          <div className="w-full mt-5 md:mt-0 md:w-4/5 md:pl-2">
            <p className="text-base font-normal leading-none text-gray-700 md:text-lg">
              {documentToReactComponents(content)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicSection
