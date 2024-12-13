"use client"
import { useState, useCallback } from "react"
import { ContactContent } from "./ContactContent"
import { Form } from "./Form"

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
    <>
      <ContactContent errors={formErrors} />
      <Form onErrors={handleErrors} />
    </>
  )
}
