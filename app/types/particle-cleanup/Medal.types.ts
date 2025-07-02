interface Medal {
  name: string
}
export interface MedalDisplay extends Medal {
  cutoff: number
  color: string
}
export interface MedalRequirements extends Medal {
  bgClass: string
  srText: string
  time: string
}
