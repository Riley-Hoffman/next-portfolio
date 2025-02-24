import { Metadata } from 'next'
import { FaqSchema, DESCRIPTION } from './components/accordion/schema/FaqSchema'
import { Accordion } from './components/accordion/Accordion'
import { QUESTIONS, ANSWERS } from './components/accordion/constants/AccItems'
import { getBaseUrl, getImageUrl } from '@/constants/baseData'

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
        items={QUESTIONS.map((question, index) => ({
          question,
          answer: ANSWERS[index],
        }))}
        label="Frequently Asked Questions"
      />
    </>
  )
}

export default Faq
