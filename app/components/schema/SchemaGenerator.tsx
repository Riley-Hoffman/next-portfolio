import { WithContext, WebPage, ContactPage } from 'schema-dts'
import SchemaInjector from './SchemaInjector'
import {
  getPageTitle,
  getBaseUrl,
  author,
  getImageUrl,
  githubUrl,
  linkedInUrl,
} from '@/constants/baseData'

export interface SchemaGeneratorProps {
  schemaData: {
    title: string
    description: string
    urlPath: string
    publishDate?: string
    schemaType: 'WebPage' | 'ContactPage'
  }
}

type SchemaMap = {
  WebPage: WebPage
  ContactPage: ContactPage
}

const generateSchema = <T extends keyof SchemaMap>(
  schemaType: T,
  title: string,
  description: string,
  urlPath: string,
  publishDate?: string
): WithContext<SchemaMap[T]> => {
  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: getPageTitle(title),
    description,
    image: getImageUrl(),
    url: getBaseUrl(urlPath),
    datePublished: publishDate,
    mainEntity: {
      '@type': 'Person',
      name: author,
      url: getBaseUrl(),
      jobTitle: 'Web Developer',
      sameAs: [linkedInUrl, githubUrl],
    },
    author: {
      '@type': 'Person',
      name: author,
    },
  } as WithContext<SchemaMap[T]>
}

export const SchemaGenerator = ({ schemaData }: SchemaGeneratorProps) => {
  const { title, description, urlPath, publishDate, schemaType } = schemaData
  const schema = generateSchema(
    schemaType,
    title,
    description,
    urlPath,
    publishDate
  )

  return (
    <>
      <SchemaInjector structuredData={schema} />
    </>
  )
}
