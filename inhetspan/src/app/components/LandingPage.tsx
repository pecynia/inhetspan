import React from 'react'
import Image from 'next/image'
import TextComponent from '@/app/components/editor/TextComponent'

function LandingPage() {
  return (
    <div className='mb-16 h-80'>
        <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-x-hidden'>
            <Image 
                alt='Background Image' 
                src='/colorful_2.png'
                fill
                className='object-cover ml-32'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-custom'></div>
        </div>
        <div className='flex flex-col justify-center items-start pl-20 -mt-6'>
            <TextComponent documentId='intro' className='w-1/2' />
        </div>
    </div>
  )
}

export default LandingPage