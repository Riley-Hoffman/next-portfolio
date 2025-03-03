'use client'
import { ContactContent } from '@/app/components/contact/content/ContactContent'
import { Form } from './form/Form'
import { useFormErrors } from '@/app/hooks/contact/useFormErrors'

export const ContactWrapper = () => {
  const { formErrors, handleErrors } = useFormErrors()

  return (
    <div className="pt-7 md:w-5/6 md:pb-24">
      <ContactContent errors={formErrors} />
      <Form onErrors={handleErrors} />
    </div>
  )
}
