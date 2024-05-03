'use client'

import { Button, Checkbox, CircularProgress } from '@nextui-org/react'
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/react'
import { ThemeSwitcher } from '../ui/ThemeSwitcher'
import { Code, Calendar, Image, Snippet, Tooltip } from '@nextui-org/react'

export default function Home() {
  const showHelloWorld = () => {
    console.log('Hola mundo')
  }
  return (
    <div>
      <Tooltip color='primary' content='Clickeame'>
        <Button onClick={showHelloWorld}>Clickeame !!!!</Button>
      </Tooltip>
      <Code color='secondary'>npm install @nextui-org/react</Code>
      <Checkbox defaultSelected color='secondary'>
        Option
      </Checkbox>
      <Calendar aria-label='Date (No Selection)' />
      <CircularProgress color='primary' aria-label='Loading...' />
      <Image
        width={300}
        alt='NextUI hero Image'
        src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
      />
      <ThemeSwitcher />
      <Snippet color='success'>npm install @nextui-org/react</Snippet>
      <AvatarGroup isGrid isBordered color='danger'>
        <Avatar
          src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
          size='lg'
          isBordered
        />
        <Avatar showFallback name='Junior' />
        <Avatar showFallback src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
        <Avatar showFallback name='Jane' />
        <Avatar showFallback src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
        <Avatar showFallback name='Joe' />
      </AvatarGroup>
    </div>
  )
}
