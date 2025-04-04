import { useCallback } from 'react'
import { Particle } from '@/app/classes/particle-cleanup/Particle'
import { MD } from '@/app/constants/breakpoints'

export const useCreateParticle = () =>
  useCallback((canvas: HTMLCanvasElement) => {
    const { width, height } = canvas
    const size = 10 + Math.random() * 30
    const colors = ['#121226', '#21213b', '#363659', '#505077', '#6868a6']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const weight = 0.5 + Math.random() * 0.5
    const isMobile = window.innerWidth <= MD
    const speedFactor = isMobile ? 0.55 : 0.67
    return new Particle(
      Math.random() * width,
      Math.random() * height,
      size,
      color,
      weight,
      speedFactor
    )
  }, [])
