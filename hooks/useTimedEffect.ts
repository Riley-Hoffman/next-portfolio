import { useState } from 'react';

export const useTimedEffect = (duration: number = 1000) => {
    const [isCounting, setIsCounting] = useState(false);

    const triggerEffect = () => {
        setIsCounting(true);
        setTimeout(() => {
            setIsCounting(false);
        }, duration);
    };

    return { isCounting, triggerEffect };
};
