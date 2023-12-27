import React from 'react'
import Image from 'next/image'
import TextComponent from '@/app/components/editor/TextComponent'

function LandingPage() {
  return (
    <div className='mb-32 sm:mb-28 h-80'>
        <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-x-hidden'>
            <Image 
                alt='Background Image' 
                src='/hetspan2.png'
                fill
                className='object-cover ml-64 opacity-80 hidden sm:block'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-custom'></div>
        </div>
        <div className='flex flex-col justify-center items-start pl-0 md:pl-10 -mt-24 sm:-mt-12'>
            <TextComponent documentId='intro' className='w-full md:w-2/3 lg:w-3/5' />
        </div>
    </div>
  )
}

export default LandingPage