import Image from 'next/image'
import Link from 'next/link'
import { baseUrl } from '../utils'


export default function Planting ({ planting }) {
    return(

        <Link key={planting.name}
     href={`/plantings/${planting.id}`}
     >
      <a className='flex flex-col overflow-hidden mt-6'>
        <Image
          className='block w-full flex-1 rounded-lg'
          src={planting.poster[0] && `${planting.poster[0].url}`}
          alt={planting.name}
          width={80}
          height={120}
          quality={100}
        />
        <h2 className='text-blue-500 mt-3 text-center justify-end text-lg'>
          {planting.name} name
        </h2>
      </a>
    </Link>
    )


}