import { createMetadata } from '@/app/utils/metadata'
import { SchemaFactory } from '@/app/utils/schemaFactory'
import SchemaInjector from '@/app/components/schema/SchemaInjector'
import { ContactWrapper } from '@/app/components/contact/ContactWrapper'
import { Sidebar } from '@/app/components/contact/sidebar/Sidebar'
import { getPageTitle } from '@/app/constants/baseData'
import '@/app/styles/contact.css'

const DESCRIPTION =
  'Get in touch with web developer Riley Hoffman with the form on this page.'
const TITLE = getPageTitle('Contact')
const PATH = '/contact'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const schemaData = SchemaFactory.createContactPage({
  title: TITLE,
  description: DESCRIPTION,
  urlPath: PATH,
  publishDate: '2024-07-04T09:25:01.340Z',
})

const Contact = () => (
  <>
    <SchemaInjector structuredData={schemaData} />
    <h1 className="heading-one">Contact Me</h1>
    <div className="max-w-5xl md:flex">
      <ContactWrapper />
      <Sidebar />
    </div>
  </>
)

export default Contact
