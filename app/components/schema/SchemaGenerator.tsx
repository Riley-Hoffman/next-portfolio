'use client'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { SchemaGeneratorProps } from '@/app/types/schema/SchemaGeneratorProps.interface'
import { generateSchema } from '@/app/utils/schemaUtils'

const SchemaInjector = dynamic(() => import('./SchemaInjector'), { ssr: false })

export const SchemaGenerator = ({ schemaData }: SchemaGeneratorProps) => {
  const schema = useMemo(() => generateSchema(schemaData), [schemaData])

  return <SchemaInjector structuredData={schema} />
}
