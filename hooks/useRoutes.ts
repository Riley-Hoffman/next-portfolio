import { useMemo } from "react"

interface Route {
  to: string
  label: string
}

export const RouteList: Route[] = [
  { to: "/", label: "Home" },
  { to: "/projects/", label: "Projects" },
  { to: "/projects/particle-cleanup/", label: "Particle Cleanup Game" },
  { to: "/skills/", label: "Skills" },
  { to: "/faq/", label: "FAQ" },
  { to: "/contact/", label: "Contact" },
  { to: "/accessibility/", label: "Accessibility" },
]

type FilterMode = "all" | "filtered"

export const useRoutes = (filterMode: FilterMode): Route[] => {
  return useMemo(() => {
    if (filterMode === "filtered") {
      return RouteList.filter(
        (route) =>
          route.label !== "Particle Cleanup Game" &&
          route.label !== "Accessibility"
      )
    }
    return RouteList
  }, [filterMode])
}
