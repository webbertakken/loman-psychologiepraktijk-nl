import Link from 'next/link'

interface Props {}

const CopyrightAndLinksLayer = ({}: Props): JSX.Element => {
  return (
    <div className="flex flex-col justify-between text-center md:flex-row">
      <p className="order-last text-sm leading-tight text-gray-500 md:order-first">
        <strong>Loman Psychologiepraktijk</strong>
        <strong> | </strong>
        <span>Alle rechten voorbehouden</span>
      </p>
      <ul className="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
        <li>
          <Link href="/contact">
            <a className="px-4 text-gray-500 hover:text-white">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/over-ons">
            <a className="px-4 text-gray-500 hover:text-white">Over ons</a>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <a className="px-4 text-gray-500 hover:text-white">FAQ</a>
          </Link>
        </li>
        <li>
          <Link href="/kwaliteitsstatuut">
            <a className="px-4 text-gray-500 hover:text-white">
              Kwaliteitsstatuut
            </a>
          </Link>
        </li>
        <li>
          <Link href="/voorwaarden">
            <a className="px-4 text-gray-500 hover:text-white">Voorwaarden</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CopyrightAndLinksLayer
