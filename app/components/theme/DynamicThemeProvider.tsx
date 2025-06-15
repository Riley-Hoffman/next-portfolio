'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type { ThemeProviderProps } from 'next-themes'

const NextThemeProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)

export const DynamicThemeProvider = ({
  children,
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
}: ThemeProviderProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="animate-delayedfadein">{children}</div>

  return (
    <NextThemeProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
    >
      {children}
    </NextThemeProvider>
  )
}
