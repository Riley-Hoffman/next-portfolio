import { useTheme } from 'next-themes'

export const useThemeInfo = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDarkTheme = currentTheme === 'dark'
  const icon = isDarkTheme ? 'solar:sun-2-bold' : 'solar:moon-bold'
  const label = isDarkTheme ? 'Light Theme' : 'Dark Theme'
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark')

  return { icon, label, toggleTheme, isDarkTheme }
}
