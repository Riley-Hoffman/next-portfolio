'use client'
import { ContactContent } from './content/ContactContent'
import { Form } from './form/Form'
import { useFormErrors } from '../hooks/useFormErrors'

export const ContactWrapper = () => {
  const { formErrors, handleErrors } = useFormErrors()

  return (
    <div className="pt-7 md:w-5/6 md:pb-[13vh]">
      <ContactContent errors={formErrors} />
      <Form onErrors={handleErrors} />
    </div>
  )
}
