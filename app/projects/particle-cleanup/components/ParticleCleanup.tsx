"use client"
import "../../../styles/overlay.css"
import { PlayAgain } from "./PlayAgain"
import { CompletionMessage } from "./CompletionMessage"
import { useParticleCleanup } from "../hooks/useParticleCleanup"

export const ParticleCleanup = () => {
  const { refs, gameData, medalDetails, reloadAnimation } = useParticleCleanup()

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
