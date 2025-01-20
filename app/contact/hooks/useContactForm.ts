import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useFormValidation } from './useFormValidation'

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

  const { formState, errors, handleChange, handleUserSubmission } =
    useFormValidation(initialFormState)

  useEffect(() => {
    if (Object.values(errors).some((error) => error)) {
      const errorMessages = Object.values(errors).filter(Boolean) as string[]
      onErrors(errorMessages)
    }
  }, [errors, onErrors])

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('/api/csrf-token')
        const data = await response.json()

        if (data.token && data.secret) {
          csrfTokenRef.current = data.token
          csrfSecretRef.current = data.secret
        } else {
          console.error('Failed to fetch CSRF token and secret.')
        }
      } catch (error) {
        console.error('Error fetching CSRF token:', error)
      }
    }

    fetchCsrfToken()
  }, [])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const isValid = form.reportValidity()
    if (!isValid) {
      handleUserSubmission()
      return
    } else {
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
          console.log('Form submitted successfully:', result)
          router.push('/thank-you')
        }
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }
  }

  return {
    formState,
    errors,
    handleChange,
    handleUserSubmission,
    handleFormSubmit,
  }
}
