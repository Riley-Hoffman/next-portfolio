import { useState, useEffect } from 'react'
import { FormData } from '../components/form/Form'

export const useFormValidation = (initialState: FormData) => {
  const [formState, setFormState] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    if (submitted) {
      const validateForm = () => {
        const { name, email, message } = formState
        const newErrors = {
          name: name.trim() === '' ? 'Please enter your name.' : '',
          email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? 'Please enter a valid email address.'
            : '',
          message: message.trim() === '' ? 'Please enter a message.' : '',
        }
        setErrors(newErrors)
      }
      validateForm()
    }
  }, [formState, submitted])

  const handleChange =
    (field: keyof FormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prevState) => ({
        ...prevState,
        [field]: event.target.value,
      }))
      setSubmitted(false)
      setErrors({ name: '', email: '', message: '' })
    }

  const handleUserSubmission = () => {
    setSubmitted(true)
  }

  return {
    formState,
    errors,
    handleChange,
    handleUserSubmission,
  }
}
