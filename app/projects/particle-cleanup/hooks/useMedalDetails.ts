import { useCallback } from "react"

interface Medal {
  cutoff: number
  text: string
  color: string
}

export const useMedalDetails = (time: number | null) => {
  const getMedalDetails = useCallback((time: number | null): Medal | null => {
    if (time === null || time > 25) return null

    const medals: Medal[] = [
      { cutoff: 15, text: "Gold Medal", color: "#8A7400" },
      { cutoff: 21, text: "Silver Medal", color: "#737373" },
      { cutoff: 26, text: "Bronze Medal", color: "#A2652A" },
    ]

    return medals.find((medal) => time < medal.cutoff) || null
  }, [])

  return getMedalDetails(time)
}
