'use client'

import Header from '@/components/Header';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Contacts from '@/components/Contacts';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import TypingAnimation from "@/components/ui/typing-animation";
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';

export default function HomePage() {
  return <div className="w-full min-h-screen relative bg-black flex flex-col justify-center items-center pt-16 pb-7 text-white overflow-hidden">

       <Header />

       <div id='home' className='flex flex-col gap-3 items-center z-30 section'>
          <Image width={200} height={200} alt='user' src={'/memoji-computer.png'}/>
          <p className='text-5xl mb:text-3xl font-semibold'>Hey 👋 I'm {" "}
            <motion.span initial={{opacity: 0, filter: 'blur(7px)'}} whileInView={{opacity: 1, filter: 'blur(0px)'}} transition={{duration: 0.7, ease: 'easeInOut'}} className='uppercase bg-gradient-to-tr from-orange-400 to-orange-700 bg-clip-text text-transparent'>Viraj</motion.span>
          </p>
            <div className='flex items-center gap-2'>
                  <TypingAnimation delay={0.3} className='mb:text-2xl'>
                    I am a FullStack Developer
                </TypingAnimation>
                <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6, repeat: Infinity, repeatType: 'reverse'}} className='inline-block rounded-sm w-1 h-10 bg-orange-500'/>
            </div>
           <motion.button initial={{scale: 0.6, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.5, ease: 'easeOut'}}
            onClick={() => {
            //  window.open('/Resume.pdf', '_blank');
            //  const link = document.createElement('a')
            //  link.href = '/Resume.pdf'
            //  link.download = 'Resume_Viraj.pdf'
            //  link.click()
            window.open('https://drive.google.com/file/d/180L7ADtdQX1RGctJ1ytrsnKE0KVSrOsy/view?usp=sharing', '_blank')
           }} className='group relative flex items-center gap-2 px-4 py-2 rounded-lg text-2xl font-semibold overflow-hidden bg-gradient-to-t from-orange-600 to-orange-700'>
                <motion.div initial={{translateX: '-100%'}} animate={{translateX: '100%'}} transition={{duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4}} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"/>
                <FileText className='group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-200'/> Resume       
            </motion.button>
       </div>

       <Skills />
       <Projects />
       <Contacts />

       <div className='flex items-center font-bold text-2xl mb:text-lg mt-5'>
           Made with <motion.span initial={{opacity: 0, scale: 0.6}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6, delay: 0.4, type: 'spring', bounce: 0.8}} className='mx-1'> ❤️ </motion.span>
            by 
            <motion.span initial={{y: 15, filter: 'blur(5px)', opacity: 0}} whileInView={{y: 0, filter: 'blur(0px)', opacity: 1}} transition={{duration: 0.7, ease: 'easeInOut'}} className='bg-gradient-to-r ml-2 from-orange-400 via-orange-600 to-orange-700 bg-clip-text text-transparent'>viraj.bhardwaj</motion.span>
       </div>

       <StarsBackground />
       <ShootingStars />
  </div>
}