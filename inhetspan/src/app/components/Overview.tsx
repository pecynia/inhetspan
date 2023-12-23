"use client"

import React, { useEffect, useRef, useState } from 'react';
import Lenis from "@studio-freight/lenis"
import TextComponent from '@/app/components/editor/TextComponent';
import { useTransform, useScroll, motion } from "framer-motion"

const Overview = () => {
    const offers = [
        { id: 1, title: 'Offer 1', description: 'Description 1' },
        { id: 2, title: 'Offer 2', description: 'Description 2' },
        { id: 3, title: 'Offer 3', description: 'Description 3' },
        { id: 4, title: 'Offer 4', description: 'Description 4' },
    ];

    const huisartsenLinks = [
        { label: 'Link 1', href: '#' },
        { label: 'Link 2', href: '#' },
        { label: 'Link 3', href: '#' },
    ];

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
            className='py-10 px-4 mt-8 w-full bg-primary'
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.2]) }}
        >
            {/* Offers Section */}
            <div className='mb-10 '>
                <TextComponent documentId='offers-title' className='text-2xl font-bold mb-5' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {offers.map(offer => (
                        <div key={offer.id} className='bg-white rounded-lg p-4 shadow-lg'>
                            <h3 className='text-lg font-semibold'>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Huisartsen Section */}
            <div>
                <h2 className='text-2xl font-bold mb-5 text-primary-foreground'>Huisartsen</h2>
                <ul className='list-inside list-disc pl-4'>
                    {huisartsenLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className='text-blue-600 hover:text-blue-800'>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default Overview;
