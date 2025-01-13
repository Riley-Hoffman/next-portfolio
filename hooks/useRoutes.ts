import { useMemo } from 'react'

interface Route {
  to: string
  label: string
  includeInFilter: boolean
}

export const RouteList: Route[] = [
  { to: '/', label: 'Home', includeInFilter: true },
  { to: '/projects/', label: 'Projects', includeInFilter: true },
  {
    to: '/projects/particle-cleanup/',
    label: 'Particle Cleanup Game',
    includeInFilter: false,
  },
  { to: '/skills/', label: 'Skills', includeInFilter: true },
  { to: '/faq/', label: 'FAQ', includeInFilter: true },
  { to: '/contact/', label: 'Contact', includeInFilter: true },
  { to: '/accessibility/', label: 'Accessibility', includeInFilter: false },
]

type FilterMode = 'all' | 'filtered'

export const useRoutes = (filterMode: FilterMode): Route[] => {
  return useMemo(() => {
    if (filterMode === 'filtered') {
      return RouteList.filter((route) => route.includeInFilter)
    }
    return RouteList
  }, [filterMode])
}
