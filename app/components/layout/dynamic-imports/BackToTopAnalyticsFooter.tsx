import { GoogleAnalytics } from '@next/third-parties/google'
import { BackToTopButton } from '../BackToTopButton'
import { Footer } from '../Footer'
import { EmptyObject } from '@/app/types/shared/EmptyObject.type'

const BackToTopAnalyticsFooter = ({ }: EmptyObject) => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
    <Footer />
  </>
)

export default BackToTopAnalyticsFooter
