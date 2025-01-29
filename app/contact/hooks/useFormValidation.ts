import { useState, useEffect } from 'react'
import { FormValue } from '../types/FormValue.interface'

export const useFormValidation = (initialState: FormValue) => {
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
    (field: keyof FormValue) =>
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
