import { useTheme } from "next-themes"

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="relative mx-2 h-8 w-16 rounded-3xl bg-accentone-200 px-4 py-2 before:absolute before:left-1 before:top-1 before:h-6 before:w-6 before:rounded-[50%] before:bg-accenttwo-200 before:transition-transform after:absolute after:left-2 after:top-1 after:font-fontawesomesolid after:text-sitebackground after:content-['\f186'] dark:before:translate-x-8 dark:after:left-10 dark:after:content-['\f185'] md:order-3"
    >
      <span className="sr-only">
        {theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </span>
    </button>
  )
}
