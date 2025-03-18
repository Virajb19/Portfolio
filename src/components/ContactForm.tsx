import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react';
import { toast } from 'sonner'
import { useRef } from 'react';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string

const sendMessageSchema = z.object({
    name: z.string().min(1, { message: 'Provide your name'}).max(30),
    email: z.string().email({ message: 'Email is not valid!'}),
    linkedIn: z.string().url({ message: 'Invalid URL'}).refine(url => url.includes('linkedin.com'), {message: 'This is not Linkedin URL'}).optional().or(z.literal('')),
    message: z.string().min(1, { message: 'Enter a message'}).max(1000, { message: 'message too big!'})
})

type Input = z.infer<typeof sendMessageSchema>

export default function ContactForm() {

    const form = useForm<Input>({
        resolver: zodResolver(sendMessageSchema),
        defaultValues: {email: '', name: '', message: '', linkedIn: ''}
    })

    const formRef = useRef<HTMLFormElement>(null)

    async function onSubmit(data: Input) {
        console.log(data)

        if(formRef.current) {
            try {
             const res = await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
             if(res.status !== 200) {
                throw new Error(`Error: ${res.text}`)
             }
             
             toast.success('Message sent successfully.', {duration: 3000})
             form.reset()
             form.setValue('linkedIn', '')
            } catch(err) {
                console.error(err)
                toast.error('Error sending message.Try Mailing me!', {duration: 5000})
            }              
        }
    }   
    
  return <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{duration: 1.2, ease: 'easeInOut'}} className="border mb:w-[90vw] max-w-2xl w-full p-3 rounded-xl backdrop-blur-2xl border-gray-700 bg-white/10">
             <Form {...form}>
                <form ref={formRef} className='flex flex-col gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <h3 className='text-4xl mb:text-3xl font-bold underline mx-auto'>Send me a {" "}
                        <span className='bg-gradient-to-tr from-orange-400 via-orange-500 to-orange-700 bg-clip-text text-transparent'>Message!</span>
                    </h3>
                    <div className='flex items-center gap-2 w-full'>
                         <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem className='flex flex-col mb:w-1/2'>
                                <FormLabel className='text-lg font-semibold'>Name</FormLabel>
                                <FormControl>
                                    <input {...field} className='input-style' placeholder='Enter your name...'/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        /> 
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem className='flex flex-col mb:w-1/2'>
                                <FormLabel className='text-lg font-semibold'>Email</FormLabel>
                                <FormControl>
                                    <input {...field} className='input-style' placeholder='user@gmail.com'/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                            control={form.control}
                            name="linkedIn"
                            render={({ field }) => (
                            <FormItem className='flex flex-col'>
                                <FormLabel className='text-lg font-semibold'>Linked in <span className='text-gray-500 text-sm'>( Optional )</span></FormLabel>
                                <FormControl>
                                    <input {...field} className='input-style' placeholder='https://www.linkedin.com/in/username' />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem className='flex flex-col'>
                                <FormLabel className='text-lg font-semibold'>Message</FormLabel>
                                <FormControl>
                                    <textarea {...field} className='input-style resize-none min-h-36' placeholder='Enter your message...'/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <button disabled={form.formState.isSubmitting} type='submit' className='flex group items-center justify-center text-lg font-bold mt-3 gap-3 bg-orange-800 hover:bg-orange-600 duration-300 py-2 rounded-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-orange-800'>
                            {form.formState.isSubmitting ? (
                                <>
                                  <div className='size-5 border-[3px] border-white/50 border-t-white rounded-full animate-spin'/>
                                   Sending...
                                </>
                            ) : (
                                <>
                                  <Send className='group-hover:translate-x-1 group-hover:-translate-y-1 duration-300'/> Submit
                                </>
                            )}
                        </button>
                </form>
             </Form>
  </motion.div>
}