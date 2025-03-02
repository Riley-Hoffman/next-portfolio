import Link from 'next/link'

export interface AccItem {
  question: string
  answer: React.ReactNode
  plainTextAnswer?: string
}

const ACC_ITEMS: AccItem[] = [
  {
    question: 'Are you available for freelance work?',
    plainTextAnswer:
      'Absolutely! Feel free to get in touch to discuss your project needs and pricing structure.',
    answer: (
      <p>
        Absolutely! Feel free to <Link href="/contact/">get in touch</Link> to
        discuss your project needs and pricing structure.
      </p>
    ),
  },
  {
    question: 'What services do you offer?',
    plainTextAnswer:
      'I offer a range of web services, including designing and building new websites, enhancing existing sites with new features or content, resolving errors, and performing accessibility remediations to ensure compliance with WCAG 2.2 standards.',
    answer: (
      <p>
        I offer a range of web services, including designing and building new
        websites, enhancing existing sites with new features or content,
        resolving errors, and performing accessibility remediations to ensure
        compliance with WCAG 2.2 standards.
      </p>
    ),
  },
  {
    question: 'What technologies and tools do you use?',
    plainTextAnswer:
      "Depending on your project's needs, I can work with various technologies including HTML, React, Next.js, Typescript, Vue.js, PHP, and custom WordPress themes. I adapt quickly to new systems and structures, ensuring seamless integration and efficiency.",
    answer: (
      <>
        <p>
          Depending on your project&apos;s needs, I can work with various
          technologies including HTML, React, Next.js, Typescript, Vue.js, PHP,
          and custom WordPress themes.
        </p>
        <p>
          I adapt quickly to new systems and structures, ensuring seamless
          integration and efficiency.
        </p>
      </>
    ),
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    plainTextAnswer:
      'While the initial project cost does not cover support and maintenance, I am available for hire to provide these services as needed.',
    answer: (
      <p>
        While the initial project cost does not cover support and maintenance, I
        am available for hire to provide these services as needed.
      </p>
    ),
  },
]

export const QUESTIONS = ACC_ITEMS.map((item) => item.question)
export const HTML_ANSWERS = ACC_ITEMS.map((item) => item.answer)
export const PLAIN_TEXT_ANSWERS = ACC_ITEMS.map((item) => item.plainTextAnswer)
