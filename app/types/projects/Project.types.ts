export interface SharedProjectProps {
  inverted?: boolean
  isFirst?: boolean
}

export interface Project extends SharedProjectProps {
  title: string
  skills: string
  description: string
  internal?: boolean
  liveUrl: string
  gitUrl?: string
  imgUrl: string
  alt: string
  category: string
}
