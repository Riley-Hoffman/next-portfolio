'use client'
import { Thing, WithContext } from 'schema-dts'
import DOMPurify from 'dompurify'

interface SchemaInjectorProps<T extends Thing> {
  structuredData: WithContext<T>
}

const SchemaInjector = <T extends Thing>({
  structuredData,
}: SchemaInjectorProps<T>) => {
  const sanitizedData = DOMPurify.sanitize(JSON.stringify(structuredData))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizedData }}
    />
  )
}

export default SchemaInjector
