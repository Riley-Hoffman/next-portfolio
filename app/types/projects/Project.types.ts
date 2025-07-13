export interface SharedProjectProps {
  inverted?: boolean
  isFirst?: boolean
}

export interface Project extends SharedProjectProps {
  alt: string
  blurDataUrl: string
  category: string
  description: string
  gitUrl?: string
  imgUrl: string
  internal?: boolean
  liveUrl: string
  title: string
  skills: string
}
