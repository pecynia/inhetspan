import React from 'react'
import Link from 'next/link'
import { Stethoscope, PhoneCall, ExternalLink } from 'lucide-react'
import TextComponent from '@/app/components/editor/TextComponent'

const HuisartsenPage = () => {
  const huisartsenInfo = [
    {
      name: 'Huisartsenpraktijk Wibbelink',
      href: 'https://huisartswibbelink.onzehuisartsen.nl/',
      spoedNummer: '0264455805'
    },
    {
      name: 'Huisartsenpraktijk Linders & Verduijn',
      href: 'https://praktijklindersenverduijn.onzehuisartsen.nl/',
      spoedNummer: '0264434483'
    },
    {
      name: 'Huisartsenpraktijk van Duivenboden',
      href: 'https://praktijkvanduivenboden.onzehuisartsen.nl/',
      spoedNummer: '0264422911'
    },
  ]

  const apothekenLinks = [
    { label: 'Apotheek het Span (voorheen Baljet)', href: 'https://www.alphega-apotheek.nl/web/apotheekbaljet/herhaalrecepten' },
    { label: 'Apotheek Witteveen', href: 'https://www.alphega-apotheek.nl/web/apotheekwitteveen/herhaalrecepten' },
    { label: 'Apotheek de Witte', href: 'https://www.alphega-apotheek.nl/web/apotheekdewitte/herhaalrecepten' },
    { label: 'Apotheek Velperweg', href: 'https://www.alphega-apotheek.nl/web/apotheekvelperweg/herhaalrecepten' },
  ]

  return (
    <div className='px-4 lg:px-24 mx-auto'>
      <TextComponent documentId='huisartsen-title' className='-mb-4 min-h-[242px]' />
      
      {/* Huisartsen */}
      <div className='space-y-6 pl-8'>
        {huisartsenInfo.map((huisarts, index) => (
          <div key={index} className='flex items-center bg-white p-4 rounded-xl shadow-md'>
            <Stethoscope size={32} className='text-primary mr-4' />
            <div>
              <Link href={huisarts.href}>
                <h3 className='text-xl font-semibold hover:text-blue-800'>{huisarts.name} <ExternalLink size={20} className='inline' /></h3>
              </Link>
              
              <p className='flex items-center text-primary hover:text-blue-800'>
                <PhoneCall size={20} className='mr-2' />
                <Link href={`tel:${huisarts.spoedNummer}`}>
                  {huisarts.spoedNummer}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Avond-, nacht- en weekenddienst */}
      <div className='mt-16 mb-10 bg-primary rounded-3xl p-4'>
        <TextComponent documentId='avond-nacht-weekend-dienst' className=' -mb-4 min-h-[220px]' />
        <ul className='list-disc list-outside pl-24 -mt-8 text-primary-foreground'>
          {apothekenLinks.map((link, index) => (
            <li key={index} className='mb-2'>
              <Link href={link.href}>
                <p className=' hover:text-blue-800 hover:cursor-pointer flex items-center'>
                  {link.label} <ExternalLink size={20} className='ml-1' />
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <TextComponent documentId='herhaal-gemak' className='' />
      </div>
    </div>
  )
}

export default HuisartsenPage
