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
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      const newToken = data.token ?? null
      csrfTokenRef.current = newToken

      if (!newToken) {
        throw new Error('No token received from server')
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
        throw new Error('Failed to obtain CSRF token')
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
        throw new Error(result.error || 'Form submission failed')
      }

      const result = await response.json()
      console.info('Form submitted successfully:', result)
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
    handleChange,
    handleInvalid,
    handleSubmit,
  }
}
