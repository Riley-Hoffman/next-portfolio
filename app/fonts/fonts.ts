import { Inconsolata, Poppins, Source_Sans_3, Urbanist } from 'next/font/google'

export const inconsolata = Inconsolata({
  weight: ['500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
})
export const poppins = Poppins({
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
export const sourcesans = Source_Sans_3({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sourcesans',
})
export const urbanist = Urbanist({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})
