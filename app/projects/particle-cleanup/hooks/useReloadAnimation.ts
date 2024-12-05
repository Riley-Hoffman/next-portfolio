import { useCallback } from "react"
import { useGameData } from "./useGameData"
import { Refs } from "../components/ParticleCleanup"
export const useReloadAnimation = (
  refs: React.MutableRefObject<Refs>,
  initializeAnimation: () => void
) => {
  const [gameData, dispatch] = useGameData()

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
    dispatch({ type: "RESET_GAME" })
    initializeAnimation()
  }, [refs, initializeAnimation, dispatch])

  return reloadAnimation
}
