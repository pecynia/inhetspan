import Image from 'next/image'
import TextComponent from '@/app/components/editor/TextComponent'
import LandingPage from '@/app/components/LandingPage'
import Overview from '@/app/components/Overview'

export default function Home() {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>
      <LandingPage />
      
      <Overview />

    </div>
  )
}
