import { useEffect, MutableRefObject } from "react";

interface Refs {
  container: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
  animationFrameId: number;
}

type HandleInteraction = (event: Event, isInside: boolean) => void;
type HandleScroll = (event: Event) => void;
type InitializeAnimation = () => void;

export function useParticleCleanupEvents(
  refs: MutableRefObject<Refs>,
  handleInteraction: HandleInteraction,
  handleScroll: HandleScroll,
  initializeAnimation: InitializeAnimation,
) {
  useEffect(() => {
    const localRefs = { ...refs.current };
    if (!localRefs.container || !localRefs.canvas) return;
    const events: string[] = [
      "mousemove",
      "mouseleave",
      "touchmove",
      "touchend",
      "touchstart",
    ];

    const handleEvent = (event: Event) => {
      const isInside = event.type !== "mouseleave" && event.type !== "touchend";
      handleInteraction(event, isInside);
    };

    const manageEventListeners = (
      action: "add" | "remove",
      element: HTMLElement,
      eventTypes: string[],
      handler: EventListener,
      options?: AddEventListenerOptions,
    ) => {
      eventTypes.forEach((eventType) =>
        element[`${action}EventListener`](eventType, handler, options),
      );
    };

    manageEventListeners("add", localRefs.container, events, handleEvent, {
      passive: false,
    });
    window.addEventListener("wheel", handleScroll, { passive: false });

    initializeAnimation();

    const handleResize = () => {
      const containerRect = localRefs.container?.getBoundingClientRect();
      if (localRefs.canvas && containerRect) {
        localRefs.canvas.width = containerRect.width;
        localRefs.canvas.height = containerRect.height;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (localRefs.container) {
        manageEventListeners(
          "remove",
          localRefs.container,
          events,
          handleEvent,
        );
      }

      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(localRefs.animationFrameId);
    };
  }, [refs, handleInteraction, handleScroll, initializeAnimation]);
}
