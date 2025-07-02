import { useCallback } from 'react'
import { MEDAL_CONFIG } from '@/app/constants/particle-cleanup/medalConfig'
import { MedalDisplay } from '@/app/types/particle-cleanup/Medal.types'

export const useMedalDetails = (time: number | null) => {
  const getMedalDetails = useCallback(
    (time: number | null): MedalDisplay | null => {
      if (time === null || time > MEDAL_CONFIG.bronze.cutoff) return null

      const medals: MedalDisplay[] = [
        {
          cutoff: MEDAL_CONFIG.gold.cutoff,
          name: MEDAL_CONFIG.gold.name,
          color: MEDAL_CONFIG.gold.color,
        },
        {
          cutoff: MEDAL_CONFIG.silver.cutoff,
          name: MEDAL_CONFIG.silver.name,
          color: MEDAL_CONFIG.silver.color,
        },
        {
          cutoff: MEDAL_CONFIG.bronze.cutoff,
          name: MEDAL_CONFIG.bronze.name,
          color: MEDAL_CONFIG.bronze.color,
        },
      ]

      return medals.find((medal) => time < medal.cutoff) || null
    },
    []
  )

  return getMedalDetails(time)
}
