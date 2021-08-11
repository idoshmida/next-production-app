import Layout from '../../components/Layout'
import Link from 'next/link'
import { baseUrl, fetchQuery } from '../../utils'
import Image from 'next/image'

export default function PlantInside({ planting }) {
  return (
    <Layout title={planting.title} description={planting.planting_description}>
      <div className='pt-6'>
        <Link href='/'>
          <a className='text-red-500'>&larr; Back to home idoshmidsmids</a>
        </Link>
      </div>
      <section className='flex flex-col md:flex-row md:space-x-6 py-10'>
        <div className='w-full md:w-auto'>
          <Image
            className='rounded-lg w-full sm:w-64'
            src={`${planting.poster[0] && planting.poster[0].url}`}
            // i took ${baseUrl} from up
            alt={planting.title}
            width={100}
            height={150}
            />
        </div>
        <div className='w-full md:flex-1 flex flex-col mt-6 md:mt-0'>
          <div className='flex-1'>
            <h2 className='text-white text-2xl font-semibold'>
              {planting.title}{' '}
              <span className='text-gray-400 font-normal'>
                ({new Date(planting.description).getFullYear()})
              </span>{' '}
            </h2>
            <span className='text-sm text-gray-400 block mt-1'>
              {planting.name ?? ''}
            </span>
            { planting.waters && planting.waters.map((water) => (
              <Link key={water.name} href={`/waters/${water.id}`}>
                <a className='rounded-lg inline-block mt-3 text-xs py-1 uppercase tracking wide px-2 bg-red-500 text-white mr-2'>
                  {water.name}
                </a>
              </Link>
            ))}
            <p className='text-white text-lg mt-5'>{planting.movie_description}</p>
          </div>
          <div className='flex sm:items-center flex-col sm:flex-row sm:space-x-6 mt-6 md:mt-0'>
            <div className='flex items-end'>
              <p className='text-white uppercase text-sm tracking-whide'>
                Released on:
              </p>{' '}
              <time
                className='pl-2 text-sm uppercase tracking-wide text-gray-400'
                dateTime={planting.release_date}>
                {new Date(planting.release_date).toDateString()}
              </time>
            </div>
            <div className='flex items-end mt-3 sm:mt-0'>
              <p className='text-white uppercase text-sm tracking-whide'>
                plant date:
              </p>
              <span className='pl-2 tracking-wide uppercase text-xs text-gray-400'>
                {planting.start_date} 
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const planting = await fetchQuery('plantings', `${params.plantingId}`)
  return {
    props: {
      planting
    }
  }
}

export async function getStaticPaths() {
  const plantings = await fetchQuery('plantings')
  const paths = plantings.map((planting) => {
    return {
      params: { plantingId: String(planting.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}