import { useRef, useCallback, useMemo } from 'react'
import { useGameData } from './useGameData'
import { useCreateParticle } from './useCreateParticle'
import { useHandleInteraction } from './useHandleInteraction'
import { useInitializeAnimation } from './useInitializeAnimation'
import { useMedalDetails } from './useMedalDetails'
import { useReloadAnimation } from './useReloadAnimation'
import { useParticleCleanupEvents } from './useParticleCleanupEvents'
import { Particle } from '../classes/Particle'

export type Refs = {
  canvas: HTMLCanvasElement | null
  container: HTMLDivElement | null
  particlesArray: Particle[]
  animationFrameId: number
  allClean: boolean
  startTime: number | null
  elapsedTime: number
  cursorInsideCanvas: boolean
  isMobile: boolean | null
}

export const useParticleCleanupGame = (
  completionMessageRef: React.RefObject<HTMLParagraphElement | null>
) => {
  const refs = useRef<Refs>({
    canvas: null,
    container: null,
    particlesArray: [],
    animationFrameId: -1,
    allClean: false,
    startTime: null,
    elapsedTime: 0,
    cursorInsideCanvas: false,
    isMobile: null,
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

        if (refs.current.startTime === null) {
          refs.current.startTime = Date.now()
        }
      }
    },
    [mouse]
  )

  const sayMessageTemporarily = useCallback(
    (message: string) => {
      dispatch({ type: 'SET_CURSOR_MESSAGE', message })
      setTimeout(() => dispatch({ type: 'MARK_MESSAGE_READ' }), 100)
    },
    [dispatch]
  )

  const handleInteraction = useHandleInteraction(
    refs,
    updateCursorPosition,
    sayMessageTemporarily
  )

  const handleScroll = useCallback(
    (event: Event) => {
      if (gameData.gameInProgress && refs.current.cursorInsideCanvas) {
        event.preventDefault()
      }
    },
    [gameData.gameInProgress]
  )

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      refs.current.particlesArray = Array.from({ length: 150 }, () =>
        createParticle(canvas)
      )
    },
    [createParticle]
  )

  const animateParticles = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let remainingParticles = false

      refs.current.particlesArray.forEach((particle) => {
        particle.update(ctx, mouse, canvas)
        if (particle.inCanvas) remainingParticles = true
      })

      if (!remainingParticles) {
        if (!refs.current.allClean) {
          refs.current.allClean = true
          refs.current.elapsedTime = parseFloat(
            ((Date.now() - refs.current.startTime!) / 1000).toFixed(1)
          )
          dispatch({ type: 'END_GAME', time: refs.current.elapsedTime })
          completionMessageRef.current?.focus()
          refs.current.container?.classList.add('done')
        } else {
          cancelAnimationFrame(refs.current.animationFrameId)
        }
      } else {
        refs.current.animationFrameId = requestAnimationFrame(() =>
          animateParticles(ctx, canvas)
        )
      }
    },
    [mouse, dispatch, completionMessageRef]
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
    handleScroll,
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
