'use client'
import { useState, useCallback } from 'react'
import { ContactContent } from './content/ContactContent'
import { Form } from './form/Form'

export const ContactWrapper = () => {
  const [formErrors, setFormErrors] = useState<string[]>([])
  const handleErrors = useCallback(
    (errors: string[]) => {
      if (
        errors.length !== formErrors.length ||
        !errors.every((e, i) => e === formErrors[i])
      ) {
        setFormErrors(errors)
      }
    },
    [formErrors]
  )
  return (
    <div className="pt-7 md:w-5/6 md:pb-[13vh]">
      <ContactContent errors={formErrors} />
      <Form onErrors={handleErrors} />
    </div>
  )
}
