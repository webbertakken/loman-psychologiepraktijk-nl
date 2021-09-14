import FacebookIcon from './social/FacebookIcon'
import TwitterIcon from './social/TwitterIcon'
import YoutubeIcon from './social/YoutubeIcon'
import InstagramIcon from './social/InstagramIcon'
import Vocation from './fields/Vocation'
import Location from './fields/Location'
import Bio from './fields/Bio'
import GetInTouchButton from './fields/GetInTouchButton'
import LinkedInIcon from './social/LinkedInIcon'
import { ProfileSectionEntry } from '../../../types/section'

interface Props {
  section: ProfileSectionEntry
}

const ProfileCardSection = ({ section }: Props): JSX.Element => {
  const {
    title,
    photo,
    vocation,
    location,
    shortDescription,
    getInTouchText,
    getInTouchLink,
    facebookHandle,
    instagramHandle,
    linkedInHandle,
    twitterHandle,
    youtubeHandle,
  } = section.fields

  const photoUrl = `https:${photo.fields.file.url}`

  return (
    <div
      className="w-full h-auto lg:h-screen py-2 lg:py-0"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1446057468532-87b7525217d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3902&q=80')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{ backgroundImage: `url('${photoUrl}')` }}
            />

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{title}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
            <Vocation vocation={vocation} />
            <Location location={location} />
            <Bio shortDescription={shortDescription} />

            {getInTouchLink && (
              <GetInTouchButton text={getInTouchText} link={getInTouchLink} />
            )}

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
              {twitterHandle && <TwitterIcon handle={twitterHandle} />}
              {facebookHandle && <FacebookIcon handle={facebookHandle} />}
              {instagramHandle && <InstagramIcon handle={instagramHandle} />}
              {youtubeHandle && <YoutubeIcon handle={youtubeHandle} />}
              {linkedInHandle && <LinkedInIcon handle={linkedInHandle} />}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            src={photoUrl}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileCardSection
