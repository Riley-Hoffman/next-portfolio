import { GoogleAnalytics } from "@next/third-parties/google"
import { BackToTopButton } from "./BackToTopButton"

export const GlobalDynamicImports = () => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
  </>
)
