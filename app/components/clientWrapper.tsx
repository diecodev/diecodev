'use client'

import { Element } from 'react-scroll'

interface Props {
  name: string
  children: React.ReactNode
  className?: string
}

export const ClientWrapper = ({ children, name, className='' }: Props) => {
  return (
    <Element name={name} className={className} >
      {children}
    </Element>
  )
}