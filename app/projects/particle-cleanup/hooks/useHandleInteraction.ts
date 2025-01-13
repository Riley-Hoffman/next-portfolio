import { useCallback } from 'react'
import { useGameData } from './useGameData'

export const useHandleInteraction = (
  refs: React.RefObject<any>,
  updateCursorPosition: (clientX: number, clientY: number) => void,
  sayMessageTemporarily: (message: string) => void
) => {
  const [gameData] = useGameData()

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

        if (refs.current.cursorInsideCanvas !== isInside) {
          refs.current.cursorInsideCanvas = isInside
          if (isInside && refs.current.container) {
            setTimeout(
              () =>
                refs.current.container?.scrollIntoView({
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

        if (isTouchEvent) {
          event.preventDefault()
        }
      }
    },
    [refs, updateCursorPosition, gameData.gameInProgress, sayMessageTemporarily]
  )

  return handleInteraction
}
