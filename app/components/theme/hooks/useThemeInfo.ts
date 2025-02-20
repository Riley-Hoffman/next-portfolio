import { useTheme } from 'next-themes'

export const useThemeInfo = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  const isDarkTheme = currentTheme === 'dark'

  return {
    icon: isDarkTheme ? 'solar:sun-2-bold' : 'solar:moon-bold',
    label: isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme',
    toggleTheme: () => setTheme(isDarkTheme ? 'light' : 'dark'),
  }
}
