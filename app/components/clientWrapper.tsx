'use client'

import { Element, scroller } from 'react-scroll'

interface Props {
  name: string
  children: React.ReactNode
  className?: string
}

export const ClientWrapper = ({ children, name, className = '' }: Props) => {
  return (
    <Element name={name} className={className} >
      {children}
    </Element>
  )
}

export const CustomLink = ({ children, className = '', name }: Props) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()

    scroller.scrollTo(name, {
      spy: true,
      smooth: 'easeOutQuart',
      duration: 600,
      offset: -100
    })
    return false
  }

  return (
    <a href='/' onClick={handleClick} aria-label={`go to ${name} section`} className={`${className} cursor-pointer`}>
      {children}
    </a>
  )
}