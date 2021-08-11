import Layout from '../../components/Layout'
import { fetchQuery } from '../../utils'
import Plot from '../../components/Plot'


export default function Plots({ plots }) {
    return (
      <Layout title='Next Movies' description='Watch your next movies'>
        <section className='grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4'>
          {plots.map((plot) => (
           <Plot key={plot.id} plot={plot}></Plot>
            // <MovieCard key={movie.title} movie={movie} />
            // console.log(movie)
          ))}
        </section>
      </Layout>
    ) 
  }
  
  export async function getServerSideProps() {
    const plots = await fetchQuery('plots')
    return {
      props: {
        plots
      }
    }
  }