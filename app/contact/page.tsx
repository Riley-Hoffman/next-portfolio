import { Metadata } from 'next'
import {
  SchemaGenerator,
  SchemaGeneratorProps,
} from '@/app/components/schema/SchemaGenerator'
import { ContactWrapper } from './components/ContactWrapper'
import { Sidebar } from './components/sidebar/Sidebar'
import { getBaseUrl, getImageUrl } from '@/constants/baseData'

const DESCRIPTION =
  'Get in touch with web developer Riley Hoffman with the form on this page.'

export const metadata: Metadata = {
  title: 'Contact',
  description: DESCRIPTION,
  metadataBase: new URL(`${getBaseUrl('/contact')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: 'Contact',
    url: `${getBaseUrl('/contact')}`,
  },
}

const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: 'Contact',
  description: DESCRIPTION,
  urlPath: '/contact',
  publishDate: '2024-07-04T09:25:01.340Z',
  schemaType: 'ContactPage',
}

const Contact = () => (
  <>
    <SchemaGenerator schemaData={SCHEMA_DATA} />
    <h1 className="heading-one">Contact Me</h1>
    <div className="max-w-5xl md:flex">
      <ContactWrapper />
      <Sidebar />
    </div>
  </>
)

export default Contact
