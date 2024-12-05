import { useCallback } from "react"
import { useGameData } from "../hooks/useGameData"

export const useHandleInteraction = (
  refs: React.RefObject<any>,
  updateCursorPosition: (clientX: number, clientY: number) => void,
  sayMessageTemporarily: (message: string) => void
) => {
  const [gameData, dispatch] = useGameData()

  const handleInteraction = useCallback(
    (event: Event, isInside: boolean) => {
      const isTouchEvent = event.type.startsWith("touch")
      const { clientX, clientY } = isTouchEvent
        ? (event as TouchEvent).touches[0]
        : (event as MouseEvent)

      if (clientX !== undefined && clientY !== undefined) {
        // Update cursor position on mousemove or touchmove
        if (["mousemove", "touchmove"].includes(event.type)) {
          updateCursorPosition(clientX, clientY)
        }

        // Update canvas entry/exit state
        if (refs.current.cursorInsideCanvas !== isInside) {
          refs.current.cursorInsideCanvas = isInside
          if (isInside && refs.current.container) {
            setTimeout(
              () =>
                refs.current.container?.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                }),
              100
            )
          }

          // Game messaging when cursor enters/exits
          if (gameData.gameInProgress) {
            sayMessageTemporarily(
              `Your cursor has ${isInside ? "entered" : "exited"} Particle Cleanup Game play area`
            )
          }
        }

        // Prevent default for touch events
        if (isTouchEvent) {
          event.preventDefault()
        }
      }
    },
    [refs, updateCursorPosition, gameData.gameInProgress, sayMessageTemporarily]
  )

  return handleInteraction
}
