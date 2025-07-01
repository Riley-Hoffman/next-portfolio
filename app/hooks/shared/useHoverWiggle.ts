import { useEffect } from 'react'
import { useTimedEffect } from './useTimedEffect'

export const useHoverWiggle = (
  buttonRef: React.RefObject<HTMLAnchorElement>
) => {
  const { triggerEffect, stopEffect } = useTimedEffect(1000)

  const WIGGLE_CLASS_NAME = 'motion-safe:md:animate-wiggle'

  const toggleWiggleEffect = () => {
    buttonRef.current?.classList.toggle(WIGGLE_CLASS_NAME)
  }

  const handleMouseEnterWiggle = () => {
    triggerEffect(toggleWiggleEffect)
  }

  useEffect(() => {
    return stopEffect
  }, [stopEffect])
  return { toggleWiggleEffect, handleMouseEnterWiggle }
}
