import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCustomFormErrors } from './useCustomFormErrors'

interface UseContactFormParams {
  initialFormState: { name: string; email: string; message: string }
  onErrors: (errors: string[]) => void
}

export const useContactForm = ({
  initialFormState,
  onErrors,
}: UseContactFormParams) => {
  const csrfTokenRef = useRef<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const currentToken = csrfTokenRef.current

  const { formState, errors, handleChange, handleInvalid } =
    useCustomFormErrors(initialFormState, isSubmitting)

  useEffect(() => {
    const errorMessages = Object.values(errors).filter(Boolean) as string[]
    if (errorMessages.length) onErrors(errorMessages)
  }, [errors, onErrors])

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('/api/csrf-token')
      const data = await response.json()
      csrfTokenRef.current = data.token ?? null

      if (!currentToken) console.error('Failed to fetch CSRF token.')
    } catch (error) {
      console.error('Error fetching CSRF token:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }

    if (!e.currentTarget.reportValidity()) {
      handleInvalid()
      return
    }

    if (!currentToken) {
      await fetchCsrfToken()
    }

    if (!currentToken) {
      console.error('CSRF token is still missing after fetch.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'csrf-token': currentToken,
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()
      if (!response.ok) {
        console.error('Form submission failed:', result.error)
      } else {
        console.info('Form submitted successfully:', result)
        router.push('/thank-you')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return {
    formState,
    handleChange,
    handleInvalid,
    handleSubmit,
  }
}
