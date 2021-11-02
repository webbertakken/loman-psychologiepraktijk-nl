import { BannerNotificationEntry } from '../../types/banner'

interface Props {
  banner?: BannerNotificationEntry
}

const Banner = ({ banner }: Props): JSX.Element => {
  if (!banner || !banner.fields.isEnabled) return null

  return (
    <section className="relative w-full px-8 text-gray-800 bg-[#00a7d3]">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto max-w-7xl">
        {banner.fields.message}
      </div>
    </section>
  )
}

export default Banner
