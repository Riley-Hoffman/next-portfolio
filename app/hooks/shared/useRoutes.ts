import { useMemo } from 'react'

interface Route {
  to: string
  label: string
  mainRoute: boolean
}

export const RouteList: Route[] = [
  { to: '/', label: 'Home', mainRoute: true },
  { to: '/projects/', label: 'Projects', mainRoute: true },
  {
    to: '/projects/particle-cleanup/',
    label: 'Particle Cleanup Game',
    mainRoute: false,
  },
  { to: '/skills/', label: 'Skills', mainRoute: true },
  { to: '/faq/', label: 'FAQ', mainRoute: true },
  { to: '/contact/', label: 'Contact', mainRoute: true },
  { to: '/accessibility/', label: 'Accessibility', mainRoute: false },
]

type allOrMain = 'all' | 'main'

export const useRoutes = (routes: allOrMain): Route[] => {
  return useMemo(() => {
    if (routes === 'main') return RouteList.filter((route) => route.mainRoute)
    return RouteList
  }, [routes])
}
