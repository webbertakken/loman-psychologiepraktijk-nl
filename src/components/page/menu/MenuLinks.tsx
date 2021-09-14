import Link from 'next/link'

interface Props {
  menu: Record<string, any>[]
}

const MenuLinks = ({ menu }: Props): JSX.Element => {
  return (
    <div>
      {menu?.map(({ title, path }) => {
        return (
          <Link key={path} href={path}>
            <a>{title}</a>
          </Link>
        )
      })}
    </div>
  )
}

export default MenuLinks
