import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export const MD = parseInt(fullConfig.theme?.screens?.md, 10)