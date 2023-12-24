import React from 'react'
import TextSingleImage from '@/app/components/TextOneImage'

function page() {
  return (
    <div className='px-4 lg:px-24 mx-auto pt-28'>
      
      <TextSingleImage documentId="don" image="/paard.jpg" imagePosition="right" verticalPosition="below" />      
    
      <TextSingleImage documentId="fietsenrek" image="/fietsenrek.jpg" imagePosition="left" verticalPosition="below" />
    
      <TextSingleImage documentId="muurschilder" image="/muurschilder.jpg" imagePosition="right" verticalPosition="below" />

      <TextSingleImage documentId="schilder" image="/schilder.jpg" imagePosition="left" verticalPosition="below" />

    </div>
  )
}

export default page