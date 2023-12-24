import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import TextComponent from '@/app/components/editor/TextComponent'

const LinksPage = () => {
  const linkCategories = [
    {
      title: 'Adressen in de zorg',
      links: [
        { label: 'Apotheek.nl', href: 'http://www.apotheek.nl' },
        { label: 'GGD', href: 'http://www.ggd.nl' },
        { label: 'Kies beter Zorginstituut Nederland', href: 'http://www.kiesbeter.nl/' },
        { label: 'Thuisarts.nl', href: 'http://thuisarts.nl' },
      ],
    },
    {
      title: 'Bijwerkingen',
      links: [
        { label: 'Bijwerkingen geneesmiddelen', href: 'http://www.apotheek.nl/Thema_s/Thema_s/Bijwerkingen.aspx?mId=10702&rId=19' },
        { label: 'Nederlands bijwerkingen centrum Lareb', href: 'http://www.lareb.nl/' },
      ],
    },
    {
      title: 'Eerste hulp',
      links: [
        { label: 'Brandwonden', href: 'http://www.thuisarts.nl/brandwonden/ik-heb-last-van-brandwond' },
        { label: 'Gifwijzer', href: 'http://www.gifwijzer.nl/' },
        { label: 'Kinderen en medicijnvergiftiging', href: 'http://www.apotheek.nl/themas/kinderen-en-medicijnvergiftiging' },
        { label: 'Tips bij EHBO', href: 'http://www.ehbo.nl/tips/' },
      ],
    },
    {
      title: 'Geneesmiddelen',
      links: [
        { label: 'Geneesmiddelen en Alcohol', href: 'http://www.apotheek.nl/Thema_s/Thema_s/Alcohol_en_medicijnen.aspx?mId=10702&rId=4' },
        { label: 'Geneesmiddelen en verkeer', href: 'http://www.apotheek.nl/Thema_s/Thema_s/Medicijnen_in_het_verkeer.aspx?mId=10702&rId=88' },
        { label: 'Medicijnen', href: 'http://www.apotheek.nl/Medische_informatie/Medicijnen/Medicijnen/default.aspx?mId=10698&rId=' },
        { label: 'Medicijnkosten Zorginstituut Nederland', href: 'http://www.medicijnkosten.nl/' },
      ],
    },
    {
      title: 'Gezondheidswebsites',
      links: [
        { label: 'Apotheek.nl', href: 'http://www.apotheek.nl' },
        { label: 'Kies beter Zorginstituut Nederland', href: 'http://www.kiesbeter.nl/' },
        { label: 'Thuisarts.nl', href: 'http://thuisarts.nl' },
      ],
    },
    {
      title: 'Patiëntenvereniging',
      links: [
        { label: 'Leefwijzer voor patiënten met handicap', href: 'http://www.leefwijzer.nl/' },
        { label: 'Patiënten Federatie Nederland (vh NPCF)', href: 'https://www.patientenfederatie.nl/' },
        { label: 'Startpagina patiëntverenigingen', href: 'http://patientenvereniging.startpagina.nl/' },
      ],
    },
    {
      title: 'Reizen',
      links: [
        { label: 'Landelijke Coördinatie centrum', href: 'http://www.lcr.nl/' },
        { label: 'Medicijnen op reis', href: 'http://www.apotheek.nl/Thema_s/Thema_s/Medicijnen_op_reis.aspx?mId=10702&rId=11' },
        { label: 'Rijksinstituut voor Volksgezondheid en Milieu', href: 'http://www.rivm.nl/' },
      ],
    },
    {
      title: 'Vergoedingen',
      links: [
        { label: 'Medicatie vergoeding', href: 'http://www.rijksoverheid.nl/onderwerpen/geneesmiddelen/vraag-en-antwoord/welke-medicijnen-krijg-ik-vergoed.html' },
        { label: 'Medicijnkosten', href: 'https://www.medicijnkosten.nl/' },
      ],
    },
    {
      title: 'Zwangerschap',
      links: [
        { label: 'Alles over anticonceptiepil', href: 'http://www.apotheek.nl/Thema_s/Thema_s/Anticonceptiepil.aspx?mId=10702&rId=20' },
        { label: 'Geneesmiddelen en zwangerschap', href: 'http://www.apotheek.nl/Thema_s/Thema_s/Zwangerschap__klachten_en_medicijnen.aspx?mId=10702&rId=102' },
        { label: 'Pil Vergeten', href: 'http://www.thuisarts.nl/anticonceptiepil/ik-ben-pil-vergeten' },
      ],
    },
  ]
  

  return (
    <div className='px-4 lg:px-24 mx-auto'>
      <TextComponent documentId='links-title' className='min-h-[240px]' />
  
      <div className='bg-primary text-primary-foreground rounded-3xl p-4 space-y-10 mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10'>
          {linkCategories.map((category, index) => (
            <div key={index} className='bg-primary p-6'>
              <h2 className='text-2xl font-semibold mb-4'>{category.title}</h2>
              <ul className='list-none pl-0'>
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='mb-2'>
                    <Link href={link.href}>
                      <p className='text-blue-600 hover:text-blue-800 flex items-center'>
                        {link.label} <ExternalLink size={20} className='ml-1' />
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}  

export default LinksPage
