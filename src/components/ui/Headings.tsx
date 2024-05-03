'use client'
import { useState } from 'react'
import { Link } from '@/components/icons'

export type HeadingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>

interface Props extends HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({ id, children, type, ...rest }: Props) {
  const [isShow, setIsShown] = useState(false)
  const HeadingTag = type || 'h1' 
  return (
    <HeadingTag
      id={id}
      className='w-full flex items-center text-center relative cursor-pointer'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      {...rest}
    >
      <a
        href={`#${id}`}
        className={`absolute right-full m-0 mx-0 pr-1 ${
          isShow ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link
          width='23'
          height='23'
          className='cursor-pointer text-blue-600 dark:text-blue-400'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
      </a>
      {children}
    </HeadingTag>
  )
}
