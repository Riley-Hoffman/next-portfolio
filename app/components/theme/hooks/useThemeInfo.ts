import { useTheme } from 'next-themes'

export const useThemeInfo = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  return {
    icon: currentTheme === 'dark' ? 'solar:sun-2-bold' : 'solar:moon-bold',
    label:
      currentTheme === 'dark'
        ? 'Switch to Light Theme'
        : 'Switch to Dark Theme',
    toggleTheme: () => setTheme(currentTheme === 'light' ? 'dark' : 'light'),
  }
}
