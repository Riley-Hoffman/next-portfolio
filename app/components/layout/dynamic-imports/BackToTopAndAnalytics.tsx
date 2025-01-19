import { GoogleAnalytics } from '@next/third-parties/google'
import { BackToTopButton } from '../back-to-top-button/BackToTopButton'

const BackToTopAndAnalytics = () => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
  </>
)

export default BackToTopAndAnalytics
