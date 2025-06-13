'use client'
import dynamic from 'next/dynamic'
import { SchemaFactory } from '@/app/utils/schemaFactory'
import { QUESTIONS, PLAIN_TEXT_ANSWERS } from '@/app/constants/faq/faqItems'

export const DESCRIPTION =
  'Find the answers to my most frequently asked questions.'

const SchemaInjector = dynamic(
  () => import('@/app/components/schema/SchemaInjector'),
  {
    ssr: false,
  }
)

const faqSchemaData = SchemaFactory.createFAQPage(
  {
    title: 'FAQ',
    description: DESCRIPTION,
    urlPath: '/faq',
    publishDate: '2024-07-29T09:25:01.340Z',
  },
  QUESTIONS.map((question, index) => {
    const answer = PLAIN_TEXT_ANSWERS[index]
    if (!answer) {
      throw new Error(`Missing answer for question: ${question}`)
    }
    return {
      question,
      answer,
    }
  })
)

export const FaqSchema = () => {
  return <SchemaInjector structuredData={faqSchemaData} />
}
