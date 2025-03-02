import { Metadata } from 'next'
import { FaqSchema, DESCRIPTION } from '@/app/components/faq/schema/FaqSchema'
import { Accordion } from '@/app/components/faq/accordion/Accordion'
import {
  QUESTIONS,
  HTML_ANSWERS,
} from '@/app/components/faq/accordion/constants/AccItems'
import { getBaseUrl, getImageUrl } from '@/app/constants/baseData'

export const metadata: Metadata = {
  title: 'FAQ',
  description: DESCRIPTION,
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

const Faq = () => {
  return (
    <>
      <FaqSchema />
      <h1 className="heading-one">Frequently Asked Questions</h1>
      <Accordion
        accItems={QUESTIONS.map((question, index) => ({
          question,
          answer: HTML_ANSWERS[index],
        }))}
        label="Frequently Asked Questions"
      />
    </>
  )
}

export default Faq
