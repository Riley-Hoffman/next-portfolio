'use client'
import dynamic from 'next/dynamic'
import { FAQPage, WithContext } from 'schema-dts'
import { QUESTIONS, PLAIN_TEXT_ANSWERS } from '@/app/constants/faq/faqItems'
import {
  getBaseUrl,
  getPageTitle,
  AUTHOR,
  getImageUrl,
} from '@/app/constants/baseData'

export const DESCRIPTION =
  'Find the answers to my most frequently asked questions.'

const SchemaInjector = dynamic(
  () => import('@/app/components/schema/SchemaInjector'),
  {
    ssr: false,
  }
)
const faqSchemaData: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: getPageTitle('FAQ'),
  description: DESCRIPTION,
  image: getImageUrl(),
  url: `${getBaseUrl('/faq')}`,
  datePublished: '2024-07-29T09:25:01.340Z',
  mainEntity: QUESTIONS.map((question, index) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: PLAIN_TEXT_ANSWERS[index],
    },
  })),
  author: {
    '@type': 'Person',
    name: AUTHOR,
  },
}

export const FaqSchema = () => {
  return <SchemaInjector structuredData={faqSchemaData} />
}
