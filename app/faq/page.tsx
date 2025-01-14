import { Metadata } from 'next'
import { FaqSchema } from './components/accordion/schema/FaqSchema'
import { Accordion } from './components/accordion/Accordion'
import {
  questions,
  answers,
} from './components/accordion/constants/AccordionItems'
import { description } from './components/accordion/schema/FaqSchema'
import { getBaseUrl, getImageUrl } from '@/constants/baseData'

export const metadata: Metadata = {
  title: 'FAQ',
  description: description,
  metadataBase: new URL(`${getBaseUrl('/faq')}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    images: getImageUrl(),
    title: 'FAQ',
    url: `${getBaseUrl('/faq')}`,
  },
}

export default function Faq() {
  return (
    <>
      <FaqSchema />
      <h1 className="heading-one">Frequently Asked Questions</h1>
      <Accordion
        items={questions.map((question, index) => ({
          question,
          answer: answers[index],
        }))}
        label="Frequently Asked Questions"
      />
    </>
  )
}
