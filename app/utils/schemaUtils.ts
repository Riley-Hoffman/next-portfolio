import { WithContext, WebPage, ContactPage } from 'schema-dts'
import {
  getPageTitle,
  getBaseUrl,
  AUTHOR,
  getImageUrl,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/app/constants/baseData'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGeneratorProps.interface'

export type SchemaMap = {
  WebPage: WebPage
  ContactPage: ContactPage
}

const createPersonEntity = (): {
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
> => ({
  '@context': 'https://schema.org',
  '@type': schemaType,
  name: getPageTitle(title),
  description,
  image: getImageUrl(),
  url: getBaseUrl(urlPath),
  datePublished: publishDate,
  mainEntity: createPersonEntity(),
  author: createPersonEntity(),
})
