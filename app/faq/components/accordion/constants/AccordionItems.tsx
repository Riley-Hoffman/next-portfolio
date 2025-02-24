import Link from 'next/link'

export interface AccordionItem {
  question: string
  answer: React.ReactElement<{ children: React.ReactNode }>
}

const ACCORDION_ITEMS: AccordionItem[] = [
  {
    question: 'Are you available for freelance work?',
    answer: (
      <>
        Absolutely! Feel free to <Link href="/contact">get in touch</Link> to
        discuss your project needs and pricing structure.
      </>
    ),
  },
  {
    question: 'What services do you offer?',
    answer: (
      <>
        I offer a range of web services, including designing and building new
        websites, enhancing existing sites with new features or content,
        resolving errors, and performing accessibility remediations to ensure
        compliance with WCAG 2.2 standards.
      </>
    ),
  },
  {
    question: 'What technologies and tools do you use?',
    answer: (
      <>
        Depending on your project&apos;s needs, I can work with various
        technologies including HTML, React, Next.js, Typescript, Vue.js, PHP,
        and custom WordPress themes. I adapt quickly to new systems and
        structures, ensuring seamless integration and efficiency.
      </>
    ),
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer: (
      <>
        While the initial project cost does not cover support and maintenance, I
        am available for hire to provide these services as needed.
      </>
    ),
  },
]

export const questions = ACCORDION_ITEMS.map((item) => item.question)
export const answers = ACCORDION_ITEMS.map((item) => item.answer)
