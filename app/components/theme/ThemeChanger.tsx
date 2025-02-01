import { Icon } from '@iconify/react'
import { useThemeInfo } from './hooks/useThemeInfo'

export const ThemeChanger = () => {
  const themeInfo = useThemeInfo()

  const { icon, label, toggleTheme } = themeInfo

  return (
    <button onClick={toggleTheme} className="theme-changer" aria-label={label}>
      <Icon icon={icon} />
    </button>
  )
}
