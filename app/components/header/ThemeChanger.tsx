import { useTheme } from "next-themes"
import { Icon } from "@iconify/react"

const ThemeChanger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const currentTheme = theme === "system" ? resolvedTheme : theme

  if (!currentTheme) return null

  const themeIcon =
    currentTheme === "dark" ? "solar:sun-2-bold" : "solar:moon-bold"
  const themeLabel =
    currentTheme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"

  return (
    <button
      onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      className="relative mx-2 h-8 w-16 rounded-3xl bg-accentone-200 px-4 py-2 md:order-3"
      aria-label={themeLabel}
    >
      <Icon
        className="absolute left-1 top-1 h-6 w-6 rounded-full bg-accenttwo-200 p-1 text-sitebackground transition-transform dark:translate-x-8 dark:text-siteblack"
        icon={themeIcon}
      />
    </button>
  )
}

export default ThemeChanger
