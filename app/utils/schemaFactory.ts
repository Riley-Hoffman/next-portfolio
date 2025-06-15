import { WithContext, WebPage, ContactPage, FAQPage } from 'schema-dts'
import { getBaseUrl, getImageUrl } from '@/app/constants/baseData'
import { createPersonEntity } from './schemaUtils'

type BaseSchemaData = {
  title: string
  description: string
  urlPath: string
  publishDate: string
}

export class SchemaFactory {
  static createWebPage(data: BaseSchemaData): WithContext<WebPage> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.title,
      description: data.description,
      image: getImageUrl(),
      url: getBaseUrl(data.urlPath),
      datePublished: data.publishDate,
      mainEntity: createPersonEntity(),
      author: createPersonEntity(),
    }
  }

  static createContactPage(data: BaseSchemaData): WithContext<ContactPage> {
    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: data.title,
      description: data.description,
      image: getImageUrl(),
      url: getBaseUrl(data.urlPath),
      datePublished: data.publishDate,
      mainEntity: createPersonEntity(),
      author: createPersonEntity(),
    }
  }

  static createFAQPage(
    data: BaseSchemaData,
    questions: Array<{ question: string; answer: string }>
  ): WithContext<FAQPage> {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      name: data.title,
      description: data.description,
      image: getImageUrl(),
      url: getBaseUrl(data.urlPath),
      datePublished: data.publishDate,
      mainEntity: questions.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
      author: createPersonEntity(),
    }
  }
}
