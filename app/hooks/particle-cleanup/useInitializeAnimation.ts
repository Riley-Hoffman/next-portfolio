import { useCallback } from 'react'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

export const useInitializeAnimation = (
  refs: React.RefObject<ParticleCleanupRefs>,
  initParticles: (canvas: HTMLCanvasElement) => void,
  animateParticles: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => void
) => {
  const currentRefs = refs.current
  const initializeAnimation = useCallback(() => {
    const ctx = currentRefs.canvas?.getContext('2d')

    if (currentRefs.container?.classList.contains('done'))
      currentRefs.container.classList.remove('done')

    if (currentRefs.container) {
      const { width, height } = currentRefs.container.getBoundingClientRect()

      if (currentRefs.canvas) {
        currentRefs.canvas.width = width
        currentRefs.canvas.height = height
      }

      if (currentRefs.canvas) {
        initParticles(currentRefs.canvas)
        if (ctx) animateParticles(ctx, currentRefs.canvas)
      }
    }
  }, [initParticles, animateParticles, currentRefs])

  return initializeAnimation
}
