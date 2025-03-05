import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import { twMerge } from "tailwind-merge"
import { useLocalStorage, useIsMounted, useIntersectionObserver } from "usehooks-ts"
import { toast } from "sonner"

export default function Header() {

    // const [activeTab,setActiveTab] = useLocalStorage('activeTab', 'Home')
    const [activeTab, setActiveTab] = useState('Home')
    const [mounted,setMounted] = useState(false)
    // const isMounted = useIsMounted()

    // const { isIntersecting, ref} = useIntersectionObserver({ threshold: [0.6, 1]})
    // toast.success(isIntersecting)

    // const [isScrolling, setIsScrolling] = useState(false) 

    useEffect(() => {
      setMounted(true)
    }, [])

    // useEffect(() => {
    //   if(isScrolling) return
  
    //    const sections = document.querySelectorAll('.section')
       
    //    const observer = new IntersectionObserver(
    //     (entries: IntersectionObserverEntry[]) => {
    //         let fullyVisible: HTMLElement | null = null
    //         let mostVisible: HTMLElement | null = null
    //         let highestRatio = 0

    //         entries.forEach(entry => {
    //             const target = entry.target as HTMLElement

    //             if (entry.intersectionRatio === 1) {
    //                 fullyVisible = target
    //             }

    //             if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
    //                 mostVisible = target
    //                 highestRatio = entry.intersectionRatio
    //             }
    //         })

    //         const selectedSection: HTMLElement | null = fullyVisible || mostVisible 

    //         if (selectedSection) {
    //             const sectionId = selectedSection.id.charAt(0).toUpperCase() + selectedSection.id.slice(1)
    //             setActiveTab(sectionId)
    //         }
    //     },
    //     { threshold: [0.6, 1.0] }
    // )
            
    //     sections.forEach(section => observer.observe(section));

    //     return () => {
    //         sections.forEach(section => observer.unobserve(section));
    //     }

    // }, [isScrolling])

    function handleClick(tab: string) {
      // setIsScrolling(true)

      setActiveTab(tab)
      const element = document.getElementById(tab.toLowerCase())
      if(element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'})
      }

      // setTimeout(() => setIsScrolling(false), 800)
    }

    if(!mounted) return null
    
  return <motion.nav initial={{y: -70}} animate={{y: 0}} transition={{type: 'spring', bounce: 0.7, duration: 0.8}}
  className="fixed z-[99] top-4 backdrop-blur-md flex items-center gap-3 mb:gap-1 font-semibold text-lg mb:text-base rounded-full p-1 bg-white/10 border border-white/15">
      {['Home','Skills','Projects','Contact'].map(tab => {
        return <button key={tab} onClick={() => handleClick(tab)} className={twMerge("relative px-3 py-1.5 rounded-full duration-300 transition-colors",
            tab === activeTab ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'
        )}>
            {tab}
            {tab === activeTab && (
              <motion.span layoutId="activeTab" transition={{duration: 0.7, type: 'spring', bounce: 0.3}} className="absolute inset-0 rounded-full bg-orange-700 -z-10"/>
            )}
        </button>
      })}
  </motion.nav>
}