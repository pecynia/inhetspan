import React from 'react'
import Link from 'next/link'
import TextComponent from '@/app/components/editor/TextComponent'
import { Search } from 'lucide-react'

const CamerabewakingPage = () => {
  return (
    <div className='px-4 lg:px-24 mx-auto'>
      <TextComponent documentId='camerabewaking' className='min-h-[600px] -mb-14' />

      <div className='flex justify-center mb-20 pt-4'>
        <Link href='/DPIA.pdf'>
          <p className='flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-secondary'>
            <Search className='mr-2' />
            Bekijk DPIA document (PDF)
          </p>
        </Link>
      </div>
    </div>
  )
}

export default CamerabewakingPage
