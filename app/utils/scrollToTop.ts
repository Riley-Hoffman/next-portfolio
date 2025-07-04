import { isBrowser } from './isBrowser'

export const scrollToTop = () => {
  if (isBrowser()) window.scrollTo({ top: 0, behavior: 'smooth' })
}
