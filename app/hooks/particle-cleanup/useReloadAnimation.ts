import { useCallback } from 'react'
import { useGameData } from './useGameData'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

export const useReloadAnimation = (
  refs: React.RefObject<ParticleCleanupRefs>,
  initializeAnimation: () => void
) => {
  const [, dispatch] = useGameData()

  const reloadAnimation = useCallback(() => {
    if (
      refs.current?.animationFrameId !== null &&
      refs.current?.animationFrameId !== undefined
    )
      cancelAnimationFrame(refs.current.animationFrameId)

    if (refs.current)
      Object.assign(refs.current, {
        allClean: false,
        startTime: null,
        elapsedTime: 0,
        cursorInsideCanvas: false,
        particlesArray: [],
      })

    dispatch({ type: 'RESET_GAME' })
    initializeAnimation()
  }, [refs, initializeAnimation, dispatch])

  return reloadAnimation
}
