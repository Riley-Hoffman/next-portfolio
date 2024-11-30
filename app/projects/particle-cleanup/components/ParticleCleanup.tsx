"use client"
import { useRef, useCallback, useReducer, useMemo } from "react"
import "../../../styles/overlay.css"
import { Particle } from "../classes/Particle"
import { PlayAgain } from "./PlayAgain"
import { CompletionMessage } from "./CompletionMessage"
import { useParticleCleanupEvents } from "../hooks/useParticleCleanupEvents"

type Refs = {
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

type GameData = {
  time: number | null
  gameInProgress: boolean
  gameCompletedOnce: boolean
  cursorMessage: string
  cursorMessageRead: boolean
}

type Action =
  | { type: "START_GAME" }
  | { type: "END_GAME"; time: number }
  | { type: "RESET_GAME" }
  | { type: "SET_CURSOR_MESSAGE"; message: string }
  | { type: "MARK_MESSAGE_READ" }

const initialGameData: GameData = {
  time: null,
  gameInProgress: true,
  gameCompletedOnce: false,
  cursorMessage: "",
  cursorMessageRead: true,
}

function reducer(gameData: GameData, action: Action): GameData {
  switch (action.type) {
    case "START_GAME":
      return {
        ...gameData,
        gameInProgress: true,
        cursorMessage: "",
        cursorMessageRead: true,
      }
    case "END_GAME":
      return { ...gameData, time: action.time, gameInProgress: false }
    case "RESET_GAME":
      return {
        ...initialGameData,
        gameCompletedOnce: gameData.gameCompletedOnce,
      }
    case "SET_CURSOR_MESSAGE":
      return {
        ...gameData,
        cursorMessage: action.message,
        cursorMessageRead: false,
      }
    case "MARK_MESSAGE_READ":
      return { ...gameData, cursorMessageRead: true }
    default:
      return gameData
  }
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

  const [gameData, dispatch] = useReducer(reducer, initialGameData)
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

  const sayMessageTemporarily = useCallback((message: string) => {
    dispatch({ type: "SET_CURSOR_MESSAGE", message })
    setTimeout(() => dispatch({ type: "MARK_MESSAGE_READ" }), 10)
  }, [])

  const handleInteraction = useCallback(
    (event: Event, isInside: boolean) => {
      const isTouchEvent = event.type.startsWith("touch")
      const { clientX, clientY } = isTouchEvent
        ? (event as TouchEvent).touches[0]
        : (event as MouseEvent)

      if (clientX !== undefined && clientY !== undefined) {
        if (["mousemove", "touchmove"].includes(event.type)) {
          updateCursorPosition(clientX, clientY)
        }

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
          if (gameData.gameInProgress) {
            sayMessageTemporarily(
              `Your cursor has ${isInside ? "entered" : "exited"} Particle Cleanup Game play area`
            )
          }
        }

        if (isTouchEvent) {
          event.preventDefault()
        }
      }
    },
    [updateCursorPosition, gameData.gameInProgress, sayMessageTemporarily]
  )

  const handleScroll = useCallback(
    (event: Event) => {
      if (gameData.gameInProgress && refs.current.cursorInsideCanvas) {
        event.preventDefault()
      }
    },
    [gameData.gameInProgress]
  )

  const createParticle = useCallback(
    (canvas: HTMLCanvasElement) => {
      const { width, height } = canvas
      const size = Math.random() * 30 + 10
      const colors = ["#A8A0D9", "#794E8D", "#ae4971"]
      const color = colors[Math.floor(Math.random() * colors.length)]
      const weight = Math.random() * 0.5 + 0.5
      const isMobile = refs.current.isMobile
      const speedFactor =
        (isMobile ? 0.8 : 1) * (gameData.gameCompletedOnce ? 0.3 : 0.5)
      return new Particle(
        Math.random() * width,
        Math.random() * height,
        size,
        color,
        weight,
        speedFactor
      )
    },
    [gameData.gameCompletedOnce]
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
    [mouse]
  )

  const initializeAnimation = useCallback(() => {
    const ctx = refs.current.canvas?.getContext("2d")

    if (refs.current.container?.classList.contains("done")) {
      refs.current.container.classList.remove("done")
    }

    if (refs.current.container) {
      const { width, height } = refs.current.container.getBoundingClientRect()
      if (refs.current.canvas) {
        refs.current.canvas.width = width
        refs.current.canvas.height = height
      }
      refs.current.isMobile = window.innerWidth <= 768

      initParticles(refs.current.canvas!)
      animateParticles(ctx!, refs.current.canvas!)
    }
  }, [initParticles, animateParticles])

  useParticleCleanupEvents(
    refs,
    handleInteraction,
    handleScroll,
    initializeAnimation
  )

  const getMedalDetails = useCallback(
    (time: number | null) => {
      gameData.gameCompletedOnce = true
      if (time === null || time > 25) return null
      const medals = [
        { cutoff: 15, text: "Gold Medal", color: "#8A7400" },
        { cutoff: 21, text: "Silver Medal", color: "#737373" },
        { cutoff: 26, text: "Bronze Medal", color: "#A2652A" },
      ]
      return medals.find((medal) => time < medal.cutoff) || null
    },
    [gameData]
  )

  const medalDetails = useMemo(
    () => (refs.current.allClean ? getMedalDetails(gameData.time) : null),
    [getMedalDetails, gameData.time]
  )

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
  }, [initializeAnimation])

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
