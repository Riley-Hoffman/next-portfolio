type PlayAgainProps = {
    reloadAnimation: () => void;
};

export const PlayAgain = ({ reloadAnimation }: PlayAgainProps) =>  ( 
    <p><button className="p-3 button" onClick={reloadAnimation}>Play Again</button></p>
);
  