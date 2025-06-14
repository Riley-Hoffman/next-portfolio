import { useCallback } from 'react'
import { MEDAL_CONFIG } from '@/app/constants/particle-cleanup/medalConfig'

interface Medal {
  cutoff: number
  text: string
  color: string
}

export const useMedalDetails = (time: number | null) => {
  const getMedalDetails = useCallback((time: number | null): Medal | null => {
    if (time === null || time > MEDAL_CONFIG.bronze.cutoff) return null

    const medals: Medal[] = [
      {
        cutoff: MEDAL_CONFIG.gold.cutoff,
        text: MEDAL_CONFIG.gold.text,
        color: MEDAL_CONFIG.gold.color,
      },
      {
        cutoff: MEDAL_CONFIG.silver.cutoff,
        text: MEDAL_CONFIG.silver.text,
        color: MEDAL_CONFIG.silver.color,
      },
      {
        cutoff: MEDAL_CONFIG.bronze.cutoff,
        text: MEDAL_CONFIG.bronze.text,
        color: MEDAL_CONFIG.bronze.color,
      },
    ]

    return medals.find((medal) => time < medal.cutoff) || null
  }, [])

  return getMedalDetails(time)
}
