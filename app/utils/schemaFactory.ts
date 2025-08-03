import type {
  WithContext,
  WebPage,
  ContactPage,
  FAQPage,
  Question,
  Answer,
} from 'schema-dts'
import { getBaseUrl, getImageUrl } from '@/app/constants/baseData'
import { createPersonEntity } from './schemaUtils'

type BaseSchemaData = {
  title: string
  description: string
  urlPath: string
  publishDate: string
}

const CONTEXT = 'https://schema.org' as const

function buildBase(data: BaseSchemaData) {
  return {
    name: data.title,
    description: data.description,
    image: getImageUrl(),
    url: getBaseUrl(data.urlPath),
    datePublished: new Date(data.publishDate).toISOString(),
  }
}

export class SchemaFactory {
  static createWebPage(data: BaseSchemaData): WithContext<WebPage> {
    const person = createPersonEntity()

    return {
      '@context': CONTEXT,
      '@type': 'WebPage',
      '@id': `${getBaseUrl(data.urlPath)}#webpage`,
      ...buildBase(data),
      mainEntity: person,
      author: person,
    } satisfies WithContext<WebPage>
  }

  static createContactPage(data: BaseSchemaData): WithContext<ContactPage> {
    const person = createPersonEntity()

    return {
      '@context': CONTEXT,
      '@type': 'ContactPage',
      '@id': `${getBaseUrl(data.urlPath)}#contact`,
      ...buildBase(data),
      mainEntity: person,
      author: person,
    } satisfies WithContext<ContactPage>
  }

  static createFAQPage(
    data: BaseSchemaData,
    questions: Array<{ question: string; answer: string }>
  ): WithContext<FAQPage> {
    const person = createPersonEntity()

    const mainEntity: Question[] = questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      } as Answer,
    }))

    return {
      '@context': CONTEXT,
      '@type': 'FAQPage',
      '@id': `${getBaseUrl(data.urlPath)}#faqs`,
      ...buildBase(data),
      mainEntity,
      author: person,
    } satisfies WithContext<FAQPage>
  }
}
