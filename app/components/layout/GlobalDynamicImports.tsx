import { GoogleAnalytics } from "@next/third-parties/google"
import { BackToTopButton } from "./BackToTopButton"

const GlobalDynamicImports = () => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
  </>
)

export default GlobalDynamicImports
