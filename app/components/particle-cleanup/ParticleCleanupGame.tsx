'use client'
import { useRef } from 'react'
import { useParticleCleanupGame } from '@/app/hooks/particle-cleanup/useParticleCleanupGame'
import { PlayAgain } from './PlayAgain'
import { CompletionMessage } from './content/CompletionMessage'
import '@/app/styles/particle-cleanup/particle-cleanup.css'
import '@/app/styles/shared/overlay.css'

export const ParticleCleanupGame = () => {
  const completionMessageRef = useRef<HTMLParagraphElement>(null!)
  const { gameRefs, gameData, medalDetails, reloadAnimation } =
    useParticleCleanupGame(completionMessageRef)
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
        className="game-container overlay light-overlay"
        role="application"
        aria-label="Cleanup Game"
      >
        <canvas
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
