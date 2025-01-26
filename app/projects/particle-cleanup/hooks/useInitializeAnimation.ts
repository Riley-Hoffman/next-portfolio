import { useCallback } from 'react'
import { Refs } from './useParticleCleanupGame'

export const useInitializeAnimation = (
  refs: React.RefObject<Refs>,
  initParticles: (canvas: HTMLCanvasElement) => void,
  animateParticles: (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => void
) => {
  const initializeAnimation = useCallback(() => {
    const ctx = refs.current.canvas?.getContext('2d')

    if (refs.current.container?.classList.contains('done')) {
      refs.current.container.classList.remove('done')
    }

    if (refs.current.container) {
      const { width, height } = refs.current.container.getBoundingClientRect()
      if (refs.current.canvas) {
        refs.current.canvas.width = width
        refs.current.canvas.height = height
      }
      refs.current.isMobile = window.innerWidth <= 768

      initParticles(refs.current.canvas!)
      animateParticles(ctx!, refs.current.canvas!)
    }
  }, [initParticles, animateParticles, refs])

  return initializeAnimation
}
