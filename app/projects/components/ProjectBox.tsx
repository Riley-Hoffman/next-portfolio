"use client"
import { useEffect } from "react"
import { useTriggerOnScroll } from "../../../hooks/useTriggerOnScroll"

interface ProjectBoxProps {
  inverted?: string
  animation?: string
  isFirst?: boolean
  children: React.ReactNode
}

export const ProjectBox = ({
  inverted,
  animation,
  isFirst,
  children,
}: ProjectBoxProps) => {
  const elementsRef = useTriggerOnScroll()

  useEffect(() => {
    if (elementsRef.current) {
      const element = elementsRef.current[elementsRef.current.length - 1]
      if (element && animation) {
        const animationClasses = animation.trim().split(/\s+/)
        animationClasses.forEach((className) => {
          element.classList.add(className)
        })
      }
    }
  }, [elementsRef, animation])

  return (
    <li
      className={`gradient-border relative my-28 gap-14 border-t-8 border-solid ${inverted} ease transition-all duration-1000 ${isFirst ? "mt-12" : "mt-0"} group md:flex [&.inverted]:flex-row-reverse`}
      ref={(el) => {
        if (el) {
          elementsRef.current.push(el)
        }
      }}
    >
      {children}
      <div className="oval absolute inset-0 top-[5%] -z-10 rounded-[50%] bg-purple-100 opacity-10" />
    </li>
  )
}
