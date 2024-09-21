import { useRef } from 'react';

export const useTimedEffect = (duration: number = 1000) => {
    const isCountingRef = useRef(false);

    const triggerEffect = (applyEffect: (state: boolean) => void) => {
        if (!isCountingRef.current) {
            isCountingRef.current = true;
            applyEffect(true);

            setTimeout(() => {
                isCountingRef.current = false;
                applyEffect(false);
            }, duration);
        }
    };

    return { triggerEffect };
};
