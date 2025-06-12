import { Icon } from '@iconify/react'
import { useThemeInfo } from '@/app/hooks/theme/useThemeInfo'

export const ThemeChanger = () => {
  const themeInfo = useThemeInfo()

  const { icon, label, toggleTheme, isDarkTheme } = themeInfo

  return (
    <button
      onClick={toggleTheme}
      className="theme-changer"
      aria-label={label}
      aria-pressed={isDarkTheme}
    >
      <Icon icon={icon} />
    </button>
  )
}
