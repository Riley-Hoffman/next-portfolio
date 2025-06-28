import { useCallback } from 'react'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanup.types'

export const useInitializeAnimation = (
  refs: React.RefObject<ParticleCleanupRefs>,
  initParticles: (canvas: HTMLCanvasElement) => void,
  animateParticles: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => void
) => {
  const initializeAnimation = useCallback(
    (isNewGame: boolean = false) => {
      const ctx = refs.current.canvas?.getContext('2d')

      if (isNewGame && refs.current.container?.classList.contains('done'))
        refs.current.container.classList.remove('done')

      if (refs.current.container) {
        const { width, height } = refs.current.container.getBoundingClientRect()

        if (refs.current.canvas) {
          refs.current.canvas.width = width
          refs.current.canvas.height = height
        }

        if (refs.current.canvas) {
          initParticles(refs.current.canvas)
          if (ctx) animateParticles(ctx, refs.current.canvas)
        }
      }
    },
    [initParticles, animateParticles, refs]
  )

  return initializeAnimation
}
