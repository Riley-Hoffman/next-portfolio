'use client'
import { useRef } from 'react'
import { useParticleCleanupGame } from '../hooks/useParticleCleanupGame'
import { PlayAgain } from './PlayAgain'
import { CompletionMessage } from './completion-message/CompletionMessage'
import '@/app/styles/overlay.css'

export const ParticleCleanupGame = () => {
  const completionMessageRef = useRef<HTMLParagraphElement | null>(null)
  const { refs, gameData, medalDetails, reloadAnimation } =
    useParticleCleanupGame(completionMessageRef)

  const renderCompletionMessage = () => {
    if (refs.current.allClean) {
      return (
        <CompletionMessage
          medalDetails={medalDetails}
          time={gameData.time}
          ref={completionMessageRef}
        />
      )
    }
    return null
  }

  const renderCursorMessage = () => {
    if (
      gameData.gameInProgress &&
      !refs.current.allClean &&
      !gameData.cursorMessageRead
    ) {
      return (
        <div className="sr-only" aria-live="assertive">
          {gameData.cursorMessage}
        </div>
      )
    }
    return null
  }

  return (
    <>
      <div
        ref={(el) => {
          refs.current.container = el
        }}
        className="overlay light-overlay rounded-x-sm mx-5 h-[31.25rem] cursor-grabbing overflow-hidden rounded-br-sm border-2 border-solid border-[#2b2b64] bg-wood bg-cover bg-right pt-28 [&.done]:cursor-default"
        role="application"
        aria-label="Cleanup Game"
      >
        <canvas
          className="absolute inset-0 z-10 w-full drop-shadow-[0.063rem_0.063rem_0_#00000061]"
          ref={(el) => {
            refs.current.canvas = el
          }}
        />
        {renderCompletionMessage()}
        <noscript>
          <p className="relative z-10 text-center">
            JavaScript is required to play this game.
          </p>
        </noscript>
        {gameData.gameInProgress &&
          !refs.current.allClean &&
          !gameData.cursorMessageRead && (
            <div className="sr-only" aria-live="assertive">
              {gameData.cursorMessage}
            </div>
          )}
        {renderCursorMessage()}
        <PlayAgain reloadAnimation={reloadAnimation} />
      </div>
    </>
  )
}
