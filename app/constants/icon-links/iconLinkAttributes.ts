import { IconLink } from '@/app/types/IconLink.interface'

const ICONS_PATH = '/icons'

export const ICON_LINK_ATTRIBUTES: IconLink[] = [
  { rel: 'icon', type: 'image/x-icon', href: `${ICONS_PATH}/favicon.ico` },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: `${ICONS_PATH}/favicon-16x16.png`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: `${ICONS_PATH}/favicon-32x32.png`,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: `${ICONS_PATH}/favicon-96x96.png`,
  },
  { rel: 'apple-touch-icon', href: `${ICONS_PATH}/apple-touch-icon.png` },
  {
    rel: 'icon',
    sizes: '192x192',
    href: `${ICONS_PATH}/android-chrome-192x192.png`,
  },
  {
    rel: 'icon',
    sizes: '512x512',
    href: `${ICONS_PATH}/android-chrome-256x256.png`,
  },
  {
    rel: 'icon',
    sizes: '512x512',
    href: `${ICONS_PATH}/android-chrome-512x512.png`,
  },
]
