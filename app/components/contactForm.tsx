'use client'

import { Github, Linkedin, Instagram } from './icons'
import { sendEmail } from "../utils"
import { useState } from "react"

interface IMessage {
  show: boolean
  type: string
  message: string
}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [popUpMessage, setPopUpMessage] = useState<IMessage>({
    show: false,
    type: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const name = e.currentTarget.customerName.value
    const email = e.currentTarget.customerEmail.value
    const message = e.currentTarget.customerMessage.value

    const messageData = await sendEmail(name, email ,message)

    setPopUpMessage(messageData)
    setIsLoading(false)
  }

  const handleChange = () => {
    setPopUpMessage({
      show: false,
      type: '',
      message: ''
    })
  }

  return (
    <form className="flex flex-col gap-3 w-full mx-auto" onSubmit={handleSubmit} onChange={handleChange} >
      <div className="flex gap-x-10 gap-y-4 w-full justify-center flex-wrap md:flex-nowrap items-stretch">
        <div className="flex flex-col gap-3 w-full">
          <input type="text" name="customerName" id="name" placeholder="John Doe" className="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none" />
          <input type="email" name="customerEmail" id="email" placeholder="johndoe@mail.com" className="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none" />
          <textarea name="customerMessage" id="message" rows={4} placeholder="Write your message" className="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none resize-none" />
          <p className={`text-sm rounded ${popUpMessage.type === 'error' ? 'bg-red-300' : 'bg-green-200' } ${popUpMessage.show ? 'opacity-100 px-4 py-2' : 'opacity-0'} transition-all text-zinc-600`}>
              {popUpMessage.message}
          </p>
          <input className='w-[14rem] bg-indigo-500 rounded text-white font-semibold px-4 py-1 mx-auto mt-auto' disabled={isLoading} type="submit" value={isLoading ? 'Sending...' : 'Send Email'} />
        </div>
        <ul className='flex lg:flex-col gap-5 justify-between mt-10 lg:mt-0'>
            <li>
              <a href="http://github.com/diecodev" target="_blank" rel="noopener noreferrer" className='rounded-lg border-2 border-zinc-200 px-2 py-4 flex items-center justify-center flex-col text-lg gap-1 min-w-[8rem]'>
                <Github />
                <span className='text-sm'>/diecodev</span>
              </a>
            </li>
            <li>
              <a href="http://github.com/diecodev" target="_blank" rel="noopener noreferrer" className='min-w-[8rem] rounded-lg border-2 border-zinc-200 px-2 py-4 flex items-center justify-center flex-col text-lg gap-1'>
                <Instagram />
                <span className='text-sm'>/diegodiazcol</span>
              </a>
            </li>
            <li>
              <a href="http://github.com/diecodev" target="_blank" rel="noopener noreferrer" className='min-w-[8rem] rounded-lg border-2 border-zinc-200 px-2 py-4 flex items-center justify-center flex-col text-lg gap-1'>
                <Linkedin />
                <span className='text-sm'>/diegodiazcol</span>
              </a>
            </li>
          </ul>
      </div>
    </form>
  )
}