'use client'

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

    const messageData = await sendEmail(name, email, message)

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
    <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit} onChange={handleChange} >
      <input type="text" name="customerName" id="name" placeholder="John Doe" className="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none" />
      <input type="email" name="customerEmail" id="email" placeholder="johndoe@mail.com" className="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none" />
      <textarea name="customerMessage" id="message" rows={4} placeholder="Write your message" className="w-full px-3 py-1 rounded border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 outline-none resize-none" />
      <p className={`text-sm rounded ${popUpMessage.type === 'error' ? 'bg-red-300' : 'bg-green-200'} ${popUpMessage.show ? 'opacity-100 px-4 py-2' : 'opacity-0'} transition-all text-zinc-600`}>
        {popUpMessage.message}
      </p>
      <input className='w-60 bg-indigo-500 rounded text-white font-semibold px-4 py-[5px] mx-auto mt-auto' disabled={isLoading} type="submit" value={isLoading ? 'Sending...' : 'Send Email'} />
    </form>
  )
}