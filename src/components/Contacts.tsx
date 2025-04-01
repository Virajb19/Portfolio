import Link from "next/link";
import EmailCard from "./EmailCard";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion'
import ContactForm from "./ContactForm";

const Links = [
    {
      href: "https://github.com/Virajb19/",
      icon: BsGithub,
      label: "GitHub",
    },
    {
      href: "https://x.com/V74277131",
      icon: BsTwitterX,
      label: "Twitter",
    },
    {
      href: "https://leetcode.com/u/virajb853/",
      icon: SiLeetcode,
      label: "LeetCode",
    },
    {
      href: "https://www.linkedin.com/in/viraj-bhardwaj-42b2542b1/",
      icon: BsLinkedin,
      label: "LinkedIn",
    },
    {
      href: 'https://drive.google.com/file/d/1nNo1hJ28LGrEda3wZyEKkOLXvl87JnIj/view?usp=sharing',
      icon: FaGoogleDrive,
      label: 'Resume'
    }
  ];


export default function Contacts() {

  return <footer id="contact" className="flex flex-col gap-10 items-center mt-4 z-30 section">
          <h3 className="text-5xl font-bold underline"><span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">Contact</span> Me</h3>
           <EmailCard />
          <div className="flex items-center gap-5 mb:gap-3">
              {Links.map((link, i) => {
                 return <motion.div key={i} initial={{opacity: 0, y: 15, rotate: 20}} whileInView={{opacity: 1, y: 0, rotate: 0}} viewport={{once: true}} transition={{duration: 1, delay: i * 0.3, type: 'spring', bounce: 0.5}} 
                 className="flex flex-col items-center gap-1">
                      <Link target="_blank" href={link.href} className="border-2 border-orange-400 bg-black p-4 mb:p-3 group rounded-lg relative overflow-hidden">
                       {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000"/> */}
                      <link.icon className="size-12 mb:size-7 text-orange-600 group-hover:text-yellow-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-105 duration-300"/>
                  </Link>
                   <h4 className="text-lg mb:hidden font-semibold text-orange-300">{link.label}</h4>
                 </motion.div>
              })}
          </div>
          <ContactForm />
</footer>
}