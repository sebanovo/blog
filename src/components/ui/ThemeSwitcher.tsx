'use client'

import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { type FC, useEffect, useState } from 'react'
import { type SwitchThumbIconProps } from '@nextui-org/react'
import { Sun, Moon } from '../icons'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }

  const icons: FC<SwitchThumbIconProps> = ({ isSelected, className }) => {
    return isSelected ? <Sun className={className} /> : <Moon className={className} />
  }

  return (
    <Switch
      defaultSelected
      aria-label='Switch mode'
      onChange={changeTheme}
      color='primary'
      thumbIcon={icons}
    ></Switch>
  )
}
