import { useEffect } from "react"

interface LazyLoadLinkProps {
  href: string
  rel: string
  targetRef: React.RefObject<HTMLElement>
}
export const LazyLoadLink = ({ href, rel, targetRef }: LazyLoadLinkProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const link = document.createElement("link")
          link.rel = rel
          link.href = href
          document.head.appendChild(link)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [href, rel, targetRef])

  return null
}
