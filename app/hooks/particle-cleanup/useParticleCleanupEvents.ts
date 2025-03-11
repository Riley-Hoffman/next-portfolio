import { useEffect, RefObject } from 'react'
import { SharedParticleCleanupRefs } from '@/app/types/particle-cleanup/ParticleCleanupRefs.types'

type HandleInteraction = (event: Event, isInside: boolean) => void
type HandleOnScroll = (event: Event) => void
type InitializeAnimation = () => void

export const useParticleCleanupEvents = (
  refs: RefObject<SharedParticleCleanupRefs>,
  handleInteraction: HandleInteraction,
  handleOnScroll: HandleOnScroll,
  initializeAnimation: InitializeAnimation
) => {
  useEffect(() => {
    const localRefs = { ...refs.current }
    if (!localRefs.container || !localRefs.canvas) return

    const events: string[] = [
      'mousemove',
      'mouseleave',
      'touchmove',
      'touchend',
      'touchstart',
    ]

    const handleEvent = (event: Event) => {
      const isInside = event.type !== 'mouseleave' && event.type !== 'touchend'
      handleInteraction(event, isInside)
    }

    const manageEventListeners = (
      action: 'add' | 'remove',
      element: HTMLElement,
      eventTypes: string[],
      handler: EventListener,
      options?: AddEventListenerOptions
    ) => {
      if (element) {
        eventTypes.forEach((eventType) => {
          element[`${action}EventListener`](eventType, handler, options)
        })
      }
    }

    manageEventListeners('add', localRefs.container, events, handleEvent, {
      passive: false,
    })
    window.addEventListener('wheel', handleOnScroll, { passive: false })

    initializeAnimation()

    const handleResize = () => {
      const containerRect = localRefs.container?.getBoundingClientRect()
      if (localRefs.canvas && containerRect) {
        localRefs.canvas.width = containerRect.width
        localRefs.canvas.height = containerRect.height
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (localRefs.container) {
        manageEventListeners('remove', localRefs.container, events, handleEvent)
      }

      window.removeEventListener('wheel', handleOnScroll)
      window.removeEventListener('resize', handleResize)

      if (typeof localRefs.animationFrameId === 'number')
        cancelAnimationFrame(localRefs.animationFrameId)
    }
  }, [refs, handleInteraction, handleOnScroll, initializeAnimation])
}
