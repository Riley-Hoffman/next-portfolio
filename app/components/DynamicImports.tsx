import { GoogleAnalytics } from '@next/third-parties/google';
import { BackToTopButton } from './BackToTopButton';

const DynamicImports: React.FC = () => {
    return (
        <>
            <BackToTopButton />
            <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
        </>
    )
}

export default DynamicImports