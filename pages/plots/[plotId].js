import Layout from '../../components/Layout'
import Link from 'next/link'
import { baseUrl, fetchQuery } from '../../utils'

export default function PlotId({ plot }) {
  return (
    <Layout title={plot.plot_name} >
      <div className='pt-6'>
        <Link href='/'>
          <a className='text-red-500'>&larr; Back to home</a>
        </Link>
      </div>
      <div >
      <p  className='text-red-500'>plot no.{plot.plot_name}</p>
      <p  className='text-red-500'>plantings are : {plot.plantings.map((planting) => {planting.name })}</p>

      <ul>
      {plot.plantings.map((post) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </ul>

      </div>

        {console.log("plot in map", plot.plantings)}

    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const plot = await fetchQuery('plots', `${params.plotId}`)
  return {
    props: {
      plot
    }
  }
}

export async function getStaticPaths() {
  const plots = await fetchQuery('plots')
  const paths = plots.map((plot) => {
    return {
      params: { plotId: String(plot.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}