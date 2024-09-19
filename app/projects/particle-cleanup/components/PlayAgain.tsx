type PlayAgainProps = {
    reloadAnimation: () => void;
};

export const PlayAgain: React.FC<PlayAgainProps> = ({ reloadAnimation }) => (
    <p><button className="p-3 button" onClick={reloadAnimation}>Play Again</button></p>
);
  