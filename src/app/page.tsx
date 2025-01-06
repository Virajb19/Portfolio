'use client'

import Header from '@/components/Header';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import Image from 'next/image';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Contacts from '@/components/Contacts';
import Skills from '@/components/Skills';

const words = [
  {
    text: "I",
    className: "text-white"
  },
  {
    text: "am",
    className: "text-white"
  },
  {
    text: "a",
    className: "text-white"
  },
  {
    text: "Fullstack",
    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800",
  },
  {
    text: "Developer",
    className: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800",
  },
];


export default function page() {
  return <div className="w-full min-h-screen bg-black flex justify-center py-16 text-white">
       <Header />
       <div className='flex flex-col gap-3 items-center'>
          <Image width={200} height={200} alt='user' src={'/memoji-computer.png'}/>
          <p className='text-5xl mb:text-3xl font-semibold'>Hey 👋 I'm {' '}
            <motion.span initial={{opacity: 0,scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5, ease: 'easeInOut'}} className='inline-block'>Viraj</motion.span>
          </p>
          <TypewriterEffectSmooth words={words}/>
           <button onClick={() => {
             const link = document.createElement('a')
             link.href = '/Resume.pdf'
             link.download = 'Resume_Viraj.pdf'
             link.click()
           }} className='group relative flex items-center gap-2 px-4 py-2 rounded-lg text-2xl font-semibold overflow-hidden bg-gradient-to-t from-orange-600 to-orange-700'>
                <motion.div animate={{translateX: ['-100%','100%']}} transition={{duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4}} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"/>
                <FileText className='group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-200'/> Resume       
            </button>
            {/* <Contacts /> */}
            <Skills />
       </div>
  </div>
}