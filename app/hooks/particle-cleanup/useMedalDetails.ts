import { useCallback } from 'react'
import {
  MEDAL_CONFIG,
  getMedalDisplayArray,
} from '@/app/constants/particle-cleanup/medalConfig'
import { MedalDisplay } from '@/app/types/particle-cleanup/Medal.types'

export const useMedalDetails = (time: number | null) => {
  const getMedalDetails = useCallback(
    (time: number | null): MedalDisplay | null => {
      if (time === null || time > MEDAL_CONFIG.bronze.cutoff) return null

      const medals: MedalDisplay[] = getMedalDisplayArray()

      return medals.find((medal) => time < medal.cutoff) || null
    },
    []
  )

  return getMedalDetails(time)
}
