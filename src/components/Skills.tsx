import Image from "next/image";
import { useMediaQuery } from 'usehooks-ts'

const skills = ['Typescript','React JS','Express JS', 'Node JS', 'Next JS', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion', 'Zustand','Prisma', 'Postgresql',
 'Tanstack Query', 'Zod', 'Socket IO', 'Next Auth', 'Docker'
]

export default function Skills() {

    const isMobile = useMediaQuery('(max-width: 640px)')

  return <section id="skills" className="flex flex-col items-center gap-3 mt-7">
      <h2 className="text-5xl mb-4 font-bold underline"> Tech <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Stack</span></h2>
       <ul className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb:gap-1 max-w-3xl mb:mx-4">
          {skills.map((skill,i) => {
            const image = skill.toLowerCase().replace(' ', '') 
            const file = (skill === 'Next JS' || skill === 'Next Auth') ? '.png' : '.svg'
            return <li key={skill} className="flex flex-col items-center font-semibold text-lg uppercase gap-2"> 
                <div className="bg-white/10 to-transparent rounded-lg p-4 mb:p-2">
                  <Image src={'/' + image + file} width={isMobile ? 50 : 60} height={isMobile ? 50 : 60} alt={skill}/>
                </div>
                <h3 className="truncate mb:text-sm">{skill}</h3>
            </li>
          })}
       </ul>
  </section>
}
