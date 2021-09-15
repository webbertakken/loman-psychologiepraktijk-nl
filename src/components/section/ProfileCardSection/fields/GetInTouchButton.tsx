import Link from 'next/link'

interface Props {
  link: string
  text: string
}

const GetInTouchButton = ({ link, text }: Props): JSX.Element => {
  return (
    <Link href={link}>
      <div className="pt-12 pb-8">
        <a className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          {text}
        </a>
      </div>
    </Link>
  )
}

export default GetInTouchButton
