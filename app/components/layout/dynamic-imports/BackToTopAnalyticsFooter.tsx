import { GoogleAnalytics } from '@next/third-parties/google'
import { BackToTopButton } from '../BackToTopButton'
import { Footer } from '../Footer'

const BackToTopAnalyticsFooter = () => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
    <Footer />
  </>
)

export default BackToTopAnalyticsFooter
