import Link from "next/link";
import EmailCard from "./EmailCard";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useForm } from "react-hook-form";
import { z } from 'zod'

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
      href: 'https://drive.google.com/file/d/1f2a4-LsZmhOrx8qUNIRQHNjItng1hWZJ/view?usp=sharing',
      icon: FaGoogleDrive,
      label: 'Resume'
    }
  ];

const formSchema = z.object({
    name: z.string().min(1, { message: 'Provide a name'}).max(10, { message: 'Name should be less than 15 chars'}),
    email: z.string().email({ message: 'Enter a valid email'}),
    linkedIn: z.string().url().refine(url => url.includes('linkedin.com'), { message: 'Provide a valid URL'}),
    message: z.string().min(1, { message: 'Provide a message'}).max(2000)
})

type Input = z.infer<typeof formSchema>

export default function Contacts() {

    const form = useForm()

  return <footer className="flex flex-col gap-10 items-center">
           <EmailCard />
            {/* <form action="https://getform.io/f/aroompzb" method="POST">
                 <input name="name" placeholder="Enter your name"/>
                <button type="submit" className="border">Send</button>
            </form> */}
          <div className="flex items-center gap-5">
              {Links.map(link => {
                 return <div className="flex flex-col items-center gap-1">
                      <Link target="_blank" href={link.href} className="border-2 border-orange-400 p-4 group rounded-lg relative overflow-hidden">
                       <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000"/>
                      <link.icon className="size-12 text-orange-600 group-hover:rotate-12 duration-300"/>
                  </Link>
                   <h4 className="text-lg font-semibold text-orange-300">{link.label}</h4>
                 </div>
              })}
          </div>
  </footer>
}