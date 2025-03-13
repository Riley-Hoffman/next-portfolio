import { useCallback, useEffect } from 'react'
import { useGameData } from './useGameData'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

export const useReloadAnimation = (
  refs: React.RefObject<ParticleCleanupRefs>,
  initializeAnimation: () => void
) => {
  const [, dispatch] = useGameData()

  useEffect(() => {
    const currentRefs = refs.current
    return () => {
      if (currentRefs?.animationFrameId != null) {
        cancelAnimationFrame(currentRefs.animationFrameId)
      }
    }
  }, [refs])

  const reloadAnimation = useCallback(() => {
    const currentRefs = refs.current
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
  }, [refs, dispatch, initializeAnimation])

  return reloadAnimation
}
