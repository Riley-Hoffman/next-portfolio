import { Particle } from '@/app/classes/particle-cleanup/Particle'

export interface SharedParticleCleanupRefs {
  canvas: HTMLCanvasElement | null
  container: HTMLDivElement | null
  animationFrameId: number | null
}

export interface ParticleCleanupRefs extends SharedParticleCleanupRefs {
  particlesArray: Particle[]
  allClean: boolean
  startTime: number | null
  elapsedTime: number
  cursorInsideCanvas: boolean
  isMobile: boolean | null
}
