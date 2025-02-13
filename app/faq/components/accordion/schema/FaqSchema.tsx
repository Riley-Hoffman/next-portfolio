'use client'
import dynamic from 'next/dynamic'
import { FAQPage, WithContext } from 'schema-dts'
import { questions, answers } from '../../accordion/constants/AccordionItems'
import {
  getBaseUrl,
  getPageTitle,
  author,
  getImageUrl,
} from '@/constants/baseData'

export const description =
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
  description: description,
  image: getImageUrl(),
  url: `${getBaseUrl('/faq')}`,
  datePublished: '2024-07-29T09:25:01.340Z',
  mainEntity: questions.map((question, index) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: `${answers[index].props.children}`,
    },
  })),
  author: {
    '@type': 'Person',
    name: author,
  },
}

export const FaqSchema = () => {
  return <SchemaInjector structuredData={faqSchemaData} />
}
