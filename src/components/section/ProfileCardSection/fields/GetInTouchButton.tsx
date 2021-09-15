import Link from 'next/link'

interface Props {
  link: string
  text: string
}

const GetInTouchButton = ({ link, text }: Props): JSX.Element => {
  return (
    <div className="pt-12 pb-8">
      <Link href={link}>
        <a className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          {text}
        </a>
      </Link>
    </div>
  )
}

export default GetInTouchButton
