import { Icon } from '@iconify/react'
import { useThemeInfo } from './hooks/useThemeInfo'

export const ThemeChanger = () => {
  const themeInfo = useThemeInfo()

  if (!themeInfo.isReady) return null

  const { icon, label, toggleTheme } = themeInfo

  return (
    <button
      onClick={toggleTheme}
      className="relative mx-2 h-8 w-16 rounded-3xl bg-accentone-300 px-4 py-2 md:order-3"
      aria-label={label}
    >
      <Icon
        className="absolute left-1 top-1 h-6 w-6 rounded-full bg-accenttwo-200 p-1 text-accentone-100 transition-transform dark:translate-x-8 dark:text-siteblack"
        icon={icon}
      />
    </button>
  )
}
