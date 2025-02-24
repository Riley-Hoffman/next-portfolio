import packageJson from '@/package.json'

export const getBaseUrl = (path: string = '') =>
  `https://rileyhoffman.com${path}/`
export const AUTHOR = packageJson.author
export const getPageTitle = (page: string = '') =>
  `${page ? page + ' - ' + AUTHOR : AUTHOR} - Web Developer`
export const BASE_DESCRIPTION =
  "Web developer building accessible, responsive, and user-focused web applications. Driven by curiosity, I'm a problem solver, who writes clean, modular code."
export const getImageUrl = (imagePath: string = 'thumbnail.jpg') =>
  `https://storage.googleapis.com/rileyhoffmandotcom.appspot.com/${imagePath}`
export const GITHUB_URL = packageJson.repository.url
export const LINKEDIN_URL = 'https://www.linkedin.com/in/rileyhoffman'
export const CODEACADEMY_URL =
  'https://www.codecademy.com/profiles/RileyHoffman'
export const VERSION = packageJson.version
