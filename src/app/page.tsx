'use client'

import Header from '@/components/Header';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Contacts from '@/components/Contacts';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TypingAnimation from "@/components/ui/typing-animation";

export default function page() {
  return <div className="w-full min-h-screen bg-black flex justify-center py-16 text-white">
       <Header />
       <div id='home' className='flex flex-col gap-3 items-center'>
          <Image width={200} height={200} alt='user' src={'/memoji-computer.png'}/>
          <p className='text-5xl mb:text-3xl font-semibold'>Hey 👋 I'm <span className='uppercase bg-gradient-to-tr from-orange-400 to-orange-700 bg-clip-text text-transparent'>Viraj</span>
          </p>
            <div className='flex items-center gap-2'>
                  <TypingAnimation className='mb:text-2xl'>
                    I am a FullStack Developer
                </TypingAnimation>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7, repeat: Infinity, repeatType: 'reverse'}} className='inline-block rounded-sm w-1 h-10 bg-orange-500'/>
            </div>
           <motion.button initial={{scale: 0.6, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.4, ease: 'easeOut'}}
            onClick={() => {
             const link = document.createElement('a')
             link.href = '/Resume.pdf'
             link.download = 'Resume_Viraj.pdf'
             link.click()
           }} className='group relative flex items-center gap-2 px-4 py-2 rounded-lg text-2xl font-semibold overflow-hidden bg-gradient-to-t from-orange-600 to-orange-700'>
                <motion.div initial={{translateX: '-100%'}} animate={{translateX: '100%'}} transition={{duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4}} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"/>
                <FileText className='group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-200'/> Resume       
            </motion.button>
            <Skills />
            <Projects />
            <Contacts />
       </div>
  </div>
}