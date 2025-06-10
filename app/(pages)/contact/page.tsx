import { createMetadata } from '@/app/utils/metadata'
import { SchemaGenerator } from '@/app/components/schema/SchemaGenerator'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGenerator.interface'
import { ContactWrapper } from '@/app/components/contact/ContactWrapper'
import { Sidebar } from '@/app/components/contact/sidebar/Sidebar'

const DESCRIPTION =
  'Get in touch with web developer Riley Hoffman with the form on this page.'
const TITLE = 'Contact'
const PATH = '/contact'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const SCHEMA_DATA: SchemaGeneratorProps['schemaData'] = {
  title: TITLE,
  description: DESCRIPTION,
  urlPath: PATH,
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
