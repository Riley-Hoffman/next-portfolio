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
  const refs = useRef<ParticleCleanupRefs>({
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

  const updateCursorPosition = useCallback(
    (clientX: number, clientY: number) => {
      if (refs.current.canvas) {
        const rect = refs.current.canvas.getBoundingClientRect()
        mouse.x = clientX - rect.left
        mouse.y = clientY - rect.top

        if (refs.current.startTime === null) refs.current.startTime = Date.now()
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
    refs,
    updateCursorPosition,
    sayCursorMessage
  )

  const handleOnScroll = useCallback(
    (event: Event) => {
      if (gameData.gameInProgress && refs.current.cursorInsideCanvas)
        event.preventDefault()
    },
    [gameData.gameInProgress]
  )

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      if (canvas) {
        refs.current.particlesArray = Array.from({ length: 150 }, () =>
          createParticle(canvas)
        )
      }
    },
    [createParticle]
  )

  const handleGameCompletion = useCallback(() => {
    if (refs.current.allClean) return

    if (refs.current.startTime !== null)
      refs.current.elapsedTime = parseFloat(
        ((Date.now() - refs.current.startTime) / 1000).toFixed(1)
      )

    refs.current.allClean = true
    dispatch({ type: 'END_GAME', time: refs.current.elapsedTime })

    completionMessageRef.current?.focus()
    refs.current.container?.classList.add('done')
  }, [dispatch, completionMessageRef])

  const animateParticles = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let remainingParticles = false

      refs.current.particlesArray.forEach((particle) => {
        particle.update(ctx, mouse, canvas)
        if (particle.inCanvas) remainingParticles = true
      })

      if (!remainingParticles) {
        handleGameCompletion()
      } else {
        refs.current.animationFrameId = requestAnimationFrame(() =>
          animateParticles(ctx, canvas)
        )
      }
    },
    [mouse, handleGameCompletion]
  )

  const initializeAnimation = useInitializeAnimation(
    refs,
    initParticles,
    animateParticles
  )

  const reloadAnimation = useReloadAnimation(refs, initializeAnimation)

  useParticleCleanupEvents(
    refs,
    handleInteraction,
    handleOnScroll,
    initializeAnimation
  )

  const medalDetails = useMedalDetails(
    refs.current.allClean ? gameData.time : null
  )

  return {
    refs,
    gameData,
    medalDetails,
    reloadAnimation,
  }
}
