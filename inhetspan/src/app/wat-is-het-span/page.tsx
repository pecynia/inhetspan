import React from 'react'
import TextSingleImageSmall from '@/app/components/TextOneImageSmall'

function page() {
  return (
    <div className='mb-16 flex'>
       <TextSingleImageSmall documentId="wat-is-het-span" image="/fles.jpg" imagePosition="right" verticalPosition="below" />
    </div>
  )
}

export default page