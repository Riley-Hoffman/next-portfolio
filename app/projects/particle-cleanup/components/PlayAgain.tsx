type PlayAgainProps = {
  reloadAnimation: () => void
}

export const PlayAgain = ({ reloadAnimation }: PlayAgainProps) => (
  <button className="button m-5 p-3" onClick={reloadAnimation}>
    Play Again
  </button>
)
