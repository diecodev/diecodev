import Image from 'next/image';
import { GhFilled, InFilled, Send } from '../svg/icons';
import me from '../../public/assets/me.webp';
import { ButtonLink } from '../button-link';

export const Profile = ({reference}: {reference: any}) => {
  return (
    <section className='mb-16'>
      <div ref={reference} className='flex w-full items-center mb-10'>
        <div className='text-xl flex flex-col gap-5 text-gray-400'>
          <a href='http://github.com/diecodev' target='_blank' rel='noopener noreferrer' title='My GitHub Profile.' >
            <GhFilled />
          </a>
          <a href='https://linkedin.com/in/diecodev' target='_blank' rel='noopener noreferrer' title='My Linkedin Profile.' >
            <InFilled />
          </a>
        </div>
        <div className='w-60 md:w-72 lg:96 flex mx-auto'>
          <Image src={me} alt='diecodev profile picture' priority placeholder='blur' objectFit='contain' />
        </div>
      </div>

      <section className='h-fit'>
        <h2 className='text-gray-200 text-4xl font-bold mb-1'>Hi, I am Diego</h2>
        <h3 className='text-2xl text-gray-400 mb-6 font-semibold'>Frontend developer</h3>

        <p className='text-gray-400 text-lg mb-6'>This is my personal space, where I share what I’m learning about shipping great products and where you, stranger, can contact me.</p>

        <ButtonLink url='/'>
          <span className='flex gap-2 place-items-center text-black'>
            <p className='text-lg font-bold'>Contact me</p>
            <Send />
          </span>
        </ButtonLink>
      </section>
    </section>
  );
};