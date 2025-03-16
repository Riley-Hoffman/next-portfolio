import { useRef, useCallback, useMemo } from 'react'
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

  const mouse = useMemo(() => ({ x: 0, y: 0, radius: 150 }), [])

  const getCurrentGameRefs = () => gameRefs.current

  const updateCursorPosition = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = getCurrentGameRefs().canvas
      let startTime = getCurrentGameRefs().startTime

      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = clientX - rect.left
        mouse.y = clientY - rect.top

        if (startTime === null) startTime = Date.now()
      }
    },
    [mouse]
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
      if (gameData.gameInProgress && getCurrentGameRefs().cursorInsideCanvas)
        event.preventDefault()
    },
    [gameData.gameInProgress]
  )

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      if (canvas) {
        getCurrentGameRefs().particlesArray = Array.from({ length: 150 }, () =>
          createParticle(canvas)
        )
      }
    },
    [createParticle]
  )

  const handleGameCompletion = useCallback(() => {
    let allClean = getCurrentGameRefs().allClean
    const startTime = getCurrentGameRefs().startTime
    let elapsedTime = getCurrentGameRefs().elapsedTime

    if (allClean) return

    if (startTime !== null)
      elapsedTime = parseFloat(((Date.now() - startTime) / 1000).toFixed(1))

    allClean = true
    dispatch({ type: 'END_GAME', time: elapsedTime })

    completionMessageRef.current?.focus()
    getCurrentGameRefs().container?.classList.add('done')
  }, [dispatch, completionMessageRef])

  const animateParticles = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let remainingParticles = false

      getCurrentGameRefs().particlesArray.forEach((particle) => {
        particle.update(ctx, mouse, canvas)
        if (particle.inCanvas) remainingParticles = true
      })

      if (!remainingParticles) {
        handleGameCompletion()
      } else {
        getCurrentGameRefs().animationFrameId = requestAnimationFrame(() =>
          animateParticles(ctx, canvas)
        )
      }
    },
    [mouse, handleGameCompletion]
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
    getCurrentGameRefs().allClean ? gameData.time : null
  )

  return {
    gameRefs,
    gameData,
    medalDetails,
    reloadAnimation,
  }
}
