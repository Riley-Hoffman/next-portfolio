"use client"
type DynamicThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>
import dynamic from "next/dynamic"

const NextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)
export function DynamicThemeProvider({ children, ...props }: DynamicThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
