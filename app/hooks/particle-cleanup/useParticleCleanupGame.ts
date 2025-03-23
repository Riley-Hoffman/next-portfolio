import { useRef, useCallback } from 'react'
import { useGameData } from './useGameData'
import { useCreateParticle } from './useCreateParticle'
import { useHandleInteraction } from './useHandleInteraction'
import { useInitializeAnimation } from './useInitializeAnimation'
import { useMedalDetails } from './useMedalDetails'
import { useReloadAnimation } from './useReloadAnimation'
import { useParticleCleanupEvents } from './useParticleCleanupEvents'
import { ParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

export const useParticleCleanupGame = (
  completionMessageRef: React.RefObject<HTMLParagraphElement>
) => {
  const gameRefs = useRef<ParticleCleanupRefs>({
    canvas: null,
    container: null,
    particlesArray: [],
    animationFrameId: null,
    allClean: false,
    startTime: null,
    elapsedTime: 0,
    cursorInsideCanvas: false,
  })

  const [gameData, dispatch] = useGameData()
  const createParticle = useCreateParticle()

  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

  const updateCursorPosition = useCallback(
    (clientX: number, clientY: number) => {
      const { canvas, startTime } = gameRefs.current

      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = clientX - rect.left
        mouseRef.current.y = clientY - rect.top

        if (startTime === null) {
          gameRefs.current.startTime = Date.now()
        }
      }
    },
    []
  )

  const sayCursorMessage = useCallback(
    (message: string) => {
      dispatch({ type: 'SET_CURSOR_MESSAGE', message })
    },
    [dispatch]
  )

  const handleInteraction = useHandleInteraction(
    gameRefs,
    updateCursorPosition,
    sayCursorMessage
  )

  const handleOnScroll = useCallback(
    (event: Event) => {
      if (gameData.gameInProgress && gameRefs.current.cursorInsideCanvas) {
        event.preventDefault()
      }
    },
    [gameData.gameInProgress]
  )

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      if (canvas) {
        gameRefs.current.particlesArray = Array.from({ length: 150 }, () =>
          createParticle(canvas)
        )
      }
    },
    [createParticle]
  )

  const handleGameCompletion = useCallback(() => {
    const { startTime, allClean } = gameRefs.current

    if (allClean) return

    if (startTime !== null) {
      gameRefs.current.elapsedTime = parseFloat(
        ((Date.now() - startTime) / 1000).toFixed(1)
      )
    }

    gameRefs.current.allClean = true
    dispatch({ type: 'END_GAME', time: gameRefs.current.elapsedTime })

    completionMessageRef.current?.focus()
    gameRefs.current.container?.classList.add('done')
  }, [dispatch, completionMessageRef])

  const animateParticles = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let remainingParticles = false

      gameRefs.current.particlesArray.forEach((particle) => {
        particle.update(ctx, mouseRef.current, canvas)
        if (particle.inCanvas) remainingParticles = true
      })

      if (!remainingParticles) {
        handleGameCompletion()
      } else {
        gameRefs.current.animationFrameId = requestAnimationFrame(() =>
          animateParticles(ctx, canvas)
        )
      }
    },
    [handleGameCompletion]
  )

  const initializeAnimation = useInitializeAnimation(
    gameRefs,
    initParticles,
    animateParticles
  )

  const reloadAnimation = useReloadAnimation(gameRefs, initializeAnimation)

  useParticleCleanupEvents(
    gameRefs,
    handleInteraction,
    handleOnScroll,
    initializeAnimation
  )

  const medalDetails = useMedalDetails(
    gameRefs.current.allClean ? gameData.time : null
  )

  return {
    gameRefs,
    gameData,
    medalDetails,
    reloadAnimation,
  }
}
