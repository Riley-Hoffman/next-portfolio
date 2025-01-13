'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useFormValidation } from '../../hooks/useFormValidation'
import { Legend } from './Legend'
import { FormField } from './FormField'
import { SubmitButton } from './SubmitButton'

export interface FormData {
  name: string
  email: string
  message: string
}

interface FormProps {
  onErrors: (errors: string[]) => void
}

export const Form = ({ onErrors }: FormProps) => {
  const csrfTokenRef = useRef<string | null>(null)
  const csrfSecretRef = useRef<string | null>(null)
  const router = useRouter()

  const { formState, errors, handleChange, handleSubmission, submitted } =
    useFormValidation({
      name: '',
      email: '',
      message: '',
    })

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

  const { name, email, message } = formState
  return (
    <form className="relative px-5 pb-10 pt-5" onSubmit={handleFormSubmit}>
      <fieldset>
        <Legend />
        <div className="pb-5">
          <div className="relative pb-6 md:flex md:items-center md:justify-between md:gap-5">
            <FormField
              type="text"
              value={name}
              handleChange={handleChange}
              name="name"
              placeholder="Enter your name.."
            />
            <br className="inline md:hidden" />
            <br className="inline md:hidden" />
            <FormField
              type="email"
              value={email}
              handleChange={handleChange}
              name="email"
              placeholder="Enter your email.."
            />
          </div>
          <FormField
            type="textarea"
            value={message}
            handleChange={handleChange}
            name="message"
            placeholder="Enter your message.."
          />
        </div>
      </fieldset>
      <SubmitButton handleSubmission={handleSubmission} />
    </form>
  )
}
