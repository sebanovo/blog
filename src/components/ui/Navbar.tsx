import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Navbar({ ...rest }) {
  return (
    <nav className='bg-indigo-950 w-full' {...rest}>
      <div className='dark:bg-blue-30 flex justify-end items-center mx-auto max-w-5xl py-3 h-16'>
        <ul className='flex justify-between items-center mx-4 gap-5'>
          <ThemeSwitcher />
          <Link href='/' className='text-white'>Layout</Link>
          <Link href='/posts' className='text-white'>Posts</Link>
          <Link href='/nose' className='text-white'>Nose</Link>
        </ul>
      </div>
    </nav>
  )
}
