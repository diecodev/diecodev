'use client'

import { Element, Link } from 'react-scroll'

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
  return (
    <Link to={name} spy={true} smooth={true} duration={500} offset={-100} alt={`go to ${name} section`} className={`${className} cursor-pointer`}>
      {children}
    </Link>
  )
}