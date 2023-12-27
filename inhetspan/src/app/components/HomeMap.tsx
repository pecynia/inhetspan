import React from 'react'
import Map from '@/app/components/Map'

function HomeMap() {
  return (
    <div className='-mb-10 -mt-14 w-full '>
        <h1 className='px-8 md:px-24 lg:px-56 mx-auto text-3xl font-bold mb-8 text-primary'>Locatie</h1>
        <div className='w-full h-[30rem]'>
            <Map />
        </div>
    </div>

  )
}

export default HomeMap