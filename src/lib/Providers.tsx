'use client'

import { NextUIProvider, Input } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider >
      <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}
