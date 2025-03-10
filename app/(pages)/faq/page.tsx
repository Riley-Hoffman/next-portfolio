import { createMetadata } from '@/app/utils/metadata'
import { FaqSchema } from '@/app/components/faq/schema/FaqSchema'
import { Accordion } from '@/app/components/faq/accordion/Accordion'
import { QUESTIONS, HTML_ANSWERS } from '@/app/constants/faq/faqItems'

export const metadata = createMetadata({
  title: 'FAQ',
  description: 'Find the answers to my most frequently asked questions.',
  path: '/contact',
})

const Faq = () => (
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

export default Faq
