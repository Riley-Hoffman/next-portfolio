'use client'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { WithContext, WebPage, ContactPage } from 'schema-dts'
import {
  getPageTitle,
  getBaseUrl,
  AUTHOR,
  getImageUrl,
  GITHUB_URL,
  LINKEDIN_URL,
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

const SchemaInjector = dynamic(() => import('./SchemaInjector'), { ssr: false })

const generateSchema = ({
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
  mainEntity: {
    '@type': 'Person',
    name: AUTHOR,
    url: getBaseUrl(),
    jobTitle: 'Web Developer',
    sameAs: [LINKEDIN_URL, GITHUB_URL],
  },
  author: {
    '@type': 'Person',
    name: AUTHOR,
  },
})

export const SchemaGenerator = ({ schemaData }: SchemaGeneratorProps) => {
  const schema = useMemo(() => generateSchema(schemaData), [schemaData])

  return <SchemaInjector structuredData={schema} />
}
