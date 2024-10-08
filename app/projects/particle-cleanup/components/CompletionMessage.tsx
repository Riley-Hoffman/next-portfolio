import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CompletionMessageProps {
    medalDetails: { text: string; color: string } | null;
    time: number | null;
  }
  
export const CompletionMessage = ({ medalDetails, time }: CompletionMessageProps) => (
    <p id="completionMessage" className="w-full h-full flex flex-col justify-center items-center font-source-sans absolute p-0 m-0 text-2xl text-center bg-white completion-message" tabIndex={-1}>
    All clean! <small aria-live="polite">Time taken: <span className="font-semibold" aria-live="polite">{time} seconds</span></small>
        <span className="font-extrabold uppercase" aria-live="polite">
            {medalDetails && (
            <span className="text-xl leading-normal md:text-2xl md:leading-normal" aria-live="polite">
                {medalDetails.text} <br />
                <FontAwesomeIcon className="block mx-auto text-6xl animate-[spin_2.4s_infinite]" icon={faMedal} color={medalDetails.color} />
            </span>
            )}
        </span>
    </p>
);
  