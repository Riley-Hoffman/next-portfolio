type PlayAgainProps = {
  reloadAnimation: () => void
}

export const PlayAgain = ({ reloadAnimation }: PlayAgainProps) => (
  <button className="play-again button" onClick={reloadAnimation}>
    Play Again
  </button>
)
