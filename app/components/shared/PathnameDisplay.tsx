'use client'
import { usePathname } from 'next/navigation'

export const PathnameDisplay = () => {
  const pathname = usePathname()

  return (
    <code className="rounded bg-gradientthree px-1 text-accentone-100">
      {pathname}
    </code>
  )
}
