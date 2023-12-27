import React from 'react'
import TextComponent from '@/app/components/editor/TextComponent';
import Map from '@/app/components/Map';

function page() {
  return (
    <div className='mx-auto'>
      <TextComponent documentId='route' className='px-4 lg:px-24  -mb-4 min-h-[220px]' />
      <div className='w-full h-96 -mt-24'>
        <Map />
      </div>
    </div>
  );
}

export default page