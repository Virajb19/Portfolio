import Image from "next/image";

const skills = ['Typescript','React JS','Express JS', 'Node JS', 'Next JS', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion', 'Zustand','Prisma', 'Postgresql',
 'Tanstack Query', 'Zod', 'Socket IO', 'Next Auth', 'Docker'
]

export default function Skills() {
  return <section id="skills" className="flex flex-col items-center gap-3 mt-7">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Tech Stack</h2>
       <ul className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-3xl">
          {skills.map((skill,i) => {
            const image = skill.toLowerCase().replace(' ', '') 
            const file = (skill === 'Next JS' || skill === 'Next Auth') ? '.png' : '.svg'
            return <li key={skill} className="bg-white/10 to-transparent rounded-lg p-4 flex flex-col items-center font-semibold text-lg uppercase gap-2"> 
                  <Image src={'/' + image + file} width={60} height={60} alt={skill}/>
            </li>
          })}
       </ul>
  </section>
}
