import { useCallback } from "react"
import { Particle } from "../classes/Particle"
import { useGameData } from "./useGameData"

export const useCreateParticle = () => {
  const [gameData] = useGameData()

  return useCallback((canvas: HTMLCanvasElement) => {
    const { width, height } = canvas
    const size = Math.random() * 30 + 10
    const colors = ["#A8A0D9", "#794E8D", "#ae4971"]
    const color = colors[Math.floor(Math.random() * colors.length)]
    const weight = Math.random() * 0.5 + 0.5
    const isMobile = window.innerWidth <= 768
    const speedFactor = (isMobile ? 0.8 : 1) * 0.5

    return new Particle(
      Math.random() * width,
      Math.random() * height,
      size,
      color,
      weight,
      speedFactor
    )
  }, [])
}
