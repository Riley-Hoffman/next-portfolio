export interface Icon {
  rel: string
  type?: string
  sizes?: string
  href: string
}

export const iconLinksData: Icon[] = [
  { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/icons/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/icons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/icons/favicon-96x96.png',
  },
  { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
  {
    rel: 'icon',
    sizes: '192x192',
    href: '/icons/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    sizes: '512x512',
    href: '/icons/android-chrome-256x256.png',
  },
  {
    rel: 'icon',
    sizes: '512x512',
    href: '/icons/android-chrome-512x512.png',
  },
]
