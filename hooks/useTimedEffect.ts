import { useRef } from 'react';

export const useTimedEffect = (duration: number = 1000) => {
  const isCountingRef = useRef(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const triggerEffect = (applyEffect: (state: boolean) => void) => {
    if (!isCountingRef.current) {
      isCountingRef.current = true;
      applyEffect(true);

      timeoutId.current = setTimeout(() => {
        isCountingRef.current = false;
        applyEffect(false);
      }, duration);
    }
  };

  return { 
    triggerEffect,
    cleanup: () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    }
  };
};
