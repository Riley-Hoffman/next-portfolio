type PlayAgainProps = {
  reloadAnimation: () => void;
};

export const PlayAgain = ({ reloadAnimation }: PlayAgainProps) => (
  <p>
    <button className="button p-3" onClick={reloadAnimation}>
      Play Again
    </button>
  </p>
);
