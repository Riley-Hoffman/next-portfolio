'use client'
import { Thing, WithContext } from 'schema-dts'
import { useEffect, useState } from 'react'

interface SchemaInjectorProps<T extends Thing> {
  structuredData: WithContext<T>
}

const SchemaInjector = <T extends Thing>({
  structuredData,
}: SchemaInjectorProps<T>) => {
  const [sanitizedData, setSanitizedData] = useState<string>('')

  useEffect(() => {
    // Import DOMPurify dynamically only on the client side
    import('dompurify').then((DOMPurify) => {
      const sanitized = DOMPurify.default.sanitize(
        JSON.stringify(structuredData)
      )
      setSanitizedData(sanitized)
    })
  }, [structuredData])

  if (!sanitizedData) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizedData }}
    />
  )
}

export default SchemaInjector
