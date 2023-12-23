import LandingPage from '@/app/components/LandingPage'
import Overview from '@/app/components/Overview'
import EndNote from '@/app/components/EndNote'

export default function Home() {
  return (
    <div className='py-10 flex flex-col justify-center items-center'>
      <LandingPage />
      
      <Overview />

    </div>
  )
}
