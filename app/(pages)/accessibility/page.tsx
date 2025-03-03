import type { Metadata } from 'next'
import Link from 'next/link'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import { getBaseUrl, getImageUrl } from '@/app/constants/baseData'

const DESCRIPTION =
  'As a dedicated web developer, I am committed to creating an accessible and inclusive website experience for all users.'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: DESCRIPTION,
  metadataBase: new URL(`${getBaseUrl('/accessibility')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: 'Accessibility',
    url: `${getBaseUrl('/accessibility')}`,
  },
}

const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: 'Accessibility',
  description: DESCRIPTION,
  urlPath: '/accessibility',
  publishDate: '2024-08-07T09:25:01.340Z',
  schemaType: 'WebPage',
}

const Accessibility = () => (
  <>
    <SchemaGenerator schemaData={SCHEMA_DATA} />
    <h1 className="heading-one">Accessibility</h1>
    <div className="max-w-screen-md pb-24 pt-7">
      <h2>My Commitment</h2>
      <p>
        As a dedicated web developer, I am committed to creating an accessible
        and inclusive website experience for all users. I continuously strive to
        improve the user experience by adhering to and exceeding the
        accessibility standards outlined by the Web Content Accessibility
        Guidelines (WCAG).
      </p>
      <h2>Third-Party Content</h2>
      <p>
        While I prioritize accessibility when selecting tools and content, I may
        link to content from third-party developers. Please note that I do not
        control or assume responsibility for the content, features, or
        applications provided by these third parties.
      </p>
      <h2>Contact Me</h2>
      <p>
        Your feedback is invaluable in helping me enhance the accessibility of
        my website. If you encounter any difficulties accessing any part of the
        site, please feel free to <Link href="/contact/">reach out to me</Link>.
      </p>
    </div>
  </>
)

export default Accessibility
