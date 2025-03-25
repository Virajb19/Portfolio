import Image from "next/image";
import Link from "next/link";
import Radar from "./radar";
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

const projects = [
  {name: 'GitChat', descripton: 'Ask AI about your Github repository',stack : ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Zod', 'Tanstack Query', 'Stripe', 'Appwrite'], liveUrl: 'https://gitchat-viraj.vercel.app', github: 'https://github.com/Virajb19/GitChat'},
  {name: 'Quizmify', descripton: 'A Quiz platform',stack: ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Zod' ,'Tanstack Query'], liveUrl: 'https://quizmify-viraj.vercel.app', github: 'https://github.com/Virajb19/Quizmify'},
  {name: 'CodeCraft', descripton: 'Online IDE with multi-language support',stack: ['React JS', 'Express JS', 'Node JS','Typescript','Passport JS', 'Zustand', 'Socket IO','Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Tanstack Query'], liveUrl: 'https://codecraft-viraj.vercel.app', github: 'https://github.com/Virajb19/CodeCraft'},
  {name: 'ChatPDF', descripton: 'Upload PDFs and chat with an AI assistant to extract key insights.',stack: ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'Tanstack Query', 'Stripe', 'Zod', 'AppWrite', 'Pinecone DB'], liveUrl: 'https://chatpdf-viraj.vercel.app', github: 'https://github.com/Virajb19/ChatPDF'},
  {name: 'Learning Journey', descripton: 'Create courses using AI',stack: ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'tRPC', 'Zod', 'Stripe'], liveUrl: 'https://learning-journey-viraj.vercel.app/', github: 'https://github.com/Virajb19/Learning-Journey'},
  {name: 'Quick Chat', descripton: 'A chat app built using Socket IO',stack: ['Next JS', 'Typescript','Next Auth', 'Postgresql','Prisma', 'Tailwind CSS', 'ShadCN UI', 'tRPC', 'Zod', 'Socket IO'], liveUrl: 'https://quickchat-viraj.vercel.app', github: 'https://github.com/Virajb19/QuickChat'}
]

export default function Projects() {
  return <div id="projects" className="flex flex-col items-center mb:overflow-hidden w-full pb-4 section">
     <h2 className="text-5xl mb-10 mt-5 font-bold text-orange-600 underline">Projects</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:mx-3 gap-10">
        {projects.map((project,i) => {
          const image = `/${project.name.split(' ').join('').toLowerCase()}.png`
           return <motion.div key={project.name} initial={{opacity: 0, x: i % 2 === 0 ? -30 : 30}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 0.7, delay: i * 0.1, ease: 'easeInOut'}}
            className="relative group max-w-[500px] mb:w-[90vw] flex flex-col gap-2 border border-orange-500 rounded-lg duration-300 hover:-translate-y-2">
           <div className="absolute -inset-[2px] bg-orange-600 blur-md sm:group-hover:animate-pulse sm:group-hover:duration-700"/>
             <div className="flex flex-col gap-3 justify-between z-10 bg-black rounded-lg h-full">
                  <div className="flex flex-col gap-3">
                       <h3 className="text-3xl font-bold ml-4 mt-2">{project.name}</h3>
                       <Image src={image} alt="gitchat" width={500} height={500} className="object-contain border-y-2 border-zinc-300"/>
                       {/* <video src={'./gitchat.mp4'} loop autoPlay muted/> */}
                       <div className="flex flex-col gap-2 mx-3">
                         <p className="text-xl font-bold text-left">{project.descripton}</p>
                           <div className="flex flex-wrap gap-2">
                              {project.stack.map(s => {
                                 return <span key={s} className="text-sm border border-orange-500 bg-orange-500/15 p-1 font-semibold rounded-md">{s}</span>
                              })}
                           </div>
                        </div>
                     </div>
                       {/* <div className="h-[2px] bg-gray-600 my-3"/> */}

                      <div className="flex items-center gap-3 font-semibold mb-3 pl-4 pt-2 border-t-[2.5px] border-gray-500">
                            <Link target="_blank" href={project.liveUrl} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10">
                               <Radar />
                               Live site
                            </Link>
                            <Link target="_blank" href={project.github} className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/20">
                                <BsGithub className="size-5 text-orange-500"/> Github
                            </Link>
                      </div>
             </div>
         </motion.div>
        })}
  </div>
  </div>
}