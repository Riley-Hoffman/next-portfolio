import { useMemo } from 'react'

interface Route {
  to: string
  label: string
  mainRoute?: boolean
}

export const ROUTE_LIST: Route[] = [
  { to: '/', label: 'Home', mainRoute: true },
  { to: '/projects/', label: 'Projects', mainRoute: true },
  {
    to: '/projects/particle-cleanup/',
    label: 'Particle Cleanup Game',
  },
  { to: '/skills/', label: 'Skills', mainRoute: true },
  { to: '/faq/', label: 'FAQ', mainRoute: true },
  { to: '/contact/', label: 'Contact', mainRoute: true },
  { to: '/accessibility/', label: 'Accessibility' },
]

type allOrMain = 'all' | 'main'

export const useRoutes = (routes: allOrMain): Route[] => {
  return useMemo(() => {
    if (routes === 'main') return ROUTE_LIST.filter((route) => route.mainRoute)
    return ROUTE_LIST
  }, [routes])
}
