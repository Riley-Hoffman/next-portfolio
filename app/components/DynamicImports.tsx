import { GoogleAnalytics } from "@next/third-parties/google";
import { BackToTopButton } from "./BackToTopButton";

const DynamicImports = () => (
  <>
    <BackToTopButton />
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS!} />
  </>
);

export default DynamicImports;
