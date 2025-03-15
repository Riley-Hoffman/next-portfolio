import { useCallback } from 'react'
import { useGameData } from './useGameData'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

export const useHandleInteraction = (
  refs: React.RefObject<ParticleCleanupRefs>,
  updateCursorPosition: (clientX: number, clientY: number) => void,
  sayMessageTemporarily: (message: string) => void
) => {
  const [gameData] = useGameData()
  const currentRefs = refs.current

  const handleInteraction = useCallback(
    (event: Event, isInside: boolean) => {
      const isTouchEvent = event.type.startsWith('touch')
      const { clientX, clientY } = isTouchEvent
        ? (event as TouchEvent).touches[0]
        : (event as MouseEvent)

      if (clientX !== undefined && clientY !== undefined) {
        if (['mousemove', 'touchmove'].includes(event.type)) {
          updateCursorPosition(clientX, clientY)
        }

        if (currentRefs.cursorInsideCanvas !== isInside) {
          currentRefs.cursorInsideCanvas = isInside

          if (isInside) {
            setTimeout(
              () =>
                currentRefs.container?.scrollIntoView({
                  block: 'center',
                  behavior: 'smooth',
                }),
              100
            )
          }

          if (gameData.gameInProgress) {
            sayMessageTemporarily(
              `Your cursor has ${isInside ? 'entered' : 'exited'} Particle Cleanup Game play area`
            )
          }
        }

        if (isTouchEvent) event.preventDefault()
      }
    },
    [
      currentRefs,
      updateCursorPosition,
      gameData.gameInProgress,
      sayMessageTemporarily,
    ]
  )

  return handleInteraction
}
