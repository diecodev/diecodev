import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import { NavBar } from '../components/navbar';
import { send } from '@emailjs/browser';
import { SubmitButton } from '../components/submit-button';

const Home: NextPage = () => {
  const [isDirty, setIsDirty] = useState({
    show: false,
    message: '',
    color: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    interface ITarget extends EventTarget {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
      reset: () => void;
    }
  
    e.preventDefault();
    e.stopPropagation();
    
    const {name, email, message} = e.target as ITarget;

    setIsDone(false);
    if (!name.value || !email.value || !message.value || !email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ) {
      return setIsDirty({
        show: true,
        message: 'Please fill out all fields correctly.',
        color: 'bg-red-200 dark:bg-red-300/50'
      });
    }

    const data = {
      name: name.value,
      email: email.value,
      message: message.value
    };

    setIsLoading(true);

    const res = await send(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, data, process.env.NEXT_PUBLIC_USER_ID as string);
  
    if (res.status === 200) {
      setIsLoading(false);
      setIsDone(true);
      setIsDirty({
        show: true,
        message: 'Thanks for message me. I will reply as soon as possible.',
        color: 'bg-green-200 dark:bg-green-300/50'
      });

      (e.target as ITarget).reset();
      return;
    };

    setIsDirty({
      show: true,
      message: 'Something went wrong. Please try again later.',
      color: 'bg-red-200 dark:bg-red-300/50'
    });
  };

  return (
    <>
      <NavBar/>
    
      <main className='px-4 py-9 min-h-screen col-start-2 overflow-x-hidden relative pb-24'>
        <h2 className='text-4xl font-bold mb-2 dark:text-gray-200'>Contact.</h2>
        <p className='text-md mb-12 dark:text-gray-200'>Get in touch or shoot me an email directly on <a href='mailto:diegoddiaz05@gmail.com' className='font-bold'>diegoddiaz05@gmail.com</a></p>

        {/* form */}
        <form className='flex flex-col gap-4' onChange={() => setIsDirty({
          show: false,
          message: '',
          color: ''
        })} onSubmit={handleSubmit} >
          <input className='border-[1px] rounded-md py-2 px-4 font-normal outline-none text-base dark:border-gray-600 dark:text-gray-200' type='text' name='name' placeholder='Name' />
          <input className='border-[1px] rounded-md py-2 px-4 font-normal outline-none text-base dark:border-gray-600 dark:text-gray-200' type='email' name='email' placeholder='Email' />
          <textarea className='border-[1px] rounded-md py-2 px-4 font-normal outline-none text-base dark:border-gray-600 dark:text-gray-200 resize-none' name='message' rows={5} placeholder='Message' />

          {/* note */}
          <p className={`text-sm rounded-md ${isDirty.color} ${isDirty.show ? 'opacity-100 px-4 py-4' : 'opacity-0'} transition-all text-black dark:text-white`}>
            {isDirty.message}
          </p>

          <SubmitButton value='Send Message' type='submit' loading={isLoading} done={isDone} />
          
          {/* <input className='flex place-items-center min-w-[150px] bg-yllw text-black font-semibold max-w-fit rounded-md px-8 py-2' type='submit' value='Send Message' /> */}
        </form>
      </main>
    </>
  );
};

export default Home;