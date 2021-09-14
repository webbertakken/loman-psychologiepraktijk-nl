import { TypesOfTherapyEntry } from '../../../types/section'
import { TherapyTypeCard } from './TherapyTypeCard'

interface Props {
  section: TypesOfTherapyEntry
}

const TherapyTypesSection = ({ section }: Props): JSX.Element => {
  const { therapyTypeCards } = section.fields

  return (
    <section className="w-full bg-white">
      {therapyTypeCards?.map((card) => (
        <TherapyTypeCard key={card.sys.id} card={card} />
      ))}
    </section>
  )
}

export default TherapyTypesSection
