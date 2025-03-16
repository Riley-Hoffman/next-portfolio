import { useCallback, useEffect } from 'react'
import { useGameData } from './useGameData'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

export const useReloadAnimation = (
  refs: React.RefObject<ParticleCleanupRefs>,
  initializeAnimation: () => void
) => {
  const [, dispatch] = useGameData()
  const currentRefs = refs.current

  useEffect(() => {
    return () => {
      if (currentRefs?.animationFrameId != null) {
        cancelAnimationFrame(currentRefs.animationFrameId)
      }
    }
  }, [currentRefs])

  const reloadAnimation = useCallback(() => {
    if (!currentRefs) return

    if (currentRefs.animationFrameId != null) {
      cancelAnimationFrame(currentRefs.animationFrameId)
    }

    Object.assign(currentRefs, {
      allClean: false,
      startTime: null,
      elapsedTime: 0,
      cursorInsideCanvas: false,
      particlesArray: [],
    })

    dispatch({ type: 'RESET_GAME' })
    initializeAnimation()
  }, [currentRefs, dispatch, initializeAnimation])

  return reloadAnimation
}
