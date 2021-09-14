import Link from 'next/link'

interface Props {
  link: string
}

const GetInTouchButton = ({ link }: Props): JSX.Element => {
  return (
    <Link href={link}>
      <div className="pt-12 pb-8">
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          Get In Touch
        </button>
      </div>
    </Link>
  )
}

export default GetInTouchButton
