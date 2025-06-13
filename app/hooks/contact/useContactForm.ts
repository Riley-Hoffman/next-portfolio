import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCustomFormErrors } from './useCustomFormErrors'

interface FormState {
  name: string
  email: string
  message: string
}

interface UseContactFormParams {
  initialFormState: FormState
  onErrors: (errors: string[]) => void
}

interface FormError extends Error {
  code?: string
}

export const useContactForm = ({
  initialFormState,
  onErrors,
}: UseContactFormParams) => {
  const csrfTokenRef = useRef<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const currentToken = csrfTokenRef.current

  const { formState, errors, handleChange, handleInvalid, resetForm } =
    useCustomFormErrors(initialFormState, isSubmitting)

  useEffect(() => {
    const errorMessages = Object.values(errors).filter(Boolean) as string[]
    if (errorMessages.length) onErrors(errorMessages)
  }, [errors, onErrors])

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('/api/csrf-token')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      const newToken = data.token ?? null
      csrfTokenRef.current = newToken

      if (!newToken) {
        const error = new Error('No token received from server') as FormError
        error.code = 'TOKEN_MISSING'
        throw error
      }
    } catch (error) {
      console.error('Error fetching CSRF token:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) return

    if (!e.currentTarget.reportValidity()) {
      handleInvalid()
      return
    }

    setIsSubmitting(true)
    try {
      if (!currentToken) {
        await fetchCsrfToken()
      }

      if (!csrfTokenRef.current) {
        const error = new Error('Failed to obtain CSRF token') as FormError
        error.code = 'TOKEN_MISSING'
        throw error
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'csrf-token': csrfTokenRef.current,
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const result = await response.json()
        const error = new Error(
          result.error || 'Form submission failed'
        ) as FormError
        error.code = 'SUBMISSION_FAILED'
        throw error
      }

      const result = await response.json()
      console.info('Form submitted successfully:', result)
      resetForm()
      router.push('/thank-you')
    } catch (error) {
      console.error('Error submitting form:', error)
      onErrors([
        error instanceof Error ? error.message : 'An unexpected error occurred',
      ])
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formState,
    errors,
    handleChange,
    handleInvalid,
    handleSubmit,
    isSubmitting,
    resetForm,
  }
}
