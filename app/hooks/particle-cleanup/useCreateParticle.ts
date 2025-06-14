import { useCallback } from 'react'
import { Particle } from '@/app/classes/particle-cleanup/Particle'
import { MD } from '@/app/constants/breakpoints'
import { PARTICLE_CONFIG } from '@/app/constants/particle-cleanup/particleConfig'

export const useCreateParticle = () =>
  useCallback((canvas: HTMLCanvasElement) => {
    const { width, height } = canvas
    const size =
      PARTICLE_CONFIG.size.min +
      Math.random() * (PARTICLE_CONFIG.size.max - PARTICLE_CONFIG.size.min)
    const color =
      PARTICLE_CONFIG.colors[
        Math.floor(Math.random() * PARTICLE_CONFIG.colors.length)
      ]
    const weight =
      PARTICLE_CONFIG.weight.min +
      Math.random() * (PARTICLE_CONFIG.weight.max - PARTICLE_CONFIG.weight.min)
    const isMobile = window.innerWidth <= MD
    const speedFactor = isMobile
      ? PARTICLE_CONFIG.speedFactor.mobile
      : PARTICLE_CONFIG.speedFactor.desktop
    return new Particle(
      Math.random() * width,
      Math.random() * height,
      size,
      color,
      weight,
      speedFactor
    )
  }, [])
