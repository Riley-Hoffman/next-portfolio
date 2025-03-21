type PlayAgainProps = {
  reloadAnimation: () => void
}

export const PlayAgain = ({ reloadAnimation }: PlayAgainProps) => (
  <button
    className="mx-5 mb-5 mt-0 rounded-b-sm bg-[#2b2b64] p-3 font-[Verdana,Geneva,sans-serif] text-white hover:bg-[#121226]"
    onClick={reloadAnimation}
  >
    Play Again
  </button>
)
