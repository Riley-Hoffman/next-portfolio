import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export const SM = parseInt(fullConfig.theme?.screens?.sm, 10)
export const MD = parseInt(fullConfig.theme?.screens?.md, 10)
export const LG = parseInt(fullConfig.theme?.screens?.lg, 10)
