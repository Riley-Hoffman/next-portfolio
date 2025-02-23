import { useEffect, useRef } from 'react'
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
  const csrfSecretRef = useRef<string | null>(null)
  const router = useRouter()

  const { formState, errors, handleChange, handleInvalidSubmission } =
    useCustomFormErrors(initialFormState)

  useEffect(() => {
    const errorMessages = Object.values(errors).filter(Boolean) as string[]
    if (errorMessages.length) {
      onErrors(errorMessages)
    }
  }, [errors, onErrors])

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch('/api/csrf-token')
      const data = await response.json()
      csrfTokenRef.current = data.token ?? null
      csrfSecretRef.current = data.secret ?? null

      if (!csrfTokenRef.current || !csrfSecretRef.current) {
        console.error('Failed to fetch CSRF token and secret.')
      }
    } catch (error) {
      console.error('Error fetching CSRF token:', error)
    }
  }

  useEffect(() => {
    fetchCsrfToken()
  }, [])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!e.currentTarget.reportValidity()) {
      handleInvalidSubmission()
      return
    }

    if (!csrfTokenRef.current || !csrfSecretRef.current) {
      console.error('CSRF token or secret is missing.')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'csrf-token': csrfTokenRef.current,
          'csrf-secret': csrfSecretRef.current,
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
    handleInvalidSubmission,
    handleFormSubmit,
  }
}
