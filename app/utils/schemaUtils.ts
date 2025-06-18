import { WithContext, WebPage, ContactPage, FAQPage } from 'schema-dts'
import {
  getPageTitle,
  getBaseUrl,
  AUTHOR,
  getImageUrl,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/app/constants/baseData'

interface SchemaGeneratorProps {
  schemaData: {
    title: string
    description: string
    urlPath: string
    publishDate?: string
    schemaType: 'WebPage' | 'ContactPage'
  }
}

export type SchemaMap = {
  WebPage: WebPage
  ContactPage: ContactPage
  FAQPage: FAQPage
}

const validateSchemaData = (data: SchemaGeneratorProps['schemaData']) => {
  if (!data.title && data.schemaType !== 'WebPage') {
    throw new Error('Title is required for non-WebPage schemas')
  }
  if (!data.description) {
    throw new Error('Description is required for all schemas')
  }
  if (!data.urlPath && data.schemaType !== 'WebPage') {
    throw new Error('URL path is required for non-WebPage schemas')
  }
  if (!data.publishDate) {
    throw new Error('Publish date is required for all schemas')
  }
}

export const createPersonEntity = (): {
  '@type': 'Person'
  name: string
  url: string
  jobTitle: string
  sameAs: string[]
} => ({
  '@type': 'Person',
  name: AUTHOR,
  url: getBaseUrl(),
  jobTitle: 'Web Developer',
  sameAs: [LINKEDIN_URL, GITHUB_URL],
})

export const generateSchema = ({
  schemaType,
  title,
  description,
  urlPath,
  publishDate,
}: SchemaGeneratorProps['schemaData']): WithContext<
  SchemaMap[typeof schemaType]
> => {
  validateSchemaData({ schemaType, title, description, urlPath, publishDate })

  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: getPageTitle(title),
    description,
    image: getImageUrl(),
    url: getBaseUrl(urlPath),
    datePublished: publishDate,
    mainEntity: createPersonEntity(),
    author: createPersonEntity(),
  }
}
