import { Head } from 'next/document'
import Loading from './Loading'

const LoadingPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Loading />
    </>
  )
}

export default LoadingPage
