'use client'
import { useRef } from 'react'
import { useParticleCleanupGame } from '@/app/hooks/particle-cleanup/useParticleCleanupGame'
import { PlayAgain } from './PlayAgain'
import { CompletionMessage } from './content/CompletionMessage'
import '@/app/styles/shared/overlay.css'

export const ParticleCleanupGame = () => {
  const completionMessageRef = useRef<HTMLParagraphElement>(null)
  const { gameRefs, gameData, medalDetails, reloadAnimation } =
    useParticleCleanupGame(
      completionMessageRef as React.RefObject<HTMLParagraphElement>
    )
  const currentGameRefs = gameRefs.current

  const renderCompletionMessage = () => {
    if (!currentGameRefs.allClean) return null
    return (
      <CompletionMessage
        medalDetails={medalDetails}
        time={gameData.time}
        ref={completionMessageRef}
      />
    )
  }

  const renderCursorMessage = () => {
    if (gameData.gameInProgress && !currentGameRefs.allClean) {
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
      <noscript>
        <p className="text-black">JavaScript is required to play this game.</p>
      </noscript>
      <div
        ref={(el) => {
          currentGameRefs.container = el
        }}
        className="overlay light-overlay rounded-x-sm mx-5 h-[31.25rem] cursor-grabbing overflow-hidden rounded-br-sm border-2 border-solid border-[#2b2b64] bg-wood bg-cover bg-right pt-28 [&.done]:cursor-default"
        role="application"
        aria-label="Cleanup Game"
      >
        <canvas
          className="absolute-full drop-shadow-[0.063rem_0.063rem_0_#00000061]"
          ref={(el) => {
            currentGameRefs.canvas = el
          }}
        />
        {renderCompletionMessage()}
      </div>
      {renderCursorMessage()}
      <PlayAgain reloadAnimation={reloadAnimation} />
    </>
  )
}
