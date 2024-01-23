"use client"

import React, { useEffect, useRef, useState } from 'react'
import Lenis from "@studio-freight/lenis"
import { useTransform, useScroll, motion } from "framer-motion"
import Link from 'next/link'
import { Pill, Syringe, Wheat, Speech, ExternalLink } from 'lucide-react'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overview = () => {
    const offers = [
        { id: 1, title: 'Apotheek Het Span', icon: <Pill size={32} />, href: 'https://www.kringarnhemseapotheken.nl/apotheek-het-span/', color: 'bg-red-100' },
        { id: 2, title: 'Tandarts In Het Span', icon: <FontAwesomeIcon icon={faTooth} size='2xl' />, href: 'https://www.tandartsinhetspan.nl/', color: 'bg-blue-100' },
        { id: 3, title: 'Logopedie Top', icon: <Speech size={32} />, href: 'https://www.logopedietop.nl/', color: 'bg-purple-100' },
        { id: 4, title: 'Vlieg Diëtisten', icon: <Wheat size={32} />, href: 'https://allergie-envoeding.nl/', color: 'bg-green-100' },
        { id: 5, title: 'Prikpost Zeker Weten', icon: <Syringe size={32} />, href: 'https://www.zekerweten.nl/', color: 'bg-pink-100' },
    ]

    const huisartsenLinks = [
        { label: 'Huisartsenpraktijk Wibbelink', href: 'https://huisartswibbelink.onzehuisartsen.nl/' },
        { label: 'Huisartsenpraktijk Linders & Verduijn', href: 'https://praktijklindersenverduijn.onzehuisartsen.nl/' },
        { label: 'Huisartsenpraktijk van Duivenboden', href: 'https://praktijkvanduivenboden.onzehuisartsen.nl/' },
    ]

    const container = useRef<HTMLDivElement | null>(null)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
    })

    // We use lenis for 
    useEffect(() => {
        const lenis = new Lenis({
          smoothWheel: true,
          smoothTouch: true,
          normalizeWheel: true,
        })

        const raf = (time: number) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        const resize = () => {
          setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf)
        resize()

        return () => {
          lenis.destroy()
          window.removeEventListener("resize", resize)
        }
      }, [])

    return (
        <motion.div 
            ref={container}
            className='w-full bg-primary'
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }}
        >
            {/* Offers Section */}
            <div className='px-8 md:px-24 lg:px-56 w-full mx-auto'>
                
                {/* Huisartsen Section */}
                <div className='pt-10'>
                    <h2 className='text-3xl font-bold mb-8 text-primary-foreground'>Huisartsen</h2>
                    <ul className='list-inside list-disc pl-6 border-l-2 border-secondary'>
                        {huisartsenLinks.map((link, index) => (
                            <motion.div 
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                                className='pb-4 mb-4 border-b border-gray-300' 
                            >
                                <Link href={link.href} className=''>
                                    <p className='text-primary-foreground hover:text-blue-400 flex'>
                                        {link.label} <ExternalLink size={20} className="ml-2" />
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </ul>
                </div>

                {/* Overige zorgverleners Section */}
                <div className='mb-24 -mt-5'>
                    <h2 className='text-3xl font-bold mb-8 mt-16 text-primary-foreground'>Overige zorgverleners</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10'>
                        {offers.map(offer => (
                            <Link href={offer.href} key={offer.id} className={`${offer.color} rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-70`}>
                                <div key={offer.id} className='p-4 w-full h-36 shadow-lg flex flex-col items-center justify-center'>
                                    {offer.icon}
                                    <h3 className='text-normal font-semibold mt-4'>{offer.title}</h3>                                
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Overview
