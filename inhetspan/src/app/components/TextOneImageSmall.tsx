"use client"

import { useEffect, useRef, useState } from "react"
import { useTransform, useScroll, motion } from "framer-motion"
import Image from "next/image"
import Lenis from "@studio-freight/lenis"
import EditorWrapper from "@/app/components/editor/EditorWrapper"
import { twMerge } from "tailwind-merge"

interface SingleImageProps {
  documentId: string
  image: string
  imagePosition?: "left" | "right"
  verticalPosition?: "above" | "below";
  className?: string
}

const TextSingleImageSmall: React.FC<SingleImageProps> = ({ documentId, image, imagePosition = "left", verticalPosition= "above", className }) => {
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

  const TextEditor = (
    <motion.div layout
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className={twMerge("mb-20 col-span-full lg:col-span-3 pb-10 flex px-10 pt-4", imagePosition === 'left' && 'lg:order-2')}>
        <EditorWrapper documentId={documentId} />
    </motion.div>
  )

  const SingleImg = (
    <div className={twMerge("pt-0 relative col-span-full lg:col-span-2", imagePosition === 'right' && 'lg:order-2')}>
      <motion.div layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        ref={container}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -dimension.height * 0.3]) }} 
        className={twMerge("w-full justify-center items-center h-full relative lg:absolute top-[35%] lg:left-[10%] left-[25%] flex-shrink-0 mx-auto lg:ml-10 lg:mr-0", className)}
      >
        <Image src={image} alt="Image" width={200} height={200} className="object-cover object-center"/>
      </motion.div>
    </div>
  )

  return (
    <motion.div       
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: '0%' }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      ref={container} 
      className="-mt-4 space-x-0 lg:space-x-10 pl-8 lg:pl-24 min-h-[500px] grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-10 p-4 "
    >
      {verticalPosition === 'above' ? SingleImg : TextEditor}
      {verticalPosition === 'below' ? SingleImg : TextEditor}
    </motion.div>
  )
}

export default TextSingleImageSmall;
