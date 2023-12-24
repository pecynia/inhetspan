"use client"

import React, { useEffect, useRef, useState } from 'react'
import Lenis from "@studio-freight/lenis"
import { useTransform, useScroll, motion } from "framer-motion"
import Link from 'next/link'
import { Pill, Stethoscope, Syringe, WheatOff, Speech, HeartPulse, ExternalLink } from 'lucide-react'

const Overview = () => {
    const offers = [
        { id: 1, title: 'Apotheek', icon: <Pill size={32} />, href: 'https://www.kringarnhemseapotheken.nl/apotheek-het-span/', color: 'bg-red-100' },
        { id: 2, title: 'Tandarts', icon: <Syringe size={32} />, href: 'https://www.tandartsinhetspan.nl/', color: 'bg-blue-100' },
        { id: 3, title: 'Logopedie', icon: <Speech size={32} />, href: 'https://www.logopedietop.nl/', color: 'bg-purple-100' },
        { id: 4, title: 'Voedselallergie', icon: <WheatOff size={32} />, href: 'https://allergie-envoeding.nl/', color: 'bg-green-100' },
        { id: 5, title: 'Prikpost Rijnstate', icon: <HeartPulse size={32} />, href: 'https://www.zekerweten.nl/', color: 'bg-pink-100' },
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
            <div className='px-6 md:px-24 lg:px-56 w-full mx-auto'>
                <div className='mb-24'>
                    <h2 className='text-3xl font-bold mb-8 mt-16 text-primary-foreground'>Waar wil je terecht?</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12'>
                        {offers.map(offer => (
                            <div key={offer.id} className={`${offer.color} rounded-lg p-6 w-full h-48 shadow-lg flex flex-col items-center justify-center`}>
                                {offer.icon}
                                <h3 className='text-lg font-semibold mt-4'>{offer.title}</h3>
                                <Link href={offer.href}>
                                    <p className="mt-2 text-blue-600 hover:text-blue-800 flex items-center">
                                        Meer Info <ExternalLink size={20} className="ml-1" />
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Huisartsen Section */}
                <div className='mb-20'>
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
                                    <p className='text-primary-foreground hover:text-blue-800 flex'>
                                        {link.label} <ExternalLink size={20} className="ml-2" />
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default Overview
