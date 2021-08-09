import Link from 'next/link'
import { baseUrl } from '../utils'


export default function Planting ({ planting }) {

    return(
        <Link key={planting.name}
     href={`/plantings/${planting.id}`}
     >
      <a className='flex flex-col overflow-hidden mt-6'>
        {console.log("planting component:",planting)}
        {/* <img
          className='block w-full flex-1 rounded-lg'
          src={planting.poster[0] && `${baseUrl}${planting.poster[0].url}`}
          alt={planting.name}
        />
        <h2 className='text-blue-500 mt-3 text-center justify-end text-lg'>
          {planting.name} 
        </h2> */}
      </a>
    </Link>
    )


}