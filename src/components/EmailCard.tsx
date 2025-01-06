import { useState } from "react"
import { useCopyToClipboard } from 'usehooks-ts'
import { Copy, CheckCheck} from 'lucide-react'
import { twMerge } from "tailwind-merge"

export default function EmailCard() {

    const [isCopied, setIsCopied] = useState(false)
    const [copiedText, copy] = useCopyToClipboard()

  return <div className="border-[3px] border-orange-800 mb:w-[90vw] flex flex-col items-center gap-3 p-5 rounded-lg text-2xl text-white">
    <p>
      Mail me at <span className="font-semibold underline text-orange-400">virajb004@gmail.com</span>
    </p>
   <button onClick={() => {
     copy('virajb004@gmail.com')
     setIsCopied(true)
     setTimeout(() => setIsCopied(false), 2500)
   }} className={twMerge("text-lg mb:text-base border-[2px] border-orange-400 rounded-xl font-semibold w-fit px-3 py-1.5 flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity", isCopied && 'text-green-400 border-green-500 opacity-100')}>
      {isCopied ? (
         <>
           <CheckCheck /> Email copied !
         </>
      ) : (
         <>
           <Copy className="text-orange-400"/> Copy my email address
         </>
      )}
   </button>
  </div>
}