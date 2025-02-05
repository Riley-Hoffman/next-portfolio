import { useCallback } from 'react'
import { useGameData } from './useGameData'
import { Refs } from './useParticleCleanupGame'

export const useReloadAnimation = (
  refs: React.RefObject<Refs>,
  initializeAnimation: () => void
) => {
  const [, dispatch] = useGameData()

  const reloadAnimation = useCallback(() => {
    cancelAnimationFrame(refs.current.animationFrameId)
    Object.assign(refs.current, {
      allClean: false,
      startTime: null,
      elapsedTime: 0,
      cursorInsideCanvas: false,
      particlesArray: [],
      isMobile: null,
    })
    dispatch({ type: 'RESET_GAME' })
    initializeAnimation()
  }, [refs, initializeAnimation, dispatch])

  return reloadAnimation
}
