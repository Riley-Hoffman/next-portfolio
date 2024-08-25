import { useEffect, useRef, MutableRefObject } from 'react';

type HTMLElementWithDataset = HTMLElement & {
  dataset: DOMStringMap & {
    active?: string;
    repeat?: string;
    distance?: string;
  };
};

export const useTriggerOnScroll = (force: number = 0): MutableRefObject<HTMLElementWithDataset[]> => {
  const elementsRef = useRef<HTMLElementWithDataset[]>([]);

  useEffect(() => {
    const updateElementActivation = (
      element: HTMLElementWithDataset,
      rect: DOMRect,
      distance: number
    ) => {
      const isActive = rect.top < distance;
      element.dataset.active = isActive || force ? 'true' : 'false';

      if (element.dataset.repeat && !isActive && !force) {
        element.dataset.active = 'false';
      }
    };

    const updateTriggerOnScroll = () => {
      requestAnimationFrame(() => {
        elementsRef.current.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const distance = parseInt(element.dataset.distance ?? '800', 10);
          updateElementActivation(element, rect, distance);
        });
      });
    };

    setTimeout(updateTriggerOnScroll, 100);
    window.addEventListener('scroll', updateTriggerOnScroll);

    return () => {
      window.removeEventListener('scroll', updateTriggerOnScroll);
    };
  }, [force]);

  return elementsRef;
};