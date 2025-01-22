import { useTheme } from 'next-themes'

export const useThemeInfo = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  if (!currentTheme) {
    return {
      isReady: false,
      icon: 'solar:moon-bold',
      label: '',
      toggleTheme: () => {},
    }
  }

  return {
    isReady: true,
    icon: currentTheme === 'dark' ? 'solar:sun-2-bold' : 'solar:moon-bold',
    label:
      currentTheme === 'dark'
        ? 'Switch to Light Theme'
        : 'Switch to Dark Theme',
    toggleTheme: () => setTheme(currentTheme === 'light' ? 'dark' : 'light'),
  }
}
