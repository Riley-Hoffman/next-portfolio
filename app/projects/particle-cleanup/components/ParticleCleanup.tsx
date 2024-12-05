"use client"
import { useRef, useCallback, useMemo } from "react"
import "../../../styles/overlay.css"
import { Particle } from "../classes/Particle"
import { PlayAgain } from "./PlayAgain"
import { CompletionMessage } from "./CompletionMessage"
import { useGameData } from "../hooks/useGameData"
import { useCreateParticle } from "../hooks/useCreateParticle"
import { useHandleInteraction } from "../hooks/useHandleInteraction"
import { useInitializeAnimation } from "../hooks/useInitializeAnimation"
import { useMedalDetails } from "../hooks/useMedalDetails"
import { useReloadAnimation } from "../hooks/useReloadAnimation"
import { useParticleCleanupEvents } from "../hooks/useParticleCleanupEvents"

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

export const ParticleCleanup = () => {
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
      dispatch({ type: "SET_CURSOR_MESSAGE", message })
      setTimeout(() => dispatch({ type: "MARK_MESSAGE_READ" }), 10)
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
          dispatch({ type: "END_GAME", time: refs.current.elapsedTime })
          document.getElementById("completionMessage")?.focus()
          refs.current.container?.classList.add("done")
        } else {
          cancelAnimationFrame(refs.current.animationFrameId)
        }
      } else {
        refs.current.animationFrameId = requestAnimationFrame(() =>
          animateParticles(ctx, canvas)
        )
      }
    },
    [mouse, dispatch]
  )

  const initializeAnimation = useInitializeAnimation(
    refs,
    dispatch,
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

  return (
    <>
      <div
        ref={(el) => {
          refs.current.container = el
        }}
        className="particle-cleanup overlay light-overlay mx-5 h-[31.25rem] cursor-grabbing overflow-hidden rounded-sm border-2 border-solid border-accentone-200 bg-wood bg-cover bg-right pt-28 [&.done]:cursor-default"
        role="application"
        aria-label="Cleanup Game"
      >
        <canvas
          className="absolute inset-0 z-10 w-full drop-shadow-[0.063rem_0.063rem_0_#00000061]"
          ref={(el) => {
            refs.current.canvas = el
          }}
        />
        <div className="border-1 absolute inset-0 h-full w-full border-solid border-accentone-200">
          {refs.current.allClean && (
            <CompletionMessage
              medalDetails={medalDetails}
              time={gameData.time}
            />
          )}
        </div>
      </div>
      {gameData.gameInProgress &&
        !refs.current.allClean &&
        !gameData.cursorMessageRead && (
          <div className="invisible h-0 w-0 overflow-hidden">
            <p aria-live="polite">{gameData.cursorMessage}</p>
          </div>
        )}
      <PlayAgain reloadAnimation={reloadAnimation} />
    </>
  )
}
