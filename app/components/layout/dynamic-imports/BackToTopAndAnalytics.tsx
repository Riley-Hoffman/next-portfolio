import { GoogleAnalytics } from '@next/third-parties/google'
import { BackToTopButton } from '../BackToTopButton'

const BackToTopAndAnalytics = () => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
  </>
)

export default BackToTopAndAnalytics
