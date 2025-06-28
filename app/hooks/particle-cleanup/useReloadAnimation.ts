import { useCallback, useEffect } from 'react'
import { useGameData } from './useGameData'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanup.types'

export const useReloadAnimation = (
  refs: React.RefObject<ParticleCleanupRefs>,
  initializeAnimation: (isNewGame: boolean) => void
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
    if (!refs.current) return

    if (refs.current.animationFrameId != null) {
      cancelAnimationFrame(refs.current.animationFrameId)
    }

    Object.assign(refs.current, {
      allClean: false,
      startTime: null,
      elapsedTime: 0,
      cursorInsideCanvas: false,
      particlesArray: [],
    })

    dispatch({ type: 'RESET_GAME' })
    initializeAnimation(true)
  }, [refs, dispatch, initializeAnimation])

  return reloadAnimation
}
