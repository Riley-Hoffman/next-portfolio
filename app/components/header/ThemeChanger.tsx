import { useTheme } from "next-themes"
import { Icon } from "@iconify/react"

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="relative mx-2 h-8 w-16 rounded-3xl bg-accentone-200 px-4 py-2 md:order-3"
      aria-label={
        theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"
      }
    >
      <Icon
        className="absolute left-1 top-1 h-6 w-6 rounded-[50%] bg-accenttwo-200 p-1 text-sitebackground transition-transform dark:translate-x-8 dark:text-siteblack dark:content-['\\f185']"
        icon={theme === "light" ? "solar:moon-bold" : "solar:sun-2-bold"}
      />
    </button>
  )
}

export default ThemeChanger
