import Image from 'next/image'
import TextComponent from '@/app/components/editor/TextComponent'

export default function Home() {
  return (
    <div className='py-16 flex flex-col justify-center items-center '>
      <TextComponent documentId='intro' />
    </div>
  )
}
