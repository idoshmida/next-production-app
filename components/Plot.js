import Link from 'next/link'
import Image from 'next/image'


export default function Plot ({ plot }) {

    return(
        <Link key={plot.plot_name}
     href={`/plots/${plot.id}`}
     >
      <a className='flex flex-col overflow-hidden mt-6'>
       
        <h2 className='text-blue-500 mt-3 text-center justify-end text-lg'>
          {plot.plot_name} 
        </h2>
      </a>
    </Link>
    )


}