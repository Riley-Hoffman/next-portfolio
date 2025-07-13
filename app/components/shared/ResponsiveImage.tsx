'use client'
import NextImage, { ImageProps } from 'next/image'
import { forwardRef } from 'react'
import { MD, LG } from '@/app/constants/breakpoints'

const DEFAULT_SIZES = `(max-width: ${MD}) 100vw, (max-width: ${LG}") 50vw, 33vw`

export const ResponsiveImage = forwardRef<HTMLImageElement, ImageProps>(
  ({ sizes = DEFAULT_SIZES, placeholder = 'blur', ...props }, ref) => {
    return (
      <NextImage {...props} sizes={sizes} placeholder={placeholder} ref={ref} />
    )
  }
)

ResponsiveImage.displayName = 'ResponsiveImage'
