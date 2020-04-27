import Head from 'next/head'
import dynamic from 'next/dynamic'
import Layout, { siteTitle } from '../components/layout'
import Map from '../components/map'

const DynamicMap = dynamic(() => import('../components/map'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

export default function Home() {
  return (
    <section>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Trying to load map</p>
      </section>
      <section>
        <DynamicMap />
      </section>
    </section>
  )
}