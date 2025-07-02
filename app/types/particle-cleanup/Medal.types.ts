interface Medal {
  name: string
  color: string
}
export interface MedalDisplay extends Medal {
  cutoff: number
}
export interface MedalCriteriaData extends Medal {
  srText: string
  time: string
}
