'use client'
import { usePathname } from 'next/navigation'
import { EmptyObject } from '@/app/types/shared/EmptyObject.type'

export const PathnameDisplay = ({}: EmptyObject) => {
  const pathname = usePathname()

  return (
    <code className="rounded bg-gradientthree px-1 text-accentone-100">
      {pathname}
    </code>
  )
}
