import { useCallback } from 'react'
import { Particle } from '../classes/Particle'

export const useCreateParticle = () =>
  useCallback((canvas: HTMLCanvasElement) => {
    const { width, height } = canvas
    const size = Math.random() * 30 + 10
    const colors = ['#121226', '#21213b', '#363659', '#505077', '#6868a6']
    const color = colors[Math.floor(Math.random() * colors.length)]
    const weight = Math.random() * 0.5 + 0.5
    const isMobile = window.innerWidth <= 768
    const speedFactor = isMobile ? 0.48 : 0.6
    return new Particle(
      Math.random() * width,
      Math.random() * height,
      size,
      color,
      weight,
      speedFactor
    )
  }, [])
