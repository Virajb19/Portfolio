import Image from "next/image";
import Link from "next/link";
import Radar from "./radar";
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

const projects = [
  {name: 'Github', stack : ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Tanstack Query', 'Stripe'], liveUrl: '', github: 'https://github.com/Virajb19/GitChat'},
  {name: 'Quizmify', stack: ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Tanstack Query'], liveUrl: '', github: 'https://github.com/Virajb19/Quizmify'},
  {name: 'CodeCraft', stack: ['React JS', 'Express JS', 'Node JS','Typescript','Passport JS', 'Zustand', 'Socket IO','Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Tanstack Query'], liveUrl: '', github: 'https://github.com/Virajb19/CodeCraft'},
  {name: 'ChatPDF', stack: ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Tanstack Query', 'Stripe', 'Zod', 'AWS S3', 'Pinecone DB'], liveUrl: '', github: 'https://github.com/Virajb19/ChatPDF'}
]

export default function Projects() {
  return <div id="projects" className="flex flex-col items-center mb:overflow-hidden">
     <h2 className="text-5xl mb-10 font-bold text-orange-600 underline">Projects</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-3 gap-10">
        {projects.map((project,i) => {
           return <motion.div key={project.name} initial={{opacity: 0, x: i % 2 === 0 ? -30 : 30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: i * 0.1, ease: 'easeInOut'}}
            className="relative group max-w-[500px] mb:w-[90vw] flex flex-col gap-2 border border-orange-500 rounded-lg duration-300 hover:-translate-y-2">
           <div className="absolute -inset-[2px] bg-orange-600 blur-md group-hover:animate-pulse"/>
             <div className="flex flex-col gap-3 z-10 bg-black rounded-lg h-full">
                   <h3 className="text-3xl font-bold ml-4 mt-2">{project.name}</h3>
                   <Image src={'/gitchat.png'} alt="gitchat" width={500} height={500} className="object-contain rounded-lg"/>
                     <div className="flex flex-col gap-2 mx-3">
                         <p className="text-xl font-bold text-left">Ask AI about your Github repository</p>
                           <div className="flex flex-wrap gap-2">
                               {project.stack.map(s => {
                                 return <span key={s} className="text-sm border border-orange-500 bg-orange-500/15 p-1 font-semibold rounded-md">{s}</span>
                               })}
                           </div>
                       <div className="h-[2px] bg-gray-600 my-3"/>
                         <div className="flex items-center gap-3 font-semibold mb-3">
                            <Link target="_blank" href={'/'} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10">
                               <Radar />
                               Live site
                            </Link>
                            <Link target="_blank" href={project.github} className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/20">
                                <BsGithub className="size-5 text-orange-500"/> Github
                            </Link>
                         </div>
                     </div>
             </div>
         </motion.div>
        })}
  </div>
  </div>
}